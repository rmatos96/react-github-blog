import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: absolute;
  width: 864px;
  height: 212px;
  left: calc(50% - 864px/2);
  top: 208px;

  background: ${props => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img{
    position: absolute;
    width: 148px;
    height: 148px;
    left: 40px;
    top: calc(50% - 148px/2);

    background: url(.png);
    border-radius: 8px;
  }

  h1{
    position: absolute;
    height: 31px;
    left: 220px;
    top: calc(50% - 31px/2 - 50.5px);


    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;

    color: ${props => props.theme['base-title']};
  }

  p{
    position: absolute;
    width: 612px;
    height: 52px;
    left: 220px;
    top: 79px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: ${props => props.theme['base-text']};
  }
`
export const GithubIcon = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  

  position: absolute;
  width: 67px;
  height: 19px;
  right: 32px;
  top: 40px;
  gap: 2px;

  span{
    width: 47px;
    height: 19px;

    /* Components/Link */

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;

    text-transform: uppercase;


    color: ${props => props.theme['blue']};



    flex: none;
    flex-grow: 0;
  }
`

export const ProfileIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;

  position: absolute;
  width: 393px;
  height: 26px;
  left: 220px;
  top: calc(50% - 26px/2 + 62px);

  a{
    height: 26px;
    
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
  
    color: #C4D4E3;

    flex: none;
    flex-grow: 0;
    text-decoration: none;
    margin-left: -1rem;
  }
`