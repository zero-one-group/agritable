import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface WebSharedDashboardUiProps {}

const StyledWebSharedDashboardUi = styled.div`
  color: pink;
`;

export function WebSharedDashboardUi(props: WebSharedDashboardUiProps) {
  return (
    <StyledWebSharedDashboardUi>
      <h1>Welcome to WebSharedDashboardUi!</h1>
    </StyledWebSharedDashboardUi>
  );
}

export default WebSharedDashboardUi;
