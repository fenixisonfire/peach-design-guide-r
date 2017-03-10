import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function DesignTypographySection() {
  return (
    <div className="bs-docs-section">
      <h1 className="page-header">
        <Anchor id="typography">Typography</Anchor>
      </h1>

      <h3><Anchor id="salesforce-sans">Salesforce Sans</Anchor></h3>
      <p>
      At the heart of good typography is a good typeface. We started from the ground up, partnering with Monotype, to design one that reflects our brand and personality, while also maintaining versatility to address diverse applications, from massive billboards to miniscule UI text.
      <br></br><br></br>
      Salesforce Sans is the result: a friendly, professional, and modern typeface with four weights. Salesforce Sans is available to partners and developers in our ecosystem to use in conjunction with the Design System.
      </p>

    </div>
  );
}
