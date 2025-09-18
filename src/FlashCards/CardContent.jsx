export default function CardContent({ qna }) {
  return (
    <div className="card">
      <div className="face front">
        <p>{qna.question}</p>
      </div>
      <div className="face back">
        <p>{qna.answer}</p>
      </div>
    </div>
  );
}
