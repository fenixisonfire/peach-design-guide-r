import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import Image from '../../../src/Image';

var LineChart = require('react-d3-basic').LineChart;

export default function DataVisBasicLine() {

  var chartData = [{
    name: "Lavon Hilll I",
    BMI: 20.57,
    age: 12,
    birthday: "1994-10-26T00:00:00.000Z",
    city: "Annatown",
    married: true,
    index: 1
  },
  {
    name: "Clovis Pagac",
    BMI: 24.28,
    age: 26,
    birthday: "1995-11-10T00:00:00.000Z",
    city: "South Eldredtown",
    married: false,
    index: 3
  },
  {
    name: "Gaylord Paucek",
    BMI: 24.41,
    age: 30,
    birthday: "1975-06-12T00:00:00.000Z",
    city: "Koeppchester",
    married: true,
    index: 5
  },
  {
    name: "Ashlynn Kuhn MD",
    BMI: 23.77,
    age: 32,
    birthday: "1985-08-09T00:00:00.000Z",
    city: "West Josiemouth",
    married: false,
    index: 6
  }];

  var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#0099ff'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    }

    return (
        <div className="bs-docs-section">
            <h2 className="page-header">
                <Anchor id="datavisbasicline">Basic Line</Anchor>
            </h2>
            <p>
                The line chart is one of the most frequently used chart types, typically used to show trends over a period of time. If you need to chart changes over time, consider using a line chart.
            </p>

            <br></br>

            <LineChart
              showLegend= {true}
              showXGrid= {true}
              showYGrid= {true}
              margins= {margins}
              title={title}
              data={chartData}
              width={width}
              height={height}
              chartSeries={chartSeries}
              x={x}
            />

            <code>Javascript</code>
            <pre>
            <code style={{color: '#1a53ff'}}>{`
              var width = 500,
              height = 300,
              margins = {left: 100, right: 100, top: 50, bottom: 50},
              // chart series,
              // field: is what field your data want to be selected
              // name: the name of the field that display in legend
              // color: what color is the line
              chartSeries = [
                {
                  field: 'total',
                  name: 'Total',
                  color: '#ff7f0e'
                }
              ],
              // your x accessor
              x = function(d) {
                return parseDate(d.month);
              },
              xScale = 'time';
            `}</code>
            </pre>

            <code>HTML</code>
            <pre>
              <code style={{color: '#ff6600'}}>{`
                <LineChart
                  margins= {margins}
                  data={chartData}
                  width={width}
                  height={height}
                  chartSeries={chartSeries}
                  x={x}
                  xScale={xScale}
                />
              `}</code>
            </pre>

        </div>
    );
}
