import {DownOutlined} from '@ant-design/icons';
import {Avatar, Dropdown, Layout, Menu} from 'antd';
import classNames from 'classnames';
import React from 'react';
import {useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {useEffectDispatch, useGetter} from '../../hooks';
import {toggleSidebar} from '../../store';
import {logoutEffect} from '../../store/modules/user/thunk';
import variable from '../../styles/variables.scss';
import {Breadcrumb} from './Breadcrumb';
import {Hamburger} from './Hamburger';

const {Header} = Layout;

export function Navbar() {
  const {
    sidebar: {opened},
    device
  } = useGetter('app');

  const dispatch = useDispatch();
  const history = useHistory();
  const EffectDispatch = useEffectDispatch();
  const hamburgerClickHandle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Header
      className={`header ${classNames({
        opened: device === 'desktop' && opened,
        collapsed: device === 'desktop' && !opened
      })}`}
    >
      <div className="navbar clearfix">
        <div className="hamburger-container" onClick={hamburgerClickHandle}>
          <Hamburger isActive={opened ? true : false}></Hamburger>
        </div>
        <div className="breadcrumb-container">
          <Breadcrumb></Breadcrumb>
        </div>
        <div className="right-menu">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <Link to="/dashboard">返回主页</Link>
                </Menu.Item>
                <Menu.Item
                  onClick={async () => {
                    await EffectDispatch(logoutEffect());
                    history.push('/login');
                  }}
                >
                  退出登陆
                </Menu.Item>
              </Menu>
            }
          >
            <div style={{padding: '0 15px'}}>
              <Avatar
                style={{marginRight: '5px'}}
                size={40}
                shape="square"
                src="http://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
              />
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>

      {/* ----------------- */}
      <style jsx>{`
        .navbar {
          height: 100%;
        }
        .hamburger-container {
          float: left;
          padding: 0 15px;
          line-height: ${variable.navbarHeight};
          height: 100%;
          float: left;
          cursor: pointer;
          transition: background 0.3s;
          -webkit-tap-highlight-color: transparent;
          &:hover {
            background: rgba(0, 0, 0, 0.025);
          }
        }
        .breadcrumb-container {
          float: left;
          cursor: pointer;
        }

        .right-menu {
          float: right;
        }
      `}</style>
    </Header>
  );
}
