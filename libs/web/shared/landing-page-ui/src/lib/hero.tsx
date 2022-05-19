import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Img,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export function Hero() {
  return (
    <Box as="section">
      <Box position="relative" height={{ lg: '720px' }}>
        <Container pb={{ base: '12' }} height="full" maxW="container.xl">
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: '16' }}
            align={{ lg: 'center' }}
            height="full"
          >
            <Stack spacing={{ base: '8', md: '12' }}>
              <Stack spacing="4">
                <Badge
                  colorScheme="green"
                  alignSelf="start"
                  size={useBreakpointValue({ base: 'md', md: 'lg' })}
                >
                  New components available
                </Badge>
                <Stack
                  spacing={{ base: '4', md: '6' }}
                  maxW={{ md: 'xl', lg: 'md', xl: 'xl' }}
                >
                  <Heading size={useBreakpointValue({ base: 'md', md: 'xl' })}>
                    Create your app remarkable fast
                  </Heading>
                  <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">
                    Choose from over 210+ beautiful and responsive components
                    and build your app twice as fast.
                  </Text>
                </Stack>
              </Stack>
              <Stack direction={{ base: 'column', md: 'row' }} spacing="3">
                <Button
                  variant="primary"
                  size={useBreakpointValue({ base: 'lg', md: 'xl' })}
                >
                  Buy now
                </Button>
                <Button
                  variant="secondary"
                  size={useBreakpointValue({ base: 'lg', md: 'xl' })}
                >
                  Learm more
                </Button>
              </Stack>
            </Stack>
            <Box
              right="0"
              bottom="0"
              w={{ base: 'full', lg: '50%' }}
              height={{ base: '96', lg: 'full' }}
              sx={{
                clipPath: { lg: 'polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)' },
              }}
            >
              <Img
                boxSize="full"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1498408040764-ab6eb772a145?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000"
                alt="Lady at work"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Hero;
