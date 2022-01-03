import React from 'react'
import Wrapper from '../../components/Wrapper'
import { Title, SubTitle } from '../../components/Title'
import { HomeButton } from '../../components/HomeButton'
import { FlexContainer, UspContainer } from '../../components/StyledContainer'
import { UspItem } from '../../components/UspItem'

const Home = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <Title center margin='0 0 0 0' padding='150px 0 0 0' fontsize='40px'>Welcome to Sound Rooms</Title>
        <SubTitle center fontsize='30px' margin='20px 0 70px 0'>The place where people connect by the means of music</SubTitle>
        <div className='center'>
          <HomeButton>Join with Spotify</HomeButton>
        </div>
      </FlexContainer>
      <UspContainer>
        <UspItem icon='box' text='Explore / create music rooms' />
        <UspItem icon='users' text='Make friends & connect' />
        <UspItem icon='message-circle' text='Have a chat (voice/message)' />
        <UspItem text='Have fun! :)' />
      </UspContainer>
    </Wrapper>
  )
}

export default Home
