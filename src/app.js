// stateless functional component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: props.options,
      hasOptions() {
        return this.options.length > 0;
      }
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option is already exists';
    } else {
      this.setState((preState) => ({ options: preState.options.concat(option) }));
    }
  }

  handleDeleteOption(optionRemove) {
    this.setState((preState) => ({
      options: preState.options.filter((option) =>  optionRemove !== option )
    }));
  };

  componentDidMount() {
    console.log('Fetching data');
  };

  componentDidUpdate(preProps, prevState) {
    console.log('saving data');
  };

  componentWillUmount() {
    console.log('Component will umount.');
  };

  render () {
    const title = 'Indecision';
    const subtitle = 'Put your life is in the hands of a computer';

    return (
      <div>
        <Header  subtitle={subtitle} />
        <Action hasOptions={this.state.hasOptions()} handlePick={this.handlePick} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps =  {
  options: []
};

const Header = (Props) => (
  <div>
    <h1>{Props.title}</h1>
    {Props.subtitle && <h2>{Props.subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => (
  <div>
    <button onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What shoudld I do?
      </button>
  </div>
);

const Options = (props) =>(
  <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    {
      props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

const Option = (props) => (
  <div>
    {props.optionText}
    <button 
      onClick={(e) => (
        props.handleDeleteOption(props.optionText)
      )}
    >
        remove
    </button>
  </div>
);

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error:  undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error: error }));
  }

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
