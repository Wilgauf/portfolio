import React from 'react'
import { ContactContainer, ContactWrapper, Column1, ContactHeader, ContactSubtitle, ContactMethod, MethodTitle, MethodDetail, MethodDetailA, ContactRow, Column2, FormContent, FormHeader, FormInput, ContactForm, MethodWrap, IconWrap } from './ContactElements'
import { Button } from '../ButtonElement'
import { FaPhoneAlt, FaMailBulk, FaLinkedinIn } from 'react-icons/fa'
const Contact = () => {
    return (
        <>
         <ContactContainer id="contact">
             <ContactWrapper>
             <ContactRow>
                <Column1>
                <ContactHeader>Get in touch</ContactHeader>
                <ContactSubtitle>Lets get a coffee?</ContactSubtitle>
                <ContactMethod>
                    <IconWrap>
                        <FaPhoneAlt size={30}/> 
                    </IconWrap>
                    <MethodWrap>
                        <MethodTitle>Call me</MethodTitle>
                        <MethodDetail>317-777-4534</MethodDetail>
                    </MethodWrap>
                </ContactMethod>
                <ContactMethod>
                    <IconWrap>
                        <FaMailBulk size={30}/> 
                    </IconWrap>
                    <MethodWrap>
                        <MethodTitle>Send a note</MethodTitle>
                        <MethodDetail>wilsongauf@gmail.com</MethodDetail>
                    </MethodWrap>
                </ContactMethod>
                <ContactMethod>
                    <IconWrap>
                        <FaLinkedinIn size={30}/> 
                    </IconWrap>
                    <MethodWrap>
                    <MethodTitle>Connect with me</MethodTitle>
                    <MethodDetailA href="//www.linkedin.com/in/wilson-gauf/" target="_blank" >https://www.linkedin.com/in/wilson-gauf/
</MethodDetailA>
                    </MethodWrap>
                    
                </ContactMethod>
                </Column1>
                <Column2>
                    <FormContent>
                    <ContactForm>
                        <FormHeader>Send me a message</FormHeader>
                        <FormInput  placeholder={'Name'}/>
                        <FormInput placeholder={'Email'} />
                        <FormInput placeholder={'Subject'}/>
                        <FormInput placeholder={'Message'} contenteditable="true"/>

                            <Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80}> Send Message </Button>

                    </ContactForm>
                    </FormContent>
                </Column2>
            </ContactRow>
            </ContactWrapper>
         </ContactContainer>   
        </>
    )
}

export default Contact
