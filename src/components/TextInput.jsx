/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { Input } from 'antd';


export default class TextInput extends React.PureComponent {
  getStyle = () => {
    const { capitalize } = this.props;
    const textTransform = capitalize ? 'capitalize' : 'unset';
    return css`
      border: 1px solid #cacaca;
      padding: 0;
      text-align: center;
      width: 200px;
      height: 30px;
      text-transform: ${textTransform};
      `;
  }

  render() {
    const { props, getStyle } = this;
    const style = getStyle();
    return <Input css={style} {...props} />;
  }
}
