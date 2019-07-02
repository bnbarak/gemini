/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { connect } from 'react-redux';
import React from 'react';
import LineChart from 'Components/LineChart';
import { getIsLoadingCoinData, getTxGraphData } from 'Selectors/coin.selectors';
import Box from 'Components/Box';

const txChartStyle = css`
  text-align: center;
`;

const screenStyle = css`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  background: #dcdcdc47;
`;

class TxChart extends React.PureComponent {
  render() {
    const { xAxis, yAxis, isLoading } = this.props;
    return (
      <div css={txChartStyle}>
        <Box title="Balance Over Time">
          {isLoading && <div css={screenStyle} /> }
          <LineChart x={xAxis} y={yAxis} />
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { xAxis, yAxis } = getTxGraphData(state);
  const isLoading = getIsLoadingCoinData(state);

  return { xAxis, yAxis, isLoading };
};
export default connect(mapStateToProps, null)(TxChart);
