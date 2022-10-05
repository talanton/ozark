import { TEAM_PATH, BLOG_PATH, MISSION_AND_VISION_PATH } from '@consts/paths';
import { LinkedinIcon } from '@components/icons';
import RocketIcon from '@assets/icons/rocket.svg';
import UsersIcon from '@assets/icons/users.svg';
import { GITHUB_REPO_OCKAM } from '@consts/externalResources';

// eslint-disable-next-line import/prefer-default-export
export const NAV_MENU_ITEMS = [
  { text: 'Features', href: '/#features', isExternal: false },
  { text: 'Technology', href: '/#use-cases', isExternal: false },
  { text: 'Services', href: '/#products', isExternal: false },
  {
    text: 'About Us',
    children: [
      { text: 'Whitepaper & More', href: TEAM_PATH, icon: UsersIcon, isExternal: false },
      {
        text: 'Our Mission & Vision',
        href: MISSION_AND_VISION_PATH,
        icon: RocketIcon,
        isExternal: false,
      },
    ],
  },
  {
    text: 'Research',
    href: BLOG_PATH,
    isExternal: false,
  },
  {
    text: 'LinkedIn',
    href: 'https://linkedin.com/company/taltec',
    icon: LinkedinIcon,
    isExternal: true,
  },
];
