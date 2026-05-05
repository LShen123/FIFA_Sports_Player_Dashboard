import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const positions = ["CB", "CDM", "CM", "GK", "LB", "LW", "RB", "RW", "ST"];
const colorScale = d3.scaleOrdinal()
  .domain(positions)
  .range([
    "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728",
    "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22"
  ]);

export default function PositionBarChart({ data, fullData }) {
  const svgRef = useRef();

  useEffect(() => {
    if (!fullData || fullData.length === 0) {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove(); 
      return;
    }

    const width = 400;
    const height = 250;
    const margin = { top: 20, right: 20, bottom: 60, left: 40 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // 1. Get all unique positions from FULL dataset for static X-axis
    const allPositions = Array.from(new Set(fullData.map(d => d.position))).sort();

    // 2. Count occurrences in the CURRENTLY FILTERED data
    const currentCounts = d3.rollup(data || [], v => v.length, d => d.position);

    // 3. Map the current counts to the complete list of positions
    const plotData = allPositions.map(pos => ({
      position: pos,
      count: currentCounts.get(pos) || 0
    }));

    // 4. Find the maximum player count in the CURRENT data for a scaling Y-axis
    // Provide a fallback of 10 so the axis doesn't collapse if no bars are selected
    const currentMaxCount = d3.max(plotData, d => d.count) || 10;

    // X Scale
    const xScale = d3.scaleBand()
      .domain(allPositions)
      .range([margin.left, width - margin.right])
      .padding(0.1);

    // Y Scale (Now scales to the current selection)
    const yScale = d3.scaleLinear()
      .domain([0, currentMaxCount])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // X Axis
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .attr("fill", "var(--text-h, #000)");

    // Y Axis
    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", -30)
      .attr("fill", "var(--text-h, #000)")
      .style("text-anchor", "middle")
      .text("Player Count");

    // Draw the Bars
    svg.append("g")
      //.attr("fill", "var(--accent, #646cff)")
      .selectAll("rect")
      .data(plotData)
      .join("rect")
      .attr("x", d => xScale(d.position))
      .attr("y", d => yScale(d.count))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - margin.bottom - yScale(d.count))
      //Unique colors for each label
      .attr("fill", d => colorScale(d.position)) 
      .transition()
      .duration(300);

  }, [data, fullData]);

  return (
    <svg 
      ref={svgRef} 
      width={400} 
      height={250} 
      style={{ background: 'transparent' }}
    />
  );
}