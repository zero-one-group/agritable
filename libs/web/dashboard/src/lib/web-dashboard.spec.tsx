import { render } from '@testing-library/react';

import WebDashboard from './web-dashboard';

describe('WebDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
