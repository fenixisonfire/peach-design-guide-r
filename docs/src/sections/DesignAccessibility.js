import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function DesignAccessibilitySection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header">
        <Anchor id="accessibility">Accessibility</Anchor> <small> What is accessibility? </small>
      </h2>

      <h3><Anchor id="web-accessibility">Web Accessibility Introduction</Anchor></h3>
      <p>
      Web accessibility ensures that people with disabilities can perceive, understand, navigate, interact with, and contribute to the applications you create. This means that pages are Perceivable, Operable, Understandable and Robust. This includes providing keyboard interaction alternatives for all mouse-based actions, properly identifying all form fields and buttons, providing text based alternatives for all images, videos, icons and SVGs, as well as building components that properly convey their identity, operation model, and state to assistive technologies.
      <br></br><br></br>
      The Design System enables accessible development by providing a set of semantically correct components, each with appropriate ARIA markup so they can be identified correctly to users of assistive technologies.
      </p>





    </div>
  );
}
