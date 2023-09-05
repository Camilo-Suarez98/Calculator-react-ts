import { Component } from "react";
import Screen from "./Screen";
import Button from "./Button";

type CalculatorState = {
  screen: string,
  operation: string,
}

class Calculator extends Component<object, CalculatorState> {
  constructor(props: object) {
    super(props);
    this.state = {
      screen: '0',
      operation: '',
    }
  }

  handleType = (value: string) => {
    this.setState((state) => ({
      screen: state.screen === '0' ? value : `${state.screen}${value}`
    }));
  }

  handleAddOperation = (operation: string) => {
    const result = `${this.state.screen}${operation}`;
    this.setState(() => ({
      operation: result,
      screen: result
    }))
  }

  handleTypeSecondNumber = (value: string) => {
    const result = `${this.state.screen}${value}`;
    this.setState(() => ({
      screen: result,
      operation: result
    }));
  }

  handleCalculate = (operation: string) => {
    const result = parseFloat(eval(operation));

    this.setState(() => ({
      screen: result.toString(),
    }));
  }

  clearFunction = () => {
    this.setState(() => ({
      screen: '0',
      operation: '',
    }));
  }

  render() {
    const { screen, operation } = this.state;

    const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operations: string[] = ['+', '-', '*', '/'];

    return (
      <div>
        <Screen currentValue={screen} />
        {
          numbers.map((number) => {
            return (
              <Button
                key={number}
                onClick={operation === '' ?
                  (() => this.handleType(number.toString())) :
                  (() => this.handleTypeSecondNumber(number.toString()))
                }
              >
                {number}
              </Button>
            )
          })
        }
        {
          operations.map((operation, index) => {
            return (
              <Button
                key={index}
                onClick={(() => this.handleAddOperation(operation))}
              >
                {operation}
              </Button>
            )
          })
        }
        <Button onClick={screen === '' ?
          (() => this.handleType('.')) :
          (() => this.handleTypeSecondNumber('.'))
        }>
          .
        </Button>
        <Button onClick={(() => this.handleCalculate(operation))}> = </Button>
        <Button onClick={(() => this.clearFunction())}> C </Button>
      </div>
    );
  }
}

export default Calculator;