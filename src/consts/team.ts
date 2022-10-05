export const CATEGORIES = {
  FULL_TIME_MEMBERS: 'Full-time Members',
  // Uncomment when the below categories are relevant to the firm
  //BOARD_OF_DIRECTORS: 'Board of Directors',
  //ADVISORS: 'Advisors',
};

export const MEMBERS = [
  {
    name: 'Tanishq',
    surname: 'Chauhan',
    position: 'CEO',
    categories: [CATEGORIES.FULL_TIME_MEMBERS],
    country: 'IN',
    photo: 'tc.png',
    description: 'Financial Engineer by profession, polymath by passion, loves to read on quantum consciousnes and faster than light travel.',
  }/* ,
  {
    name: 'Matthew',
    surname: 'Gregory',
    position: 'CEO',
    categories: [CATEGORIES.FULL_TIME_MEMBERS, CATEGORIES.BOARD_OF_DIRECTORS],
    country: 'US',
    photo: 'matthew-gregory.png',
    description: 'Started his career in professional sailing and has a passion for meteorology',
  } */
];
