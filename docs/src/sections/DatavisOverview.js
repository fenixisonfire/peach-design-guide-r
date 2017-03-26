import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import Image from '../../../src/Image';

export default function DataVisOverview() {
    return (
        <div className="bs-docs-section">
            <h2 className="page-header">
                <Anchor id="datavisoverview">Overview</Anchor>
            </h2>
            <p>
                This section outlines the guidelines for data visualisation in the Peach Project.

                <br></br>
                <br></br>

                Here, there are many examples of data visualisation charts built using the library React D3. The graphs are split into two sections, basic and tooltip.
                Basic graphs are a collection of simple data visualisation graphs for their respetively appropriate data types.
                While tooltip graphs allow detailed numeric view of data when one hovers over particular points on the graph.

                <br></br>
                <br></br>

                Each example is accompanied with the corresponding Javascript and HTML code, and a description of how each chart type should be used to display data.
                Each type of graph has many attributes which are outlined in the code example sections.

                <br></br>
                <br></br>

                The data can be imported from created variables.
                The general design and aesthetics of graphs should conform to those of which shown here.

            </p>
        </div>
    );
}
