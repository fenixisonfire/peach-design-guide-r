import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import Image from '../../../src/Image';

export default function DesignLoadingSection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header">
        <Anchor id="loading">Loading</Anchor>
      </h2>
        <p>
            <b>
                Loading indicators help to reassure the user that the system is actively retrieving data.
            </b>
        </p>

        <br></br>
        <h3><Anchor id="loading-spinners">Spinners</Anchor></h3>
        <p>
            <b>
                Show spinners when retrieving data or performing slow computations.
            </b>
        </p>
        <p>
            Spinners are animated SVGs or GIFs. They reduce the use of awkward white screens and blank containers to communicate that the system is working. Use spinners when a component on a page is making an asynchronous update without refreshing the page.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-loading-card.svg" rounded/>
        </p>
        <p>
            Card
        </p>
        <br></br>
        <p>
            Center the spinner horizontally and vertically within the container. Don’t place spinners directly over text or other visual elements on a page without first applying a light or dark mask.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-loading-lazy.svg" rounded/>
        </p>
        <p>
            List View
        </p>
        <br></br>
        <p>
            If necessary, you can use a text label to communicate what the system is doing, such as “Uploading data …”
        </p>
        <p>Example Spinner Loading Process:</p>
        <br></br>
        <p>
            <Image src="./../../assets/localization-menu-french.png" rounded/>
        </p>
        <p>
            Card Loading
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-loading-lazy.svg" rounded/>
        </p>
        <p>
            Lazy Loading
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-loading-list.svg" rounded/>
        </p>
        <p>
            List Loading
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-loading-modal.svg" rounded/>
        </p>
        <p>
            Modal Loading
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-loading-page.svg" rounded/>
        </p>
        <p>
            Full Screen Loading
        </p>


        <br></br>
        <h3><Anchor id="loading-spinners">Stencils</Anchor></h3>
        <p>
            <b>
                Stencils are placeholders that visually communicate that content is in the process of loading.
            </b>
        </p>
        <p>
            Stencils abstractly represent what the resulting content layout will look like. Use stencils for full page refreshes, not asynchronous updates. Stencils offer a more visually appealing experience than dozens of spinners animating at the same time or a blank white page.
        </p>
        <p>
            Use stencils when data takes longer than 300 ms to retrieve. For less than 300 ms, just show the data. If the data takes 301 ms to load, the stencil fades-in promptly and then cross-fades to the data. Do not have a “white flash” between stencils and data.
        </p>
        <p>
            If a component is only displayed when it has data, then don’t show a stencil.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-stencils.svg" rounded/>
        </p>
        <br></br>
        <p>
            Keep stencils simple and lightweight, by using simple, subtle shapes to indicate content, but don’t include the placement of buttons and other UI elements. Keep the shape heights consistent to reduce visual noise.
        </p>
        <p>
            Stencils should be responsive and stretch to fill the container that they are in.
        </p>
        <p>
            Load stencils from the top left of the page to the bottom right.
        </p>

        <br></br>
        <h4>Table Data Loading Stencil</h4>
        <p>
            For table lists, don’t fill the screen up with stencils. Render a table data row stencil 20 times and reduce the opacity of each row by 5% to create a fade effect from 100% to 0% opacity, giving an infinite data effect. (see example below)
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-stencil-table.svg" rounded/>
        </p>

        <br></br>
        <h4>Record Detail Stencil</h4>
        <p>
            Feed fades out over five instances to indicate infinite scroll. Each related list shows one instance of the component-specific stencil.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-stencil-record.svg" rounded/>
        </p>
    </div>
  );
}
