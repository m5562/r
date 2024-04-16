import React, { useState } from "react";
import appLogo from "./../assets/consent.png";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useRecoilState } from "recoil";
import { userState } from "../recoli/atoms";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(null);
  const [user, setUser] = useRecoilState(userState);

  const handleSignUp = async () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    onAuthStateChanged(auth, (r) => {
      setUser(r);
    });
  };
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="rounded-2xl border border-solid border-stone-300 w-[clamp(300px,90%,400px)]">
        <div className="flex flex-col p-4 items-center">
          <img src={appLogo} className="rounded-full mb-4" />
          <h1 className="mb-6 font-bold text-xl">Sign up for Mysitename</h1>
          <div className="flex w-full flex-col mb-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="input"
              onChange={(e) => {
                setName(e.target.value);
              }}
              defaultValue={name}
            />
          </div>
          <div className="flex w-full flex-col mb-4">
            <label htmlFor="username">E-mail</label>
            <input
              type="text"
              id="username"
              className="input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              defaultValue={email}
            />
          </div>
          <div className="flex w-full flex-col mb-4">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              className="input"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              defaultValue={age}
            />
          </div>
          <div className="flex w-full flex-col mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              defaultValue={password}
            />
          </div>
          <button
            className="bg-blue-gem-500 w-full px-4 py-2 rounded-md font-bold text-blue-gem-50"
            onClick={handleSignUp}
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
