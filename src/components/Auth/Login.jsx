import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Email is", email);
    // console.log("Password is", password);
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
    <div className="border-2 rounded-xl border-emerald-600 p-20">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col items-center justify-center"
      >
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          className="outline-none border-2 bg-transparent placeholder:text-gray-400 border-emerald-600 text-xl rounded-full py-3 px-5 text-white"
          type="email"
          name="email"
          placeholder="Enter your Email"
        />
  
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          className="outline-none border-2 bg-transparent placeholder:text-gray-400 border-emerald-600 text-xl rounded-full py-3 px-5 mt-4 text-white"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        <button className="text-white outline-none border-2 placeholder:text-white bg-emerald-600 border-none text-xl rounded-full py-3 px-5 mt-4">
          Log in
        </button>
      </form>
    </div>
  </div>
    
  );
};

export default Login;
