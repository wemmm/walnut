import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chart from './Chart';

describe('Chart', () => {
  it('renders pie charts', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Chart />);
    const result = renderer.getRenderOutput();
    console.log(result.props.children)
    expect(result.type.displayName).toBe('PieChart');
  });
});
