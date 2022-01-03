import React from 'react'
import styled from 'styled-components'
import { TextBold, TextLight } from '../components/Title'

const RoomContainer = styled.div`
  background: #242424;
  max-width: 300px;
  height: 360px;
  margin: 0 20px 0 20px;
`

const ImageContainer = styled.div`
  margin: 15px;
`

const RoomImage = styled.div`
  background-image: url(${(props) => props.thumbnail});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 15px;
  height: 257px;
`

export const Room = (props) => (
  <RoomContainer>
    <ImageContainer>
      <RoomImage {...props} />
      <TextBold fontsize='20px;'>{props.title}</TextBold>
      <TextLight fontsize='15px'>{props.subtitle}</TextLight>
    </ImageContainer>
  </RoomContainer>
)
