import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  

  input {
  position: absolute;
  width: 864px;
  height: 50px;
  left: calc(50% - 864px/2);
  top: 533px;
  padding: 12px 16px;
  gap: 8px;

  background: ${props => props.theme['base-input']};

  border: 1px solid ${props => props.theme['base-border']};
  border-radius: 6px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;

    &::placeholder {
      color: ${props => props.theme['base-label']};
    }
  }
`