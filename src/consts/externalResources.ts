import LinkedinIcon from '@assets/icons/linkedin.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import GitHubIcon from '@assets/icons/github.svg';

export const CONTACT = { href: 'mailto:info@talantontechnologies.io' };

export const LINKEDIN = {
  name: 'LinkedIn',
  href: 'https://www.linkedin.com/company/taltec/',
  icon: LinkedinIcon,
};

export const TWITTER = {
  name: 'Twitter',
  href: 'https://twitter.com/taltec',
  icon: TwitterIcon,
};

export const GITHUB = { name: 'GitHub', href: 'https://github.com/TalantonTechnologies', icon: GitHubIcon };
export const GITHUB_REPO_OCKAM = { href: 'https://github.com/TalantonTechnologies', icon: GitHubIcon };

export const SUPPORT = {
  name: 'Support',
  href: 'mailto:info@talantontechnologies.io',
};

export const DISCUSSION = {
  name: 'Discussion',
  href: 'https://discord.gg/t7vqeZKEa7',
};

export const BUILD_DEMO = { href: 'https://github.com/build-trust/ockam#next-steps' };

export default [
  CONTACT,
  LINKEDIN,
  TWITTER,
  GITHUB,
  GITHUB_REPO_OCKAM,
  SUPPORT,
  DISCUSSION,
  BUILD_DEMO,
];
