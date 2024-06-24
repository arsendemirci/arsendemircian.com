interface PortfolioItemLinkType {
  name: string;
  icon: string;
  link: string;
}
interface PortfolioItemType {
  name: string;
  description: string;
  images: Array<string>;
  tags: Array<string>;
  links?: Array<PortfolioItemLinkType>;
}

const portfolio: Array<PortfolioItemType> = [
  {
    name: 'ag-autocomplete',
    description: '',
    images: ['adf', 'adfa'],
    tags: ['react', 'typescript', 'reactquery', 'graphql', 'sass'],
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/arsendemirci/ag-autocomplete',
        icon: 'github',
      },
      {
        name: 'Demo',
        link: 'https://arsendemirci-ag-autocomplete.netlify.app/',
        icon: 'movie',
      },
    ],
  },
  {
    name: 'vue3-leaderboard',
    description:
      'vue3-leaderboard is a project for a case study. Task is to traverse the dates data and create a design to show top 3 dates with the most event counts.',
    images: ['adf', 'adfa'],
    tags: ['vue', 'javascript', 'sass', 'vite'],
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/arsendemirci/vue3-leaderboard',
        icon: 'github',
      },
      {
        name: 'Website',
        link: 'https://vue3-leaderboard.netlify.app/',
        icon: 'globe',
      },
    ],
  },
  {
    name: 'vue3-leaderboard',
    description:
      'vue3-leaderboard is a project for a case study. Task is to traverse the dates data and create a design to show top 3 dates with the most event counts.',
    images: ['adf', 'adfa'],
    tags: ['vue', 'javascript', 'sass', 'vite'],
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/arsendemirci/vue3-leaderboard',
        icon: 'github',
      },
      {
        name: 'Website',
        link: 'https://vue3-leaderboard.netlify.app/',
        icon: 'globe',
      },
    ],
  },
  {
    name: 'React Typeboard',
    description:
      'This is a typeboard component, it simulates typing action on a greatly designed animated virtual keyboard and input as you type. ',
    images: ['adf', 'adfa'],
    tags: ['react', 'javascript', 'sass'],
    links: [
      {
        name: 'CodePen',
        link: 'https://codepen.io/arsen-demircian/pen/JjzXRKV',
        icon: 'codepen',
      },
    ],
  },
];
