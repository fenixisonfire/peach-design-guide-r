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
                A pie chart represents the distribution or proportion of each data item over a total value (represented by the overall pie). A pie chart is most effective when plotting no more than three categories of data.



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
