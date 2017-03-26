import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import Image from '../../../src/Image';

var BarStackChart = require('react-d3-basic').BarStackChart;
var d3 = require("d3");


export default function DataVisBasicBarStack() {

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
    yTickFormat = d3.format(".2s");

    return (
        <div className="bs-docs-section">
            <h2 className="page-header">
                <Anchor id="datavisbasicbarstack">Basic Bar Stack</Anchor>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet rutrum erat, sit amet venenatis orci sodales at. Aliquam eu erat eu diam pellentesque sollicitudin id eget est. Mauris nec pellentesque risus. Integer at interdum massa. Ut ac iaculis ante, sit amet finibus massa. Mauris a mi a metus volutpat molestie. In mauris odio, ullamcorper a vulputate nec, dapibus finibus nisl. Duis aliquet, velit eget laoreet tristique, enim ligula gravida ipsum, vel accumsan lectus purus id enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam at lectus at tellus eleifend efficitur ut vestibulum nunc. Nulla facilisis accumsan dapibus. Pellentesque efficitur vestibulum lectus, vel facilisis elit scelerisque sed. Curabitur lacus purus, pellentesque nec dui nec, feugiat scelerisque neque. Fusce sed augue non lectus varius semper vel eget ex.

              Mauris vel condimentum magna. In eu tortor nibh. Morbi auctor augue a nisl dictum, a maximus nisl bibendum. Vestibulum vitae lorem et dui mattis sollicitudin. Quisque ullamcorper mauris arcu, in interdum nunc aliquet id. Fusce dapibus libero eu placerat faucibus. Nulla tristique nisi in elementum faucibus. Phasellus ornare orci id elementum efficitur. Nunc luctus nisi at libero ornare, eu semper quam ultricies. Etiam eget magna dui. Donec interdum imperdiet lorem. Vivamus ultrices velit in justo rhoncus ultricies. Nulla sagittis pharetra efficitur. Etiam vitae pretium nisl. Vivamus eros nulla, imperdiet mattis sem sit amet, pretium volutpat ex.

            </p>

            <BarStackChart
              data= {chartData}
              width= {width}
              height= {height}
              chartSeries = {chartSeries}
              x= {x}
              xScale= {xScale}
              yTickFormat= {yTickFormat}
            />

        </div>
    );
}
