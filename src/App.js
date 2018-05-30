import React, { Component } from 'react';
import './App.css';

let numberList = [
  { key: 'one', value: 1 },
  { key: 'two', value: 2 },
  { key: 'three', value: 3 },
  { key: 'four', value: 4 },
  { key: 'five', value: 5 },
  { key: 'six', value: 6 },
  { key: 'seven', value: 7 },
  { key: 'eight', value: 8 },
  { key: 'nine', value: 9 },
  { key: 'decimal', value: '.' },
  { key: 'zero', value: 0 }
];

let calculate  = (val) => {
  return eval(val);
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayVal: 0,
      error: false
    };
    this.onCalculate = this.onCalculate.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  buttonClicked(val) {
    this.setState(prevState => {
      if (prevState.displayVal == '0') {
        prevState.displayVal = '';
      }
      prevState.displayVal = prevState.displayVal.toString() + val.toString();
      return prevState;
    });
  }

  onCalculate() {
    let isValid = true;
    try {
      eval(this.state.displayVal);
    } catch (e) {
        isValid = false;
    }
    if (isValid) {
      this.setState(prevState => {
        prevState.displayVal = eval(prevState.displayVal);
        return prevState;
      });
    } else {
      alert('Error: expression invalid.');
    }

  }

  onClear() {
    this.setState(prevState => {
      prevState.displayVal = 0;
      return prevState;
    });
  }

  renderDisplay() {
    return (
      <div id="display" className="display-cont">
        {this.state.displayVal}
      </div>
    );
  }

  renderButtons() {
    var rows = numberList.map(numberVal => {
      return (
        <div
          key={`button${numberVal.key}`}
          id={numberVal.key}
          onClick={this.buttonClicked.bind(this, numberVal.value)}
          className="col-4 button border btn btn-light">
          {numberVal.value}
        </div>
      );
    });
    return rows;
  }

  renderBasicArith() {
    return (
      <div className="row calc-buttons-cont">
        <div
          id="add"
          onClick={this.buttonClicked.bind(this, '+')}
          className="col-3 button border btn btn-dark">
          +
        </div>
        <div
          id="subtract"
          onClick={this.buttonClicked.bind(this, '-')}
          className="col-3 button border btn btn-dark">
          -
        </div>
        <div
          id="multiply"
          onClick={this.buttonClicked.bind(this, '*')}
          className="col-3 button border btn btn-dark">
          x
        </div>
        <div
          id="divide"
          onClick={this.buttonClicked.bind(this, '/')}
          className="col-3 button border btn btn-dark">
          /
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="container calc-cont">
          <div className="row">{this.renderDisplay()}</div>
          <div className="row buttons-cont">{this.renderButtons()}</div>
          {this.renderBasicArith()}
          <div className="row edit-buttons-cont">
            <div onClick={this.onClear} className="col-6 btn btn-danger button border">
              clear
            </div>
            <div
              id="equals"
              onClick={this.onCalculate}
              className="col-6 btn btn-primary button border">
              =
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
export { calculate };
