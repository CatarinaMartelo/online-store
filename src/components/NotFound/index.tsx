import { Error, ErrorContainer } from "./styles";

const NotFound = () => {

  return (
    <ErrorContainer>
    <Error>
      <h1>404 - Page not found!</h1>
    </Error>
    </ErrorContainer>
  );
};

export default NotFound;
