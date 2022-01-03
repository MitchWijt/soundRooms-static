import React from 'react'
import styled from 'styled-components'
import FeatherIcon from 'feather-icons-react'

const TitleButtonContainer = styled.div`
  position: relative;
`

const CircleIconButton = ({ className, icon }) => (
  <FeatherIcon size='30' className={className} icon={icon} />
)

const CircleButton = styled(CircleIconButton)`
  padding: 5px 5px 5px 5px;
  position: absolute;
  top: -15px;
  right: -40px;
  border: 0;
  border-radius: 100%;
  background: #004BC9;

  &:hover {
    cursor: pointer;
    background: #003CA2;
  }
`

const Title = styled.span`
  color: #ffffff;
  font-size: ${(props) => props.fontsize ? props.fontsize : '30px'};
  font-family: Inter-Bold;
  ${(props) => props.padding ? `padding: ${props.padding}` : ''};
  ${(props) => props.margin ? `margin: ${props.margin}` : ''};
  ${(props) => props.center ? 'text-align: center' : ''};
  position: relative;   
`

export const TitleButton = (props) => {
  return (
    <TitleButtonContainer onClick={props.onClick}>
      <Title fontsize='40px'>{props.title}
        <CircleButton icon={props.icon} />
      </Title>
    </TitleButtonContainer>
  )
}
