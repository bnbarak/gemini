/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import Button from 'Components/Button';

const headerStyle = css`
  width: 100px;
  float: right;
`;

export default class Header extends React.PureComponent {
  logout = () => {
    localStorage.removeItem('address');
    window.location.href = '/';
  };

  render() {
    return (
      <div css={headerStyle}>
        <Button type="button" onClick={this.logout}>
        Logout
        </Button>
      </div>
    );
  }
}
