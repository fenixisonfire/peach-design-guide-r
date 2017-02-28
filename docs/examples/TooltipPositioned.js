
const tooltip = (
  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);

const positionerInstance = (
  <ButtonToolbar>
    <OverlayTrigger placement="left" overlay={tooltip}>
      <Button bsStyle="default">Tool Tip1</Button>
    </OverlayTrigger>

    <OverlayTrigger placement="top" overlay={tooltip}>
      <Button bsStyle="default">Tool Tip2</Button>
    </OverlayTrigger>

    <OverlayTrigger placement="bottom" overlay={tooltip}>
      <Button bsStyle="default">Tool Tip3</Button>
    </OverlayTrigger>

    <OverlayTrigger placement="right" overlay={tooltip}>
      <Button bsStyle="default">Tool Tip4</Button>
    </OverlayTrigger>
  </ButtonToolbar>
);

ReactDOM.render(positionerInstance, mountNode);
