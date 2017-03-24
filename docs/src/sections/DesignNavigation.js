import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import Image from '../../../src/Image';

export default function DesignNavigationSection() {
  return (
    <div className="bs-docs-section">
      <h1 className="page-header">
        <Anchor id="navigation">Navigation</Anchor>
      </h1>
        <p>
            <b>
                Navigational patterns help users move between pages and situate themselves in the application.
            </b>
        </p>

        <br></br>
        <h3><Anchor id="tabs">Tabs</Anchor></h3>
        <p>
            <b>
                Use tabs to separate information into logical sections based on functionality or use case.
            </b>
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-tabs.svg" rounded/>
        </p>
        <br></br>
        <p>
            Users can easily switch between tabs to perform tasks without leaving the page. Assign a default tab based on the most important use case for the page. The sections that the tabs define function independently of each other, so do not use tabs to define a linear, ordered process.
        </p>
        <p>
            Tab names must be consistent—use the same part of speech for each tab, such as a noun or verb.
        </p>
        <p>
            If your tabs don’t fit in the horizontal space, place the tabs that don’t fit into an overflow menu that sits in the last tab position. Selecting a tab from the overflow menu should replace the last fully visible tab in the ribbon. The tab that was replaced should go into the tab overflow menu in the topmost position.
        </p>

        <br></br>
        <h3><Anchor id="tabs">Global Tabs</Anchor></h3>
        <p>
            A global tab changes all of the content below it. For example, the Activity, Collaboration, and Details tabs change all of the content within the left column on an Opportunity.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-tabs-global.svg" rounded/>
        </p>

        <br></br>
        <h3><Anchor id="tabs">Scoped Tabs</Anchor></h3>
        <p>
            A scoped tab affects only the content within the visual container that it sits on top of. For example, the publisher tabs change just the form for the activity timeline, but nothing changes in the feed below. This is useful when one wants to stack several tabbed sections.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-tabs-scoped.svg" rounded/>
        </p>

        <br></br>
        <h3><Anchor id="tabs">Nesting Tabs</Anchor></h3>
        <p>
            Although not ideal, you might occasionally need to nest tabs. You can nest scoped tabs within a global tab set, but do not nest global tabs. If additional hierarchy is necessary, consider using a tree component.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-tabs-nesting.svg" rounded/>
        </p>

        <br></br>
        <h3><Anchor id="tabs">Trees</Anchor></h3>
        <p>
            <b>
                Organize pages in a tree to indicate hierarchy.
            </b>
        </p>
        <p>
            Use a tree if your app has layered navigation that can’t be represented in a simple tab set. A tree helps users navigate to pages and quickly find a nested child page without loading each page while navigating to the final destination page. Be sure to carefully study the mental models of users when deciding how to group pages in your tree.
        </p>
        <p>
            You can use a tree in conjunction with breadcrumbs to further help users navigate the hierarchy.
        </p>
        <p>
            Trees can technically have unlimited nesting, but we recommend avoiding excessive nesting. Flatter trees are generally easier to navigate.
        </p>
        <p>
            Every item in the list doesn’t have to have a corresponding page. Instead, you can use label groups to organize related pages without providing an unnecessary landing page.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-tree.svg" rounded/>
        </p>

        <br></br>
        <h3><Anchor id="tabs">Breadcrumbs</Anchor></h3>
        <p>
            <b>
                Breadcrumbs help users navigate back up a hierarchy of pages.
            </b>
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-breadcrumbs.svg" rounded/>
        </p>
        <br></br>
        <p>
            A breadcrumb indicates the hierarchy path (parent­-child relationships) of the page a user is on, rather than the order of the user’s browsing history. Breadcrumbs are especially useful when a user links directly to a page that is nested in a hierarchy but needs to go to a parent page. They also helps users situate themselves in the application.
        </p>
        <p>
            Breadcrumbs are commonly used in conjunction with a tree for navigating between nested pages. The full hierarchy path is listed on a second or third level page. When the user is on a page deeper than three levels, the breadcrumb displays only the last two links. The rest of the hierarchy path is truncated, as shown in the following figure.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-breadcrumbs-truncate.svg" rounded/>
        </p>

        <br></br>
        <h3><Anchor id="tabs">Modals</Anchor></h3>
        <p>
            <b>
                Use a modal when you want users to focus on a specific task within the context of the original page.
            </b>
        </p>
        <p>
            Use modals for pages that require the full attention of the user. Modals prevent the user from interacting with other elements on the page. A typical use of a modal is to display a form for entering or editing data. You can also use a directional modal for wizards and other forms that require linear navigation.
        </p>
        <p>
            Modals are broken into three sections: the header, body, and footer.
        </p>
        <p>
            <b>Header</b> — Includes the title and an optional tagline. The title reflects the button text that triggered it. The tagline can contain links, or the entire tagline can be a link.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-modal-sections.svg" rounded/>
        </p>
        <br></br>
        <p>
            <b>Body</b> — You can have any type of content: forms, text, videos, and other media. For a directional modal, you can add a step indicator to indicate the user’s progress.
        </p>
        <p>
            <b>Footer</b> — Contains the navigational and action buttons. Action buttons, such as Save, Close, Delete, are on the right. Place the primary button—the one that guides the user toward the default action on the far right. For a directional modal, like a wizard, place the Next and Back navigation buttons on the opposite sides (left for Back and right for Next).
        </p>

        <br></br>
        <h3><Anchor id="tabs">Sizing</Anchor></h3>
        <p>
            Modals take up 50% of the user’s viewport. If the content requires a lot of horizontal space, you can use the large modal, which takes up 90% of the viewport. A minimum and maximum width are specified to avoid going too narrow or too wide.
        </p>
        <p>
            The height of a modal is determined primarily by the length of its contents. The maximum height of the modal container is determined by its exterior margin. If the content is longer than the length of the modal, allow the user to scroll within the modal. The header and footer are fixed.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-modal-width.svg" rounded/>
        </p>
    </div>
  );
}
