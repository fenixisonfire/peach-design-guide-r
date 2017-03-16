import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import Image from '../../../src/Image';

export default function DesignOverviewSection() {
    return (
        <div className="bs-docs-section">
            <h2 className="page-header">
                <Anchor id="overview">Overview</Anchor>
            </h2>

            <h3><Anchor id="overview-principles">Design Principles</Anchor></h3>
            <p>
                We constantly keep these core principles in mind when making design decisions at Salesforce, and we encourage you to adopt them as well.
                <br></br><br></br>
                MEANT TO HAVE PIC :
                <Image src="files/img-clarity.svg" className="svg" rounded />
                <br></br><br></br>
                MEANT TO HAVE PIC 3
            </p>
        </div>
    );
}
