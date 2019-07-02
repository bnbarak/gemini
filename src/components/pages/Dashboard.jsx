/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Header from 'Components/Header';

const headerStyle = css`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid;
  margin-bottom: 30px;
`;

const sideMenuStyle = css`
  width: 25%;
  display: inline-block;
`;

const contentStyle = css`
  width: 75%;
  display: inline-block;
`;

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <div css={headerStyle}>
          <Header />
        </div>
        <div css={sideMenuStyle}>
          Side menu
        </div>
        <div css={contentStyle}>
          body
        </div>
      </div>
    );
  }
}
