import React from 'react';
import Plot from 'react-plotly.js';

export default ({ x, y }) => {
  const data = [
    {
      x,
      y,
      type: 'scatter',
    },
  ];
  return (
    <div>
      <Plot
        data={data}
        useResizeHandler
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
