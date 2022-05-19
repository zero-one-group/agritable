import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface WebLandingPageProps {}

const StyledWebLandingPage = styled.div`
  color: pink;
`;

export function WebLandingPage(props: WebLandingPageProps) {
  return (
    <StyledWebLandingPage>
      <h1>Welcome to WebLandingPage!</h1>
    </StyledWebLandingPage>
  );
}

export default WebLandingPage;
