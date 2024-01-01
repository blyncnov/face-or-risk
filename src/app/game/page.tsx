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

// const GameDares: GameProps[] = [
//   {
//     id: 1,
//     dare: "Everyone who is still in contact with their ex takes a shot.",
//   },
//   {
//     id: 2,
//     dare: "Explain BDSM to your 8-year-old sibling in 30 seconds or take a risk.",
//   },

//   {
//     id: 3,
//     dare: "Everyone who has never had sex, take a risk.",
//   },
//   {
//     id: 4,
//     dare: "Anyone putting on white underwear take a risk.",
//   },
//   {
//     id: 5,
//     dare: "Everyone who is single take a risk.",
//   },
//   {
//     id: 6,
//     dare: "Demostrate how to finger a woman or take a risk.",
//   },
// ];

// New year Question
const GameDares: GameProps[] = [
  {
    id: 1,
    dare: "Write am the love of your life in your status with name.",
  },
  {
    id: 2,
    dare: "Send me your best picture.",
  },

  {
    id: 3,
    dare: "Make me laugh.",
  },
  {
    id: 4,
    dare: "Tell me what u think of me.",
  },
  {
    id: 5,
    dare: "Send me a pic of you.",
  },
  {
    id: 6,
    dare: "Ask me a candle light dinner.",
  },
  {
    id: 7,
    dare: "Put my picture as your dp for 24 hours.",
  },
  {
    id: 8,
    dare: "Tell me your nickname.",
  },
  {
    id: 9,
    dare: "What do you feel about me?",
  },
  {
    id: 10,
    dare: "Tell me the stupidest thing you did in your life.",
  },
  {
    id: 11,
    dare: "Buy me the most expensive gift till i satisfy.",
  },
  {
    id: 12,
    dare: "Send me a funny picture.",
  },
  {
    id: 13,
    dare: "Send me 10 friendship messages.",
  },
  {
    id: 14,
    dare: "Write a text about me and send it to me.",
  },
  {
    id: 15,
    dare: "The thing you want to be change about me?",
  },
  {
    id: 16,
    dare: "What do you hate about me?",
  },
  {
    id: 17,
    dare: "What is your crazy dream like?",
  },
  {
    id: 18,
    dare: "What is the easiest way to get to a Heaven quickly?",
  },
  {
    id: 19,
    dare: "What will happen, if Money starts growing on trees?",
  },
  {
    id: 20,
    dare: "Call me and say my name in a loud voice!",
  },
];

const GameRoom = () => {
  const searchParams = useSearchParams();
  const StackCardRef = useRef<HTMLDivElement | any>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [GameCard, setGameCard] = useState<GameProps[]>(GameDares);

  const gameID = searchParams.get("id");

  // Shuffle decks immediately page loads
  useEffect(() => {
    let NewCardDeck = ShuffleCardDeck(GameCard);
    setGameCard(NewCardDeck);

    return () => {};
  }, [GameCard, gameID]);

  const ChooseCard = (e: any) => {
    let lastChildElement = StackCardRef.current?.lastChild;
    console.log(lastChildElement.style);

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
      <div className="flex md:flex-row flex-col gap-3 items-center justify-center">
        <button
          className="border rounded-full p-2 px-4 border-[var(--secondary-color)]"
          onClick={() => alert("🔜 This feature is Coming soon")}
        >
          Load custom questions
        </button>
      </div>
    </div>
  );
};

export default GameRoom;
