import * as d3 from 'd3';

export class D3Chart {
    isInited: boolean;
    rootSelector: string;
    svg?: any;
   
    constructor(selector: string) {
      this.rootSelector = selector;
      this.isInited = false;
    }
   
    async create() {
      if (this.isInited) {
        return;
      }
  
      this.isInited = true;
  
      // read data from csv and format constiables
      let data = await d3.csv('https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv')
      const parseTime = d3.timeParse("%Y-%m-%d");
    
      data.forEach((d) => {
        d.date = parseTime(d.date);
        d.value = +d.value;
      });
  
      // set the dimensions and margins of the graph
      const margin = { top: 20, right: 20, bottom: 50, left: 70 };
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;
  
      // append the svg object to the body of the page
      this.svg = d3.select(this.rootSelector).append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
      // add X axis and Y axis
      const x = d3.scaleTime().range([0, width]);
      const y = d3.scaleLinear().range([height, 0]);
  
      x.domain(d3.extent(data, (d) => { return d.date; }));
      y.domain([0, d3.max(data, (d) => { return d.value; })]);
    
      this.svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));
  
        this.svg.append("g")
        .call(d3.axisLeft(y));
        
      // add the Line
      const valueLine = d3.line()
        .x((d) => { return x(d.date); })
        .y((d) => { return y(d.value); });
    
      this.svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", valueLine);
      }
  }