import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import Image from '../../../src/Image';

export default function DesignTypographySection() {
  return (
    <div className="bs-docs-section">
      <h1 className="page-header">
        <Anchor id="typography">Typography</Anchor>
      </h1>
        <p>
            <b>
                Text is the primary way that users digest content and accomplish work, so it’s important to use good typographic principles to establish a clear visual hierarchy and to maximize legibility.
            </b>
        </p>

        <h3><Anchor id="salesforce-sans">Salesforce Sans</Anchor></h3>
        <p>
            At the heart of good typography is a good typeface. We started from the ground up, partnering with Monotype, to design one that reflects our brand and personality, while also maintaining versatility to address diverse applications, from massive billboards to miniscule UI text.
        </p>
        <p>
            Salesforce Sans is the result: a friendly, professional, and modern typeface with four weights. Salesforce Sans is available to partners and developers in our ecosystem to use in conjunction with the Design System.
        </p>

        <br></br>
        <h5>SALESFORCE SANS</h5>
        <p>
            <big><big>
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                <br></br>
                a b c d e f g h i j k l m n o p q r s t u v w x y z
                <br></br>
                0 1 2 3 4 5 6 7 8 9
            </big></big>
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-font-scale.svg" rounded/>
        </p>

        <br></br>
        <h3><Anchor id="salesforce-sans">Type Sizes</Anchor></h3>
        <p>
            We use different type sizes and weights to convey a visual.
        </p>

        <br></br>
        <h2>The quick brown fox jumps over the lazy dog.</h2>
        <h5>HEADING LARGE</h5>
        <h3>The quick brown fox jumps over the lazy dog.</h3>
        <h5>HEADING MEDIUM</h5>
        <h4>The quick brown fox jumps over the lazy dog.</h4>
        <h5>HEADING SMALL</h5>
        <h5>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</h5>
        <h5>HEADING LABEL</h5>
        <p>The quick brown fox jumps over the lazy dog.</p>
        <h5>BODY DEFAULT</h5>
        <small>The quick brown fox jumps over the lazy dog.</small>
        <h5>BODY SMALL</h5>
        <br></br>
        <p>
            For more information about these styles, check out our CSS Text Utilities.
        </p>
        <br></br>

        <h3><Anchor id="salesforce-sans">Line Height</Anchor></h3>
        <p>
            In the context of an enterprise application, the need for longform text is quite rare. More often, application design involves many small bits of text that all represent the user’s data. This text is spaced intentionally to maintain distinction between different types and rows of data.
        </p>
        <p>
            As a result, we take a pragmatic approach to spacing and line height by resetting all margins and paddings to 0, and allowing the line-height property for all text to inherit a globally defined ratio of 1.5 of the text size. This allows designers and developers to easily opt-in to specific text spacing by leveraging our CSS Text and Spacing Utilities.
        </p>
        <p>
            We do provide a longform text CSS utility, which will result in our recommended vertical text rhythm for optimizing a balance between readability and space efficiency.
        </p>
    </div>
  );
}
