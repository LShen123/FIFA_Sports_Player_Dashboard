import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function AgeHistogram({ data, selectedRange, onBinSelect }) {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const width = 400;
    const height = 250;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const ages = data.map(d => +d.age).filter(d => !isNaN(d) && d > 0);

    const xScale = d3.scaleLinear()
      .domain([d3.min(ages) - 2, d3.max(ages) + 2])
      .range([margin.left, width - margin.right]);

    const histogram = d3.bin()
      .domain(xScale.domain())
      .thresholds(xScale.ticks(15));

    const bins = histogram(ages);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(bins, d => d.length)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .append("text")
      .attr("x", width / 2)
      .attr("y", 35)
      .attr("fill", "var(--text-h, #000)")
      .style("text-anchor", "middle")
      .text("Age");

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    svg.append("g")
      .selectAll("rect")
      .data(bins)
      .join("rect")
      .attr("x", d => xScale(d.x0) + 1)
      .attr("width", d => Math.max(0, xScale(d.x1) - xScale(d.x0) - 1))
      .attr("y", d => yScale(d.length))
      .attr("height", d => height - margin.bottom - yScale(d.length))
      .attr("fill", "var(--accent, #646cff)")
      //Dim unselected bars if a range is currently selected
      .style("opacity", d => {
        if (!selectedRange) return 1;
        const isSelected = selectedRange[0] === d.x0 && selectedRange[1] === d.x1;
        return isSelected ? 1 : 0.3;
      })
      .style("cursor", "pointer")
      //Interaction logic
      .on("click", (event, d) => {
        const isAlreadySelected = selectedRange && selectedRange[0] === d.x0 && selectedRange[1] === d.x1;
        //Unselect Selected Bin
        onBinSelect(isAlreadySelected ? null : [d.x0, d.x1]);
      });

  }, [data, selectedRange, onBinSelect]);

  return (
    <svg 
      ref={svgRef} 
      width={400} 
      height={250} 
      style={{ background: 'transparent' }}
    />
  );
}