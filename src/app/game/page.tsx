"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// components
import AddQuestion from "./components/AddQuestion";
import FaceOrRiskCard from "@/app/game/components/Card";

// Utils - libs
import { ShuffleCardDeck } from "@/lib/ShuffleCards";

// Face or Risk cards
import { FaceOrRiskProps, FaceOrRiskQuestions } from "@/data/Dares";

const GameRoom = () => {
  const searchParams = useSearchParams();
  const StackCardRef = useRef<HTMLDivElement | any>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [IsAddingQuestion, setIsAddingQuestion] = useState(false);

  const [GameCard, setGameCard] =
    useState<FaceOrRiskProps[]>(FaceOrRiskQuestions);

  const gameID = searchParams.get("id");

  // Shuffle decks immediately page loads
  useEffect(() => {
    let NewCardDeck = ShuffleCardDeck(GameCard);
    setGameCard(NewCardDeck);
  }, [GameCard, gameID]);

  const ChooseCard = (e: any) => {
    let lastChildElement = StackCardRef.current?.lastChild;

    if (!cardRef.current) return;
    if (!lastChildElement.contains(e.target)) return;

    const style = lastChildElement.style;

    // Add card Animation
    style.animation = "swap 700ms forwards";

    setTimeout(() => {
      // Remove card Animation
      style.animation = "";

      // Prepend card
      StackCardRef.current?.prepend(lastChildElement);
    }, 700);
  };

  return (
    <div className="page-not-found w-full min-h-[100dvh] flex flex-col justify-center items-center text-center">
      <div className="relative w-full">
        <p className="animate-pulse max-w-[90%] mx-auto text-center">
          Players are expected to select their turn&apos;s card by TAPPING on
          it.
        </p>
      </div>
      <Suspense fallback={<p>Loading decks...</p>}>
        <div ref={StackCardRef} className="stack_cards" onClick={ChooseCard}>
          {GameCard.map((card: FaceOrRiskProps) => {
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
      <div className="flex md:flex-row flex-col gap-3 items-center justify-center">
        <button
          className="border rounded-full p-2 px-4 border-[var(--secondary-color)]"
          onClick={() => setIsAddingQuestion(true)}
        >
          Add New Card
        </button>
      </div>
      {IsAddingQuestion && (
        <AddQuestion
          setIsAddingQuestion={setIsAddingQuestion}
          setGameCard={setGameCard}
        />
      )}
    </div>
  );
};

export default GameRoom;
