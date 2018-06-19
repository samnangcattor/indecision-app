class VisibleToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
      labelVisibility () {
        return this.visibility ? 'Hide details' : 'Show details';
      },
      messageVisibility() {
        return (
          this.visibility && (
            <div>
              <p>Hey. These are some details you can now see!</p>
            </div>
          )
        );
      }
    };

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState((preState) => {
      return {
        visibility: !preState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.labelVisibility()}
        </button>
        {this.state.messageVisibility()}
      </div>
    );
  }
}


ReactDOM.render(<VisibleToggle />, document.getElementById('app'));
