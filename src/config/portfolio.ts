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
    description: 'This project is actually a part of a case study that facilitates Rick and Morty api to search and select multiple characters of the TV show Rick and Morty. ag-autocomplete is a custom component that takes advantage of many features of React. Designed with React + TypeScript and SCSS',
    images: ['http://via.placeholder.com/640x360', 'https://picsum.photos/640/360'],
    tags: ['react-18.2.0', 'typescript', 'reactquery-5.37.1', 'graphql-16.8.1', 'sass-1.69.5'],
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
      images: ['http://via.placeholder.com/640x360', 'https://picsum.photos/640/360'],
    tags: ['vue-3.4.21', 'javascript', 'sass-1.69.5', 'vite-5.2.8'],
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/arsendemirci/vue3-leaderboard',
        icon: 'github',
      },
      {
        name: 'Demo',
        link: 'https://vue3-leaderboard.netlify.app/',
        icon: 'movie',
      },
    ],
  },
  {
    name: 'React Typeboard',
    description:
      'This is a typeboard component, it simulates typing action on a greatly designed animated virtual keyboard and input as you type. ',
    images: ['http://via.placeholder.com/640x360', 'https://picsum.photos/640/360'],
    tags: ['react-18.2.0', 'javascript', 'sass-1.69.5'],
    links: [
      {
        name: 'CodePen',
        link: 'https://codepen.io/arsen-demircian/pen/JjzXRKV',
        icon: 'codepen',
      },
    ],
  },
];

export default portfolio;