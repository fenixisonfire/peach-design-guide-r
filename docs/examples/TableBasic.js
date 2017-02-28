const tableInstance = (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Department Position</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>Consultant</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>Lead Nurse</td>
      </tr>
      <tr>
        <td>Sarah</td>
        <td>Kelly</td>
        <td>Consultant</td>
      </tr>
    </tbody>
  </Table>
);

ReactDOM.render(tableInstance, mountNode);
