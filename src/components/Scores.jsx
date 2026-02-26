function Scores ({ courseName, courseResults }) {
    return (
        <div class="scores">
            <h1>{courseName}</h1>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {courseResults.map((result) => (
                        <tr key={`${result.firstName}-${result.lastName}`}>
                            <td>{result.firstName}</td>
                            <td>{result.lastName}</td>
                            <td>{result.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Scores;