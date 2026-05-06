import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function GoalsAssistsValueScatter({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    const width = 1100;
    const height = 560;
    const margin = { top: 50, right: 170, bottom: 80, left: 90 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    svg
      .attr("width", width)
      .attr("height", height)
      .style("display", "block")
      .style("margin", "0 auto");

    const attackers = new Set(["RW", "LW", "ST"]);

    if (!data || data.length === 0) {
      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .attr("text-anchor", "middle")
        .attr("fill", "#9ca3af")
        .attr("font-size", "16px")
        .text("No player data available.");

      return;
    }

    const chartData = data
      .map((d) => ({
        player_id: d.player_id,
        player: d.player_name,
        age: +d.age,
        club: d.club,
        position: d.position,
        goals: +d.goals,
        assists: +d.assists,
        marketValue: +d.market_value_million_eur,
        contribution: (+d.goals || 0) + (+d.assists || 0),
      }))
      .filter(
        (d) =>
          attackers.has(d.position) &&
          !isNaN(d.contribution) &&
          !isNaN(d.marketValue) &&
          d.contribution >= 0 &&
          d.marketValue > 0,
      );

    if (chartData.length === 0) {
      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .attr("text-anchor", "middle")
        .attr("fill", "#9ca3af")
        .attr("font-size", "16px")
        .text(
          "No RW, LW, or ST players found with valid goals, assists, and market value.",
        );

      return;
    }

    const xMax = d3.max(chartData, (d) => d.contribution) ?? 0;
    const yMax = d3.max(chartData, (d) => d.marketValue) ?? 0;

    const xScale = d3
      .scaleLinear()
      .domain([0, xMax + 1])
      .nice()
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, yMax * 1.1])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const colorScale = d3
      .scaleOrdinal()
      .domain(["RW", "LW", "ST"])
      .range(["#f59e0b", "#38bdf8", "#fb7185"]);

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "rgba(17, 24, 39, 0.96)")
      .style("color", "#f9fafb")
      .style("padding", "12px 14px")
      .style("border-radius", "10px")
      .style("font-size", "12px")
      .style("line-height", "1.5")
      .style("display", "none")
      .style("pointer-events", "none")
      .style("box-shadow", "0 12px 30px rgba(0, 0, 0, 0.25)");

    svg
      .append("rect")
      .attr("x", margin.left)
      .attr("y", margin.top)
      .attr("width", width - margin.left - margin.right)
      .attr("height", height - margin.top - margin.bottom)
      .attr("fill", "transparent");

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).ticks(8))
      .call((g) => g.selectAll("text").attr("fill", "#d1d5db"))
      .call((g) => g.selectAll("path, line").attr("stroke", "#4b5563"));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale).ticks(8))
      .call((g) => g.selectAll("text").attr("fill", "#d1d5db"))
      .call((g) => g.selectAll("path, line").attr("stroke", "#4b5563"));

    svg
      .selectAll("circle.player-point")
      .data(chartData)
      .join("circle")
      .attr("class", "player-point")
      .attr("cx", (d) => xScale(d.contribution))
      .attr("cy", (d) => yScale(d.marketValue))
      .attr("r", 6)
      .attr("fill", (d) => colorScale(d.position))
      .attr("opacity", 0.8)
      .attr("stroke", "#111827")
      .attr("stroke-width", 0.9)
      .style("cursor", "default")
      .on("mouseover", function (event, d) {
        d3.select(this).attr("opacity", 1).attr("r", 8);

        tooltip
          .style("display", "block")
          .html(
            `<strong>${d.player}</strong><br/>${d.club} · ${d.position}<br/>Goals: ${d.goals}<br/>Assists: ${d.assists}<br/>Goal Contributions: ${d.contribution}<br/>Market Value: €${d.marketValue.toFixed(2)}M`,
          )
          .style("left", `${event.pageX + 12}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", function () {
        d3.select(this).attr("opacity", 0.8).attr("r", 6);
        tooltip.style("display", "none");
      });

    svg
      .append("text")
      .attr("x", (width - margin.right + margin.left) / 2)
      .attr("y", height - 25)
      .attr("text-anchor", "middle")
      .attr("fill", "#d1d5db")
      .attr("font-size", "14px")
      .text("Goals + Assists");

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
      .text("Attackers only: RW, LW, and ST.");

    const legend = svg
      .append("g")
      .attr(
        "transform",
        `translate(${width - margin.right + 25}, ${margin.top + 10})`,
      );

    ["RW", "LW", "ST"].forEach((position, index) => {
      const row = legend
        .append("g")
        .attr("transform", `translate(0, ${index * 24})`);

      row
        .append("rect")
        .attr("width", 12)
        .attr("height", 12)
        .attr("rx", 3)
        .attr("fill", colorScale(position));

      row
        .append("text")
        .attr("x", 18)
        .attr("y", 10)
        .attr("fill", "#d1d5db")
        .attr("font-size", "12px")
        .text(position);
    });

    return () => {
      tooltip.remove();
    };
  }, [data]);

  return <svg ref={svgRef} />;
}
