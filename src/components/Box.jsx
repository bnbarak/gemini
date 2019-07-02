/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

const boxStyle = css`
  border: 1px solid #d4d4d4;
  margin: auto;
  padding: 30px 20px;
  border-radius: 5px;
  margin-bottom: 20px;

`;

const titleStyle = css`
  color: #26ddf9;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export default class Box extends React.PureComponent {
  renderTitle = () => {
    const { title } = this.props;
    return <div css={titleStyle}>{title}</div>;
  };

  render() {
    const { children } = this.props;
    return (
      <div css={boxStyle}>
        {this.renderTitle()}
        {children}
      </div>
    );
  }
}
