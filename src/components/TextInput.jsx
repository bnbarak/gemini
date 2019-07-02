/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { Input } from 'antd';

const inputStyle = css`
    border: 1px solid #cacaca;
    padding: 0;
    text-align: center;
    width: 200px;
    height: 30px;
  `;

class TextInput extends React.PureComponent {
  render() {
    const { props } = this;
    return <Input css={inputStyle} {...props} />;
  }
}

export default TextInput;
