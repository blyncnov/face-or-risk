"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Components
import Spacer from "@/components/Spacer";
import FaceOrRiskWaitingRoom from "@/components/FaceOrRiskWaitingRoom";

// Utils - lib
import { CreateRoomIDString } from "@/lib/createRoomID";

export default function Home() {
  const router = useRouter();

  // Waiting state
  const [isWaiting, setIsWaiting] = useState(false);

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
    <main className="page-not-found w-full min-h-screen h-screen py-12">
      <Spacer>
        <section className="w-full h-full flex flex-col gap-10 justify-center items-center text-center">
          <div className="w-full flex flex-col gap-3">
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
    </main>
  );
}