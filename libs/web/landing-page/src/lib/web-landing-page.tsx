import {
  Navbar,
  Hero,
  Feature,
  Footer,
} from '@agritable/web-shared-landing-page-ui';
import { Box } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface WebLandingPageProps {}

export function WebLandingPage(props: WebLandingPageProps) {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Feature />
      <Footer />
    </Box>
  );
}

export default WebLandingPage;
