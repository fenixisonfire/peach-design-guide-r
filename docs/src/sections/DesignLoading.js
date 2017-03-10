import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function DesignLoadingSection() {
  return (
    <div className="bs-docs-section">
      <h1 className="page-header">
        <Anchor id="loading">Loading</Anchor>
      </h1>

      <h3><Anchor id="loading-spinners">Spinners</Anchor></h3>
      <p>Show spinners when retrieving data or performing slow computations.</p>

    </div>
  );
}
