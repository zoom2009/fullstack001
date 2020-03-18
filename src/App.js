import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import styled from 'styled-components'

const { Header, Content, Footer } = Layout

const Item = styled(Menu.Item)`
  height: 100%;
  padding-top: 8px;
  font-size: 18px;
`

const Logo = () => (
  <div style={{ float: 'left', color: 'white', paddingRight: '50px' }}>LOGO</div>
)

const ContentSection = styled.div`
  height: calc(100vh - 190px);
`

const Tab = ({ tabs }) => (
  <Breadcrumb style={{ margin: '16px 0' }}>
    {tabs.map(({ path, text }) => (
      <Breadcrumb.Item key={path}><Link to={path}>{text}</Link></Breadcrumb.Item>
    ))}
  </Breadcrumb>
)

const CreatePage = () => (
  <div>
    <Tab tabs={[
      { path: '/home/create', text: 'Create Data' },
      { path: '/home/list', text: 'List Data' }
    ]} />
    <ContentSection>
      <Switch>
        <Route exact path={['/', '/home', '/home/create']}>
          <div>Create Form</div>
        </Route>
        <Route path="/home/list">
          <div>List Data</div>
        </Route>
      </Switch>
    </ContentSection>
  </div>
)

const AboutPage = () => (
  <div>
    <Tab tabs={[
      { path: '/about/experience', text: 'My Experience' },
      { path: '/about/skill', text: 'My Skill' }
    ]} />
    <ContentSection>
      <Switch>
        <Route exact path={['/', '/about', '/about/experience']}>
          <div>My Experience</div>
        </Route>
        <Route path="/about/skill">
          <div>My Skill</div>
        </Route>
      </Switch>
    </ContentSection>
  </div>
)

const App = () => (
  <BrowserRouter>
    <Layout className="layout">
      <Header>
        <Logo />
        <Menu
          style={{ height: '100%' }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Item key="1"><Link to="/home">Home</Link></Item>
          <Item key="2"><Link to="/about">About me</Link></Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path={['/', '/home']} component={CreatePage} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </BrowserRouter>
)

export default App
