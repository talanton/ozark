import { FunctionComponent } from 'react';
import { Container, Heading, Box, Text, SimpleGrid, Flex, Button, Icon } from '@chakra-ui/react';
import Link from 'next/link';

import TimeIcon from '@assets/icons/time.svg';
import BulbIcon from '@assets/icons/bulb.svg';
import BrainIcon from '@assets/icons/brain.svg';
import ClarityIcon from '@assets/icons/clarity.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';
import { MISSION_AND_VISION_PATH } from '@consts/paths';

const VALUES = [
  {
    title: 'Benchmarking',
    texts: [
      'If you are unsure how Talanton benefits your particular domain area or you want to compare us with another approach, we are happy to help.',
    ],
    icon: BrainIcon,
  },
  {
    title: 'Proof of Concept',
    texts: [
      'We can perform a PoC focusing on your particular use case for several weeks.',
    ],
    icon: BulbIcon,
  },
  {
    title: 'Consulting',
    texts: [
      'We will support you during the integration process, working side by side with your developers and quants.',
    ],
    icon: ClarityIcon,
  },
  {
    title: 'Training',
    texts: [
      'We offer training workshops on best practices of the quantitative solutions provided by Talanton. We are happy to do guest lectures tailored for your organizational needs.',
    ],
    icon: TimeIcon,
  },
];

const DESCRIPTIONS = ['Our team of experts includes quants and software developers who can help integrate our product into your project',
' Talanton will offer full-range technological consulting and training to complement our software engineering services.'];

const Values: FunctionComponent = () => (
  <Container variant="section" py={{ base: 16, lg: 30 }}>
    <Flex
      w="full"
      pb={{ base: 16, lg: 14 }}
      mb={{ lg: 6 }}
      direction={{ base: 'column', lg: 'row' }}
      align={{ lg: 'center' }}
      justify="space-between"
    >
      <Box w="full">
        <Heading as="h2" size="h2" lineHeight={1.3}>
          Talanton always there for you
        </Heading>

        <Box mt={6} mb={{ base: 8, lg: 0 }}>
          {DESCRIPTIONS.map((text) => (
            <Text
              key={text}
              fontSize={{ lg: 'lg' }}
              lineHeight={{ base: 1.5, lg: 1.4 }}
              _notLast={{ mb: 2 }}
            >
              {text}
            </Text>
          ))}
        </Box>
      </Box>

      <Link href={`${MISSION_AND_VISION_PATH}#virtues`} passHref>
        <Button as="a" size="lg" colorScheme="avocado" color="white">
          Read more
        </Button>
      </Link>
    </Flex>

    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      spacingY={{ base: 10, xl: 0 }}
      spacingX={{ md: 16, lg: 14, xl: 24 }}
      pb={{ base: 4, lg: 10 }}
    >
      {VALUES.map(({ icon, texts, title }) => (
        <Box key={title}>
          <GreenIconWrapper flex={1} mb={4}>
            <Icon as={icon} color="white" w={6} h={6} />
          </GreenIconWrapper>

          <Text fontSize="xl" fontWeight="bold" color="brand.900" my={2} lineHeight={1.3}>
            {title}
          </Text>

          {texts.map((text) => (
            <Text key={text} fontSize="sm" lineHeight={1.5} _notLast={{ mb: 2 }}>
              {text}
            </Text>
          ))}
        </Box>
      ))}
    </SimpleGrid>
  </Container>
);

export default Values;
