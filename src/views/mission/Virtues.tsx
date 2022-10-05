import { FunctionComponent } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
} from '@chakra-ui/react';

import PerformanceMindsetImage from '@assets/images/polygonal.jpg';
import KeppThingsSimpleImage from '@assets/images/app2.jpeg';
import DefaultToTransparencyImage from '@assets/images/app1.jpeg';
import TimeIsPreciousImage from '@assets/images/app3.png';

import VirtuesCard from './components/VirtuesCard';

const DESCRIPTIONS = ['Talanton ensures to meet all your challenges are met with!'];

const VIRTUES_TABS = [
  {
    title: 'High Performance Mindset',
    panel: {
      image: PerformanceMindsetImage,
      texts: [
        'Talanton is a team of innovators. We strive to work on problems which push the frontiers of our knowledge. We are quantitative and scientific developers with the aim to deliver flexible and easy-to-use tools to quickly build computational analytics that scales with modern hardware. ',
        'At Talanton, we embrace a growth mindset by ensuring a research oriented culture to deliver results to our clients.',
      ],
    },
  },
  {
    title: 'Simplicity Is The Key',
    panel: {
      image: KeppThingsSimpleImage,
      texts: [
        'Simplifying complex problems is our forte be that every idea, product, and procedure, we govern ourselves by the principles of Occam’s Razor. ',
        'We recognize that simplifying is a difficult and iterative journey. But in the end, when you keep things simple, they tend to be robust - less goes wrong, and there is less to maintain - and less to breakdown.',
        'Our team is always on the same page so that we have a crystal clear direction.',
      ],
    },
  },
  {
    title: 'Transparency',
    panel: {
      image: DefaultToTransparencyImage,
      texts: [
        'Talanton believes in the ethos of open source, thus that of disclosure and clarity. Our goal is to democratize quantitative finance and see that the threshold to specialized knowledge is reduced. Thus educating financial institutions across the other parts of the world about gold standards of risk management. ',
        'Democratization of knowledge is closely connected with our virtue of simplicity. To spread more technical knowhow we showcase our research work and communicate our ideas via our blog.'
      ],
    },
  },
  {
    title: 'Time Equals Money',
    panel: {
      image: TimeIsPreciousImage,
      texts: [
        'Time is the most valuable asset that we all possess. Our team members utilize their time in the most efficient way possible. Talanton employees are aware of the responsibility they carry.',
        'For our clients to recieve world class financial engineering solutions, our creators at Talanton work hard and find all possible ways to cut out incessant inefficiencies in our operations.',
      ],
    },
  },
];

const activeTabItemStyle = {
  textDecoration: 'none',
  bg: 'none',
  svg: { color: 'avocado.500' },
  _after: {
    content: '" "',
    display: 'block',
    borderRadius: 'sm',
    height: '4px',
    width: '50%',
    bgColor: 'avocado.500',
    position: 'absolute',
    top: 'calc(100% + 4px)',
  },
};

const Virtues: FunctionComponent = () => (
  <Box id="virtues" bgColor="gray.50" pt={{ base: 16, lg: 20 }} pb={{ base: 20, lg: 30 }}>
    <Container variant="section" px={{ base: 5, lg: 220 }}>
      <Box maxW="3xl" mb={{ base: 16, lg: 14 }} textAlign={{ base: 'left', lg: 'center' }}>
        <Heading as="h2" size="h2" mb={6}>
          Talanton&apos;s Resolve
        </Heading>

        {DESCRIPTIONS.map((text) => (
          <Text fontSize={{ lg: 'lg' }} key={text} _notLast={{ mb: 2 }}>
            {text}
          </Text>
        ))}
      </Box>

      <VStack spacing={8} display={{ base: 'block', lg: 'none' }}>
        {VIRTUES_TABS.map(({ title, panel }) => (
          <VirtuesCard key={title} title={title} panel={panel} maxW="lg" />
        ))}
      </VStack>

      <Tabs w="full" display={{ base: 'none', lg: 'initial' }}>
        <TabList display="flex" justifyContent="space-between" px={4} mb={16} borderBottom={0}>
          {VIRTUES_TABS.map(({ title }) => (
            <Tab
              position="relative"
              px={2}
              m={0}
              key={title}
              fontSize="xl"
              fontWeight="bold"
              color="gray.500"
              _hover={activeTabItemStyle}
              _selected={{
                ...activeTabItemStyle,
                color: 'brand.900',
                fontWeight: 'bold',
                _hover: { activeTabItemStyle },
              }}
            >
              {title}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {VIRTUES_TABS.map(({ title, panel }) => (
            <TabPanel key={title} p={0}>
              <VirtuesCard title={title} panel={panel} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  </Box>
);

export default Virtues;
