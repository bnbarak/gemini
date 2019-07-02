/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { connect } from 'react-redux';
import React from 'react';
import LineChart from 'Components/LineChart';
import { getTxGraphData } from 'Selectors/coin.selectors';
import Box from 'Components/Box';

const txChartStyle = css`
    text-align: center;
`;

class TxChart extends React.PureComponent {
  render() {
    const { xAxis, yAxis } = this.props;
    return (
      <div css={txChartStyle}>
        <Box title="Balance over time">
          <LineChart x={xAxis} y={yAxis} />
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { xAxis, yAxis } = getTxGraphData(state);
  return { xAxis, yAxis };
};
export default connect(mapStateToProps, null)(TxChart);
