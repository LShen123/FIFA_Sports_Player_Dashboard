function PlayerTable({ data, selectedPlayers, selectedPosition }) {
  const makePlayer = (d) => {
    const overall = +d.overall_rating;
    const potential = +d.potential_rating;
    const marketValue = +d.market_value_million_eur;

    return {
      player: d.player_name,
      club: d.club,
      position: d.position,
      age: +d.age,
      overall: overall,
      potential: potential,
      marketValue: marketValue,
      contract: +d.contract_years_left,
      risk: d.transfer_risk_level,
      score: marketValue > 0 ? ((overall + potential) / 2) / marketValue : 0
    };
  };

  const rows = selectedPlayers.length > 0
    ? selectedPlayers.map(d => ({
        player: d.player,
        club: d.club,
        position: d.position,
        age: d.age,
        overall: d.overall,
        potential: d.potential,
        marketValue: d.marketValue,
        contract: d.contract,
        risk: d.risk,
        score: d.marketValue > 0 ? ((d.overall + d.potential) / 2) / d.marketValue : 0
      }))
    : data
        .map(makePlayer)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

  return (
    <div>
      <p style={{ color: "#9ca3af", fontSize: "14px" }}>
        {selectedPlayers.length > 0
          ? `${selectedPlayers.length} selected player(s) from the scatterplot.`
          : selectedPosition === "All"
            ? "No players selected. Showing the top 10 best-value players across all positions."
            : `No players selected. Showing the top 10 best-value players for position ${selectedPosition}.`}
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
        <thead>
          <tr>
            <th style={headerStyle}>Player</th>
            <th style={headerStyle}>Club</th>
            <th style={headerStyle}>Pos</th>
            <th style={headerStyle}>Age</th>
            <th style={headerStyle}>Rating</th>
            <th style={headerStyle}>Potential</th>
            <th style={headerStyle}>Value (€M)</th>
            <th style={headerStyle}>Contract</th>
            <th style={headerStyle}>Risk</th>
            <th style={headerStyle}>Score</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((d, i) => (
            <tr key={i}>
              <td style={cellStyle}>{d.player}</td>
              <td style={cellStyle}>{d.club}</td>
              <td style={cellStyle}>{d.position}</td>
              <td style={cellStyle}>{d.age}</td>
              <td style={cellStyle}>{d.overall}</td>
              <td style={cellStyle}>{d.potential}</td>
              <td style={cellStyle}>{d.marketValue.toFixed(1)}</td>
              <td style={cellStyle}>{d.contract}</td>
              <td style={cellStyle}>{d.risk}</td>
              <td style={cellStyle}>{d.score.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const headerStyle = {
  borderBottom: "1px solid #374151",
  padding: "8px",
  color: "#d1d5db",
  textAlign: "left"
};

const cellStyle = {
  borderBottom: "1px solid #1f2937",
  padding: "8px",
  color: "#e5e7eb"
};

export default PlayerTable;