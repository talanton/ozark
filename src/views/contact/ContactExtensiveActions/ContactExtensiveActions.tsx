import { FunctionComponent } from 'react';
import { Box, Container, SimpleGrid } from '@chakra-ui/react';

import GitHubIcon from '@assets/icons/github.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import TeamIcon from '@assets/icons/team.svg';
import { TEAM_PATH } from '@consts/paths';
import { BUILD_DEMO, TWITTER } from '@consts/externalResources';

import ContactExtensiveActionsCard from './ContactExtensiveActionsCard';

const CONTACT_EXTENSIVE_ACTIONS_CARDS = [
  {
    title: 'Get Demo',
    icon: GitHubIcon,
    text: 'If you want to put fingers to the keyboard and to get started with apps provided by Talanton, we will provide you with a PoC.',
    actionText: `Let's Build`,
    actionLink: BUILD_DEMO.href,
    isExternal: true,
  },
  {
    title: 'Join Our Team',
    icon: TeamIcon,
    text: 'We are a remote-first company, and will soon be expanding our operations.',
    actionText: 'See the Open Roles',
    actionLink: TEAM_PATH,
  },
  {
    title: 'Follow Us',
    icon: TwitterIcon,
    text: 'Keep up to date with product announcements, new user guides, team updates and our commentary on the broad open source community.',
    actionText: 'Follow Us on Twitter',
    actionLink: TWITTER.href,
    isExternal: true,
  },
];

const ContactExtensiveActions: FunctionComponent = () => (
  <Box w="full" mt={{ base: 14, lg: 30 }} mb={5} py={{ base: 16, lg: 24 }} bgColor="gray.50">
    <Container variant="section">
      <SimpleGrid columns={{ base: 1, lg: 3 }} rowGap={{ base: 10, lg: 0 }} w={{ lg: 'full' }}>
        {CONTACT_EXTENSIVE_ACTIONS_CARDS.map((card) => (
          <ContactExtensiveActionsCard {...card} key={card.title} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

export default ContactExtensiveActions;
