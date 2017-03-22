import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import Image from '../../../src/Image';

export default function DesignLayoutSection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header">
        <Anchor id="designlayout">Layout</Anchor>
      </h2>
        <p>
            <b>
                A layout is a structural template that supports consistency across applications by defining visual grids, spacing, and sections.
            </b>
        </p>

        <p>
            Before selecting a layout, review these guidelines:
            <br></br>
            <ul>
                <li><b>Know your use case.</b> Understand how the information on the page will be used.</li>
                <li><b>Prioritize your content.</b> Organize your content to highlight the most important information.</li>
                <li><b>Group related content together.</b> Make it efficient for users to work with the content.</li>
            </ul>
        </p>

        <br></br>
        <h3><Anchor id="layout-guidelines">Record Layouts</Anchor></h3>
        <p>
            Record layouts consist of a page header, a main content area and a sidebar. The content that should appear in each of these areas depends on the primary use case you are solving for.
        </p>
        <p>
            The page header above the content area extends across the entire viewport. When the user scrolls, the panel is fixed to provide locational context, but it shrinks to preserve vertical real estate.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-record-layout.svg" rounded/>
        </p>
        <br></br>
        <p>
            The main content area uses two-thirds of the viewport. The sidebar uses the other third, with a minimum width of 400px to maintain readability. If the reference layout appears inside of a Master/Detail, the sidebar collapses into a tab in the main content area.
        </p>

        <br></br>
        <h4>
            Workspace Layouts
        </h4>
        <p>
            A workspace layout facilitates user collaboration on records. It highlights the activity and discussion that is happening around a record by placing this information prominently in the larger content area, while simultaneously displaying the related records in the sidebar. A summary of the record’s details are in a panel above the content area for easy reference.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-workspace-layout.svg" rounded/>
        </p>

        <br></br>
        <h4>Reference Layouts</h4>
        <p>
            A reference layout is optimized for when users are primarily jumping to related records. It highlights the related records by displaying this information in the larger content area. Collaborative items are placed in the smaller sidebar. A summary of the record’s details are in a panel above the content area for easy reference.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-reference-layout.svg" rounded/>
        </p>

        <br></br>
        <h3><Anchor id="layout-guidelines">List Layouts</Anchor></h3>
        <p>
            A list layout consists of a simple page header and body that allows users to switch between predefined lists of items. Common controls include sorting, filtering, charting, and actions for the item type. Users can also switch between list layouts using the “Display” menu.
        </p>
        <p>
            Choose the types of list layout that best supports your use case:
        </p>
        <p>
            <ul>
                <li><b>Table</b> — Best for managing large sets of data and comparing values</li>
                <li><b>Board</b> — Use to monitor a workflow or milestones where users can drag cards between stages to indicate progress</li>
                <li><b>Master-Detail</b> — Allows users to see and edit the details of an item on one screen</li>
            </ul>
        </p>

        <br></br>
        <h4>Table Layouts</h4>
        <p>
            Use a table layout for flexibly viewing and managing large sets of data. The layout uses 100% of the viewport. Items are displayed as rows with their fields organized in columns.
        </p>
        <p>
            The columns are fixed width and use as much horizontal space as necessary. Columns do not resize when the window changes width. Users can choose which columns to show and how wide each column is. If the grid is wider than the viewport, users horizontally scroll to see more data.
        </p>
        <p>
            The table can be of infinite length. Data is loaded as the user scrolls. This lets your users access their data most efficiently. Avoid using manual pagination controls, which reduce efficiency.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-table-layout.svg" rounded/>
        </p>

        <br></br>
        <h4>Board Layouts</h4>
        <p>
            Use a board layout for items that are advancing through a linear workflow, such as a sales process, because it allows users to quickly move items between stages.
        </p>
        <p>
            The layout displays items in columns that are based on a picklist field on the object being viewed; a good example is the Stage field on a list of opportunities. Items are displayed as stacked cards in each column and can be moved between columns. Each column can optionally display an aggregate of any numerical data from that column’s items, such as the total monetary value of a column of Opportunities.
        </p>
        <p>
            The minimum column width is 12rem, and the maximum is 25rem to ensure that cards are legible. If the columns don’t fit in the viewport, users scroll horizontally to see more data.
        </p>
        <p>
            If the columns don’t fill the viewport, they are expanded to their maximum width, and the area to the right of the last column remains empty.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-board-layout.svg" rounded/>
        </p>

        <br></br>
        <h3><Anchor id="layout-guidelines">Master Detail Layouts</Anchor></h3>
        <p>
            A master-detail layout is ideal for working through a queue of items because it allows the user to stay on the same screen while viewing and editing multiple items.
        </p>
        <p>
            The layout groups together two layout views with a one-to-many relationship. Selecting an item from the master view (which contains a list) causes the details of that item to be populated in the detail view, using a condensed reference or workspace layout.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-master-detail-1.svg" rounded/>
        </p>
        <br></br>
        <p>
            A master-detail layout is also useful for exploring a deeply nested tree, like a file system, by displaying a tree component on the left and a table component on the right. This allows users to jump between nodes in the tree and to simultaneously view the full contents of each node as a list.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-master-detail-2.svg" rounded/>
        </p>
        <br></br>
        <p>
            Master detail layouts work best on a larger screen (minimum of 1024px). If the screen is smaller, the two layout views should be defined as separate pages.
        </p>
        <br></br>
        <p>
            <Image src="./../../assets/img-master-detail-3.svg" rounded/>
        </p>
        <br></br>
    </div>
  );
}
