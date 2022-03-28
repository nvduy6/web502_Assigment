import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Sidebar from "../../components/Sidebar";
import { Input, Space } from 'antd';
import { Image } from 'antd';
const { Search } = Input;
// const onSearch = value => console.log(value);
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  UserAddOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  BankOutlined,
  FunnelPlotOutlined ,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
type Props = {}
const AdminLayout = (props: Props) => {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >

        <Image
          width={150}
          src="https://ap.poly.edu.vn/images/logo.png"
        />


        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Search placeholder="input search text" style={{ width: 200 }} />
          <Menu.Item key="1" icon={<BankOutlined />}>
            <Link to={"/admin/products"}>Home </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ShopOutlined />}>
          <Link to={"/admin/products"}>Product</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FunnelPlotOutlined />}>
          <Link to={"/admin/products"}>Category</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserAddOutlined />}>
          <Link to={"/admin/products"}>User</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<CloudOutlined />}>
            nav 5
          </Menu.Item>
          <Menu.Item key="6" icon={<AppstoreOutlined />}>
            nav 6
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            nav 7
          </Menu.Item>
          <Menu.Item key="8" icon={<ShopOutlined />}>
            nav 8
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout