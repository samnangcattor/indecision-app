class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    this.setState((preState) => ({ count: preState.count + 1}));
  }

  handleMinusOne() {
    this.setState((preState) => ({ count: preState.count - 1 }));
  }

  handleReset() {
    this.setState((preState) => ({ count: 0 }));
    localStorage.clear();
  }

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count: count }));
    }
  };

  componentDidUpdate(prevProps, prevState) {

    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  };

  render () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter count={1}/>, document.getElementById('app'));
