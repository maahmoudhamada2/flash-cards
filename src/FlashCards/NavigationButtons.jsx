export default function NavigationButtons({
  setQuestionIdx,
  showAnswer,
  setShowAnswer,
}) {
  const handleNextClick = () => {
    setShowAnswer((prev) => (prev === true ? false : null));
    setQuestionIdx((prev) => (prev === 19 ? 19 : prev + 1));
  };
  const handlePreviousClick = () => {
    setShowAnswer((prev) => (prev === true ? false : null));
    setQuestionIdx((prev) => (prev === 0 ? 0 : prev - 1));
  };
  return (
    <>
      <button onClick={handlePreviousClick}>&lt; Previous</button>
      <button
        className="show-answer-btn"
        onClick={() => setShowAnswer((prev) => !prev)}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      <button onClick={handleNextClick}>Next &gt;</button>
    </>
  );
}
