import { FunctionComponent } from 'react';
import { Container, Heading, useTheme } from '@chakra-ui/react';

import ClarityIcon from '@assets/icons/clarity.svg';
import RocketIcon from '@assets/icons/rocket.svg';
import TeamIcon from '@assets/icons/team.svg';
import HelpIcon from '@assets/icons/help.svg';
import SearchZoomInIcon from '@assets/icons/search-zoom-in.svg';
import ValueCard from '@views/mission/components/ValueCard';
import StepsLabel from '@components/StepsLabel';
import LineDivider from '@components/LineDivider';

const MISSION_AND_VISION_CARDS = [
  {
    title: `Our Vision`,
    texts: ['We are an Emirati software development company based in Dubai, United Arab Emirates. We are experts in quantitative model development & implementation, quantitative analysis and market risk regulation.'],
    icon: ClarityIcon,
  },
  {
    title: 'Our Mission',
    texts: [
      'To empower quant developers with sophisticated tools so they can create world class financial engineering applications.',
    ],
    icon: RocketIcon,
  },
];

const TRUST_VALUES_CARDS = [
  {
    title: 'Passion For High Performance',
    texts: [
      'Talanton is a cutting-edge technology company with a passion for high-performance financial engineering and solving numerically intense problems.',
    ],
    icon: TeamIcon,
  },
  {
    title: 'Responsible Culture',
    texts: [
      `We at Talanton are accountable for our Responsibilities. Our culture is result driven - ensuring maximum benefits to our clients.`,
      `The responsibility of our team is to provide our clients with the best service possible and ensure a long-term relationship of mutual trust.`,
    ],
    icon: HelpIcon,
  },
  {
    title: 'Curiousity Overclocked',
    texts: [
      `We are a multinational team of engineers and practitioners working on exciting problems at the forefront of finacial engineering. The topics entails but are not limited to, machine learning, High Performance Computing, and exploring the use of alternative quantitative finance measures.`,
      `We are thought leaders in the field of financial engineering and curious learners, who strive to understand 'why?'. By understanding ‘why’ we gain a clearer understanding of ‘for who’, ‘when’, ‘what’ and ‘how’. Curiosity includes understanding the motivations, emotions, priorities of others.`,
    ],
    icon: SearchZoomInIcon,
  },
];

const Values: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <>
      <Container variant="section" pt={16}>
        <Heading as="h2" size="h2" fontWeight="bold" lineHeight={1.3} mb={{ lg: 10 }}>
        Fast-Growing Cutting-Edge Technology Company 
        </Heading>

        {MISSION_AND_VISION_CARDS.map((card, index) => (
          <ValueCard key={card.title} {...card} itemPosition={index % 2 ? 'right' : 'left'} />
        ))}
      </Container>

      <Container variant="section" pt={{ base: 32, lg: 24 }} pb={{ base: 20, lg: 30 }}>
        <StepsLabel>
          <LineDivider
            h={{ base: 28, lg: 40 }}
            bottom={{ base: '150%', lg: '100%' }}
            bg={gradients.tertiary}
          />
          Our Only Value
        </StepsLabel>

        <Heading as="h2" size="h2" fontWeight="bold" lineHeight={1.3} my={6}>
          Client First Mindset
        </Heading>

        {TRUST_VALUES_CARDS.map((card, index) => (
          <ValueCard key={card.title} {...card} itemPosition={index % 2 ? 'right' : 'left'} />
        ))}
      </Container>
    </>
  );
};

export default Values;
