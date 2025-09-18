export default function ProgressBar({ questionIdx }) {
  const progressPercent = ((questionIdx + 1) / 20) * 100;

  return (
    <div className="progress-bar">
      <div
        style={{ width: `${progressPercent}%` }}
        className="bar-indicator"></div>
      <span className="questionsCounter">{questionIdx + 1} of 20</span>
    </div>
  );
}
