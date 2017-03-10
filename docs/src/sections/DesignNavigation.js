import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function DesignNavigationSection() {
  return (
    <div className="bs-docs-section">
      <h1 className="page-header">
        <Anchor id="navigation">Navigation</Anchor>
      </h1>

      <h3><Anchor id="tabs">Tabs</Anchor></h3>
      <p>Use tabs to separate information into logical sections based on functionality or use case.</p>

      <p>
      Users can easily switch between tabs to perform tasks without leaving the page. Assign a default tab based on the most important use case for the page. The sections that the tabs define function independently of each other, so do not use tabs to define a linear, ordered process.
      <br></br><br></br>
      Tab names must be consistent—use the same part of speech for each tab, such as a noun or verb.
      <br></br><br></br>
      If your tabs don’t fit in the horizontal space, place the tabs that don’t fit into an overflow menu that sits in the last tab position. Selecting a tab from the overflow menu should replace the last fully visible tab in the ribbon. The tab that was replaced should go into the tab overflow menu in the topmost position.
      </p>

      <h3><Anchor id="global-tabs">Global Tabs</Anchor></h3>

    </div>
  );
}
