import { Component } from "react";
import Screen from "./Screen";
import Button from "./Button";

type CalculatorState = {
  screen: string,
  count: string,
  operation: string
}

class Calculator extends Component<{}, CalculatorState> {
  numers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  operators: string[] = ['+', '-', '*', '/'];

  constructor(props: {}) {
    super(props);
    this.state = {
      screen: '0',
      count: '',
      operation: '',
    }
  }

  handleClick = (value: string) => {
    this.setState((state) => ({
      screen: state.screen === '0' ? value : state.screen + value
    }))
  };

  handleOperation = (_value: string) => {
    this.setState((state) => ({
      operation: state.operation,
      screen: ''
    }))
  };

  handleResult = () => {
    this.setState((state) => ({
      count: state.count
    }))
  }

  handleClear = () => {
    this.setState((_state) => ({
      screen: '0',
      count: '',
      operation: '',
    }))
  }

  render() {
    const { screen, count } = this.state;

    return (
      <div>
        <Screen currentValue={screen} />
        <p>{count}</p>
        {
          this.numers.map((num, index) => (
            <Button
              key={index}
              onClick={() => this.handleClick(num.toString())}
            >
              {num}
            </Button>
          ))
        }
        {
          this.operators.map((operation, index) => (
            <Button
              key={index}
              onClick={() => this.handleOperation(operation)}
            >
              {operation}
            </Button>
          ))
        }
        <Button onClick={this.handleClear}> Reset </Button>
      </div>
    )
  }
}

export default Calculator;
