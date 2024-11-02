import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseApiPage,
  increaseApiPage,
  setCharacters,
} from "../utils/characterSlice";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const CharacterList = () => {
  const dispatch = useDispatch();

  const characters = useSelector((store) => store.characters.totalcharacters);
  const episodeName = useSelector((store) => store.episode.selectedEpisodeName);
  const apiPage = useSelector((store) => store.characters.apiPage);
  // console.log(apiPage);
  const showingEpisodeCharacters = useSelector(
    (store) => store.characters.showingEpisodeCharacters
  );

  useEffect(() => {
    const getAllCharacters = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${apiPage}`
      );
      // console.log(response.data.results);
      dispatch(setCharacters(response.data.results));
    };
    getAllCharacters();
  }, []);

  const handlePrevCharacterPage = async () => {
    if (apiPage > 1) {
      dispatch(decreaseApiPage());

      const getAllCharacters = async () => {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${apiPage}`
        );
        // console.log(response.data.results);
        dispatch(setCharacters(response.data.results));
      };
      getAllCharacters();
    }
  };
  const handleNextCharacterPage = async () => {
    dispatch(increaseApiPage());

    if (apiPage > 0) {
      const getAllCharacters = async () => {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${apiPage}`
        );
        // console.log(response.data.results);
        dispatch(setCharacters(response.data.results));
      };
      getAllCharacters();
    }
  };
  return (
    <div className="sm:ml-[265px] ml-[155px] pt-12">
      <h1 className="sm:font-semibold font-medium sm:text-xl pl-2 pt-2">
        <i>{characters.length}</i> characters found in <i>{episodeName}</i>
      </h1>
      <div className="character-list  py-2 flex  flex-wrap">
        {characters.map((character) => (
          <div
            key={character.id}
            className="character-card m-2 text-center w-[200px] bg-slate-300  "
          >
            <img
              className="w-[200px] h-[150px] object-contain"
              src={character.image}
              alt={character.name}
            />
            <h3 className="sm:font-medium sm:text-lg">{character.name}</h3>
          </div>
        ))}
      </div>
      {!showingEpisodeCharacters && (
        <div className="flex">
          <button
            className="border flex justify-center items-center border-black sm:p-[10px] p-1 m-1  sm:m-2 rounded-full "
            onClick={handlePrevCharacterPage}
          >
            <FaArrowLeft size={"22px"} />
          </button>
          <button
            className="border flex justify-center items-center border-black sm:p-[10px] p-1 m-1  sm:m-2 rounded-full"
            onClick={handleNextCharacterPage}
          >
            <FaArrowRight size={"24px"} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CharacterList;
