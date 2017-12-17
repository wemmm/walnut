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

  it('renders ten records by default', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    const recordNumber = result.props.children[1].props.children[1].props.children.length
    expect(recordNumber).toBe(10);
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
    const buttonClass = result.props.children[2].props.children[0].type.defaultProps.bsClass
    expect(buttonClass).toBe('btn');
  });

  it('has a button to collapse the table', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    const buttonClass = result.props.children[2].props.children[1].type.defaultProps.bsClass
    expect(buttonClass).toBe('btn');
  });
});
