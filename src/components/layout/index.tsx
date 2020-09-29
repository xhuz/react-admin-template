import {Drawer, Layout} from 'antd';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useGetter} from '../../hooks/';
import {closeSidebar, toggleDevice, toggleSidebar} from '../../store';
import {isMobile} from '../../utils/is-mobile';
import {Navbar} from './Navbar';
import {Sidebar} from './Sidebar';

interface BaseLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function BaseLayout({children}: BaseLayoutProps) {
  const [isInit, changeInit] = useState(true); // 模拟类组件componentDidMount钩子方法，初始状态
  const {sidebar, device} = useGetter('app');
  const dispatch = useDispatch();
  const resizeHandle = () => {
    if (!document.hidden) {
      if (isMobile()) {
        dispatch(toggleDevice('mobile'));
        dispatch(closeSidebar());
      } else {
        dispatch(toggleDevice('desktop'));
      }
    }
  };

  // 模拟类组件componentDidMount钩子方法
  useEffect(() => {
    if (isInit) {
      if (isMobile()) {
        dispatch(toggleDevice('mobile'));
        dispatch(closeSidebar());
        changeInit(false);
      }
    }
  }, [dispatch, isInit]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandle);

    return () => {
      window.removeEventListener('resize', resizeHandle);
    };
  });
  return (
    <Layout className="app-layout" style={{height: '100vh'}}>
      {device === 'mobile' && (
        <Drawer
          width={200}
          placement="left"
          closable={false}
          visible={sidebar.opened ? true : false}
          onClose={() => {
            dispatch(toggleSidebar());
          }}
        >
          <Sidebar></Sidebar>
        </Drawer>
      )}
      {device === 'desktop' && <Sidebar></Sidebar>}
      <Layout style={{paddingTop: '50px'}}>
        <Navbar></Navbar>
        <Layout.Content>
          <div className="app-main">{children}</div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
