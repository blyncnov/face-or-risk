import React from "react";

const LoadingPage = () => {
  return (
    <div className="page-loading w-full min-h-[100dvh] flex justify-center items-center">
      <div className="animate-pulse">
        <h1 className="page-title text-[30vw] md:text-[10vw] face_or_risk_font">
          Face or Risk
        </h1>
      </div>
    </div>
  );
};

export default LoadingPage;
