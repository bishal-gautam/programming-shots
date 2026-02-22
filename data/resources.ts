export interface Resource {
  id: string;
  title: string;
  titleNe: string;
  description: string;
  descriptionNe: string;
  url: string;
  category: string;
  type: 'video' | 'article' | 'tool' | 'course';
  isFree: boolean;
}

export const resources: Resource[] = [
  // Videos
  {
    id: '1',
    title: 'freeCodeCamp YouTube Channel',
    titleNe: 'freeCodeCamp YouTube च्यानल',
    description: 'Complete programming tutorials for free',
    descriptionNe: 'निःशुल्क पूर्ण प्रोग्रामिङ ट्यूटोरियल',
    url: 'https://www.youtube.com/c/freecodecamp',
    category: 'Video',
    type: 'video',
    isFree: true
  },
  {
    id: '2',
    title: 'Traversy Media',
    titleNe: 'Traversy Media',
    description: 'Web development and programming tutorials',
    descriptionNe: 'वेब विकास र प्रोग्रामिङ ट्यूटोरियल',
    url: 'https://www.youtube.com/c/TraversyMedia',
    category: 'Video',
    type: 'video',
    isFree: true
  },
  // Articles
  {
    id: '3',
    title: 'MDN Web Docs',
    titleNe: 'MDN वेब डक्स',
    description: 'Documentation for web technologies',
    descriptionNe: 'वेब प्रविधिहरूको लागि कागजात',
    url: 'https://developer.mozilla.org/',
    category: 'Documentation',
    type: 'article',
    isFree: true
  },
  {
    id: '4',
    title: 'W3Schools',
    titleNe: 'W3Schools',
    description: 'Web tutorials and references',
    descriptionNe: 'वेब ट्यूटोरियल र रेफरेन्स',
    url: 'https://www.w3schools.com/',
    category: 'Tutorial',
    type: 'article',
    isFree: true
  },
  // Tools
  {
    id: '5',
    title: 'CodePen',
    titleNe: 'CodePen',
    description: 'Online code editor for web development',
    descriptionNe: 'वेब विकासको लागि अनलाइन कोड एडिटर',
    url: 'https://codepen.io/',
    category: 'Tool',
    type: 'tool',
    isFree: true
  },
  {
    id: '6',
    title: 'Replit',
    titleNe: 'Replit',
    description: 'Online programming environment',
    descriptionNe: 'अनलाइन प्रोग्रामिङ वातावरण',
    url: 'https://replit.com/',
    category: 'Tool',
    type: 'tool',
    isFree: true
  },
  {
    id: '7',
    title: 'GitHub',
    titleNe: 'GitHub',
    description: 'Code hosting and collaboration platform',
    descriptionNe: 'कोड होस्टिंग र सहयोग प्लेटफर्म',
    url: 'https://github.com/',
    category: 'Tool',
    type: 'tool',
    isFree: true
  },
  // Practice
  {
    id: '8',
    title: 'LeetCode',
    titleNe: 'LeetCode',
    description: 'Practice coding problems for interviews',
    descriptionNe: 'इन्टरव्यूको लागि कोडिङ समस्याहरू अभ्यास गर्नुहोस्',
    url: 'https://leetcode.com/',
    category: 'Practice',
    type: 'course',
    isFree: false
  },
  {
    id: '9',
    title: 'HackerRank',
    titleNe: 'HackerRank',
    description: 'Coding practice and competitions',
    descriptionNe: 'कोडिङ अभ्यास र प्रतियोगिताहरू',
    url: 'https://www.hackerrank.com/',
    category: 'Practice',
    type: 'course',
    isFree: true
  },
  {
    id: '10',
    title: 'CSS-Tricks',
    titleNe: 'CSS-Tricks',
    description: 'Everything about CSS',
    descriptionNe: 'CSS बारे सबै कुरा',
    url: 'https://css-tricks.com/',
    category: 'Article',
    type: 'article',
    isFree: true
  }
];
