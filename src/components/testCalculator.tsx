import { Component } from 'react';
import Button from './testbutton';
import Screen from './testsceen';

class Calculator extends Component {
  state = {
    currentValue: '0',
    previousValue: '',
    operator: '',
  };

  handleButtonClick = (value: string) => {
    if (value === '=' && this.state.operator) {
      this.calculateResult();
    } else if (value === 'C') {
      this.clearCalculator();
    } else if (value.match(/[0-9]/)) {
      this.handleDigitClick(value);
    } else {
      this.handleOperatorClick(value);
    }
  };

  handleDigitClick = (digit: string) => {
    const { currentValue } = this.state;
    if (currentValue === '0') {
      this.setState({ currentValue: digit });
    } else {
      this.setState({ currentValue: currentValue + digit });
    }
  };

  handleOperatorClick = (operator: string) => {
    const { currentValue, operator: previousOperator } = this.state;
    if (previousOperator) {
      this.calculateResult();
    }
    this.setState({ previousValue: currentValue, currentValue: '0', operator });
  };

  calculateResult = () => {
    const { previousValue, currentValue, operator } = this.state;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result;
    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        if (isNaN(result) || !isFinite(result)) {
          result = 'Error';
        }
        break;
      default:
        break;
    }
    this.setState({ currentValue: result.toString(), operator: '' });
  };

  clearCalculator = () => {
    this.setState({ currentValue: '0', previousValue: '', operator: '' });
  };

  render() {
    return (
      <div className="calculator">
        <Screen value={this.state.currentValue} />
        <div className="buttons">
          <Button onClick={this.handleButtonClick}>7</Button>
          <Button onClick={this.handleButtonClick}>8</Button>
          <Button onClick={this.handleButtonClick}>9</Button>
          <Button onClick={this.handleButtonClick}>/</Button>
          <Button onClick={this.handleButtonClick}>4</Button>
          <Button onClick={this.handleButtonClick}>5</Button>
          <Button onClick={this.handleButtonClick}>6</Button>
          <Button onClick={this.handleButtonClick}>*</Button>
          <Button onClick={this.handleButtonClick}>1</Button>
          <Button onClick={this.handleButtonClick}>2</Button>
          <Button onClick={this.handleButtonClick}>3</Button>
          <Button onClick={this.handleButtonClick}>+</Button>
          <Button onClick={this.handleButtonClick}>0</Button>
          <Button onClick={this.handleButtonClick}>C</Button>
          <Button onClick={this.handleButtonClick}>=</Button>
          <Button onClick={this.handleButtonClick}>-</Button>
        </div>
      </div>
    );
  }
}

export default Calculator;
