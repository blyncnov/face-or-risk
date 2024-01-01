import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const EventConfetti = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="max-w-full min-w-full w-full">
      <Confetti width={width} height={height} wind={0} gravity={0.1} />
    </div>
  );
};

export default EventConfetti;
