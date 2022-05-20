import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export function Footer() {
  return (
    <Box bg="green.500">
      <Container
        as="footer"
        role="contentinfo"
        py={{ base: '12', md: '16' }}
        maxW="container.xl"
      >
        <Stack spacing={{ base: '4', md: '5' }}>
          <Stack justify="space-between" direction="row" align="center">
            <Box fontSize="25px" fontWeight="bold" color="white">
              Agritable
            </Box>
            <ButtonGroup variant="ghost-on-accent">
              <IconButton
                color="white"
                as="a"
                href="#apechth2022"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                color="white"
                as="a"
                href="#apecth2022"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                color="white"
                as="a"
                href="#apecth2022"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="white">
            &copy; {new Date().getFullYear()} Agritable, Inc. All rights
            reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
