const popoverLeft = (
  <Popover id="popover-positioned-left" title="Popover left">
    <strong>Popover text</strong> more popover text.
  </Popover>
);

const popoverTop = (
  <Popover id="popover-positioned-top" title="Popover top">
    <strong>Popover text</strong> more popover text.
  </Popover>
);

const popoverBottom = (
  <Popover id="popover-positioned-bottom" title="Popover bottom">
    <strong>Popover text</strong> more popover text.
  </Popover>
);

const popoverRight = (
  <Popover id="popover-positioned-right" title="Popover right">
    <strong>Popover text</strong> more popover text.
  </Popover>
);

ReactDOM.render((
  <ButtonToolbar>
    <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
      <Button>Popover</Button>
    </OverlayTrigger>
    <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
      <Button>Popover</Button>
    </OverlayTrigger>
    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
      <Button>Popover</Button>
    </OverlayTrigger>
    <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
      <Button>Popover</Button>
    </OverlayTrigger>
  </ButtonToolbar>
), mountNode);
