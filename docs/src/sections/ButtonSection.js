import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function ButtonSection() {
  return (
    <div className="bs-docs-section">
        <br></br>
            <p><strong>N.B. This page is incomplete.</strong> As more PEACH components are developed, they will be added to the site.</p><br></br>
      <h1 className="page-header">
        <Anchor id="buttons">Buttons</Anchor> <small>Button</small>
      </h1>

      <h3><Anchor id="buttons-options">Options</Anchor></h3>
        <p>Use any of the available button style types to quickly create a styled button. Just modify the <code>bsStyle</code> prop.<br></br>The following buttons display what colour should be used for what purpose, according to PEACH design guidelines</p>
      <ReactPlayground codeText={Samples.ButtonTypes} />
      <div className="bs-callout bs-callout-warning">
        <h4>Button spacing</h4>
        <p>React does not automatically create a newline between elements. Buttons on the same line are usually shown flush against one another. To preserve the spacing between multiple inline buttons, wrap your
        button group in <code>{"<ButtonToolbar />"}</code>.</p>
      </div>

      <h3><Anchor id="buttons-sizes">Sizes</Anchor></h3>
      <p>Change size of buttons, by adding <code>bsSize="large"</code>, <code>bsSize="small"</code>, or <code>bsSize="xsmall"</code> for additional sizes.</p>
      <ReactPlayground codeText={Samples.ButtonSizes} />

      <p>Block level buttons span the full width of a parent— create them by adding the <code>block</code> prop.</p>
      <ReactPlayground codeText={Samples.ButtonBlock} />

      <h3><Anchor id="buttons-active">Active state</Anchor></h3>
      <p>To set a buttons active state simply set the components <code>active</code> prop.</p>
      <ReactPlayground codeText={Samples.ButtonActive} />

      <h3><Anchor id="buttons-tags">Button tags</Anchor></h3>
      <p>The DOM element tag is choosen automatically for you based on the props you supply. For example, passing
        a <code>href</code> will result in the button using a <code>{"<a />"}</code> element otherwise
        a <code>{"<button />"}</code> element will be used.
      </p>
      <ReactPlayground codeText={Samples.ButtonTagTypes} />

      <h3><Anchor id="buttons-disabled">Disabled state</Anchor></h3>
      <p>Upon disabling a button, show this by fading them back 50%. Add the <code>disabled</code> attribute to buttons.</p>
      <ReactPlayground codeText={Samples.ButtonDisabled} />

      <div className="bs-callout bs-callout-warning">
        <h4>Cross-Browser compatibility</h4>
        <p>
           <code>{"<Button />"}</code> tags will render an <code>{'<a>'}</code> tag in certain situations.
          As anchor tags can't be <code>disabled</code>, the behavior is emulated as best it can be.
          Specifically, <code>pointer-events: none;</code> style is added to the anchor to prevent focusing, which
          is only supported in newer browser versions.
        </p>
      </div>

      <h3><Anchor id="buttons-loading">Button loading state</Anchor></h3>
      <p>When activating an asynchronous action from a button it is a good UX pattern to give the user
        feedback as to the loading state, this can easily be done by updating
        your <code>{"<Button />"}</code>&#8217;s props from a state change like below.</p>
      <ReactPlayground codeText={Samples.ButtonLoading} />

      <h3><Anchor id="buttons-props">Props</Anchor></h3>
      <PropTable component="Button"/>
    </div>
  );
}
