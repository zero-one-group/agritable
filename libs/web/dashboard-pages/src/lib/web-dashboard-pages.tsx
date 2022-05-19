import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface WebDashboardPagesProps {}

const StyledWebDashboardPages = styled.div`
  color: pink;
`;

export function WebDashboardPages(props: WebDashboardPagesProps) {
  return (
    <StyledWebDashboardPages>
      <h1>Welcome to WebDashboardPages!</h1>
    </StyledWebDashboardPages>
  );
}

export default WebDashboardPages;
