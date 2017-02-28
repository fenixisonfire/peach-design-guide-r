const popoverLeft = (
  <Popover id="popover-positioned-scrolling-left" title="Popover left">
    <strong>Popover</strong> more popover text.
  </Popover>
);

const popoverTop = (
  <Popover id="popover-positioned-scrolling-top" title="Popover top">
    <strong>Popover</strong> more popover text.
  </Popover>
);

const popoverBottom = (
  <Popover id="popover-positioned-scrolling-bottom" title="Popover bottom">
    <strong>Popover</strong> more popover text.
  </Popover>
);

const popoverRight = (
  <Popover id="popover-positioned-scrolling-right" title="Popover right">
    <strong>Popover</strong> more popover text.
  </Popover>
);

class Positioner extends React.Component {
  render() {
    return (
      <ButtonToolbar style={{ padding: '100px 0' }}>
        <OverlayTrigger container={this} trigger="click" placement="left" overlay={popoverLeft}>
          <Button>Popover</Button>
        </OverlayTrigger>
        <OverlayTrigger container={this} trigger="click" placement="top" overlay={popoverTop}>
          <Button>Popover</Button>
        </OverlayTrigger>
        <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={popoverBottom}>
          <Button>Popover</Button>
        </OverlayTrigger>
        <OverlayTrigger container={this} trigger="click" placement="right" overlay={popoverRight}>
          <Button>Popover</Button>
        </OverlayTrigger>
      </ButtonToolbar>
    );
  }
}

ReactDOM.render(<Positioner />, mountNode);
