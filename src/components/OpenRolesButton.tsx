import { FunctionComponent } from 'react';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import { TEAM_PATH } from '@consts/paths';

const OpenRolesButton: FunctionComponent = () => (
  <Link href='https://drive.google.com/file/d/1h4sOX8INwbsq7_gDNQxUtzoCgfX0CPqI/view?usp=sharing' passHref>
    <Button as="a" size="lg" colorScheme="avocado" color="white">
      Read our whitepaper
    </Button>
  </Link>
);

export default OpenRolesButton;
