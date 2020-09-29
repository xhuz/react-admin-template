import React from 'react';
import {Form, Input, Button} from 'antd';
import {SvgIcon} from '../../components/svg-icon/SvgIcon';
import './login.scss';
import {loginEffect} from '../../store/modules/user/thunk';
import {useHistory} from 'react-router-dom';
import {getQueryString} from '../../utils/get-query-string';
import {useEffectDispatch} from '../../hooks';

export default function() {
  const effectDispatch = useEffectDispatch();
  const history = useHistory();
  const defaultUser = {username: 'admin', password: '123456'};
  const submit = async (value: typeof defaultUser) => {
    await effectDispatch(loginEffect(value));
    const redirect = getQueryString('redirect');
    redirect ? history.push(redirect) : history.push('/dashboard');
  };
  return (
    <div className="login-container">
      <Form
        className="login-form"
        initialValues={defaultUser}
        onFinish={submit}
      >
        <div className="title-container">
          <h3 className="title">百年骑士团Adjust后台</h3>
        </div>
        <Form.Item name="username">
          <div>
            <Input
              size="large"
              defaultValue={defaultUser.username}
              prefix={<SvgIcon iconName="user" />}
            ></Input>
          </div>
        </Form.Item>
        <Form.Item name="password">
          <Input.Password
            size="large"
            prefix={<SvgIcon iconName="password" />}
            iconRender={visible => {
              return visible ? (
                <span>
                  <SvgIcon iconName="eye-open" />
                </span>
              ) : (
                <span>
                  <SvgIcon iconName="eye" />
                </span>
              );
            }}
          ></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            htmlType="submit"
            className="login-button"
            type="primary"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
