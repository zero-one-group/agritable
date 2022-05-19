import { render } from '@testing-library/react';

import WebSharedDashboardUi from './web-shared-dashboard-ui';

describe('WebSharedDashboardUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebSharedDashboardUi />);
    expect(baseElement).toBeTruthy();
  });
});
