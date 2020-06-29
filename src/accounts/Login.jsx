import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const Login = () => (
  <Row type="flex" align="middle" justify="center" algin="middle" style={{ minHeight: '100vh' }}>
    <Col span={4}>
      <Form>
        <Form.Item
          label="Username"
          name="username"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Col>
  </Row>
);

export default Login;
