import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const UspContainer = styled.div`
  ${(props) => props.margin ? `margin: ${props.margin}` : ''};
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Container = styled.div`
  padding: 20px 20px 0 20px;
`
