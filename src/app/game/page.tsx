"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

// components
import FaceOrRiskCard from "@/components/Card";

const GameRoom = () => {
  const searchParams = useSearchParams();
  const gameID = searchParams.get("id");

  // logger
  console.log(gameID);

  return (
    <div className="page-not-found w-full min-h-screen flex flex-col gap-6 justify-center items-center text-center">
      <FaceOrRiskCard />
    </div>
  );
};

export default GameRoom;
