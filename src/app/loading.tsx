import React from "react";

const LoadingPage = () => {
  return (
    <div className="page-not-found w-full min-h-screen flex justify-center items-center">
      <div className="animate-pulse">
        <h1 className="page-title text-[30vw] md:text-[10vw] face_or_risk_font">
          Face or Risk
        </h1>
      </div>
    </div>
  );
};

export default LoadingPage;
