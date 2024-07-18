import { PortfolioItemType } from '@types';

const portfolio: Array<PortfolioItemType> = [
  {
    name: 'ag-autocomplete',
    description:
      'This project is actually a part of a case study that facilitates Rick and Morty api to search and select multiple characters of the TV show Rick and Morty. ag-autocomplete is a custom component that takes advantage of many features of React. Designed with React + TypeScript and SCSS',
    images: [
      '/image/projects/ag-autocomplete-1.png',
      '/image/projects/ag-autocomplete-2.png',
      '/image/projects/ag-autocomplete-3.png',
    ],
    tags: [
      'react-18.2.0',
      'typescript',
      'reactquery-5.37.1',
      'graphql-16.8.1',
      'sass-1.69.5',
    ],
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/arsendemirci/ag-autocomplete',
        icon: 'github1',
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
    images: [
      '/image/projects/vue3-leaderboard-1.png',
      '/image/projects/vue3-leaderboard-2.png',
    ],
    tags: ['vue-3.4.21', 'javascript', 'sass-1.69.5', 'vite-5.2.8'],
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/arsendemirci/vue3-leaderboard',
        icon: 'github1',
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
    description: `This is a typeboard component, it simulates typing action on a greatly designed animated virtual keyboard and input as you type.`,
    images: [
      '/image/projects/react-typeboard-1.png',
      '/image/projects/react-typeboard-2.png',
    ],
    tags: ['react-18.2.0', 'javascript', 'sass-1.69.5'],
    links: [
      {
        name: 'CodePen',
        link: 'https://codepen.io/arsen-demircian/pen/JjzXRKV',
        icon: 'codepen1',
      },
    ],
  },
  {
    name: 'ag-select',
    description:
      'ag-select is a select component, designed to be used in forms of vue3 projects. Its actually a part of a vue3 component library project that is under development right now. ag-select is a custom component that takes advantage of many features of Vue3 and facilitates two way data binding with v-model.',
    images: [
      '/image/projects/ag-select-1.png',
      '/image/projects/ag-select-2.png',
    ],
    tags: ['vue-3.0.0', 'javascript', 'sass-1.26.5'],
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/arsendemirci/ag-select',
        icon: 'github1',
      },
      {
        name: 'Demo',
        link: 'https://arsendemirci-ag-select.netlify.app/',
        icon: 'movie',
      },
    ],
  },
];

export default portfolio;
