export default function NavigationButtons({
  setQuestionIdx,
  showAnswer,
  setShowAnswer,
}) {
  const handleNextClick = () => {
    setQuestionIdx((prev) => (prev === 19 ? 19 : prev + 1));
  };
  const handlePreviousClick = () => {
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
