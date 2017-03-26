import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import Image from '../../../src/Image';

var BarTooltip = require('react-d3-tooltip').BarTooltip;

export default function DataVisTooltipBar() {

  var chartData = [
  {
    "name": "Aguirre Hatfield",
    "BMI": 45.31,
    "age": 21,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Mcdonald",
    "married": false,
    "index": 0
  },
  {
    "name": "Marquita Kennedy",
    "BMI": 26.18,
    "age": 29,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Lowery",
    "married": true,
    "index": 1
  },
  {
    "name": "Sharron Medina",
    "BMI": 64.42,
    "age": 35,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Bradley",
    "married": true,
    "index": 2
  },
  {
    "name": "Freda Franks",
    "BMI": 47.17,
    "age": 20,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Mack",
    "married": false,
    "index": 3
  },
  {
    "name": "Reid Maddox",
    "BMI": 21.5,
    "age": 24,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Atkinson",
    "married": false,
    "index": 4
  },
  {
    "name": "Nikki Trevino",
    "BMI": 45.15,
    "age": 26,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Laurel",
    "married": false,
    "index": 5
  },
  {
    "name": "Abbott Barr",
    "BMI": 25.11,
    "age": 24,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Guerra",
    "married": true,
    "index": 6
  }
];

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
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    },
    xScale = 'ordinal',
    yTicks = [10];

    return (
        <div className="bs-docs-section">
            <h2 className="page-header">
                <Anchor id="datavistooltipbar">Tooltip Bar</Anchor>
            </h2>
            <p>
              Bar charts are typically used to compare several categories of data. Bar charts are ideal for visualizing the distribution or proportion of data items when there are more than three categories. For instance a bar chart could be used to compare the overall revenue distribution for a given set of products.


              <br></br><br></br>

            </p>

            <BarTooltip
              title= {title}
              data= {chartData}
              width= {width}
              height= {height}
              chartSeries = {chartSeries}
              x= {x}
              xScale= {xScale}
              yTicks= {yTicks}
            />

            <code>Javascript</code>
            <pre>
              <code style={{color: '#1a53ff'}}>{`
                // load your general data
                var chartData = require('dsv?delimiter=,!../data/garbage.csv');
                // your date format, use for parsing
                var parseDate = d3.time.format("%YM%m").parse;

                var width = 700,
                  height = 300,
                  margins = {left: 100, right: 100, top: 50, bottom: 50},
                  title = "Taiwan refuse disposal",
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
                <LineTooltip
                  title= {title}
                  data= {chartData}
                  width= {width}
                  height= {height}
                  margins= {margins}
                  chartSeries= {chartSeries}
                  x= {x}
                  xScale= {xScale}
                />
              `}</code>
            </pre>

        </div>
    );
}
