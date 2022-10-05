import { FunctionComponent } from 'react';
import { Button, chakra, Container, Flex, Heading, useTheme } from '@chakra-ui/react';

import { BUILD_DEMO } from '@consts/externalResources';

const Footer: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section">
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', lg: 'center' }}
        w="full"
        borderTop="1px"
        borderColor="gray.200"
        py={{ base: 10, lg: 16 }}
      >
        <Heading as="h3" size="h3" maxW="lg" mb={{ base: 9, lg: 0 }}>
        Leading Quant Workshop{' '}
          <chakra.span bgImage={gradients.primary} bgClip="text">
          in Middle East & Africa.
          </chakra.span>
        </Heading>

        <Button
          as="a"
          href="https://drive.google.com/file/d/1SOWiMmK0hEcYJb-ynMb74wLRKzSzD4co/view?usp=sharing"
          target="_blank"
          colorScheme="avocado"
          color="black"
          size="lg"
        >
          Explore Services
        </Button>
      </Flex>
    </Container>
  );
};

export default Footer;
