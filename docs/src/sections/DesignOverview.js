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
            <p>
                <b>
                    The Lightning Design System reflects the patterns and components that underpin the Salesforce product. These patterns and components provide a unified language and consistent look and feel when designing apps and products within the Salesforce ecosystem.
                </b>
            </p>

            <h3><Anchor id="overview-principles">Design Principles</Anchor></h3>
            <p>
                We constantly keep these core principles in mind when making design decisions at Salesforce, and we encourage you to adopt them as well.
            </p>

            <br></br>
            <p>
                <Image src="./../../assets/img-clarity.svg" rounded/>
                <h5>CLARITY</h5>
                <p>
                    Eliminate ambiguity. Enable people to see, understand, and act with confidence.
                </p>
            </p>

            <hr></hr>
            <p>
                <Image src="./../../assets/img-efficiency.svg" rounded/>
                <h5>EFFICIENCY</h5>
                <p>
                    Streamline and optimize workflows. Intelligently anticipate needs to help people work better, smarter, and faster.
                </p>
            </p>

            <hr></hr>
            <p>
                <Image src="./../../assets/img-consistency.svg" rounded/>
                <h5>CONSISTENCY</h5>
                <p>
                    Create familiarity and strengthen intuition by applying the same solution to the same problem.
                </p>
            </p>

            <hr></hr>
            <p>
                <Image src="./../../assets/img-beauty.svg" rounded/>
                <h5>BEAUTY</h5>
                <p>
                    Demonstrate respect for people’s time and attention through thoughtful and elegant craftsmanship.
                </p>
            </p>
        </div>
    );
}
