import { Button } from "@/components/ui/button";
import React from "react";

const AuthButtons = () => {
  return (
    <div className="flex flex-row gap-4">
      <Button className="bg-transparent text-white hover:cursor-pointer hover:bg-blue-950 hover:font-semibold">
        Sign up
      </Button>
      <Button className="bg-white hover:cursor-pointer hover:bg-gray-300 font-semibold text-gray-900">
        Sign in
      </Button>
    </div>
  );
};

export default AuthButtons;
