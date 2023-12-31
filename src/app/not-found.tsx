import React from "react";
import Link from "next/link";

const PageNotFound = () => {
  const error_word =
    "Uh-oh! It seems like you've taken a detour into the unknown. The path you were looking for in 'Face or Risk' has encountered a challenge";
  return (
    <div className="page-not-found w-full min-h-screen flex flex-col gap-6 justify-center items-center text-center">
      <h1 className="page-title text-[30vw] md:text-[10vw] face_or_risk_font">
        Page Not Found
      </h1>
      <p
        className="text-black md:max-w-[70%] max-w-full"
        style={{ lineHeight: 1.5 }}
      >
        {error_word}
      </p>
      <Link href="/">
        <button
          title="go back home"
          className="bg-[var(--secondary-color)] text-[var(--primary-color)] face_or_risk_font text-5xl shadow py-3 px-6 rounded-full flex gap-2 items-center cursor-pointer"
        >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
