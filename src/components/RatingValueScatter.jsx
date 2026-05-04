import { useEffect, useRef } from "react";
import * as d3 from "d3";

function RatingValueScatter({ data, onSelect }) {
  const svgRef = useRef();

  useEffect(() => {
    const width = 1100;
    const height = 540;
    const margin = { top: 45, right: 150, bottom: 75, left: 90 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    svg
      .attr("width", width)
      .attr("height", height)
      .style("display", "block")
      .style("margin", "0 auto");

    if (!data || data.length === 0) {
      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .attr("text-anchor", "middle")
        .attr("fill", "#9ca3af")
        .attr("font-size", "16px")
        .text("Select a position and filters to display scouting targets.");

      onSelect([]);
      return;
    }

    const chartData = data
      .map(d => ({
        player_id: d.player_id,
        player: d.player_name,
        age: +d.age,
        club: d.club,
        position: d.position,
        overall: +d.overall_rating,
        potential: +d.potential_rating,
        marketValue: +d.market_value_million_eur,
        contract: +d.contract_years_left,
        risk: d.transfer_risk_level,
        injury: d.injury_prone,
        score:
          +d.market_value_million_eur > 0
            ? ((+d.overall_rating + +d.potential_rating) / 2) / +d.market_value_million_eur
            : 0
      }))
      .filter(d => !isNaN(d.overall) && !isNaN(d.marketValue));

      if (chartData.length === 0) {
        svg
          .append("text")
          .attr("x", width / 2)
          .attr("y", height / 2)
          .attr("text-anchor", "middle")
          .attr("fill", "#9ca3af")
          .attr("font-size", "16px")
          .text("No valid players found for the selected filters.");

        onSelect([]);
        return;
      }

    const selectedIds = new Set();

    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(chartData, d => d.overall))
      .nice()
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, d => d.marketValue)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const colorScale = d3
      .scaleOrdinal()
      .domain(["Low", "Medium", "High"])
      .range(["#2dd4bf", "#a78bfa", "#fb7185"]);

    const sortedRatings = chartData.map(d => d.overall).sort(d3.ascending);
    const sortedValues = chartData.map(d => d.marketValue).sort(d3.ascending);

    const ratingCutoff = d3.quantile(sortedRatings, 0.65);
    const valueCutoff = d3.quantile(sortedValues, 0.35);
    const maxRating = d3.max(chartData, d => d.overall);

    // Background click clears selection
    svg
      .append("rect")
      .attr("x", margin.left)
      .attr("y", margin.top)
      .attr("width", width - margin.left - margin.right)
      .attr("height", height - margin.top - margin.bottom)
      .attr("fill", "transparent")
      .on("click", () => {
        selectedIds.clear();

        circles
          .attr("opacity", 0.75)
          .attr("stroke", "#111827")
          .attr("stroke-width", 0.8)
          .attr("r", 6);

        onSelect([]);
      });

    // Best value zone
    svg
      .append("rect")
      .attr("x", xScale(ratingCutoff))
      .attr("y", yScale(valueCutoff))
      .attr("width", xScale(maxRating) - xScale(ratingCutoff))
      .attr("height", yScale(0) - yScale(valueCutoff))
      .attr("fill", "#2dd4bf")
      .attr("opacity", 0.08)
      .attr("pointer-events", "none");

    svg
      .append("text")
      .attr("x", xScale(ratingCutoff) + 10)
      .attr("y", yScale(valueCutoff) + 20)
      .attr("fill", "#5eead4")
      .attr("font-size", "12px")
      .text("Best value zone: high rating, lower value");

    // X-axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("fill", "#d1d5db");

    // Y-axis
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale))
      .selectAll("text")
      .attr("fill", "#d1d5db");

    svg
      .selectAll(".domain, .tick line")
      .attr("stroke", "#9ca3af");

    // Points
    const circles = svg
      .selectAll("circle.player-dot")
      .data(chartData)
      .enter()
      .append("circle")
      .attr("class", "player-dot")
      .attr("cx", d => xScale(d.overall))
      .attr("cy", d => yScale(d.marketValue))
      .attr("r", 6)
      .attr("fill", d => colorScale(d.risk))
      .attr("opacity", 0.75)
      .attr("stroke", "#111827")
      .attr("stroke-width", 0.8)
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        event.stopPropagation();

        if (selectedIds.has(d.player_id)) {
          selectedIds.delete(d.player_id);
        } else {
          selectedIds.add(d.player_id);
        }

        const selectedPlayers = chartData.filter(player =>
          selectedIds.has(player.player_id)
        );

        circles
          .attr("opacity", player =>
            selectedIds.size === 0 || selectedIds.has(player.player_id) ? 0.9 : 0.18
          )
          .attr("stroke", player =>
            selectedIds.has(player.player_id) ? "#ffffff" : "#111827"
          )
          .attr("stroke-width", player =>
            selectedIds.has(player.player_id) ? 2.5 : 0.8
          )
          .attr("r", player =>
            selectedIds.has(player.player_id) ? 8 : 6
          );

        onSelect(selectedPlayers);
      });

    circles
      .append("title")
      .text(
        d =>
          `${d.player}
Club: ${d.club}
Position: ${d.position}
Age: ${d.age}
Overall Rating: ${d.overall}
Potential Rating: ${d.potential}
Market Value: €${d.marketValue}M
Contract Years Left: ${d.contract}
Transfer Risk: ${d.risk}
Injury Prone: ${d.injury}
Value Score: ${d.score.toFixed(2)}`
      );

    // Axis labels
    svg
      .append("text")
      .attr("x", (width - margin.right + margin.left) / 2)
      .attr("y", height - 25)
      .attr("text-anchor", "middle")
      .attr("fill", "#d1d5db")
      .attr("font-size", "14px")
      .text("Overall Rating");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", 28)
      .attr("text-anchor", "middle")
      .attr("fill", "#d1d5db")
      .attr("font-size", "14px")
      .text("Market Value (Million €)");

    svg
      .append("text")
      .attr("x", margin.left)
      .attr("y", 24)
      .attr("fill", "#9ca3af")
      .attr("font-size", "13px")
      .text("Click players to compare them in the table. Click the empty chart area to clear selection.");

    // Legend
    const legendData = ["Low", "Medium", "High"];

    const legend = svg
      .append("g")
      .attr("transform", `translate(${width - margin.right + 35}, ${margin.top + 20})`);

    legend
      .append("text")
      .attr("x", 0)
      .attr("y", -8)
      .attr("fill", "#d1d5db")
      .attr("font-size", "13px")
      .attr("font-weight", "bold")
      .text("Risk Level");

    legend
      .selectAll("circle")
      .data(legendData)
      .enter()
      .append("circle")
      .attr("cx", 0)
      .attr("cy", (d, i) => i * 28 + 14)
      .attr("r", 7)
      .attr("fill", d => colorScale(d));

    legend
      .selectAll("text.legend-label")
      .data(legendData)
      .enter()
      .append("text")
      .attr("class", "legend-label")
      .attr("x", 16)
      .attr("y", (d, i) => i * 28 + 18)
      .attr("fill", "#d1d5db")
      .attr("font-size", "12px")
      .text(d => d);
  }, [data, onSelect]);

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default RatingValueScatter;