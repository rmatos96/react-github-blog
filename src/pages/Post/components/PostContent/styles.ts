import styled from "styled-components";

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px;
  gap: 24px;

  position: absolute;
  width: 864px;
  height: 422px;
  left: calc(50% - 864px/2);
  top: 376px;

  p{
    width: 800px;
    height: 208px;


    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;

    color: ${props => props.theme['base-text']};

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    span{
      text-decoration: underline;
      color: ${props => props.theme['blue']};
    }
  }
`