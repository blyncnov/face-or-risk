import React, { Dispatch, SetStateAction } from "react";

const FaceOrRiskManual = ({
  setIsReadManual,
}: {
  setIsReadManual: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        className="w-full  fixed top-0 left-0 right-0 h-full z-[999] flex flex-col gap-6
      justify-center items-center"
      >
        <div
          className="w-full max-w-[90%] md:max-w-[500px] mx-auto rounded-3xl px-4 py-6 min-h-[400px] text-[var(--secondary-color)]
         flex gap-6 flex-col justify-center items-center text-start backdrop-blur-3xl"
        >
          <div className="flex flex-col text-start justify-start gap-5">
            <h1 className="text-5xl face_or_risk_font">Face Or Risk Manual</h1>
          </div>
          <p
            className="text-black md:max-w-[80%] max-w-full"
            style={{ lineHeight: 1.5 }}
          >
            &quot;Face or Risk&quot; is an exhilarating game of choice and
            consequence
            <br />
            <br />
            1. Players gets to choose Risk (Penalty) if they fail to complete a
            dare.
            <br />
            <br />
            2. Players are expected to select their turn&apos;s card by TAPPING
            on it.
            <br />
            <br />
            3. The player who accomplishes the highest number of dares emerges
            as the most courageous.
          </p>
          <button
            onClick={() => setIsReadManual(false)}
            title="Read Instruction Manual"
            className="py-2 cursor-pointer animate-none px-4 shadow-md no-underline rounded-lg
           bg-[var(--black)] text-white font-sans font-semibold text-sm border-orange btn-primary
            hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
          >
            Close guide
          </button>
        </div>
      </div>
    </>
  );
};

export default FaceOrRiskManual;
