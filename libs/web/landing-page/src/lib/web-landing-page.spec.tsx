import { render } from '@testing-library/react';

import WebLandingPage from './web-landing-page';

describe('WebLandingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLandingPage />);
    expect(baseElement).toBeTruthy();
  });
});
