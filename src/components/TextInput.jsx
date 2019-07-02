/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { Input } from 'antd';

class TextInput extends React.PureComponent {
  getStyle = () => css`
      border: 1px solid #cacaca;
      padding: 0;
      text-align: center;
      width: 200px;
      height: 30px;
      `;

  render() {
    const { props, getStyle } = this;
    const style = getStyle();
    return <Input css={style} {...props} />;
  }
}

export default TextInput;
