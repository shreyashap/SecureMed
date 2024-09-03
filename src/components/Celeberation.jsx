import Confetti from "react-confetti";

const Celeberation = () => {
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      gravity={0.2}
    />
  );
};

export default Celeberation;
