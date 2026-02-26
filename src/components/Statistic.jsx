function Statistic({ courseResults }) {
  const scores = courseResults.map((result) => result.score);

  const min = Math.min(...scores);
  const max = Math.max(...scores);
  const average = Math.round(
    scores.reduce((total, score) => total + score, 0) / scores.length
  );

  return (
    <div className="statistics">
      <div>
        <p>Average</p>
        <strong>{average}</strong>
      </div>
      <div>
        <p>Min</p>
        <strong>{min}</strong>
      </div>
      <div>
        <p>Max</p>
        <strong>{max}</strong>
      </div>
    </div>
  );
}

export default Statistic;
