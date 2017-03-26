import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import Image from '../../../src/Image';

var BarGroupChart = require('react-d3-basic').BarGroupChart;
var d3 = require("d3");

export default function DataVisBasicBarGroup() {

  var chartData = [
   {
     "State": "CA",
     "Under 5 Years": 2704659,
     "5 to 13 Years": 4499890,
     "14 to 17 Years": 2159981,
     "18 to 24 Years": 3853788,
     "25 to 44 Years": 10604510,
     "45 to 64 Years": 8819342,
     "65 Years and Over": 4114496
   },
   {
     "State": "TX",
     "Under 5 Years": 2027307,
     "5 to 13 Years": 3277946,
     "14 to 17 Years": 1420518,
     "18 to 24 Years": 2454721,
     "25 to 44 Years": 7017731,
     "45 to 64 Years": 5656528,
     "65 Years and Over": 2472223
   },
   {
     "State": "NY",
     "Under 5 Years": 1208495,
     "5 to 13 Years": 2141490,
     "14 to 17 Years": 1058031,
     "18 to 24 Years": 1999120,
     "25 to 44 Years": 5355235,
     "45 to 64 Years": 5120254,
     "65 Years and Over": 2607672
   },
   {
     "State": "FL",
     "Under 5 Years": 1140516,
     "5 to 13 Years": 1938695,
     "14 to 17 Years": 925060,
     "18 to 24 Years": 1607297,
     "25 to 44 Years": 4782119,
     "45 to 64 Years": 4746856,
     "65 Years and Over": 3187797
   },
   {
     "State": "IL",
     "Under 5 Years": 894368,
     "5 to 13 Years": 1558919,
     "14 to 17 Years": 725973,
     "18 to 24 Years": 1311479,
     "25 to 44 Years": 3596343,
     "45 to 64 Years": 3239173,
     "65 Years and Over": 1575308
   },
   {
     "State": "PA",
     "Under 5 Years": 737462,
     "5 to 13 Years": 1345341,
     "14 to 17 Years": 679201,
     "18 to 24 Years": 1203944,
     "25 to 44 Years": 3157759,
     "45 to 64 Years": 3414001,
     "65 Years and Over": 1910571
   }
  ]

var width = 700,
    height = 400,
    chartSeries = [
      {
        field: 'Under 5 Years',
        name: 'Under 5 Years'
      },
      {
        field: '5 to 13 Years',
        name: '5 to 13 Years'
      },
      {
        field: '14 to 17 Years',
        name: '14 to 17 Years'
      },
      {
        field: '18 to 24 Years',
        name: '18 to 24 Years'
      },
      {
        field: '25 to 44 Years',
        name: '25 to 44 Years'
      },
      {
        field: '45 to 64 Years',
        name: '45 to 64 Years'
      },
      {
        field: '65 Years and Over',
        name: '65 Years and Over'
      },

    ],
    x = function(d) {
      return d.State;
    },
    xScale = 'ordinal',
    xLabel = "Age",
    yLabel = "Population",
    yLabelPosition = "right",
    yTickFormat = d3.format(".2s");

    return (
        <div className="bs-docs-section">
            <h2 className="page-header">
                <Anchor id="datavisbasicbargroup">Basic Bar Group</Anchor>
            </h2>
            <p>
                A bar group chart can be used if you need to compare multiple categories of data within individual sub-items as well as between sub-items. For instance, you can use a clustered column chart to compare revenue for each year within each region, as well as between regions.



            </p>

            <BarGroupChart
              data= {chartData}
              width= {width}
              height= {height}
              chartSeries = {chartSeries}
              x= {x}
              xScale= {xScale}
              xLabel = {xLabel}
              yTickFormat= {yTickFormat}
              yLabelPosition= {yLabelPosition}
              yLabel = {yLabel}
            />

            <br></br>

            <code>Javascript</code>
            <pre>
            <code style={{color: '#1a53ff'}}>{`
              var generalChartData = require('dsv?delimiter=,!../data/age.csv')

              var width = 700,
                height = 400,
                chartSeries = [
                  {
                    field: 'Under 5 Years',
                    name: 'Under 5 Years'
                  },
                  {
                    field: '5 to 13 Years',
                    name: '5 to 13 Years'
                  },
                  {
                    field: '14 to 17 Years',
                    name: '14 to 17 Years'
                  },
                  {
                    field: '18 to 24 Years',
                    name: '18 to 24 Years'
                  },
                  {
                    field: '25 to 44 Years',
                    name: '25 to 44 Years'
                  },
                  {
                    field: '45 to 64 Years',
                    name: '45 to 64 Years'
                  },
                  {
                    field: '65 Years and Over',
                    name: '65 Years and Over'
                  },

                ],
                x = function(d) {
                  return d.State;
                },
                xScale = 'ordinal',
                xLabel = "Age",
                yLabel = "Population",
                yLabelPosition = "right",
                yTickFormat = d3.format(".2s");
            `}</code>
            </pre>

            <code>HTML</code>
            <pre>
              <code style={{color: '#ff6600'}}>{`
                <BarGroupChart
                  data= {generalChartData}
                  width= {width}
                  height= {height}
                  chartSeries = {chartSeries}
                  x= {x}
                  xScale= {xScale}
                  xLabel = {xLabel}
                  yTickFormat= {yTickFormat}
                  yLabelPosition= {yLabelPosition}
                  yLabel = {yLabel}
                />
              `}</code>
            </pre>

        </div>
    );
}
