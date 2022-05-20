import {
  Box,
  Center,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaCopy, FaPlug, FaRecycle } from 'react-icons/fa';
import { FeatureSection } from './feature-section';

export function Feature() {
  return (
    <Box as="section" bg={mode('green.50', 'green.800')} pt="16" pb="32">
      <Box
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
      >
        <Heading
          textAlign="center"
          letterSpacing="tight"
          fontWeight="extrabold"
        >
          We mantain and stabilize commodity prices across economies
        </Heading>
        <Box mt="24">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: '16', md: '8' }}
          >
            <Stack spacing="12" maxW="lg">
              <FeatureSection
                icon={<Box as={FaCopy} w="6" h="6" />}
                title="Inventory Management System"
              >
                Track your Inventory and batch of the produce
              </FeatureSection>
              <FeatureSection
                icon={<Box as={FaPlug} w="6" h="6" />}
                title="Distributed Supply and Demand"
              >
                Prevent Drop of the Price or Skyrocketing one
              </FeatureSection>
              <FeatureSection
                icon={<Box as={FaRecycle} w="6" h="6" />}
                title="Achieve Bio-Circular-Green Economy"
              >
                No throwing away surplus production
              </FeatureSection>
            </Stack>
            <Center shadow="lg" minH="26rem">
              <Img
                objectFit="cover"
                w="full"
                h="full"
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874"
                alt="Crop"
              />
            </Center>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default Feature;
