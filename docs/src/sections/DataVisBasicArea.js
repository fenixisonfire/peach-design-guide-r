import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import Image from '../../../src/Image';

var AreaChart = require('react-d3-basic').AreaChart;

export default function DataVisBasicArea() {

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
        color: '#ff7f0e'
      },
      {
      field: 'age',
      name: 'age',
      color: '#4d79ff'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    }

    return (
        <div className="bs-docs-section">
            <h2 className="page-header">
                <Anchor id="datavisbasicarea">Basic Area</Anchor>
            </h2>
            <p>
                Area charts are ideal for clearly illustrating the magnitude of change between two or more data points. For example, you can give your audience a visual feel for the degree of variance between the high and low price for each month.



            </p>

            <AreaChart
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

            <br></br>

            <code>Javascript</code>
            <pre>
              <code style={{color: '#1a53ff'}}>{`
                var parseDate = d3.time.format("%YM%m").parse;

                var width = 700,
                 height = 300,
                 chartSeries = [
                   {
                     field: 'incineration',
                     name: 'Incineration',
                     color: 'blue',
                     style: {
                       opacity: .2
                     }
                   }
                 ],
                 // your x accessor
                 x = function(d) {
                   return parseDate(d.month);
                 },
                 xScale = 'time',
                 yTickOrient = 'right';
              `}</code>
            </pre>

            <code>HTML</code>
            <pre>
              <code style={{color: '#ff6600'}}>{`
                <AreaChart
                  data= {chartData}
                  width= {width}
                  height= {height}
                  chartSeries= {chartSeries}
                  x= {x}
                  xScale= {xScale}
                  yTickOrient= {yTickOrient}
                />
              `}</code>
            </pre>

        </div>
    );
}
