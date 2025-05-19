import React from "react";
import AuthButtons from "../molecules/auth-buttons";

const UserHeader = () => {
  return (
    <div className="w-full h-fit absolute top-0 px-8 py-6 bg-transparent">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-white">Sleepio Dev</h1>
        <AuthButtons />
      </div>
    </div>
  );
};

export default UserHeader;
