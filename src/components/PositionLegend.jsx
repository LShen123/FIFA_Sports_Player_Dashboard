import * as d3 from 'd3';

const positionMap = {
  CB: "Center Back",
  CDM: "Defensive Midfielder",
  CM: "Central Midfielder",
  GK: "Goalkeeper",
  LB: "Left Back",
  LW: "Left Winger",
  RB: "Right Back",
  RW: "Right Winger",
  ST: "Striker"
};

const positions = Object.keys(positionMap);

const colorScale = d3.scaleOrdinal()
  .domain(positions)
  .range([
    "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728",
    "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22"
  ]);

export default function PositionLegend() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "1rem" }}>
      <h3 style={{ margin: 0, fontSize: "20px", color: "#9ca3af" }}>
        Position Legend
      </h3>
      {positions.map(pos => (
        <div
          key={pos}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "14px",
            color: "#e5e7eb",
            whiteSpace: "nowrap"
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: colorScale(pos),
              borderRadius: "2px",
              flexShrink: 0
            }}
          />
          <span>
            <strong>{pos}</strong> — {positionMap[pos]}
          </span>
        </div>
      ))}
    </div>
  );
}