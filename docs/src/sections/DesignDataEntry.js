import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function DesignDataEntrySection() {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header">
        <Anchor id="data-entry">Data Entry</Anchor>
      </h2>

      <h3><Anchor id="basic-text">Basic Text Input</Anchor></h3>
        <p>
            <b>
                The simplest method of freeform data entry, for single and multiple lines of text.
                <br></br><br></br>
            </b>
        </p>
        <p>
            To limit the amount of text, use a single­line input. To restrict the type of input, you can specify the format, such as number or email address.
            <br></br><br></br>
            Multiline text areas allow the user to enter long­form plain text. You can’t specify a format to restrict the type of content.
            <br></br><br></br>
            Label the input area above or to the left of the field. In most contexts, a stacked label (label on top) is better for readability and clarity. Use horizontal labels only if you need to save vertical real estate and have fewer than 10 fields.
            <br></br><br></br>
            MEANT TO HAVE PIC
            <br></br><br></br>
            To group related fields together, such as individual parts of an address, use compound inputs.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

        <br></br>
        <h4>Sizing</h4>
        <p>
            The default text size creates a visual hierarchy between the label text and the input text. To conserve vertical space or when you have a long list of fields in a width-constrained sidebar, a smaller input size is also available.
            <br></br><br></br>
            The input width depends on the label placement. The input width is 100% of the container.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

        <br></br>
        <h4>Input Help</h4>
        <p>
            To assist the users, you can add help text. If the explanation is lengthy, use an “info” icon and tooltip. For brief explanations (shorter than a sentence), you can place the text underneath the field.
            <br></br><br></br>
            You can also use placeholder text to provide an example of the type of input required. For example, in a Name field, show a name in the correct format.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

        <br></br>
        <h3><Anchor id="basic-text">Basic Text Input</Anchor></h3>
        <p>
            <b>
                Complex text inputs provide users with additional assistance in specific types of data entry.
                <br></br><br></br>
            </b>
        </p>

        <h4>Date Pickers</h4>
        <p>
            Instead of forcing the user to manually type a date, a datepicker provides a visual way for the user to browse and select a single date or range of dates.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

        <br></br>
        <h4>Lookups</h4>
        <p>
            A lookup allows the user to search a database for records to fill a field. The lookup can either limit the user to a single record or allow for multiple records to populate a single field.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

        <br></br>
        <h3><Anchor id="basic-text">Selection Input</Anchor></h3>
        <p>
            <b>
                Selection inputs allow a user to choose between a limited number of options for a given field.
                <br></br><br></br>
            </b>
        </p>

        <h4>Checkboxes</h4>
        <p>
            Use a single checkbox for Boolean fields in which the user can choose only between true and false or on and off.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

        <br></br>
        <h4>Radio Lists</h4>
        <p>
            A radio list allows the user to select one option from a short list (fewer than 10 options). You must have enough space to present all options together to make comparison easy. Typically, radio lists are presented as a standalone field, such as a poll within a feed, and not used in a larger form.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

        <br></br>
        <h4>Checkbox Toggle</h4>
        <p>
            A toggle is similar to a checkbox in that it presents users with a binary choice for an item. However, a toggle is self-contained — think of it as a short form with only one field. When user turns a toggle on or off, the change for that item is saved immediately.
            <br></br><br></br>
            Toggles are useful for reducing ambiguity. Since toggles save immediately, what users see on the page is always a clean state (never an unsaved/dirty state).
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

        <br></br>
        <h5>USAGE</h5>
        <p>
            Use a toggle if the field you’re building:
            <ul>
                <li>Exists on a page with no other form components that can appear in unsaved states.</li>
                <li>Can be saved independently of other fields on the page.</li>
                <li>Semantically fits the on/off model.</li>
            </ul>
            <br></br><br></br>
            MEANT TO HAVE PIC 3
        </p>

        <br></br>
        <h5>LABELS</h5>
        <p>
            A toggle is always accompanied by two external labels:
            <ul>
                <li><b>Field label</b>, which describes the item that the user is modifying, e.g. Post sharing, Desktop notifications, etc.</li>
                <li><b>State label</b>, which describes the current state of the field. This label is binary and works in conjunction with the on/off state, but it’s more contextual to the field. E.g. Disabled/Enabled, Not Allowed/Allowed, etc.</li>
            </ul>
        </p>

        <br></br>
        <h4>Picklists</h4>
        <p>
            Picklists, commonly known as dropdown menus, allow the user to select one option or multiple options from a list. Picklists are used instead of radio lists and checkbox lists inside of a larger form. They provide more flexibility in the number of options the user can choose from.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

        <br></br>
        <h4>Dueling Picklists</h4>
        <p>
            Use this control when the user needs to select more than one option and define the order of the selected items.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>

        <br></br>
        <h4>Inline Edit</h4>
        <p>
            Inline editing allows the user to edit some part of a record without making a major switch between viewing and editing. This is a highly efficient method of updating a record. A user can make their changes without losing context and they can immediately return to what they were doing before.
            <br></br><br></br>
            A field that can be edited inline will have a pencil icon next to it. The user can either double click on the field value or click on the pencil icon to activate inline edit.
            <br></br><br></br>
            MEANT TO HAVE PIC
        </p>
    </div>
  );
}
