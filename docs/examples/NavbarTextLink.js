const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Peach Project</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Text>
        Signed in as: <Navbar.Link href="#">Dr Michael Otto</Navbar.Link>
      </Navbar.Text>
      <Navbar.Text pullRight>
        SN:132 2342
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

ReactDOM.render(navbarInstance, mountNode);
