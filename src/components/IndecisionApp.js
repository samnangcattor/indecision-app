import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
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
      options: preState.options.filter((option) => optionRemove !== option)
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (error) {
      // do nothings
    }
  };

  componentDidUpdate(preProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };

  componentWillUmount() {
    console.log('Component will umount.');
  };

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life is in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
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
