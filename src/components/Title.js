import styled from 'styled-components'

export const Title = styled.h1`
  color: #ffffff;
  font-size: ${(props) => props.fontsize ? props.fontsize : '30px'};
  font-family: Inter-Bold;
  ${(props) => props.padding ? `padding: ${props.padding}` : ''};
  ${(props) => props.margin ? `margin: ${props.margin}` : ''};
  ${(props) => props.center ? 'text-align: center' : ''};
`

export const SubTitle = styled.h2`
  color: #ffffff;
  font-size: ${(props) => props.fontsize ? props.fontsize : '30px'};
  font-family: Inter-Bold;
  ${(props) => props.padding ? `padding: ${props.padding}` : ''};
  ${(props) => props.margin ? `margin: ${props.margin}` : ''};
  ${(props) => props.center ? 'text-align: center' : ''};
`
