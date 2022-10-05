import { FunctionComponent, SVGAttributes } from 'react';
import { Box, Container, Flex, Text, Heading, SimpleGrid, Icon } from '@chakra-ui/react';

import GitHubIcon from '@assets/icons/github.svg';
import CloudIcon from '@assets/icons/cloud.svg';
import DeveloperIcon from '@assets/icons/developer.svg';
import LockIcon from '@assets/icons/lock.svg';
import KeyIcon from '@assets/icons/key.svg';
import EngineIcon from '@assets/icons/engine.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';

const FEATURES = [
  {
    icon: DeveloperIcon,
    title: 'Developer First',
    texts: [
      'Highly adaptable software solutions.',
      'Talanton covers all standard XVA metrics, counterparty and market risk computations which are efficiently executed on distributed infrastructure.',
    ],
  },
  {
    icon: CloudIcon,
    title: 'Cloud Native',
    texts: [
      'Cost savings at enterprise scale.',
      'Full control over what you want to manage yourself or delegate to your infrastructure provide and where you want your data to be.',
    ],
  },
  {
    icon: GitHubIcon,
    title: 'Open Source Integration',
    texts: [
      'Talanton uses software build over secure through transparency, community feedback, and scrutiny.',
      'We also build Add-ons utilizing open source infrastructure.',
    ],
  },
  {
    icon: LockIcon,
    title: 'Fully Customizable',
    texts: [
      'The core our financial engineering solutions is built upon customizable softwares.',
      'We strive to deliver the best solution at the lowest price.',
    ],
  },
  {
    icon: KeyIcon,
    title: 'ISDA CDS Services',
    texts: [
      'We offer consulting services and custom-made software for pricing and risk-management of CDS contracts.',
      'We are a completely independent company and can offer platform and dealer neutral advice and solutions.',
    ],
  },
  {
    icon: EngineIcon,
    title: 'Engine For All',
    texts: [
      'We chose the best available technology to make the solution fast, reliable and truly cross-platform.',
      'Bring your own quantitative data. Talanton has an Add-on for that!',
    ],
  },
];

const DESCRIPTIONS = [
  'We provide bespoke consultancy and custom implementation projects related to regulatory, pricing and technical subjects. Quantitative computations involving Monte-Carlo are intensive and time-consuming. We execute it on a well-sized and automatically deployed infrastructure. You can host it at your organization, in your Cloud, in our Cloud or even on a single server.',
];

type FeatureProps = {
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  title: string;
  texts: string[];
};

const Feature: FunctionComponent<FeatureProps> = ({ icon, title, texts }) => (
  <Flex>
    <Box flex={0} mr={5}>
      <GreenIconWrapper>
        <Icon as={icon} color="white" w={6} h={6} />
      </GreenIconWrapper>
    </Box>

    <Box>
      <Text fontWeight="bold" fontSize="xl" color="brand.900" mb={2}>
        {title}
      </Text>

      {texts.map((text) => (
        <Text key={text} fontSize="sm" mb={{ base: 4, lg: 2 }} _last={{ mb: { lg: 0 } }}>
          {text}
        </Text>
      ))}
    </Box>
  </Flex>
);

const Features: FunctionComponent = () => (
  <Box bgColor="gray.50" pt={{ base: 16, lg: 24 }} pb={{ base: 16, lg: 30 }}>
    <Container variant="section">
      <Box id="features" visibility="hidden" position="absolute" left={0} top="-80px" />
      <Box alignSelf="flex-start" w="full" maxW="2.5xl" mb={{ base: 10, md: 16 }}>
        <Heading as="h2" size="h2" lineHeight={1.3} mb={{ base: 6, lg: 8 }}>
          Bespoke Consultancy by Talanton
        </Heading>

        {DESCRIPTIONS.map((text) => (
          <Text key={text} fontSize={{ lg: 'lg' }} lineHeight={1.4} _notLast={{ mb: 2 }}>
            {text}
          </Text>
        ))}
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacingX={{ base: 8, md: 20, lg: 24 }}
        spacingY={{ base: 8, md: 12, lg: 16 }}
      >
        {FEATURES.map((card) => (
          <Feature key={card.title} {...card} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export default Features;
