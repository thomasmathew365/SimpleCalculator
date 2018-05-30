import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { calculate } from './App';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Evaluation works.', () => {
  expect(calculate('3+5*6-2/4')).toBe(32.5);
});
