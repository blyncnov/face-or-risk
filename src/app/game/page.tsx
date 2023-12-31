"use client";

import React, { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

// components
import FaceOrRiskCard from "@/components/Card";

const GameDares = [
  {
    id: 1,
    dare: "1. Everyone who is still in contact with their ex takes a shot.",
  },
  {
    id: 2,
    dare: "2. Everyone who is still in contact with their ex takes a shot.",
  },
  {
    id: 3,
    dare: "3. Everyone who is still in contact with their ex takes a shot.",
  },
  {
    id: 4,
    dare: "4. Everyone who is still in contact with their ex takes a shot.",
  },
  {
    id: 5,
    dare: "5. Everyone who is still in contact with their ex takes a shot.",
  },
];

const GameRoom = () => {
  const searchParams = useSearchParams();
  const StackCardRef = useRef<HTMLDivElement | any>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [GameCard, setGameCard] =
    useState<{ id: number; dare: string }[]>(GameDares);

  const gameID = searchParams.get("id");

  const ChooseCard = (e: any) => {
    const lastChildElement = StackCardRef.current?.lastChild;
    console.log(lastChildElement);

    if (cardRef.current && cardRef.current.style) {
      const style = cardRef.current.style;

      if (!lastChildElement.contains(e.target)) return;

      if (style) {
        // Add card Animation
        style.animation = "swap 700ms forwards";
      }

      setTimeout(() => {
        // Add card Animation

        if (style) {
          // Add card Animation
          style.animation = "";

          // Prepend card
          StackCardRef.current?.prepend(lastChildElement);
        }
      }, 700);
    }
  };

  return (
    <div className="page-not-found w-full min-h-[100dvh] flex flex-col gap-6 justify-center items-center text-center">
      <div ref={StackCardRef} className="stack_cards" onClick={ChooseCard}>
        {GameCard.map((card: { id: number; dare: string }) => {
          return (
            <FaceOrRiskCard
              key={card.id}
              card={card}
              click={ChooseCard}
              cardRef={cardRef}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameRoom;
