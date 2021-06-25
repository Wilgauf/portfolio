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
                    <SidebarLink to="projects" onClick={toggleOpen}> Projects </SidebarLink>
                    <SidebarLink to="discover" onClick={toggleOpen}> Discover </SidebarLink>
                    <SidebarLink to="contact" onClick={toggleOpen}> Contact </SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign in</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
