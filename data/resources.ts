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
  },
  // JavaScript Resources
  {
    id: '11',
    title: 'JavaScript.info',
    titleNe: 'JavaScript.info',
    description: 'Modern JavaScript tutorial - from basics to advanced topics',
    descriptionNe: 'आधुनिक JavaScript ट्यूटोरियल - आधारभूतदेखि उन्नत विषयहरूसम्म',
    url: 'https://javascript.info/',
    category: 'Tutorial',
    type: 'article',
    isFree: true
  },
  {
    id: '12',
    title: 'Eloquent JavaScript',
    titleNe: 'Eloquent JavaScript',
    description: 'Free online book on JavaScript programming',
    descriptionNe: 'JavaScript प्रोग्रामिंगको निःशुल्क अनलाइन पुस्तक',
    url: 'https://eloquentjavascript.net/',
    category: 'Book',
    type: 'article',
    isFree: true
  },
  {
    id: '13',
    title: 'MDN JavaScript Guide',
    titleNe: 'MDN JavaScript गाइड',
    description: 'Comprehensive JavaScript documentation and tutorials',
    descriptionNe: 'व्यापक JavaScript कागजात र ट्यूटोरियल',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
    category: 'Documentation',
    type: 'article',
    isFree: true
  },
  {
    id: '14',
    title: 'JSFiddle',
    titleNe: 'JSFiddle',
    description: 'Online editor for testing JavaScript, HTML, and CSS',
    descriptionNe: 'JavaScript, HTML, र CSS परीक्षणको लागि अनलाइन एडिटर',
    url: 'https://jsfiddle.net/',
    category: 'Tool',
    type: 'tool',
    isFree: true
  },
  {
    id: '15',
    title: 'Can I Use',
    titleNe: 'Can I Use',
    description: 'Check browser compatibility for JavaScript features',
    descriptionNe: 'JavaScript सुविधाहरूको लागि ब्राउजर अनुकूलता जाँच गर्नुहोस्',
    url: 'https://caniuse.com/',
    category: 'Tool',
    type: 'tool',
    isFree: true
  },
  // Additional Video Resources
  {
    id: '16',
    title: 'Python.org Documentation',
    titleNe: 'Python.org कागजात',
    description: 'Official Python documentation and tutorials',
    descriptionNe: 'आधिकारिक Python कागजात र ट्यूटोरियल',
    url: 'https://docs.python.org/3/',
    category: 'Documentation',
    type: 'article',
    isFree: true
  },
  {
    id: '17',
    title: 'JavaTPoint',
    titleNe: 'JavaTPoint',
    description: 'Free tutorials for Java, Python, C, and more',
    descriptionNe: 'Java, Python, C, र अरूको लागि निःशुल्क ट्यूटोरियल',
    url: 'https://www.javatpoint.com/',
    category: 'Tutorial',
    type: 'article',
    isFree: true
  },
  {
    id: '18',
    title: 'W3Schools Python Tutorial',
    titleNe: 'W3Schools Python ट्यूटोरियल',
    description: 'Learn Python with interactive examples',
    descriptionNe: 'इंटरैक्टिव उदाहरणहरूसँग Python सिक्नुहोस्',
    url: 'https://www.w3schools.com/python/',
    category: 'Tutorial',
    type: 'article',
    isFree: true
  },
  {
    id: '19',
    title: 'Programiz',
    titleNe: 'Programiz',
    description: 'Learn programming with step-by-step tutorials',
    descriptionNe: 'चरण-दर-चरण ट्यूटोरियलसँग प्रोग्रामिंग सिक्नुहोस्',
    url: 'https://www.programiz.com/',
    category: 'Tutorial',
    type: 'article',
    isFree: true
  },
  {
    id: '20',
    title: 'GitHub Learning Lab',
    titleNe: 'GitHub Learning Lab',
    description: 'Free interactive courses for Git and GitHub',
    descriptionNe: 'Git र GitHub को लागि निःशुल्क इंटरैक्टिव कोर्सहरू',
    url: 'https://github.com/skills',
    category: 'Course',
    type: 'course',
    isFree: true
  },
  {
    id: '21',
    title: 'CSS-Tricks Flexbox Guide',
    titleNe: 'CSS-Tricks Flexbox गाइड',
    description: 'Complete guide to CSS Flexbox layout',
    descriptionNe: 'CSS Flexbox लेआउटको पूर्ण गाइड',
    url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    category: 'Article',
    type: 'article',
    isFree: true
  },
  {
    id: '22',
    title: 'React Official Docs',
    titleNe: 'React आधिकारिक डक्स',
    description: 'Official React documentation and tutorials',
    descriptionNe: 'आधिकारिक React कागजात र ट्यूटोरियल',
    url: 'https://react.dev/',
    category: 'Documentation',
    type: 'article',
    isFree: true
  },
  {
    id: '23',
    title: 'Node.js Documentation',
    titleNe: 'Node.js कागजात',
    description: 'Official Node.js documentation',
    descriptionNe: 'आधिकारिक Node.js कागजात',
    url: 'https://nodejs.org/docs/',
    category: 'Documentation',
    type: 'article',
    isFree: true
  },
  {
    id: '24',
    title: 'Exercism',
    titleNe: 'Exercism',
    description: 'Free coding exercises with mentor feedback',
    descriptionNe: 'मेन्टर फीडबैकसँग निःशुल्क कोडिंग अभ्यासहरू',
    url: 'https://exercism.org/',
    category: 'Practice',
    type: 'course',
    isFree: true
  },
  {
    id: '25',
    title: 'Codewars',
    titleNe: 'Codewars',
    description: 'Coding challenges in multiple languages',
    descriptionNe: 'धेरै भाषाहरूमा कोडिंग चुनौतीहरू',
    url: 'https://www.codewars.com/',
    category: 'Practice',
    type: 'course',
    isFree: true
  },
  {
    id: '26',
    title: 'Kaggle',
    titleNe: 'Kaggle',
    description: 'Data science competitions and datasets',
    descriptionNe: 'डेटा साइन्स प्रतियोगिताहरू र डेटासेटहरू',
    url: 'https://www.kaggle.com/',
    category: 'Data Science',
    type: 'course',
    isFree: true
  },
  {
    id: '27',
    title: 'LeetCode',
    titleNe: 'LeetCode',
    description: 'Coding interview preparation platform',
    descriptionNe: 'कोडिंग अन्तर्वार्ता तयारी प्लेटफर्म',
    url: 'https://leetcode.com/',
    category: 'Practice',
    type: 'course',
    isFree: false
  },
  {
    id: '28',
    title: 'GitHub Learning Lab',
    titleNe: 'GitHub लर्निंग ल्याब',
    description: 'Learn Git and GitHub interactively',
    descriptionNe: 'अन्तर्क्रियात्मक रूपमा Git र GitHub सिक्नुहोस्',
    url: 'https://github.com/skills',
    category: 'Version Control',
    type: 'course',
    isFree: true
  },
  {
    id: '29',
    title: 'Python.org Tutorial',
    titleNe: 'Python.org ट्यूटोरियल',
    description: 'Official Python tutorial',
    descriptionNe: 'आधिकारिक पाइथन ट्यूटोरियल',
    url: 'https://docs.python.org/3/tutorial/',
    category: 'Documentation',
    type: 'article',
    isFree: true
  },
  {
    id: '30',
    title: 'JavaScript.info',
    titleNe: 'JavaScript.info',
    description: 'Modern JavaScript tutorial',
    descriptionNe: 'आधुनिक जाभास्क्रिप्ट ट्यूटोरियल',
    url: 'https://javascript.info/',
    category: 'Tutorial',
    type: 'article',
    isFree: true
  },
  {
    id: '31',
    title: 'CSS-Tricks',
    titleNe: 'CSS-Tricks',
    description: 'CSS tutorials and tricks',
    descriptionNe: 'CSS ट्यूटोरियल र ट्रिक्स',
    url: 'https://css-tricks.com/',
    category: 'Tutorial',
    type: 'article',
    isFree: true
  },
  {
    id: '32',
    title: 'DevDocs',
    titleNe: 'DevDocs',
    description: 'API documentation browser',
    descriptionNe: 'API कागजात ब्राउजर',
    url: 'https://devdocs.io/',
    category: 'Documentation',
    type: 'tool',
    isFree: true
  },
  {
    id: '33',
    title: 'Regex101',
    titleNe: 'Regex101',
    description: 'Regular expression tester and debugger',
    descriptionNe: 'रेगुलर एक्सप्रेशन टेस्टर र डिबगर',
    url: 'https://regex101.com/',
    category: 'Tool',
    type: 'tool',
    isFree: true
  },
  {
    id: '34',
    title: 'SQLFiddle',
    titleNe: 'SQLFiddle',
    description: 'Online SQL database playground',
    descriptionNe: 'अनलाइन SQL डेटाबेस प्लेग्राउंड',
    url: 'http://sqlfiddle.com/',
    category: 'Tool',
    type: 'tool',
    isFree: true
  },
  {
    id: '35',
    title: 'Postman',
    titleNe: 'Postman',
    description: 'API testing and development tool',
    descriptionNe: 'API परीक्षण र विकास उपकरण',
    url: 'https://www.postman.com/',
    category: 'Tool',
    type: 'tool',
    isFree: true
  }
];
