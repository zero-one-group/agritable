import { render } from '@testing-library/react';

import WebSharedUi from './web-shared-ui';

describe('WebSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebSharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
