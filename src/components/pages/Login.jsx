import React from 'react';
import { connect } from 'react-redux';

import {
  Row, Col, Form, Input, Button,
} from 'antd';
import { loginAction } from 'Actions/user.actions';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends React.PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, handleLogin } = this.props;
    form.validateFields((err, values) => {
      const { address } = values;
      if (err) {
        console.log('Received values of form: ', values);
      } else {
        handleLogin(address);
      }
    });
  };

  renderTitle = () => (
    <Col span={12}>
      <h1>
        Login
      </h1>
    </Col>
  );

  renderAddressFiled = () => {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const decorator = getFieldDecorator('address', {
      rules: [{ required: true, message: 'Please enter an address' }],
    });

    return (
      <Form.Item>
        {decorator(
          <Input
            placeholder="Address"
          />,
        )}
      </Form.Item>
    );
  };

  renderSubmitButton = () => {
    const { form } = this.props;
    const { getFieldsError } = form;

    return (
      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
        Log in
        </Button>
      </Form.Item>
    );
  };

  render() {
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Row>
          {this.renderTitle()}
          <Col span={12}>
            {this.renderAddressFiled()}
          </Col>
          <Col span={12}>
            {this.renderSubmitButton()}
          </Col>
        </Row>
      </Form>
    );
  }
}

const Login = Form.create({ name: 'loginForm' })(LoginForm);
const mapDispatchToProps = dispatch => ({
  handleLogin: address => dispatch(loginAction(address)),
});

export default connect(null, mapDispatchToProps)(Login);
