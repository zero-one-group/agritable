import {
  Center,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';

interface FeatureSectionProps {
  icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
}

export function FeatureSection(props: FeatureSectionProps) {
  const { title, children, icon } = props;
  return (
    <Stack direction="row" w="100%" spacing="6">
      <Center
        aria-hidden
        flexShrink={0}
        w="12"
        h="12"
        rounded="md"
        color="white"
        bg="green.500"
      >
        {icon}
      </Center>
      <Stack>
        <Text as="h3" fontSize="xl" fontWeight="extrabold">
          {title}
        </Text>
        <Text pr="6" color={mode('green.600', 'green.400')} lineHeight="tall">
          {children}
        </Text>
      </Stack>
    </Stack>
  );
}

export default FeatureSection;
