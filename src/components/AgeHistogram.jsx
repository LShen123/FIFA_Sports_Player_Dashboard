import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function AgeHistogram({ data, selectedRange = [], onBinSelect }) {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const width = 400;
    const height = 250;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const ages = data
      .map(d => +d.age)
      .filter(d => !isNaN(d) && d > 0);

    const minAge = Math.floor(d3.min(ages));
    const maxAge = Math.ceil(d3.max(ages));

    const xScale = d3.scaleLinear()
      .domain([minAge, maxAge])
      .range([margin.left, width - margin.right]);

    const histogram = d3.bin()
      .domain([minAge, maxAge])
      .thresholds(d3.range(minAge, maxAge + 1, 1));

    const bins = histogram(ages);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(bins, d => d.length)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(
        d3.axisBottom(xScale)
          .ticks(maxAge - minAge)
          .tickFormat(d3.format("d"))
      )
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
        if (!selectedRange || selectedRange.length === 0) return 1;

        const isSelected = selectedRange.some(
          r => r[0] === d.x0 && r[1] === d.x1
        );

        return isSelected ? 1 : 0.3;
      })
      .style("cursor", "pointer")
      //Interaction logic
      .on("click", (event, d) => {
        const range = [d.x0, d.x1];
        onBinSelect(range);
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