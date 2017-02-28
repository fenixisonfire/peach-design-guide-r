class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = e => {
      this.setState({ target: e.target, show: !this.state.show });
    };

    this.state = { show: false };
  }

  render() {
    return (
      <ButtonToolbar>
        <Button onClick={this.handleClick}>
          Popover
        </Button>

        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="bottom"
          container={this}
          containerPadding={20}
        >
          <Popover id="popover-contained" title="Popover bottom">
            <strong>Popover text</strong> more popover text.
          </Popover>
        </Overlay>
      </ButtonToolbar>
    );
  }
}

ReactDOM.render(<Example />, mountNode);
