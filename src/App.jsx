// src/App.jsx
import { useState, useEffect, useMemo } from 'react';
import * as d3 from 'd3';
import AgeHistogram from './components/AgeHistogram';
import RatingHistogram from './components/RatingsHistogram';
import fifaCsvRaw from './data/fifa_player_performance_market_value.csv?raw';

function App() {
  const [fifaData, setFifaData] = useState([]);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);

  useEffect(() => {
    const parsedData = d3.csvParse(fifaCsvRaw);
    setFifaData(parsedData);
  }, []);

  // Filter the data based on the selected histogram bin
  const filteredData = useMemo(() => {
    if (!selectedAgeRange) return fifaData;
    
    return fifaData.filter(d => {
      const age = +d.age;
      return age >= selectedAgeRange[0] && age < selectedAgeRange[1];
    });
  }, [fifaData, selectedAgeRange]);

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
              onBinSelect={setSelectedAgeRange} 
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
    </div>
  );
}

export default App;