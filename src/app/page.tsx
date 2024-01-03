"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Components
import Spacer from "@/components/Spacer";
import EventConfetti from "@/components/Confetti";
import FaceOrRiskManual from "@/components/FaceOrRiskManual";
import FaceOrRiskWaitingRoom from "@/components/FaceOrRiskWaitingRoom";

// Utils - lib
import { CreateRoomIDString } from "@/lib/createRoomID";

export default function Home() {
  const router = useRouter();

  // Waiting state
  const [isWaiting, setIsWaiting] = useState(false);
  const [isReadManual, setIsReadManual] = useState(false);

  // New YEAR confetti state
  const [isExploding, setIsExploding] = useState(true);

  // Generate random RoomID String
  const roomID = CreateRoomIDString(10);

  const EnterRoomHandler = () => {
    // Start Waiting
    setIsWaiting(true);

    // Wait 10secs
    setTimeout(() => {
      // Navigate to room
      router.push(`/game?id=${roomID}`);

      // End Waiting
      setIsWaiting(false);
    }, 10000);
  };

  return (
    <main className="page-not-found w-full min-h-[100dvh] h-[100dvh] py-12">
      <Spacer>
        <section className="w-full h-full flex flex-col gap-10 justify-center items-center text-center">
          <div className="w-full flex flex-col gap-3">
            <div className="flex justify-center items-center">
              <p className="py-2 animate-bounce px-4 shadow-md no-underline rounded-full bg-[var(--secondary-color)] text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2">
                <span className="mr-2 animate-spin">👻</span>
                <span className="animate-pulse">Are You READY???</span>
              </p>
            </div>
            <div className="game-title text-[30vw] md:text-[12vw] face_or_risk_font">
              <span> Face </span>
              <span> or </span>
              <span> Risk </span>
            </div>
            <div>
              <p className="game-description text-lg text-black">
                Navigate through daring scenarios that test your courage and
                decision-making skills. <br />{" "}
                <span className="hidden md:block">
                  Are you ready to face the challenges or embrace the excitement
                  of risk-taking in this bold and adventurous game of choices?
                </span>
              </p>
            </div>
          </div>

          <>
            <button
              title="start game"
              onClick={EnterRoomHandler}
              className="bg-[var(--secondary-color)] text-[var(--primary-color)] face_or_risk_font text-5xl shadow py-3 px-6 rounded-full flex gap-2 items-center cursor-pointer"
            >
              Enter game
            </button>
          </>
        </section>
      </Spacer>
      {/* Wait in the Waiting Room for few secs*/}
      {isWaiting && <FaceOrRiskWaitingRoom />}
      {isReadManual && <FaceOrRiskManual setIsReadManual={setIsReadManual} />}

      {/* New YEAR confetti*/}
      {/* <EventConfetti /> */}

      {/* Read Instruction Manual*/}
      {!isReadManual && (
        <div className="absolute bottom-6 md:right-6 right-4">
          <button
            onClick={() => setIsReadManual(!isReadManual)}
            title="Read Instruction Manual"
            className="py-2 cursor-pointer animate-none px-4 shadow-md no-underline rounded-lg
           bg-[var(--black)] text-white font-sans font-semibold text-sm border-orange btn-primary
            hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
          >
            Read GAME rules
          </button>
        </div>
      )}
    </main>
  );
}
