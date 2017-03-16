import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function DesignColorSection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header">
        <Anchor id="color">Color</Anchor>
      </h2>

      <h3><Anchor id="visual-messaging">Usage</Anchor></h3>

        <br></br>
        <h4>Visual Messaging</h4>
      <p>
          Certain colors have inherent meaning for a large majority of users, although we recognize that cultural differences are plentiful. For example, we use red to communicate an error.
          <br></br><br></br>
          MEANT TO HAVE PIC
      </p>

        <br></br>
        <h4>Visual Differentiation</h4>
        <p>
            Salesforce uses many secondary colors in conjunction with iconography to visually differentiate between similar types of content, such as records of different object types. However, it’s important to not always rely on color to provide visual differentiation. If too many use cases employ color in this manner, the colors lose their meaning.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

        <br></br>
        <h4>Visual Hierarchy</h4>
        <p>
            Color is used sparingly to draw attention to important elements and those that we want the user to take action on. Because most of the application is gray, pops of color catch a user’s eye.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

        <br></br>
        <h4>Accessibility</h4>
        <p>
            It’s important that our products meet all web accessibility standards, including the minimum contrast ratios that the WCAG 2.0 specifies for text and background color combinations. This adherence helps users who are colorblind or have low vision to better interact with Salesforce, but it also improves usability and readability for all users.
            <br></br><br></br>
            You can find some of the most common text and background color combinations in the CSS Framework Themes section. They are all vetted to pass the minimum contrast ratios, including both normal text and link text styles.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

    </div>
  );
}
