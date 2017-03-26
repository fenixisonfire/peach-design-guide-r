import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import Image from '../../../src/Image';

var PieChart = require('react-d3-basic').PieChart;

export default function DataVisBasicPie() {

  var chartData = [
   {
     "age": "<5",
     "population": "2704659"
   },
   {
     "age": "5-13",
     "population": "4499890"
   },
   {
     "age": "14-17",
     "population": "2159981"
   },
   {
     "age": "18-24",
     "population": "3853788"
   },
   {
     "age": "25-44",
     "population": "14106543"
   },
   {
     "age": "45-64",
     "population": "8819342"
   },
   {
     "age": "≥65",
     "population": "612463"
   }
  ]

  var width = 700,
  height = 400,
  value = function(d) {
    return +d.population;
  },
  name = function(d) {
    return d.age;
  },
  chartSeries = [
    {
      "field": "<5",
      "name": "less than 5"
    },
    {
      "field": "5-13",
      "name": "5 to 13"
    },
    {
      "field": "14-17",
      "name": "14 to 17"
    },
    {
      "field": "18-24",
      "name": "18 to 24"
    },
    {
      "field": "25-44",
      "name": "25 to 44"
    },
    {
      "field": "45-64",
      "name": "45 to 64"
    }
  ];


    return (
        <div className="bs-docs-section">
            <h2 className="page-header">
                <Anchor id="datavisbasicpie">Basic Pie</Anchor>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet rutrum erat, sit amet venenatis orci sodales at. Aliquam eu erat eu diam pellentesque sollicitudin id eget est. Mauris nec pellentesque risus. Integer at interdum massa. Ut ac iaculis ante, sit amet finibus massa. Mauris a mi a metus volutpat molestie. In mauris odio, ullamcorper a vulputate nec, dapibus finibus nisl. Duis aliquet, velit eget laoreet tristique, enim ligula gravida ipsum, vel accumsan lectus purus id enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam at lectus at tellus eleifend efficitur ut vestibulum nunc. Nulla facilisis accumsan dapibus. Pellentesque efficitur vestibulum lectus, vel facilisis elit scelerisque sed. Curabitur lacus purus, pellentesque nec dui nec, feugiat scelerisque neque. Fusce sed augue non lectus varius semper vel eget ex.

              Mauris vel condimentum magna. In eu tortor nibh. Morbi auctor augue a nisl dictum, a maximus nisl bibendum. Vestibulum vitae lorem et dui mattis sollicitudin. Quisque ullamcorper mauris arcu, in interdum nunc aliquet id. Fusce dapibus libero eu placerat faucibus. Nulla tristique nisi in elementum faucibus. Phasellus ornare orci id elementum efficitur. Nunc luctus nisi at libero ornare, eu semper quam ultricies. Etiam eget magna dui. Donec interdum imperdiet lorem. Vivamus ultrices velit in justo rhoncus ultricies. Nulla sagittis pharetra efficitur. Etiam vitae pretium nisl. Vivamus eros nulla, imperdiet mattis sem sit amet, pretium volutpat ex.

            </p>

            <PieChart
              data= {chartData}
              width= {width}
              height= {height}
              chartSeries= {chartSeries}
              value = {value}
              name = {name}
            />

            <code>Javascript</code>
            <pre>
            <code style={{color: '#1a53ff'}}>{`
              var generalChartData = require('dsv?delimiter=,!../data/pie_test.csv')

              var width = 700,
                height = 400,
                value = function(d) {
                  return +d.population;
                },
                name = function(d) {
                  return d.age;
                },
                chartSeries = [
                  {
                    "field": "<5",
                    "name": "less than 5"
                  },
                  {
                    "field": "5-13",
                    "name": "5 to 13"
                  },
                  {
                    "field": "14-17",
                    "name": "14 to 17"
                  },
                  {
                    "field": "18-24",
                    "name": "18 to 24"
                  },
                  {
                    "field": "25-44",
                    "name": "25 to 44"
                  },
                  {
                    "field": "45-64",
                    "name": "45 to 64"
                  }
                ];
            `}</code>
            </pre>

            <code>HTML</code>
            <pre>
              <code style={{color: '#ff6600'}}>{`
                <PieChart
                  data= {generalChartData}
                  width= {width}
                  height= {height}
                  chartSeries= {chartSeries}
                  value = {value}
                  name = {name}
                />
              `}</code>
            </pre>

        </div>
    );
}
