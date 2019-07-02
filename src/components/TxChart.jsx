/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { connect } from 'react-redux';
import React from 'react';
import LineChart from 'Components/LineChart';
import { getTxGraphData } from 'Selectors/coin.selectors';

const txChartStyle = css`
    text-align: center;
`;

class TxChart extends React.PureComponent {
  render() {
    console.log(this.props);
    const { xAxis, yAxis } = this.props;
    return (
      <div css={txChartStyle}>
        <LineChart x={xAxis} y={yAxis} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { xAxis, yAxis } = getTxGraphData(state);
  return { xAxis, yAxis };
};
export default connect(mapStateToProps, null)(TxChart);
