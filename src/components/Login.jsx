import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const[isSigninform , setIsSigninform] = useState(true)

  const toggleSignInForm =()=>{
    setIsSigninform(!isSigninform)
  }
  return (
    <div>
      <Header />
      <div className=" absolute w-[100%]">
        <img
          className="w-full  h-[100%] bg-black"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-650-80.jpg.webp"
          alt=""
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSigninform?"Sign In":"Sign Up"}</h1>
        {  !isSigninform && (<input
          type="text"
          placeholder=" full Name "
          className="p-2 my-2 w-full  bg-gray-800"
        />)}
        <input
          type="text"
          placeholder="email address"
          className="p-2 my-2 w-full bg-gray-800"
        />
      
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full  bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-800 w-full rounded-xl">{isSigninform?"Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSigninform?"New to netflix? Sign up now":"Already registered? Sign in now"}
          </p>
      </form>
    </div>
  );
};

export default Login;
