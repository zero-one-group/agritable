import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface WebDashboardProps {}

const StyledWebDashboard = styled.div`
  color: pink;
`;

export function WebDashboard(props: WebDashboardProps) {
  return (
    <StyledWebDashboard>
      <h1>Welcome to WebDashboard!</h1>
    </StyledWebDashboard>
  );
}

export default WebDashboard;
