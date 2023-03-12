import styled from "styled-components";

export const Container = styled.div`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize};
  color: ${(props) => props.theme.palette.text.primary};
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette.background.primary};
`;

export const ErrorContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-flow: row nowrap;
`;

export const Error = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;