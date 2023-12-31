"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// components
import FaceOrRiskCard from "@/components/Card";

// Utils - libs
import { ShuffleCardDeck } from "@/lib/ShuffleCards";

interface GameProps {
  id: number;
  dare: string;
}

const GameDares: GameProps[] = [
  {
    id: 1,
    dare: "Everyone who is still in contact with their ex takes a shot.",
  },
  {
    id: 2,
    dare: "Explain BDSM to your 8-year-old sibling in 30 seconds or take a risk.",
  },

  {
    id: 3,
    dare: "Everyone who has never had sex, take a risk.",
  },
  {
    id: 4,
    dare: "Anyone putting on white underwear take a risk.",
  },
  {
    id: 5,
    dare: "Everyone who is single take a risk.",
  },
  {
    id: 6,
    dare: "Demostrate how to finger a woman or take a risk.",
  },
];

const GameRoom = () => {
  const searchParams = useSearchParams();
  const StackCardRef = useRef<HTMLDivElement | any>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [GameCard, setGameCard] =
    useState<{ id: number; dare: string }[]>(GameDares);

  const gameID = searchParams.get("id");

  // Shuffle decks immediately page loads
  useEffect(() => {
    let NewCardDeck = ShuffleCardDeck(GameCard);
    setGameCard(NewCardDeck);

    return () => {};
  }, [GameCard]);

  const ChooseCard = (e: any) => {
    const lastChildElement = StackCardRef.current?.lastChild;
    // console.log(lastChildElement);

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
      <Suspense fallback={<p>Loading decks...</p>}>
        <div ref={StackCardRef} className="stack_cards" onClick={ChooseCard}>
          {GameCard.map((card: GameProps) => {
            return (
              <FaceOrRiskCard
                key={card.id}
                card={card}
                ChooseCardHandler={ChooseCard}
                cardRef={cardRef}
              />
            );
          })}
        </div>
      </Suspense>
    </div>
  );
};

export default GameRoom;
