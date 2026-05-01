import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function RatingHistogram({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove(); // Clear if no data
      return;
    }

    const width = 400;
    const height = 250;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const ratings = data.map(d => +d.overall_rating).filter(d => !isNaN(d) && d > 0);

    //X Scale domain
    const xScale = d3.scaleLinear()
      .domain([55, 100]) 
      .range([margin.left, width - margin.right]);

    //Generate the bins
    const histogram = d3.bin()
      .domain(xScale.domain())
      .thresholds(xScale.ticks(30)); // Adjust tick count for wider/narrower bins

    const bins = histogram(ratings);

    //Y Scale domain
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(bins, d => d.length)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // X Axis
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .append("text")
      .attr("x", width / 2)
      .attr("y", 35)
      .attr("fill", "var(--text-h, #000)")
      .style("text-anchor", "middle")
      .text("Overall Rating");

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

    // Draw the Histogram Bars
    svg.append("g")
      .attr("fill", "var(--accent, #646cff)")
      .selectAll("rect")
      .data(bins)
      .join("rect")
      .attr("x", d => xScale(d.x0) + 1)
      .attr("width", d => Math.max(0, xScale(d.x1) - xScale(d.x0) - 1))
      .attr("y", d => yScale(d.length))
      .attr("height", d => height - margin.bottom - yScale(d.length));

  }, [data]);

  return (
    <svg 
      ref={svgRef} 
      width={400} 
      height={250} 
      style={{ background: 'transparent' }}
    />
  );
}