import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCharacters,
  setshowingEpisodeCharacters,
} from "../utils/characterSlice";
import EpisodeList from "./EpisodeList";
import { setEpisodes, setSelectedEpisodeName } from "../utils/episodeSlice";

const SideBar = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const dispatch = useDispatch();
  const episodes = useSelector((store) => store.episode.totalEpisodes);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/episode"
      );

      dispatch(setEpisodes(response.data.results));
    };
    fetchEpisodes();
  }, []);

  const handleEpisodeSelect = async (episodeId, episodeName) => {
    dispatch(setshowingEpisodeCharacters(true));
    setSelectedEpisode(episodeId);
    dispatch(setSelectedEpisodeName(episodeName));
    const response = await axios.get(
      `https://rickandmortyapi.com/api/episode/${episodeId}`
    );
    console.log(response);
    const characterPromises = response.data.characters.map((url) =>
      axios.get(url)
    );
    const characterResponses = await Promise.all(characterPromises);
    console.log(characterResponses);
    dispatch(setCharacters(characterResponses.map((res) => res.data)));
  };

  const handleEpisodeDeselect = async () => {
    setSelectedEpisode(null);
    dispatch(setSelectedEpisodeName("All"));
    dispatch(setshowingEpisodeCharacters(false));
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    // console.log(response.data.results);
    dispatch(setCharacters(response.data.results));
  };
  return (
    <div className="sidebar h-[100vh] top-12  py-2 px-4 w-[250px] fixed overflow-y-scroll    ">
      <h2 className="font-semibold text-xl px-2 py-2 border-b border-black">
        Episodes
      </h2>
      <EpisodeList
        episodes={episodes}
        selectedEpisode={selectedEpisode}
        onSelect={handleEpisodeSelect}
        onDeselect={handleEpisodeDeselect}
      />
    </div>
  );
};

export default SideBar;
