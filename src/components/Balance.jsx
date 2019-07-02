/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { connect } from 'react-redux';
import React from 'react';
import Box from 'Components/Box';
import { getBalance } from 'Selectors/coin.selectors';

const balanceStyle = css`
    text-align: center;
`;

class Balance extends React.PureComponent {
  renderBalance = () => {
    const { balance } = this.props;
    return <div css={balanceStyle}>{balance}</div>;
  }

  render() {
    const { renderBalance } = this;
    return <Box title="Balance" component={renderBalance()} />;
  }
}

const mapStateToProps = (state) => {
  const balance = getBalance(state);

  return { balance };
};
export default connect(mapStateToProps, null)(Balance);
