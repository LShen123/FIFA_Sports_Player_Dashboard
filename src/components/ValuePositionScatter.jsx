import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

export default function ValuePositionScatter({ data }) {
  const svgRef = useRef();
  const [selectedPositions, setSelectedPositions] = useState(new Set());

  const togglePosition = (position) => {
    const newSet = new Set(selectedPositions);
    if (newSet.has(position)) {
      newSet.delete(position);
    } else {
      newSet.add(position);
    }
    setSelectedPositions(newSet);
  };

  const selectAllPositions = (positions) => {
    setSelectedPositions(new Set(positions));
  };

  useEffect(() => {
    if (!data || data.length === 0) return;

    const parsedData = data
      .map((d) => ({
        value: +d.market_value_million_eur,
        age: +d.age,
        position: d.position,
      }))
      .filter(
        (d) => !isNaN(d.age) && !isNaN(d.value) && d.age > 0 && d.value > 0,
      );

    if (parsedData.length === 0) return;

    const positions = Array.from(
      new Set(parsedData.map((d) => d.position)),
    ).sort();

    const grouped = d3.group(
      parsedData,
      (d) => d.position,
      (d) => d.age,
    );
    const points = [];

    grouped.forEach((ageMap, position) => {
      ageMap.forEach((players, age) => {
        const avgValue = d3.mean(players, (d) => d.value);
        const count = players.length;
        points.push({
          position,
          age,
          avgValue,
          count,
        });
      });
    });

    const displayPositions =
      selectedPositions.size === 0 ? positions : Array.from(selectedPositions);

    const displayData = points.filter((d) =>
      displayPositions.includes(d.position),
    );

    if (displayData.length === 0) return;

    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 150, bottom: 50, left: 60 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "black")
      .style("color", "white")
      .style("padding", "18px")
      .style("border-radius", "4px")
      .style("font-size", "12px")
      .style("display", "none")
      .style("pointer-events", "none");

    const xScale = d3
      .scaleLinear()
      .domain([
        d3.min(displayData, (d) => d.age) - 1,
        d3.max(displayData, (d) => d.age) + 1,
      ])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(displayData, (d) => d.avgValue) * 1.1])
      .range([height - margin.bottom, margin.top]);

    const colorScale = d3
      .scaleOrdinal()
      .domain(positions)
      .range(d3.schemeCategory10);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .append("text")
      .attr("x", width / 2)
      .attr("y", 40)
      .attr("fill", "var(--text-h, #000)")
      .style("text-anchor", "middle")
      .style("font-size", "14px")
      .text("Age");

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .attr("fill", "var(--text-h, #000)")
      .style("text-anchor", "middle")
      .style("font-size", "14px")
      .text("Average Market Value (Million EUR)");

    svg
      .selectAll("circle")
      .data(displayData)
      .join("circle")
      .attr("cx", (d) => xScale(d.age))
      .attr("cy", (d) => yScale(d.avgValue))
      .attr("r", 6)
      .attr("fill", (d) => colorScale(d.position))
      .attr("opacity", 0.7)
      .style("cursor", "pointer")
      .on("mouseover", function (event, d) {
        d3.select(this).attr("opacity", 1);
        tooltip
          .style("display", "block")
          .html(
            `Average value of all ${d.position}s aged ${d.age}: €${Math.round(d.avgValue * 100) / 100} million`,
          )
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 30}px`);
      })
      .on("mouseout", function () {
        d3.select(this).attr("opacity", 0.7);
        tooltip.style("display", "none");
      });

    const legend = svg
      .append("g")
      .attr(
        "transform",
        `translate(${width - margin.right + 10}, ${margin.top})`,
      );

    displayPositions.forEach((position, i) => {
      const legendRow = legend
        .append("g")
        .attr("transform", `translate(0, ${i * 20})`);

      legendRow
        .append("rect")
        .attr("width", 12)
        .attr("height", 12)
        .attr("fill", colorScale(position));

      legendRow
        .append("text")
        .attr("x", 20)
        .attr("y", 10)
        .attr("fill", "var(--text-h, #000)")
        .style("font-size", "12px")
        .text(position);
    });
  }, [data, selectedPositions]);

  const getPositions = () => {
    if (!data || data.length === 0) return [];
    return Array.from(
      new Set(data.map((d) => d.position).filter((pos) => pos)),
    ).sort();
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <div style={{ marginBottom: "0.5rem", display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => selectAllPositions(getPositions())}
            style={{
              padding: "6px 12px",
              borderRadius: "4px",
              border: "1px solid #374151",
              backgroundColor: "#1f2937",
              color: "#e5e7eb",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            All
          </button>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {getPositions().map((position) => (
            <label
              key={position}
              style={{
                color: "#e5e7eb",
                fontSize: "13px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "4px 8px",
                border:
                  selectedPositions.size === 0 ||
                  selectedPositions.has(position)
                    ? "1px solid #60a5fa"
                    : "1px solid #374151",
                borderRadius: "4px",
                backgroundColor:
                  selectedPositions.size === 0 ||
                  selectedPositions.has(position)
                    ? "#1e40af"
                    : "transparent",
              }}
            >
              <input
                type="checkbox"
                checked={
                  selectedPositions.size === 0 ||
                  selectedPositions.has(position)
                }
                onChange={() => togglePosition(position)}
                style={{ cursor: "pointer" }}
              />
              {position}
            </label>
          ))}
        </div>
      </div>
      <svg
        ref={svgRef}
        width={800}
        height={400}
        style={{ background: "transparent" }}
      />
    </div>
  );
}
