import styled from 'styled-components'

export const FullContainer = styled.div`
  height: 100vh;
`

export const PublishedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 212px;
  left: calc(50% - 864px/2);
  top: 208px;

  h2{
    position: absolute;
    width: 99px;
    height: 29px;
    top: 492px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;

    color: #C4D4E3;
  }
  
  > span{
    position: absolute;
    height: 22px;
    right: 528px;
    top: 496px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;

    text-align: right;


    color: ${props => props.theme['base-span']};
  }
`

export const PostsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-bottom: 14rem;
`