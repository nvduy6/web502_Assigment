import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Sidebar from "../../components/Sidebar";
import { Input, Space } from 'antd';
import { Image } from 'antd';
const { Search } = Input;
// const onSearch = value => console.log(value);
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  HomeOutlined ,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

}
type Props = {}
const AdminLayout = (props: Props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible >
    <Image className='logo'
      width={60}
      src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to={"/admin"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to={"/admin/products"}>Producst</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DesktopOutlined />}>
          <Link to={"/admin/categorys"}>Category</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<DesktopOutlined />}>
          <Link to={"/admin/news"}>Blog</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="5">Tom</Menu.Item>
          <Menu.Item key="6">Bill</Menu.Item>
          <Menu.Item key="7">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="8">Team 1</Menu.Item>
          <Menu.Item key="9">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="10" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  )
}

export default AdminLayout