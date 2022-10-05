import { FunctionComponent } from 'react';
import { chakra, Container, Heading, List, ListItem, ListIcon, useTheme } from '@chakra-ui/react';

import EngineIcon from '@assets/icons/engine.svg';
import TimeIcon from '@assets/icons/time.svg';
import BulbIcon from '@assets/icons/bulb.svg';
import PackagesIcon from '@assets/icons/packages.svg';

const SUBHEADING_TEXTS = [
  { icon: EngineIcon, text: 'xVA Solutions' },
  { icon: TimeIcon, text: 'Bespoke Consulting' },
  { icon: BulbIcon, text: 'Fast Computing' },
  { icon: PackagesIcon, text: 'Cross-platform' },
];

const Hero: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section" pb={{ base: 10, lg: 0 }}>
      <Heading as="h1" size="h1" fontWeight="extrabold" textAlign="center">
        Innovation{' '}
        <chakra.span bgImage={gradients.primary} bgClip="text">
          First
        </chakra.span>
      </Heading>

      <List
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        flexDirection="row"
        mt={{ base: 8, lg: 10 }}
        mb={{ base: 16, lg: 20 }}
      >
        {SUBHEADING_TEXTS.map(({ text, icon }) => (
          <ListItem
            key={text}
            display="flex"
            alignItems="center"
            px={{ base: 4, lg: 8 }}
            mb={{ base: 5, lg: 0 }}
            fontSize={{ base: 'lg', lg: 'xl' }}
            fontWeight="medium"
            lineHeight={1.3}
            color="brand.900"
          >
            <ListIcon as={icon} w={6} h={6} mr={4} />
            {text}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Hero;
