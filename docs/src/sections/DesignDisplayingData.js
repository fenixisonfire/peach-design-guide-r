import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function DesignDisplayingDataSection() {
  return (
    <div className="bs-docs-section">
      <h1 className="page-header">
        <Anchor id="displaydata">Displaying Data</Anchor>
      </h1>

      <h3><Anchor id="record-lists">Record Lists</Anchor></h3>
      <p>Record lists organize information to help users locate and/or browse specific records.
      <br></br><br></br>
      You can display records as a table, tile list, or interactive card. Differentiate types of items either by separating them into different lists or by clearly labeling them within the list.
      For example, put different file types into separate lists, or if they live in the same list, label each file file type (PDF, JPG, and so on).
      </p>

    </div>
  );
}
