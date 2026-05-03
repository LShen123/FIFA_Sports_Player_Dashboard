// src/App.jsx
import { useState, useEffect, useMemo } from 'react';
import * as d3 from 'd3';
import AgeHistogram from './components/AgeHistogram';
import RatingHistogram from './components/RatingsHistogram';
import RatingValueScatter from './components/RatingValueScatter';
import PlayerTable from './components/PlayerTable';
import fifaCsvRaw from './data/fifa_player_performance_market_value.csv?raw';

function App() {
  const [fifaData, setFifaData] = useState([]);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);

  const [selectedPosition, setSelectedPosition] = useState("");
  const [maxBudget, setMaxBudget] = useState(180);
  const [selectedRisk, setSelectedRisk] = useState("All");
  const [excludeInjuryProne, setExcludeInjuryProne] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    const parsedData = d3.csvParse(fifaCsvRaw);
    setFifaData(parsedData);
  }, []);

  const maxBudgetValue = useMemo(() => {
    if (fifaData.length === 0) return 180;
    return Math.ceil(d3.max(fifaData, d => +d.market_value_million_eur));
  }, [fifaData]);

  useEffect(() => {
    if (fifaData.length > 0) {
      setMaxBudget(maxBudgetValue);
    }
  }, [fifaData, maxBudgetValue]);

  // Filter the data based on the selected histogram bin
  const filteredData = useMemo(() => {
    if (!selectedAgeRange) return fifaData;
    
    return fifaData.filter(d => {
      const age = +d.age;
      return age >= selectedAgeRange[0] && age < selectedAgeRange[1];
    });
  }, [fifaData, selectedAgeRange]);

  // Get all available positions from the dataset
  const positions = useMemo(() => {
    const uniquePositions = Array.from(new Set(fifaData.map(d => d.position))).sort();
    return ["All", ...uniquePositions];
  }, [fifaData]);

  // Scouting Data 
  const scoutingData = useMemo(() => {
    if (!selectedPosition) return [];

    return fifaData.filter(d => {
      const playerValue = +d.market_value_million_eur;

      const positionMatch = selectedPosition === "All" || d.position === selectedPosition;
      const budgetMatch = playerValue <= maxBudget;
      const riskMatch = selectedRisk === "All" || d.transfer_risk_level === selectedRisk;
      const injuryMatch = !excludeInjuryProne || d.injury_prone === "No";

      return positionMatch && budgetMatch && riskMatch && injuryMatch;
    });
  }, [fifaData, selectedPosition, maxBudget, selectedRisk, excludeInjuryProne]);

  const handleAgeSelect = (range) => {
  setSelectedAgeRange(range);
  };

  const handlePositionChange = (position) => {
    setSelectedPosition(position);
    setSelectedPlayers([]);
  };

  const handleBudgetChange = (event) => {
    setMaxBudget(+event.target.value);
    setSelectedPlayers([]);
  };

  const handleRiskChange = (risk) => {
    setSelectedRisk(risk);
    setSelectedPlayers([]);
  };

  const handleInjuryChange = (event) => {
    setExcludeInjuryProne(event.target.checked);
    setSelectedPlayers([]);
  };

  const resetScoutingFilters = () => {
    setSelectedPosition("");
    setMaxBudget(maxBudgetValue);
    setSelectedRisk("All");
    setExcludeInjuryProne(false);
    setSelectedPlayers([]);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>FIFA Performance Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
        
        
        <div className="card">
          <h3>Player Age Distribution</h3>
          {fifaData.length > 0 ? (
            <AgeHistogram 
              data={fifaData} 
              selectedRange={selectedAgeRange}
              onBinSelect={handleAgeSelect} 
            />
          ) : (
            <p>Loading dataset...</p>
          )}
        </div>

        <div className="card">
          <h3>Age vs. Overall Rating</h3>
          {fifaData.length > 0 ? (
            <RatingHistogram data={filteredData} />
          ) : (
            <p>Loading dataset...</p>
          )}
        </div>

      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3>Scouting Filters</h3>

        <p style={{ color: "#9ca3af", marginBottom: "0.5rem" }}>
          Select a position, or choose All to compare the full market:
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "1.2rem" }}>
          {positions.map(position => (
            <label 
              key={position}
              style={{
                color: "#e5e7eb",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px"
              }}
            >
              <input
                type="radio"
                name="position"
                value={position}
                checked={selectedPosition === position}
                onChange={() => handlePositionChange(position)}
              />
              {position}
            </label>
          ))}
        </div>

        {selectedPosition && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
            
            <div>
              <label style={{ color: "#e5e7eb", fontSize: "14px" }}>
                Max Budget: €{maxBudget}M
              </label>
              <input
                type="range"
                min="1"
                max={maxBudgetValue}
                value={maxBudget}
                onChange={handleBudgetChange}
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <p style={{ color: "#e5e7eb", fontSize: "14px", margin: "0 0 0.4rem 0" }}>
                Transfer Risk:
              </p>

              {["All", "Low", "Medium", "High"].map(risk => (
                <label
                  key={risk}
                  style={{
                    color: "#e5e7eb",
                    fontSize: "14px",
                    marginRight: "12px",
                    cursor: "pointer"
                  }}
                >
                  <input
                    type="radio"
                    name="risk"
                    value={risk}
                    checked={selectedRisk === risk}
                    onChange={() => handleRiskChange(risk)}
                  />
                  {" "}{risk}
                </label>
              ))}
            </div>

            <div>
              <label style={{ color: "#e5e7eb", fontSize: "14px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={excludeInjuryProne}
                  onChange={handleInjuryChange}
                />
                {" "}Exclude injury-prone players
              </label>
            </div>

          </div>
        )}

        {selectedPosition && (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <p style={{ color: "#9ca3af", margin: 0 }}>
              {!selectedPosition
                ? "Select a position or All to display players."
                : selectedPosition === "All"
                  ? `Showing ${scoutingData.length} player(s) across all positions`
                  : `Showing ${scoutingData.length} player(s) for position ${selectedPosition}`}
            </p>

            <button
              onClick={resetScoutingFilters}
              style={{
                padding: "6px 10px",
                borderRadius: "6px",
                border: "1px solid #374151",
                backgroundColor: "#1f2937",
                color: "#e5e7eb",
                cursor: "pointer"
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        <h3>Scouting Map: Overall Rating vs. Market Value</h3>


        <p style={{ color: "#9ca3af", fontSize: "14px", marginTop: "-0.3rem" }}>
          The best value zone highlights players with stronger ratings and lower market values within the current filters.
        </p>

        {fifaData.length > 0 ? (
          <RatingValueScatter 
            data={scoutingData}
            onSelect={setSelectedPlayers}
          />
        ) : (
          <p>Loading dataset...</p>
        )}
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3>Selected Players / Best Value Targets</h3>
        {fifaData.length > 0 ? (
          <PlayerTable 
            data={scoutingData}
            selectedPlayers={selectedPlayers}
            selectedPosition={selectedPosition}
          />
        ) : (
          <p>Loading dataset...</p>
        )}
      </div>

    </div>
  );
}

export default App;