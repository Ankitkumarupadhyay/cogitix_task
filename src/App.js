import React from "react";

import CharacterList from "./components/CharacterList";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="App">
      <div className="head w-[100%] fixed top-0 bg-white py-2 flex justify-center items-center border border-black">
        <p className="font-bold sm:text-2xl text-xl ">Rick and Marty characters</p>
      </div>
      <div className="body">
        <SideBar />
        <CharacterList />
      </div>
    </div>
  );
};

export default App;
