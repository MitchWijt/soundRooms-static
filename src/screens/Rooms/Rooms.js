import React from 'react'
import { Wrapper } from '../../components/Wrapper'
import { TitleButton } from '../../components/TitleButton'
import { LoggedInHeader } from '../../components/LoggedInHeader'
import { Container, UspContainer } from '../../components/StyledContainer'
import { Room } from '../../components/Room'

const rooms = require('../../mockData/rooms.json')

console.log(rooms)

const Rooms = () => {
  return (
    <Wrapper>
      <Container>
        <LoggedInHeader src='https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' />
        <TitleButton icon='plus' title='Current rooms' />
      </Container>

      <UspContainer margin='20px 0 0 0'>
        {
          rooms.map((room) => {
            return <Room {...room} key={room.title} />
          })
        }
      </UspContainer>
    </Wrapper>

  )
}

export default Rooms
