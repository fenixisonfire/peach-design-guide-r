import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';


/*<small> What is accessibility? </small>*/
export default function DesignAccessibilitySection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header">
        <Anchor id="accessibility">Accessibility</Anchor>
      </h2>
        <p>
            <b>
                The Lightning Design System provides accessible markup which will serve as a foundation for your application development. In order to make sure you build accessible components, however, you will need to follow the accessibility guidance for our interactive components. This includes keyboard behavior as well as the management of ARIA roles and properties.
            </b>
        </p>

      <h3><Anchor id="web-accessibility">What is accessibility?</Anchor></h3>
      <p>
          Web accessibility ensures that people with disabilities can perceive, understand, navigate, interact with, and contribute to the applications you create. This means that pages are Perceivable, Operable, Understandable and Robust. This includes providing keyboard interaction alternatives for all mouse-based actions, properly identifying all form fields and buttons, providing text based alternatives for all images, videos, icons and SVGs, as well as building components that properly convey their identity, operation model, and state to assistive technologies.
          <br></br><br></br>
      The Design System enables accessible development by providing a set of semantically correct components, each with appropriate <a href="https://www.w3.org/TR/wai-aria/">ARIA</a> markup so they can be identified correctly to users of assistive technologies.
      </p>

        <br></br>
        <h3><Anchor id="web-accessibility">Standards Compliant Markup</Anchor></h3>
        <p>
            The semantic markup and use of ARIA roles in our components are based on W3C standards and industry best practices. This markup is the perfect starting point for building accessible components.
        </p>

        <br></br>
        <h3><Anchor id="web-accessibility">Keyboard Navigation</Anchor></h3>
        <p>
            While we do not provide the JavaScript that is necessary to make our components interactive, we offer advice on how to use scripting languages to create keyboard-accessible components.
        </p>

        <br></br>
        <h3><Anchor id="web-accessibility">Appropriate use of color</Anchor></h3>
        <p>
            Our components follow the two main rules of accessibility as it relates to color:
            <br></br>
            <ul>
                <li>We never use color as the only means of providing information or requesting an action.</li>
                <li>The combinations of text and their background colors do not fall below the <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">WCAG recommended threshold</a> ratio of 4.5:1 for standard or small text and 3:1 for larger text.</li>
            </ul>
        </p>

        <br></br>
        <h3><Anchor id="web-accessibility">Accessible Forms</Anchor></h3>
        <p>
            Our forms offer proper use of <b>&lt;fieldset&gt;</b> and <b>&lt;legend&gt;</b> tags as well as appropriate labeling for input controls. Our radio button and checkbox controls provide a balanced solution that offers accessibility as well as design flexibility.
        </p>

        <br></br>
        <h3><Anchor id="web-accessibility">Images and icons</Anchor></h3>
        <p>
            We provide a means of offering text-based alternatives for all images, icons and SVGs.
        </p>

        <br></br>
        <h3><Anchor id="web-accessibility">Component Identity</Anchor></h3>
        <p>
            Our interactive components are created in accordance with the latest <a href="http://w3c.github.io/aria/practices/aria-practices.html">ARIA Authoring Practices</a>, with attributes that are understandable by screen reader users on key page elements. It is important to note that as a component is interacted with, the ARIA attributes may need updating to reflect the new state. Hence, we provided detailed guidance on how and when to do this.
        </p>

        <br></br>
        <h3><Anchor id="web-accessibility">Validating your applications</Anchor></h3>
        <p>
            The Design System is only the foundation for accessible application development. We recommend that you review the accessibility of your applications before release and ensure that it meets the <a href="https://www.w3.org/TR/WCAG20/#conformance">WCAG Standard at the AA Level</a>.
        </p>

        <br></br>
        <h3><Anchor id="web-accessibility">Resources</Anchor></h3>
        <p>
            <ul>
                <li><a href="https://www.w3.org/WAI/">W3C Web Accessibility Initiative</a></li>
                <li><a href="http://w3c.github.io/aria/practices/aria-practices.html">WAI-ARIA Authoring Practices</a></li>
                <li><a href="https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b#.o8n02j9rr">7 Things Every Designer Needs to Know about Accessibility</a></li>
                <li><a href="https://medium.com/salesforce-ux/accessible-interface-design-d80e95cbb2c1#.i5tl6ffv3">Accessible Interface Design: on designing with accessible color contrast ratios</a></li>
                <li><a href="http://webaim.org/">WebAIM</a></li>
                <li><a href="http://a11yproject.com/">The A11Y Project</a></li>
            </ul>
        </p>
    </div>
  );
}
