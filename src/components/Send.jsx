/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { connect } from 'react-redux';
import React from 'react';
import { Form } from 'antd';
import TextInput from 'Components/TextInput';
import Button from 'Components/Button';
import { hasErrors } from 'Utils/formHelpers.util';
import Box from 'Components/Box';
import { sendCoin } from 'Actions/coin.actions';

const formStyle = css`
    text-align: center;
`;

const formItemStyle = css`
  height: 30px;
  padding: 5px;
  width: 200px;
  margin: auto;
  font-size: 17px;
  color: #c1c1c1;
 `;

class SendForm extends React.PureComponent {
  componentDidMount() {
    const { form } = this.props;
    form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form, handleSend } = this.props;
    const { resetFields } = form;
    form.validateFields((err, values) => {
      const { toAddress, amount } = values;
      if (err) {
        console.log('Received values of form: ', values);
      } else {
        handleSend(toAddress, amount);
        resetFields();
      }
    });
  };

  amountValidator = (rule, value, callback) => {
    const number = parseFloat(value, 10);
    const containsOnlyNumbers = /^\d+$/.test(value);
    const isAPositiveNumber = !Number.isNaN(number) && number > 0;

    if (containsOnlyNumbers && isAPositiveNumber) return callback();
    return callback(' ');
  };

  renderAddressFiled = () => {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const decorator = getFieldDecorator('toAddress', {
      rules: [{ required: true, message: ' ' }],
    });

    return (
      <Form.Item css={formItemStyle}>
        {decorator(<TextInput placeholder="Address" />)}
      </Form.Item>
    );
  };

  renderAmountFiled = () => {
    const { amountValidator } = this;
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const decorator = getFieldDecorator('amount', {
      rules: [{ required: true, message: ' ' }, { validator: amountValidator }],
    });

    return (
      <Form.Item css={formItemStyle}>
        {decorator(<TextInput placeholder="Amount" />)}
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
        <Box title="Send Jobcoin">
          {this.renderAddressFiled()}
          {this.renderAmountFiled()}
          {this.renderSubmitButton()}
        </Box>
      </Form>
    );
  }
}

const Send = Form.create({ name: 'sendForm' })(SendForm);
const mapDispatchToProps = dispatch => ({
  handleSend: (toAddress, amount) => dispatch(sendCoin(toAddress, amount)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Send);
