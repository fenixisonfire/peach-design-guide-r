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

                Here, there are many examples of data visualisation charts built using the library React D3. Each example is accompanied with the corresponding Javascript and HTML code, and a description of how each chart type should be used to display data.

            </p>
        </div>
    );
}
