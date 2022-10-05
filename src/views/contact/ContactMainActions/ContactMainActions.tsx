import { FunctionComponent } from 'react';
import { Container, Flex } from '@chakra-ui/react';

import EmailIcon from '@assets/icons/email.svg';
import DocsIcon from '@assets/icons/docs.svg';
import SupportAgentIcon from '@assets/icons/support.svg';
import { BLOG_PATH, CONTACT_FORM_PATH } from '@consts/paths';
import { SUPPORT } from '@consts/externalResources';

import ContactMainActionsCard from './ContactMainActionsCard';

const CONTACT_MAIN_ACTIONS_CARDS = [
  {
    title: 'Community',
    icon: SupportAgentIcon,
    text: 'We use Discord Discussions to facilitate transparent learning opportunities for everyone.',
    link: {
      isExternal: true,
      href: 'https://discord.gg/t7vqeZKEa7',
      text: 'Start a Discussion',
    },
  },
  {
    title: 'Contact Us',
    icon: EmailIcon,
    text: 'We want to meet you! If you want to meet with our expert to discuss your use case for Talanton, then let us know.',
// we replaced CONTACT_FORM_PATH below with mailto:info@talantontechnologies.io
    link: {
      href: 'mailto:info@talantontechnologies.io',
      text: 'Schedule a 1:1',
    },
  },
  {
    title: 'Research',
    icon: DocsIcon,
    text: 'Check out our blog page for new analysis on banking risk regulations, or for a deep dive into how Talanton works!',
    link: {
      href: BLOG_PATH,
      text: 'Research',
    },
  },
];

const ContactMainActions: FunctionComponent = () => (
  <Container variant="section" mt={{ base: 20, lg: 36 }}>
    <Flex gap={{ base: 5, md: 10 }} justify="center" w="full" wrap="wrap">
      {CONTACT_MAIN_ACTIONS_CARDS.map((card) => (
        <ContactMainActionsCard {...card} key={card.title} />
      ))}
    </Flex>
  </Container>
);

export default ContactMainActions;
