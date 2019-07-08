/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import Button from 'Components/Button';
import connect from 'react-redux/es/connect/connect';
import { getUserAddress } from 'Selectors/user.selectors';

const headerStyle = css`
  padding: 0 50px;
`;

const buttonStyle = css`
  width: 100px;
  float: right;
`;

const addressStyle = css`
  display: inline-block;
  padding-top: 5px;
`;

class Header extends React.PureComponent {
  logout = () => { // TODO: rename to handleLogout
    localStorage.removeItem('address');
    window.location.href = '/';
  };

  render() {
    const { address } = this.props;
    return (
      <div css={headerStyle}>
        <div css={addressStyle}>
          Address:
          {' '}
          {address}
        </div>
        <Button type="button" onClick={this.logout} css={buttonStyle}>
        Sign Out
        </Button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const address = getUserAddress(state);

  return { address };
};
export default connect(mapStateToProps, null)(Header);
