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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet rutrum erat, sit amet venenatis orci sodales at. Aliquam eu erat eu diam pellentesque sollicitudin id eget est. Mauris nec pellentesque risus. Integer at interdum massa. Ut ac iaculis ante, sit amet finibus massa. Mauris a mi a metus volutpat molestie. In mauris odio, ullamcorper a vulputate nec, dapibus finibus nisl. Duis aliquet, velit eget laoreet tristique, enim ligula gravida ipsum, vel accumsan lectus purus id enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam at lectus at tellus eleifend efficitur ut vestibulum nunc. Nulla facilisis accumsan dapibus. Pellentesque efficitur vestibulum lectus, vel facilisis elit scelerisque sed. Curabitur lacus purus, pellentesque nec dui nec, feugiat scelerisque neque. Fusce sed augue non lectus varius semper vel eget ex.

              Mauris vel condimentum magna. In eu tortor nibh. Morbi auctor augue a nisl dictum, a maximus nisl bibendum. Vestibulum vitae lorem et dui mattis sollicitudin. Quisque ullamcorper mauris arcu, in interdum nunc aliquet id. Fusce dapibus libero eu placerat faucibus. Nulla tristique nisi in elementum faucibus. Phasellus ornare orci id elementum efficitur. Nunc luctus nisi at libero ornare, eu semper quam ultricies. Etiam eget magna dui. Donec interdum imperdiet lorem. Vivamus ultrices velit in justo rhoncus ultricies. Nulla sagittis pharetra efficitur. Etiam vitae pretium nisl. Vivamus eros nulla, imperdiet mattis sem sit amet, pretium volutpat ex.
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

        </div>
    );
}
