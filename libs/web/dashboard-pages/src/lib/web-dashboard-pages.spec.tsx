import { render } from '@testing-library/react';

import WebDashboardPages from './web-dashboard-pages';

describe('WebDashboardPages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebDashboardPages />);
    expect(baseElement).toBeTruthy();
  });
});
