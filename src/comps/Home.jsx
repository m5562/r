import React from "react";
import { userState } from "../recoli/atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  return (
    <div className="h-dvh place-items-center grid">
      {user ? (
        <button className="bg-blue-gem-500 mt-2 px-4 py-2 rounded-md font-bold text-blue-gem-50">
          Sign out
        </button>
      ) : (
        <button
          className="bg-blue-gem-500 mt-2 px-4 py-2 rounded-md font-bold text-blue-gem-50"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
      )}
    </div>
  );
};

export default Home;
