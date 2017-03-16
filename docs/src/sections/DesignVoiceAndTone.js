import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function DesignVoiceAndToneSection() {
  return (
    <div className="bs-docs-section">
      <h1 className="page-header">
        <Anchor id="voice-tone">Voice and Tone</Anchor>
      </h1>

        <p>
            <b>
                Your custom applications shouldn’t just look and act like the Salesforce app – they should sound like it too.
            </b>
        </p>

        <p>
            At Salesforce, we have guidelines we follow when we create written content. We apply the guidelines to text that appears in the app, including on-screen instructions and error messages. We use the same guidelines for other types of information, such as online help, developer doc, Walkthroughs, and Trailhead modules.
        </p>
        <p>
            Use the Voice & Tone Guidelines to get a quick introduction to our unique voice and tone, and to understand how to apply it to your work. The doc provides some quick writing guidelines, and includes great examples of the voice and tone from the app and the doc.
        </p>
        <p>
            MEANT TO HAVE LINK TO FILE
        </p>
        <p>
            For more in-depth information about Salesforce style, including details around usage, terminology, and punctuation, use the <a href="https://developer.salesforce.com/docs/atlas.en-us.salesforce_pubs_style_guide.meta/salesforce_pubs_style_guide/">Salesforce Style Guide for Documentation and User Interface Text</a>. This is especially helpful if you’re writing customized help or training content.
        </p>
    </div>
  );
}
