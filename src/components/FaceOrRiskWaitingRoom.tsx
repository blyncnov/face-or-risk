const FaceOrRiskWaitingRoom = () => {
  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0 h-full z-[999] flex flex-col gap-6 justify-center items-center backdrop-blur-xl">
        <div className="w-[100%] rounded-3xl px-4 py-6 min-h-[200px] text-[var(--secondary-color)] flex gap-6 flex-col justify-center items-center text-center">
          <div className="flex flex-col gap-5">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-[var(--primary-color)] h-64 w-64"></div>
            <h1 className="text-2xl animate-pulse">Creating Room...</h1>
          </div>
          <p
            className="text-black md:max-w-[80%] max-w-full"
            style={{ lineHeight: 1.5 }}
          >
            &quot;Face or Risk&quot; is an exhilarating game of choice and
            consequence, where players must decide between confronting
            challenges head-on or embracing the thrilling risks they present.
          </p>
        </div>
      </div>
    </>
  );
};

export default FaceOrRiskWaitingRoom;
