import { WebLandingPage } from '@agritable/web/landing-page';
import { ChakraProvider } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <WebLandingPage />
    </ChakraProvider>
  );
}

export default App;
