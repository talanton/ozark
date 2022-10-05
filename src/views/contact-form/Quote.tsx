import { FunctionComponent } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';

import QuoteIcon from '@assets/icons/quote.svg';
import AuthorSignature from '@components/AuthorSignature';

const QUOTE_AUTHOR = {
  author: 'Tanishq Chauhan',
  authorAvatar: '/blog/tc.png',
  authorPosition: 'CEO of Talanton Technologies',
};

const Quote: FunctionComponent = () => (
  <Box w="28.5rem" display={{ base: 'none', lg: 'block' }}>
    <Icon as={QuoteIcon} w={6} h={5} color="avocado.500" />

    <Text mt={2} fontSize="xl" fontWeight="regular" color="brand.900" lineHeight={1.3}>
      We are here to help! Regardless of your use case for Talanton, reach out to us. Let us know what you are working on. We will follow up with a calendar link to schedule 1:1 meeting online.
    </Text>

    <AuthorSignature {...QUOTE_AUTHOR} mt={8} />
  </Box>
);

export default Quote;
