import React from 'react'
import { Outlet } from 'react-router-dom'


//import components
import SideBar from './Navigation'
import Header from './Header'

import styled from 'styled-components';


//styles
const Container = styled.section`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  position: relative;
`
const Content = styled.div`
  padding: 20px;
  flex: 1;
  overflow-y: scroll;
`
const TopContent = styled.div`
  height:100px;
`


const Layout = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <TopContent>
          <Header />
        </TopContent>
        <Outlet />
      </Content>
    </Container>
  )
}

export default Layout

