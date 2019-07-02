/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { connect } from 'react-redux';
import {
  Row, Form,
} from 'antd';
import { getAddressInformation } from 'Actions/user.actions';
import { hasErrors } from 'Utils/formHelpers.util';
import TextInput from 'Components/TextInput';
import Button from 'Components/Button';

const formStyle = css`
  width: 500px;
  margin: auto;
  text-align: center;
  color: #c1c1c1;
  padding: 20px;
`;

const formItemStyle = css`
  height: 30px;
  padding: 5px;
  width: 200px;
  margin: auto;
  font-size: 17px;
  color: #c1c1c1;
  `;


class LoginForm extends React.PureComponent {
  componentDidMount() {
    const { form } = this.props;
    form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form, handleLogin } = this.props;
    form.validateFields((err, values) => {
      const { address } = values;
      if (!err) {
        handleLogin(address);
      }
    });
  };

  renderTitle = () => (
    <h1 css={css`color: #26ddf9;`}>Login</h1>
  );

  renderAddressFiled = () => {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const decorator = getFieldDecorator('address', {
      rules: [{ required: true, message: ' ' }],
    });

    return (
      <Form.Item css={formItemStyle}>
        {decorator(<TextInput placeholder="Address" />)}
      </Form.Item>
    );
  };

  renderSubmitButton = () => {
    const { form } = this.props;
    const { getFieldsError } = form;

    return (
      <Form.Item css={formItemStyle}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={hasErrors(getFieldsError())}
        >
          Log in
        </Button>
      </Form.Item>
    );
  };

  render() {
    return (
      <Form layout="inline" onSubmit={this.handleSubmit} css={formStyle}>
        <Row>
          {this.renderTitle()}
          {this.renderAddressFiled()}
          {this.renderSubmitButton()}
        </Row>
      </Form>
    );
  }
}

const Login = Form.create({ name: 'loginForm' })(LoginForm);
const mapDispatchToProps = dispatch => ({
  handleLogin: address => dispatch(getAddressInformation(address)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
