import React, { Dispatch, SetStateAction } from "react";

// Face or Risk cards
import { FaceOrRiskProps } from "@/data/Dares";

// Icons
import { MdOutlineCancel } from "react-icons/md";

const AddQuestion = ({
  setIsAddingQuestion,
  setGameCard,
}: {
  setIsAddingQuestion: Dispatch<SetStateAction<boolean>>;
  setGameCard: Dispatch<SetStateAction<FaceOrRiskProps[]>>;
}) => {
  const HandleNewCardCreation = (e: any) => {
    e.preventDefault();

    // Get user input
    let newCardQuestion: string = e.target.question.value;

    if (!newCardQuestion) {
      return;
    }

    // New question property
    let newQ: FaceOrRiskProps = {
      id: Math.random(),
      dare: newCardQuestion.trim(),
    };

    // Add Card to List
    setGameCard((prev: FaceOrRiskProps[]) => [...prev, newQ]);

    // Close Modal
    setIsAddingQuestion(false);
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0 h-full z-[999] flex flex-col gap-6 justify-center items-center backdrop-blur-lg">
        <div className="relative w-[100%] bg-white max-w-[90%] md:max-w-[500px] mx-auto rounded-[24px_0px_24px_24px] px-4 py-6 min-h-[200px] text-[var(--secondary-color)] flex gap-2 flex-col justify-center items-center text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Custom Question</h1>
          </div>
          <p className="text-black/80 max-w-full">
            Add new question to your &quot;Face or Risk&quot; card
          </p>
          <div className="relative w-full face_or_risk_form_container mt-12">
            <form
              className="w-full flex flex-col gap-4 justify-start items-start"
              onSubmit={HandleNewCardCreation}
            >
              <div className="w-full flex flex-col gap-3 justify-start items-start text-black">
                <label htmlFor="question text-start">Your Question:</label>
                <input
                  type="text"
                  name="question"
                  id="question"
                  required
                  placeholder="e.g Ask me a candle light dinner."
                  className="w-full border rounded-lg py-3.5 px-4 font-light text-sm"
                />
              </div>
              <button
                title="Add custom question"
                className="py-3 cursor-pointer animate-none px-6 shadow-md no-underline rounded-lg bg-[var(--black)] text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"
              >
                Add Card
              </button>
            </form>
          </div>

          <button
            onClick={() => setIsAddingQuestion(false)}
            className="absolute -top-2 -right-2"
          >
            <MdOutlineCancel className="text-3xl text-[red]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
