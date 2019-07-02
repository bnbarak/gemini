/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import Plot from 'react-plotly.js';

const chartStyle = css`
  border: 1px solid #d4d4d4;
  margin: auto;
  padding: 10px;
  border-radius: 5px;
`;

export default class LineChart extends React.Component {
  render() {
    const { x, y } = this.props;
    const data = [{
      x,
      y,
      type: 'scatter',
    }];
    console.log(data);
    return (
      <div css={chartStyle}>
        <Plot
          data={data}
        />
      </div>
    );
  }
}
