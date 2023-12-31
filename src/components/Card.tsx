import React from "react";

interface GameProps {
  id: number;
  dare: string;
}

const FaceOrRiskCard = ({
  card,
  ChooseCardHandler,
  cardRef,
}: {
  card: GameProps;
  ChooseCardHandler: (e: any) => void;
  cardRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      onClick={ChooseCardHandler}
      ref={cardRef}
      className={`card card-${card.id} w-full h-[400px] max-w-[250px] min-w-[250px] min-h-[400px] max-h-[400px] text-[var(--primary-color)] bg-white rounded-lg p-2 shadow cursor-move`}
    >
      <div className="w-full h-full bg-white border border-[#f63f3f7c] rounded-lg p-3 grid grid-rows-[1fr_1fr_auto]">
        <div className="w-full">
          <h1 className="page-title text-5xl face_or_risk_font text-[var(--secondary-color)]">
            Face or Risk
          </h1>
        </div>
        <div className="w-full text-black">
          <h1 style={{ lineHeight: 1.5 }} className="text-lg">
            {card.dare}
          </h1>
        </div>
        <div className="w-full text-black text-start">
          <h1 className="text-2xl">{`#${card.id}`}</h1>
        </div>
      </div>
    </div>
  );
};

export default FaceOrRiskCard;
