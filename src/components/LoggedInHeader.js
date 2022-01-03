import styled from 'styled-components'

const LoggedInHeaderContainer = styled.div`
  display: flex;
  justify-content: right;
`

const LoggedInHeaderImage = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  height: 70px;
  width: 70px;
`

export const LoggedInHeader = (props) => (
  <LoggedInHeaderContainer>
    <LoggedInHeaderImage src={props.src} />
  </LoggedInHeaderContainer>
)
