import React from 'react'
import Wrapper from '../../components/Wrapper'
import { Title, SubTitle } from '../../components/Title'
import { Button } from '../../components/Button'
import { FlexContainer, UspContainer } from '../../components/StyledContainer'

const Home = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <Title center margin='0 0 0 0' padding='150px 0 0 0' fontsize='50px'>Welcome to Sound Rooms</Title>
        <SubTitle center fontsize='30px' margin='20px 0 100px 0'>The place where people connect by the means of music</SubTitle>
        <div className='center'>
          <Button>Join with Spotify</Button>
        </div>
      </FlexContainer>
      <UspContainer>
        <p>Item 1</p>
        <p>Item 1</p>
        <p>Item 1</p>
      </UspContainer>
    </Wrapper>
  )
}

export default Home
