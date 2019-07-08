/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { connect } from 'react-redux';
import React from 'react';
import { Form } from 'antd'; // TODO: re-order the imports by type
import TextInput from 'Components/TextInput';
import Button from 'Components/Button';
import { hasErrors } from 'Utils/formHelpers.util';
import Box from 'Components/Box';
import { sendCoin } from 'Actions/coin.actions';
import isFloat from 'Utils/isFloat';

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
      if (!err) {
        handleSend(toAddress, amount);
        resetFields();
      }
    });
  };

  amountValidator = (rule, value, callback) => {
    const float = parseFloat(value);
    if (isFloat(value) && float > 0) return callback();
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
        {decorator(<TextInput placeholder="Amount" autoComplete="off" />)}
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
          Send
        </Button>
      </Form.Item>
    );
  };

  // TODO: find a way to disable the error message under the field
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

// TODO: rename handleSend -> send
// TODO: forms' names should be a constant
const Send = Form.create({ name: 'sendForm' })(SendForm);
const mapDispatchToProps = dispatch => ({
  handleSend: (toAddress, amount) => dispatch(sendCoin(toAddress, amount)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Send);
