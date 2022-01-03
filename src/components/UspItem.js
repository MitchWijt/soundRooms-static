import React from 'react'
import styled from 'styled-components'
import FeatherIcon from 'feather-icons-react'

const UspContainer = styled.div`
  padding: 20px 0 20px 0;
  border-radius: 10px;
  margin: 0 20px 0 20px;
  width: 20%;
  background: #2C2C2C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const UspTitle = styled.span`
  font-size: 20px;
  color: #ffffff;
  font-family: Inter-Bold;
`

export const UspItem = (props) => {
  return (
    <UspContainer>
      <FeatherIcon size='100' stroke-width='0.6' icon={props.icon} />
      <UspTitle>{props.text}</UspTitle>
    </UspContainer>
  )
}

export default UspItem
