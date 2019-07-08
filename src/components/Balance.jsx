/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { connect } from 'react-redux';
import React from 'react';
import Box from 'Components/Box';
import { getBalance, getIsLoadingCoinData } from 'Selectors/coin.selectors';
import Loader from 'Components/Loader';

const balanceStyle = css`
    text-align: center;
`;

class Balance extends React.PureComponent {
  renderBalance = () => {
    const { balance, isLoading } = this.props;
    const value = isLoading ? <Loader /> : balance;
    return <div css={balanceStyle}>{value}</div>;
  };

  render() {
    const { renderBalance } = this;
    return (
      <Box title="Balance">
        {renderBalance()}
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  const balance = getBalance(state);
  const isLoading = getIsLoadingCoinData(state);
  return { balance, isLoading };
};
export default connect(mapStateToProps, null)(Balance);
