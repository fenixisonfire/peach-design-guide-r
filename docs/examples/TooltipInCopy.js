const LinkWithTooltip = React.createClass({
  render() {
    let tooltip = <Tooltip id={this.props.id}>{this.props.tooltip}</Tooltip>;

    return (
      <OverlayTrigger
        overlay={tooltip} placement="top"
        delayShow={300} delayHide={150}
      >
        <a href={this.props.href}>{this.props.children}</a>
      </OverlayTrigger>
    );
  }
});

const copyInstance = (
  <p className="muted" style={{ marginBottom: 0 }}>
      Lorem ipsum dolor sit amet<LinkWithTooltip tooltip="Default tooltip" href="#" id="tooltip-1"> consectetur adipiscing elit.</LinkWithTooltip> Mauris consectetur lorem nec nisl faucibus, in tristique mi ultrices. Vivamus maximus euismod libero. Ut eu dolor sem. Nam eleifend risus sed scelerisque fringilla. <LinkWithTooltip tooltip={<span>Another <strong>tooltip</strong></span>} href="#" id="tooltip-2">Ut eu orci id</LinkWithTooltip>
    enim auctor viverra. Etiam rhoncus quam ut tempus lacinia. Aliquam augue eros, porttitor nec dui nec, vestibulum pretium elit. <LinkWithTooltip tooltip="Another one here too" href="#" id="tooltip-3">Nam ipsum sem</LinkWithTooltip>,
      , porttitor in imperdiet sed, aliquet at diam. Mauris pretium sit amet dolor at efficitur.<LinkWithTooltip tooltip="The last tip!" href="#" id="tooltip-4"> Praesent blandit</LinkWithTooltip> iaculis
      ex eu pretium.
  </p>
);

ReactDOM.render(copyInstance, mountNode);
