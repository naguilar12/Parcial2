import React, { Component } from 'react';
import * as d3 from "d3";

const width = 1000;
const height = 600;

const margin = ({ top: 20, right: 30, bottom: 30, left: 150 });

class Schedule extends Component {

    componentDidMount() {

        var svg = d3.select(this.svg);

        svg.append("g")
            .attr("class", "x-axis")

        svg.append("g")
            .attr("class", "y-axis")
    }

    componentWillUpdate(newProps) {
        try {
            console.log(newProps);
            let selectedRoute = newProps.data.route[0];
            let buses = []
            for (let bus of selectedRoute.tr) {
                let route = bus.stop.filter((d) => d.content !== "--");
                route.forEach((d) => d.date = new Date(+d.epochTime));
                buses.push(route);
            }

            const svg = d3.select(this.svg);

            const minDate = d3.min(buses[0], d => d.date);

            const maxDate = new Date(minDate.getTime() + newProps.hours * 60 * 60 * 1000); // minDate + 24 hours
            const x = d3.scaleTime()
                .domain([minDate, maxDate])
                .range([margin.left, width - margin.right]);
            const y = d3.scaleBand()
                .domain(d3.range(buses[1].length))
                .rangeRound([height - margin.bottom, margin.top]);

            const xAxis = g => g
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x))
            // .call(g => g.select(".domain").remove());
            const yAxis = g => g
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(y)
                    .tickFormat((d) => selectedRoute.header.stop[d].content));

            const line = d3.line()
                .x(d => x(d.date))
                .y((d, i) => y(i) + y.bandwidth() / 2);

            svg.select(".x-axis")
                .transition().duration(1000)
                .call(xAxis);

            svg.select(".y-axis")
                .transition().duration(1000)
                .call(yAxis);

            var binder = svg.selectAll(".routes")
                .data(buses);

            binder.exit()
                .remove();

            binder.enter()
                .append("path")
                .merge(binder)
                .style("opacity", 0)
                .attr("class", "routes")
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2)
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("d", line)
                .transition().duration(1000)
                .style("opacity", 1);
        } catch (error) {
            alert("No info available for this route");
        }

    }

    render() {
        return (
            <div>
                <svg
                    width={width + ""}
                    height={height + ""}
                    ref={(svg) => { this.svg = svg }}
                >
                </svg>
            </div>
        );
    }
}

export default Schedule;