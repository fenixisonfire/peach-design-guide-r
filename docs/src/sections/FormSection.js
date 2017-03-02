import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function FormSection() {
  return (
    <div className="bs-docs-section">
      <h1 className="page-header">
        <Anchor id="forms">Forms</Anchor>
      </h1>

        <h1><small>PEACH form entry guidelines</small> </h1>
        <h4>Telephone input</h4>
        <ul>
        <li>A single unassisted entry box should be used when anticipating UK telephone numbers, otherwise use a single entry box with a country code selector drop down box</li>
            <li>Country code selector box should have U.K. at the top, followed by an alphabetical list.</li>
        <li>Tool tips should be used to assist correct number input (e.g. Enter 'home' telephone number</li>
            <li>Ensure that the input box accepts formatted and unformatted entries (e.g. 01181-2 equivalent to 011812</li>
            <li> Remove UK country code from display after number is committed</li>
        </ul>
        <h4>NHS Number input</h4>

            <ul>
                <li>Provide single entry box for NHS Number input.</li>
                <li>Ensure it is long enough to display number in full.</li>
                <li>During input, reformat numbers, in the form of 3 numbers, space, 3 numbers, space, then last 4</li>
                <li>Ensure NHS Number consists of only 10 digits and 2 spaces.</li>
                <li>Dueing input, permit only single space character to act as a seperator within the number</li>
            </ul>



        <h4>Sex and Current Gender Input</h4>

        <ul>
            <li>Inputs for patient's current gender may take one of the following:<br></br><ul><li>Male</li><li>Female</li><li>Other Specific</li><li>Not Known</li><li>Not Specified</li></ul></li>
            <br></br><li>Inputs for patient's sex may take one of the following:<br></br><ul><li>Male</li><li>Female</li><li>Not Known</li><li>Indeterminate</li></ul></li>
        </ul>
        <br></br>
        <h4>Address Input</h4>
        <ul><li>The minimum number of data elements of a UK address can vary</li>
            <li>For most, only the following are needed:<br></br><ul><li>House number and street</li><li>Town or City</li><li>Postcode</li></ul></li>
            <br></br> <li>Outside of London, addresses require a 'County'</li>
            <li>During design, reference should be made to the <i>NHS Data Model and Dictionary</i> and the <i>NHS Connecting for Health Personal Demographics Service</i></li>
            <br></br><li>According to PEACH guidelines, Address inputs should consist of: <br></br><ul><li>3 boxes for input of all details to and including street name</li><li>1 box for input of town or city</li><li>1 box for input of county</li><li>1 box for input of postcode</li></ul><br></br></li>
            <li>Set the length of the postcode input box to 8 characters long.</li>
            <li>For non UK addresses, a drop down box of country names must be provided at the top of the address input.</li>
        </ul>

        <h4>Date and Time input
        </h4>
        <h5>Date Input</h5>

            <ul><li>The basic date input control should comprise:<br></br><ul><li>A free text input area</li><li>A calendar control</li><li>A default input, dependent on the context in which the control is used</li><li>A facility to disambiguate the date entered</li></ul><br></br></li>
            <li>The input can be either free text input or by using the calender control</li>
                <li>Dates displayed within the date input control should be of the form '05-Sep-2017' etc.</li>
                <li>Input should allow 'Unknown' to specify dates not known to user</li>

            <li>A default input should be displayed within the free text input control, for example: the current date.</li>
                <li>The user should be provided access to the calender control via a calender icon, which can be closed by either clicking on the icon again or clicking away from it.</li>
            <li>An alert should appear if date entered appears ambiguous, e.g. '05/04/2017' may be interpreted as 05-Apr-2017 or 04-May-2017</li>
            </ul>



        <h5>Time Input</h5>

            <ul><li>The time control input should comprise: <br></br> <ul><li>An input area</li><li>A default input</li><li>A spin control</li><li>A tick box to indicate if the time is approximate (where appropriate)</li></ul></li>
            <li>Use tooltips to provide instructions on how to use the control.</li>
            <li>Indicate to the user that the control uses the 24 hour clock.</li>
            <li>Allow the entry of 'unknown' to specify times not known to user. </li>
            <li>Display a default input within the time control (eg. 'hh:mm:ss').</li></ul>



        <h4>Patient Name Input</h4>

            <ul><li>The patient name input should consist of at least the following:<br></br><ul><li>A drop down 'title' box</li><li>'FAMILY name' box</li><li>'Given name' box</li></ul></li>
                <br></br> <li> The following inputs are not necessary, but improve data quality:<br></br><ui><li>'Middle name(s)' box</li><li>'Suffix' box</li><li>'Known as' box</li></ui></li>
                <br></br><li>Default values should be displayed within the boxes</li>
                <li>One value within the 'Title' drop down box should allow the user to invoke free-text input</li>
                <li>The Family name input should accept a maximum of 40 characters, and display at least 8 characters</li>
                <li>Given name input should take at least 35 characters,and display at least 8 characters</li>
                <li>The input fields should be inForm layout (i.e. alligned vertically).</li></ul>



        <h1><small>FormGroup, FormControl, ControlLabel</small></h1>

      <p>

        The <code>{'<FormControl>'}</code> component renders a form control with Bootstrap styling. The <code>{'<FormGroup>'}</code> component wraps a form control with proper spacing, along with support for a label, help text, and validation state. To ensure accessibility, set <code>controlId</code> on <code>{'<FormGroup>'}</code>, and use <code>{'<ControlLabel>'}</code> for the label.
      </p>

      <ReactPlayground codeText={Samples.FormBasic} />

      <p>
        The <code>{'<FormControl>'}</code> component directly renders the <code>{'<input>'}</code> or other specified component. If you need to access the value of an uncontrolled <code>{'<FormControl>'}</code>, attach a <code>ref</code> to it as you would with an uncontrolled input, then call <code>ReactDOM.findDOMNode(ref)</code> to get the DOM node. You can then interact with that node as you would with any other uncontrolled input.
      </p>
      <p>
        If your application contains a large number of form groups, we recommend building a higher-level component encapsulating a complete field group that renders the label, the control, and any other necessary components. We don't provide this out-of-the-box, because the composition of those field groups is too specific to an individual application to admit a good one-size-fits-all solution.
      </p>

      <h3><Anchor id="forms-props">Props</Anchor></h3>

      <h4><Anchor id="forms-props-form-group">FormGroup</Anchor></h4>
      <PropTable component="FormGroup" />

      <h4><Anchor id="forms-props-form-control">FormControl</Anchor></h4>
      <PropTable component="FormControl" />

      <h4><Anchor id="forms-props-control-label">ControlLabel</Anchor></h4>
      <PropTable component="ControlLabel" />
    </div>
  );
}
