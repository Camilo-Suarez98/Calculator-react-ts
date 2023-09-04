/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from "react";
import Screen from "./Screen";
import Button from "./Button";

type CalculatorState = {
  firstValue: string,
  currentValue: string,
  operator: string,
  isDecimal: boolean
}

class Calculator extends Component<object, CalculatorState> {
  btnValues = [
    ["7", "8", "9", "DEL"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "-"],
    [".", "0", "/", "x"],
    ["Reset", "="],
  ]

  constructor(props: object) {
    super(props);
    this.state = {
      firstValue: '',
      currentValue: '0',
      operator: '',
      isDecimal: false
    }
  }

  handleClick = (value: string) => {
    if (value.match(/[0 - 9]/)) {
      this.handleDigit(value);
    } else if (value === '=' && this.state.operator) {
      this.handleResult();
    } else if (value === '.' && !this.state.isDecimal) {
      this.handleFloat(value)
    } else if (value === 'DEL') {
      this.handleClear()
    }
  };

  handleDigit = (value: string) => {
    this.setState((state) => ({
      currentValue: state.currentValue === '0' ? value : state.currentValue + value
    }))
  }

  handleFloat = (decimal: string) => {
    this.setState((state) => ({
      currentValue: state.currentValue + decimal
    }))
  }

  handleoperator = () => {
    this.setState((state) => ({
      operator: state.operator,
      firstValue: state.firstValue
    }))
  };

  handleResult = () => {
    this.setState((state) => ({
      firstValue: state.firstValue,
      operator: state.operator
    }))

    if (this.state.operator === '+') {
      return parseFloat(this.state.firstValue) + parseFloat(this.state.firstValue)
    }
  }

  handleClear = () => {
    this.setState((_state) => ({
      firstValue: '',
      currentValue: '0',
      operator: '',
    }))
  }

  render() {
    const { currentValue } = this.state;

    return (
      <div>
        <Screen currentValue={currentValue} />
        {
          this.btnValues.flat().map((buttonValue, index) => (
            <Button
              key={index}
              onClick={this.handleClick}
            >
              {buttonValue}
            </Button>
          ))
        }
      </div>
    )
  }
}

export default Calculator;
