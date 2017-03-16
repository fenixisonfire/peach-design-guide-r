import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function DesignMarkupAndStyleSection() {
  return (
    <div className="bs-docs-section">
      <h1 className="page-header">
        <Anchor id="markup-style">Markup and Style</Anchor>
      </h1>
        <p>
            <b>
                The Salesforce Lightning Design System (SLDS) component library is actively developed to enable Salesforce developers to create a uniform look and feel across all Salesforce-related applications while adhering to CSS best practices and conventions.
            </b>
        </p>
        <p>
            In order to accomplish this goal, we’ve chosen to use very specific naming techniques. These allow us to keep our code base flat, with low specificity, and keeps us from fighting specificity wars that start with frustration and end with <b>!important</b>. Though we base our naming on the BEM method, we have a few additions of our own outlined below.
        </p>

        <h3><Anchor id="bem-naming">BEM Naming</Anchor></h3>
        <p>
            <a href="https://en.bem.info/">BEM</a> is a well-known method of naming components — block, element, modifier. If you’re comfortable with BEM, move down to the “Where we diverge from BEM” section. For those unfamiliar or who need a quick refresh, let’s briefly look at how BEM works. As an example, we’ll build a house component.
        </p>

        <h4>Block</h4>
        <p>
            A block represents the main component name. If you were building a house component, the class name would be <b>.house</b>. All of the properties you want included for all houses would be included in the base <b>.house</b> class.
        </p>
        <h4>Element</h4>
        <p>
            An element represents a part of a component and is separated by two underscores. The door of the house would be represented by the class <b>.house__door</b>. A window would be <b>.house__window</b>.
        </p>
        <p>
            Be careful to look for smaller component possibilities within a larger component. Especially if it’s a pattern that might be repeated in an unrelated component. Avoid using a class like <b>.house__stair__step</b>. Instead, either use <b>.house__stair-step</b> (a single dash does not indicate anything in BEM and can simply be used for compound naming). Or if the stair portion of the component might be used inside another component, make the <b>.stair</b> a smaller component within the larger component and use <b>.stair__step</b> as an element of it.
        </p>
        <h4>Modifier</h4>
        <p>A modifier is a component or element variation and is separated by two dashes. The variation can apply to the overall component or it can be applied to an element within the component.</p>
        <p>
            Since the properties that should apply to every house are placed on the main <b>.house</b> class, all houses receive the <b>.house</b> class as the base. If there is a variation of a house — perhaps it is gray — the <b>.house--gray</b> class would be added to the component in addition to the <b>.house</b> class.
        </p>
        <p>
            If the house has a pink door, a variation can be placed on the door element itself — <b>.house__door--pink</b>.
        </p>

        <h3><Anchor id="bem-naming">Where we diverge from BEM</Anchor></h3>
        <p>
            In some cases, for reasons of brevity and comprehension, we’ve added to, or deviated from, typical BEM naming conventions. These changes are outlined below.
        </p>
        <h4>Utility Classes</h4>
        <p>
            Though BEM syntax is traditionally based off an initial block, in some cases (in our utilities) we have opted to remove that requirement. For example, margin and padding are indicated with the formula <b>.slds-m-top--medium</b> (margin, top, medium). So while there is no base <b>.slds-m</b> or <b>.slds-m-top</b> class as a base class, we feel it’s an easily understandable way to indicate that there is a size variation in these utility classes.
        </p>
        <p>
            Our spacing utilities similarly use the syntax <b>.slds-size--1-of-2</b> without a base <b>.slds-size class</b>. Text sizing uses class names like <b>.slds-text-body--small</b> and <b>.slds-text-heading--large</b> without a base <b>.slds-text-body</b> or <b>.slds-text-heading</b> class.
        </p>

        <h4>Component Containers</h4>
        <p>
            Though generic <b>.slds-container-*</b> classes exist, sometimes a component has an optional container — but it is specific to that component alone. Those containers should be indicated by a class using a single underscore. For example, when a <b>.pill</b> has an optional container applied, that class is written as <b>.slds-pill_container</b>.
        </p>
        <h4>Namespacing</h4>
        <p>
            In order to make this framework easy to use with other frameworks, we’ve added the <b>.slds-</b> namespace. Rather than using <b>.button</b>, our framework uses <b>.slds-button</b>. This allows you to integrate the Lightning Design System (SLDS) with your own bespoke CSS or to integrate it with an application that uses the modified Salesforce Bootstrap framework previously used as you wean your application away from it.
        </p>
        <h4>Scoping</h4>
        <p>
            In some cases, within the Salesforce ecosystem, SLDS CSS is not yet available. In those cases, for example, when building within Visualforce, Lightning Applications (my.app), or deploying components via Lightning Out, you should scope components built with SLDS. In this case, we have <a href="https://tools.lightningdesignsystem.com/css-customizer">provided a tool for you to create your custom-scoped CSS</a>.
        </p>
        <p>
            The components built with your custom-scoped SLDS will need your custom scoped class at the highest level of the DOM where the components are included. In some cases this will be a wrapper at the component level, in other cases you may wrap several components. Do not place your custom class on the body element of the application if you are including non-SLDS components within that area as well. This would cause the non-SLDS components to be scoped and could override expected styles with unwanted effects.
        </p>

        <h3><Anchor id="bem-naming">Where we diverge from BEM</Anchor></h3>
        <p>
            When a component has a variety of states, we add a class to indicate the state the component, or certain portions of the component, are in. Some examples are: <b>.slds-is-selected</b>, <b>.slds-is-active</b>, <b>.slds-is-expanded</b>, <b>.slds-is-nested</b>, <b>.slds-is-open</b>, <b>.slds-has-focus</b>, <b>.slds-has-error</b>, etc.
        </p>
        <p>
            Please address any questions about our code style or contributing to our project to our <a href="https://github.com/salesforce-ux/design-system/issues">GitHub issues</a>.
        </p>
    </div>
  );
}
