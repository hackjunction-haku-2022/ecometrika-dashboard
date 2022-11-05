import * as d3 from 'd3';
import { NumberValue } from 'd3';

const MARGIN = {
  top: 20,
  right: 20,
  bottom: 50,
  left: 70
}

const MEASUREMENTS = {
  width: 1100,
  height: 500
}

export type PulseItem = {
  date: string,
  value: number
};


export class PulseChart {
    isInited: boolean;
    rootSelector: string;
    svg?: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
    x?: d3.ScaleTime<number, number, never>
    y?: d3.ScaleLinear<number, number, never>;
    data: PulseItem[];
   
    constructor(selector: string, data: PulseItem[]) {
      this.data = data;
      this.rootSelector = selector;
      this.isInited = false;
    }
   
    public async create() {
      if (this.isInited) {
        return;
      }
  
      this.isInited = true;

      const width = MEASUREMENTS.width - MARGIN.left - MARGIN.right;
      const height = MEASUREMENTS.height - MARGIN.top - MARGIN.bottom;
  
      // append the svg object to the body of the page
      this.svg = d3.select(this.rootSelector).append('svg')
          .attr('width', MEASUREMENTS.width)
          .attr('height', MEASUREMENTS.height)
          .append('g')
          .attr('transform', `translate(${MARGIN.left}, ${MARGIN.top})`);
  
      // add X axis and Y axis
      this.x = d3.scaleTime().range([0, width]);
      this.y = d3.scaleLinear().range([height, 0]);
  
      this.x.domain(<Iterable<NumberValue | Date>>d3.extent<PulseItem>(this.data, (d) => d?.date));
      this.y.domain(<Iterable<NumberValue>>[
        d3.max<PulseItem, number>(this.data, (d) => d.value - 10),
        d3.max<PulseItem, number>(this.data, (d) => d.value + 5)
      ]);
    
      this.svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(this.x));
  
        this.svg.append('g')
        .call(d3.axisLeft(this.y));
        
        this.draw(this.data);
    }

    public draw(data: PulseItem[]) {
      if (! this.svg) {
        return;
      }
      // add the Line
      const valueLine = d3.line<any>()
        .x((d: PulseItem) => this.x?.(d?.date as unknown as Date) || 0)
        .y((d: PulseItem) => this.y?.(d?.value as unknown as Date) || 0);
    
      this.svg.append('path')
        .data([data])
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', 'red')
        .attr('stroke-width', 2.5)
        .attr('d', valueLine);

      this.svg.append("text")
        .attr("y", 80)
        .attr("x", MEASUREMENTS.height / 2)
        .attr('text-anchor', 'middle')
        .attr('stroke', 'red')
        .attr("class", "myLabel")
        .text("stackoverflow.com");
    }
  }