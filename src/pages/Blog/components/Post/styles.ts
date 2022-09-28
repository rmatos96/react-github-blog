import styled from "styled-components";

export const PostContent = styled.div`
  position: relative;
  width: 416px;
  height: 260px;
  top: 350px;
  padding: 2rem;

  background: ${props => props.theme['base-post']};
  border-radius: 10px;

  div{
    display: flex;
    justify-content: space-between;
  }    

  b{
    left: 32px;
    right: 101px;
    top: 32px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;

    color: ${props => props.theme['base-title']};
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 2;
  }

  span{
      text-align:center;
      min-height: 22px;
      right: 32px;
      top: 37px;

      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;

      color: ${props => props.theme['base-span']};
    }

    p{
      left: 32px;
      right: 32px;
      top: 116px;
      bottom: 32px;

      margin-top: 1.5rem;

      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;

      color: ${ props => props.theme['base-text']};
      display: -webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
    }
` 