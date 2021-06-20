import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggleOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggleOpen}>
            <Icon onClick={toggleOpen}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggleOpen}> About </SidebarLink>
                    <SidebarLink to="discover" onClick={toggleOpen}> discover </SidebarLink>
                    <SidebarLink to="services" onClick={toggleOpen}> services </SidebarLink>
                    <SidebarLink to="contact" onClick={toggleOpen}> contact </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign in</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
