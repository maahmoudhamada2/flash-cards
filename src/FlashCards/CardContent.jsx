export default function CardContent({ qna, showAnswer }) {
  return (
    <div className={showAnswer ? "card flip" : "card"}>
      <div className="face front">
        <p>{qna.question}</p>
      </div>
      <div className="face back">
        <p>{qna.answer}</p>
      </div>
    </div>
  );
}
