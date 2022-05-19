import { Box, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { BsCaretRightFill } from 'react-icons/bs';

interface NavItemProps {
  href?: string;
  label: string;
  subtle?: boolean;
  active?: boolean;
  icon: React.ReactElement;
  endElement?: React.ReactElement;
  children?: React.ReactNode;
}

export const NavItem = (props: NavItemProps) => {
  const { active, subtle, icon, children, label, endElement, href } = props;
  return (
    <HStack
      as="a"
      w="full"
      href={href}
      px="3"
      py="2"
      cursor="pointer"
      userSelect="none"
      rounded="md"
      transition="all 0.2s"
      bg={active ? 'green.700' : undefined}
      _hover={{ bg: 'green.700' }}
      _active={{ bg: 'green.600' }}
    >
      <Box fontSize="lg" color={active ? 'currentcolor' : 'green.400'}>
        {icon}
      </Box>
      <Box
        flex="1"
        fontWeight="inherit"
        color={subtle ? 'green.400' : undefined}
      >
        {label}
      </Box>
      {endElement && !children && <Box>{endElement}</Box>}
      {children && <Box fontSize="xs" flexShrink={0} as={BsCaretRightFill} />}
    </HStack>
  );
};

export default NavItem;
