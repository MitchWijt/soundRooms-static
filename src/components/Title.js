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

export const TextBold = styled.p`
  color: #ffffff;
  font-size: ${(props) => props.fontsize ? props.fontsize : '30px'};
  font-family: Inter-Bold;
  ${(props) => props.padding ? `padding: ${props.padding}` : 'padding: 0'};
  ${(props) => props.margin ? `margin: ${props.margin}` : 'margin: 0'};
  ${(props) => props.center ? 'text-align: center' : ''};
`

export const TextLight = styled.p`
  color: #ffffff;
  font-size: ${(props) => props.fontsize ? props.fontsize : '30px'};
  font-family: Inter-Light;
  ${(props) => props.padding ? `padding: ${props.padding}` : 'margin: 0'};
  ${(props) => props.margin ? `margin: ${props.margin}` : 'margin: 0'};
  ${(props) => props.center ? 'text-align: center' : ''};
`
