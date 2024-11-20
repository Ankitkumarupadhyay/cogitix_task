import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLogin } from "../utils/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (name == "ankit" && password == "ankit@428") {
      dispatch(changeLogin());
    } else {
      alert("credentials did not match");
    }
  };
  const handlenameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="mt-12 max-w-sm mx-auto border-2 flex justify-center items-center flex-col">
      <h1 className="text-2xl p-2 ">Login</h1>
      <p>Name is ankit, and password is ankit@428</p>

      <div className="flex justify-around w-full m-2">
        <label>Name :</label>
        <input
          type="text"
          className="border border-black rounded-md"
          onChange={handlenameChange}
        />
      </div>
      <div className="flex   w-full justify-around">
        <label>Password : </label>
        <input
          type="text"
          className="border border-black rounded-md"
          onChange={handlePasswordChange}
        />
      </div>
      <button
        className="px-3 py-1 m-4 bg-red-600 rounded-full"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
