/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Header from 'Components/Header';
import Balance from 'Components/Balance';

const containerStyle = css`
  display: flex;
`;

const headerStyle = css`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid;
  margin-bottom: 30px;
`;

const sideMenuStyle = css`
  width: 25%;
  padding: 20px 40px;
`;

const contentStyle = css`
  width: 75%;
  padding: 20px 40px;
`;

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <div css={headerStyle}>
          <Header />
        </div>
        <div css={containerStyle}>
          <div css={sideMenuStyle}>
            <Balance />
          </div>
          <div css={contentStyle}>body</div>
        </div>
      </div>
    );
  }
}
