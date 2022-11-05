import * as d3 from 'd3';
import { NumberValue } from 'd3';

export class D3Chart {
    isInited: boolean;
    rootSelector: string;
    svg?: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
    x?: d3.ScaleTime<number, number, never>
    y?: d3.ScaleLinear<number, number, never>;
   
    constructor(selector: string) {
      this.rootSelector = selector;
      this.isInited = false;
    }
   
    public async create() {
      if (this.isInited) {
        return;
      }
  
      this.isInited = true;
  
      const data = await this.loadData();

      // set the dimensions and margins of the graph
      const margin = { top: 20, right: 20, bottom: 50, left: 70 };
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;
  
      // append the svg object to the body of the page
      this.svg = d3.select(this.rootSelector).append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
      // add X axis and Y axis
      this.x = d3.scaleTime().range([0, width]);
      this.y = d3.scaleLinear().range([height, 0]);
  
      this.x.domain(<Iterable<NumberValue | Date>>d3.extent(data, (d) => d.date));
      this.y.domain(<Iterable<NumberValue>>[0, d3.max(data, (d) => d.value)]);
    
      this.svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(this.x));
  
        this.svg.append('g')
        .call(d3.axisLeft(this.y));
        
        this.draw(data);
    }

    public async loadData() {
      // read data from csv and format constiables
      let data = await d3.csv('https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv')
      const parseTime = d3.timeParse('%Y-%m-%d');

      return data.map((d: any) => ({
        date: parseTime(d.date),
        value: +d.value
      }));
    }

    public draw(data: any) {
      if (! this.svg) {
        return;
      }
      // add the Line
      const valueLine = d3.line()
        .x((d: any) => this.x?.(d?.date) || 0)
        .y((d: any) => this.y?.(d?.value) || 0);
    
      this.svg.append('path')
        .data([data])
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', valueLine);
    }
  }