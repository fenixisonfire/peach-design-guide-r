import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function DesignMotionSection() {
  return (
    <div className="bs-docs-section">
      <h1 className="page-header">
        <Anchor id="motion">Motion</Anchor>
      </h1>

        <h3><Anchor id="motion-key-principles">Key Principles</Anchor></h3>
        <p>
            A “grid of time” creates consistent rhythm. Animation is defined as multiples of a base grid.
        </p>
        <p>MEANT TO HAVE PIC</p>
        <p>
            Utilizing the Z-axis to support spatial organization aids in creating a visual hierarchy we refer to as “atmosphere”.
        </p>
        <p>MEANT TO HAVE PIC</p>
        <p>
            Attributes are animated over time to create a vocabulary of effects.
        </p>
        <p>MEANT TO HAVE PIC</p>

        <h3><Anchor id="motion-key-principles">Type of Animation</Anchor></h3>
        <p>The appearance or disappearance of an object on the screen.</p>
        <p>MEANT TO HAVE PIC</p>
        <p>Drawing attention to an object that is already on the screen.</p>
        <p>MEANT TO HAVE PIC</p>
        <p>Informing the user that a context change is taking place.</p>
        <p>MEANT TO HAVE PIC</p>
        <p>Characteristics or sequences of engaging animation that create surprise and delight.</p>
        <p>MEANT TO HAVE PIC</p>

        <h3><Anchor id="motion-key-principles">Physical Mass</Anchor></h3>
        <p>Objects in the physical world have mass, thus they speed up from a standstill and slow down to a stop. When choose easing:<br></br></p>
        <p>
            <ul>
                <li>use <b>ease-in-out</b> for moving point to point</li>
                <li>use <b>ease-out</b> for entering elements</li>
                <li>use <b>ease-in</b> for exiting elements</li>
                <li>use <b>linear</b> for opacity or color changes</li>
            </ul>
        </p>

        <h3><Anchor id="motion-key-principles">Other Considerations</Anchor></h3>
        <p>The object being moved or animated should abide by these guiding principles:</p>
        <p>
            <ul>
                <li><b>subtle motion</b> is preferred</li>
                <li><b>short timing</b> makes the interface brisk</li>
                <li><b>avoid strong flashing or large motion</b> as it can lead to user discomfort</li>
            </ul>
        </p>

        <h3><Anchor id="motion-key-principles">Physical Mass</Anchor></h3>
        <p>Elevation suggests a conceptual hierarchy that makes use of box shadows to indicate visual hierarchy. The actual Z-index is up to the developer to maintain the correct shadows.</p>
        <p>Atmosphere is the virtual space in front and behind the screen. The plane of the screen has an X,Y coordinate system with <b>0,0</b> in the top left. However, the Z elevation is the imaginary normal pointed at the user, -Z descent is beyond the plane of the screen.</p>
        <p>Note: the Z axis is not the same as the CSS Z-index (which is a DOM element stacking order). The Z-indexes should be set as to maintain the sense of Z being towards the user.</p>
        <p>The elevation of an object in the atmosphere is visually rendered as box shadows. The amount of elevation is not the same as the Z-index, rather its relative elevation which aids in rendering the shadow.</p>
        <p>MEANT TO HAVE PIC</p>
        <p>MEANT TO HAVE PIC</p>
        <p>
            To implement the shadows in code there are <a href="https://www.lightningdesignsystem.com/design-tokens/#category-atmosphere">Design Tokens</a> you can include in the CSS <b>box-shadow</b> attribute.
        </p>

        <h3><Anchor id="motion-key-principles">Timing</Anchor></h3>
        <p>
            Timings are a set of duration values. Values are calculated as even multiples of <b>100ms</b>, which is 6 frames at 60 frames-per-second (3 frames at 30 frames-per-second).
        </p>
        <p>
            To use the timing tokens see the <a href="https://www.lightningdesignsystem.com/design-tokens/#category-timing">timing section</a>.
        </p>

        <h3><Anchor id="motion-key-principles">Named Animations</Anchor></h3>
        <p>
            This is a vocabulary of animations. Click to run individual demos:
        </p>
        <p>MEAT TO HAVE PIC 17</p>
    </div>
  );
}
