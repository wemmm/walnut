import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
  });

  it('has a header', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result.props.children[0].type).toBe('header');
  });

  it('has a button to expand the table', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result.props.children[2].type).toBe('button');
  });

  it('has a button to collapse the table', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result.props.children[3].type).toBe('button');
  });
});
