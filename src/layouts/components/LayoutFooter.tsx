import { FunctionComponent } from 'react';
import {
  Box,
  BoxProps,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  Icon,
  HStack,
  useTheme,
} from '@chakra-ui/react';

import LogoGray from '@assets/logo-gray.svg';
import { LINKEDIN, TWITTER, SUPPORT, DISCUSSION, BUILD_DEMO } from '@consts/externalResources';

const NAV = [SUPPORT, DISCUSSION];
const SOCIALS = [LINKEDIN, TWITTER];

const LayoutFooter: FunctionComponent<BoxProps> = ({ ...restProps }) => {
  const { gradients } = useTheme();

  return (
    <Container as="footer" variant="section" {...restProps}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify={{ base: 'space-between' }}
        align="center"
        w="full"
        borderTop="1px"
        borderColor="gray.200"
        py={{ base: 10, lg: 16 }}
      >
        <Heading as="h3" size="h3" maxW="lg" mb={{ base: 9, lg: 0 }}>
            Leading Quant Workshop{' '}
          <chakra.span bgImage={gradients.primary} bgClip="text">
            in Middle East & Africa 
          </chakra.span>
        </Heading>

        <Button
          as="a"
            href="https://drive.google.com/file/d/1SOWiMmK0hEcYJb-ynMb74wLRKzSzD4co/view?usp=sharing"
          target="_blank"
          colorScheme="avocado"
            color="white"
          size="lg"
        >
            Explore Services
        </Button>
      </Flex>

      <Flex
        direction={{ base: 'column', lg: 'row' }}
        pb={{ base: 10, lg: 20 }}
        pt={6}
        w="full"
        align="center"
      >
        <Flex align="center" direction={{ base: 'column', lg: 'row' }} order={{ base: 1, lg: 0 }}>
          <Box
            as={LogoGray}
            w={{ base: '7.875rem', lg: '9.625rem' }}
            h={{ base: '2.25rem', lg: '2.75rem' }}
            mb={{ base: 6, lg: 0 }}
            mr={{ base: 0, lg: 8 }}
          />

          <Text opacity="0.8" fontSize={{ base: 'lg', lg: 'md' }}>
              © 2022 Talanton Technologies L.L.C-FZ All Rights Reserved
          </Text>
        </Flex>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          flex={1}
          align="center"
          justify="flex-end"
          mb={{ base: 12, lg: 0 }}
        >
          <Flex mb={{ base: 4, lg: 0 }}>
            {NAV.map((link) => (
              <Text
                key={link.name}
                as={Link}
                isExternal
                href={link.href}
                _hover={{ textDecoration: 'underline' }}
                opacity={0.8}
                mr={6}
              >
                {link.name}
              </Text>
            ))}
          </Flex>

          <HStack spacing={5}>
            {SOCIALS.map((social) => (
              <Link key={social.href} href={social.href} isExternal>
                <Icon
                  as={social.icon}
                  alt={`${social.name} link`}
                  w={6}
                  h={6}
                  display="block"
                  color="gray.500"
                  _hover={{ color: 'gray.300' }}
                  transition="all 400ms ease-in-out"
                />
              </Link>
            ))}
          </HStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default LayoutFooter;
