import { Layout, Menu, Breadcrumb, Switch, Card } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import './Page.css';
import Cards from './Cards.js';
import Photos from './Photos.js';
import Routing from '../src/router/router'
import { Input } from 'antd';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Page extends React.Component{
    state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  
    render(){
        const image = require('./assets/badge-logohdpi.png')
        return(
            <Layout className="body" style={{minHeight:500}}>
                <Header className="header">
                {/* <div className="logo">
                    <img alt="" src={image} style={{width: '5%'}}/>
                </div>
                */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="0">
                        <img src={image}/>
                    </Menu.Item>
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/profile-page">Profile</Link></Menu.Item>

                    <Search
                        placeholder="Search"
                        onSearch={value => console.log(value)}
                        style={{ marginLeft: '850px',width: 200 }}/>
                </Menu>
                </Header>
                <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        theme={this.state.theme}
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                    <Switch className="switch"
                        checked={this.state.theme === 'dark'}
                        onChange={this.changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"/>
                    <br />
                    <br />
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <UserOutlined />
                            Dashboard
                        </span>
                        }
                    >
                        <Menu.Item key="1">Page Content</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 500,
                    }}
                    >
                    <div>
                    <Routing/>
                        {/* <Photos/>
                    </div>
                    <div>
                        <Card style={{marginTop: '24px'}}>
                            <p
                            style={{
                                textAlign: "center",
                                fontSize: "30px"
                            }}
                            >Please Vote Below for The Best Employee of the Year</p>
                            <p
                            style={{
                                textAlign: "center",
                                color: 'rgb(130, 133, 138)'
                                
                            }}
                            >Voting is the expression of our commitment to ourselves and the future</p>
                        </Card>
                        <Cards/> */}
                    </div>
                    <div>

                    </div>
                    
                    
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Page;