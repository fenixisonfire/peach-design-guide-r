import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import Image from '../../../src/Image';

export default function DataVisTooltip() {
    return (
        <div className="bs-docs-section">
            <h2 className="page-header">
                <Anchor id="datavistooltip">Tooltip Graphs</Anchor>
            </h2>
            <p>
                This section outlines the guidelines for <b>tooltip</b> graphs in the Peach Project.

                <br></br>
                <br></br>

               In this section, there are examples of interactive tooltip graphs built using D3. By hovering the cursor over a point in the graph, more detailed information comes into view. Again, there is a description of how each chart type should be used, as well as the accompanying code.

            </p>
        </div>
    );
}
