/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { Button as AntdButton } from 'antd';

const style = css`
  border: 1px solid #cacaca;
  padding: 0;
  width: 100%;
  height: 30px;
  color: #000000;
  &:disabled {
    color: #c5c5c5;
  }`;

export default class Button extends React.PureComponent {
  render() {
    const { props } = this;
    return <AntdButton css={style} {...props} />;
  }
}
