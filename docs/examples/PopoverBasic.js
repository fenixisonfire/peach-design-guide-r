ReactDOM.render((
  <div style={{ height: 120 }}>
    <Popover
      id="popover-basic"
      placement="right"
      positionLeft={200}
      positionTop={50}
      title="Popover right"
    >
      some <strong>popover</strong> content-further text
    </Popover>
  </div>
), mountNode);
