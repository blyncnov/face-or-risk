import React from "react";

const FaceOrRiskCard = ({ card }: { card: number }) => {
  return (
    <div className="card w-full h-[400px] max-w-[250px] min-w-[250px] min-h-[400px] max-h-[400px] text-[var(--primary-color)] bg-white rounded-lg p-2 shadow cursor-move">
      <div className="w-full h-full bg-white border border-[#f63f3f7c] rounded-lg p-3 grid grid-rows-[1fr_1fr_auto]">
        <div className="w-full">
          <h1 className="page-title text-5xl face_or_risk_font text-[var(--secondary-color)]">
            Face or Risk
          </h1>
        </div>
        <div className="w-full text-black">
          <h1 style={{ lineHeight: 1.5 }} className="text-lg">
            Everyone who is still in contact with their ex takes a shot.
          </h1>
        </div>
        <div className="w-full text-black text-start">
          <h1 className="text-2xl">{`#${card}`}</h1>
        </div>
      </div>
    </div>
  );
};

export default FaceOrRiskCard;

// let stack = document.querySelector(".stack");

// [...stack.children].reverse().forEach((i) => stack.append(i));

// stack.addEventListener("click", swap);

// function swap(e) {
//   let card = document.querySelector(".card:last-child");
//   if (e.target !== card) return;
//   card.style.animation = "swap 700ms forwards";

//   setTimeout(() => {
//     card.style.animation = "";
//     stack.prepend(card);
//   }, 700);
// }
