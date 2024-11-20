import React from "react";

import CharacterList from "./components/CharacterList";
import SideBar from "./components/SideBar";
import Login from "./components/Login";
import { useSelector } from "react-redux";

const App = () => {
  const login = useSelector((store) => store.login.isLoggedIn);
  console.log(login);

  return (
    <div className="App">
      <div className="head w-[100%] fixed top-0 bg-white py-2 flex justify-center items-center border border-black">
        <p className="font-bold sm:text-2xl text-xl ">
          Rick and Marty characters
        </p>
      </div>
      <div className="body">
        {login ? (
          <>
            <SideBar />
            <CharacterList />
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};

export default App;
