import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface WebSharedUiProps {}

const StyledWebSharedUi = styled.div`
  color: pink;
`;

export function WebSharedUi(props: WebSharedUiProps) {
  return (
    <StyledWebSharedUi>
      <h1>Welcome to WebSharedUi!</h1>
    </StyledWebSharedUi>
  );
}

export default WebSharedUi;
