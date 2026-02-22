export interface RoadmapPhase {
  id: number;
  title: string;
  titleNe: string;
  description: string;
  descriptionNe: string;
  icon: string;
  color: string;
  courses: string[];
  duration: string;
  durationNe: string;
}

export const roadmap: RoadmapPhase[] = [
  {
    id: 1,
    title: 'Absolute Beginner (Python)',
    titleNe: 'शुरुआती (Python)',
    description: 'Start your programming journey with Python - the most beginner-friendly language.',
    descriptionNe: 'Python - सबैभन्दा सजिलो प्रोग्रामिङ भाषासँग आफ्नो यात्रा सुरु गर्नुहोस्।',
    icon: '🐍',
    color: '#3776ab',
    courses: ['python-basics'],
    duration: '4-6 weeks',
    durationNe: '४-६ हप्ता'
  },
  {
    id: 2,
    title: 'C/C++ Programming',
    titleNe: 'C/C++ प्रोग्रामिङ',
    description: 'Learn C programming fundamentals - the language that powers systems worldwide.',
    descriptionNe: 'C प्रोग्रामिङको आधार सिक्नुहोस् - संसारभरि प्रणालीहरू चलाउने भाषा।',
    icon: '⚡',
    color: '#a8b9cc',
    courses: ['c-basics'],
    duration: '6-8 weeks',
    durationNe: '६-८ हप्ता'
  },
  {
    id: 3,
    title: 'Java Programming',
    titleNe: 'Java प्रोग्रामिङ',
    description: 'Master object-oriented programming with Java - used in enterprise and Android.',
    descriptionNe: 'Java सँग object-oriented प्रोग्रामिङमा महारत हासिल गर्नुहोस्।',
    icon: '☕',
    color: '#f89820',
    courses: ['java-basics'],
    duration: '8-10 weeks',
    durationNe: '८-१० हप्ता'
  },
  {
    id: 4,
    title: 'Web Development (HTML/CSS/JS)',
    titleNe: 'वेब विकास (HTML/CSS/JS)',
    description: 'Build beautiful websites with HTML, CSS, and JavaScript.',
    descriptionNe: 'HTML, CSS, र JavaScript सँग सुंदर वेबसाइटहरू बनाउनुहोस्।',
    icon: '🌐',
    color: '#e34f26',
    courses: ['html-css'],
    duration: '6-8 weeks',
    durationNe: '६-८ हप्ता'
  },
  {
    id: 5,
    title: 'Git Version Control',
    titleNe: 'Git संस्करण नियन्त्रण',
    description: 'Essential skill for any developer - track changes and collaborate.',
    descriptionNe: 'कुनै पनि विकासकर्ताको लागि आवश्यक सील - परिवर्तनहरू ट्र्याक र सहयोग गर्नुहोस्।',
    icon: '📦',
    color: '#f05032',
    courses: ['git-basics'],
    duration: '2-3 weeks',
    durationNe: '२-३ हप्ता'
  },
  {
    id: 6,
    title: 'Data Structures & Algorithms',
    titleNe: 'डेटा संरचना र एल्गोरिदम',
    description: 'Master DSA - essential for coding interviews and efficient programming.',
    descriptionNe: 'DSA मा महारत हासिल गर्नुहोस् - कोडिङ इन्टरव्यू र दक्ष प्रोग्रामिङको लागि आवश्यक।',
    icon: '🧮',
    color: '#6c5ce7',
    courses: [],
    duration: '8-12 weeks',
    durationNe: '८-१२ हप्ता'
  },
  {
    id: 7,
    title: 'Interview Preparation',
    titleNe: 'इन्टरव्यू तयारी',
    description: 'Practice common interview questions and system design basics.',
    descriptionNe: 'सामान्य इन्टरव्यू प्रश्नहरू र प्रणाली डिजाइनको आधार अभ्यास गर्नुहोस्।',
    icon: '💼',
    color: '#00b894',
    courses: [],
    duration: '4-6 weeks',
    durationNe: '४-६ हप्ता'
  },
  {
    id: 8,
    title: 'React Framework',
    titleNe: 'React फ्रेमवर्क',
    description: 'Build modern user interfaces with the most popular frontend library.',
    descriptionNe: 'सबैभन्दा लोकप्रिय frontend लाइब्रेरीसँग आधुनिक UI बनाउनुहोस्।',
    icon: '⚛️',
    color: '#61dafb',
    courses: [],
    duration: '6-8 weeks',
    durationNe: '६-८ हप्ता'
  },
  {
    id: 9,
    title: 'Backend Development',
    titleNe: 'Backend विकास',
    description: 'Learn server-side programming with Node.js, Python, or Java.',
    descriptionNe: 'Node.js, Python, या Java सँग server-side प्रोग्रामिङ सिक्नुहोस्।',
    icon: '🖥️',
    color: '#68a063',
    courses: [],
    duration: '8-10 weeks',
    durationNe: '८-१० हप्ता'
  },
  {
    id: 10,
    title: 'Full-Stack Development',
    titleNe: 'Full-Stack विकास',
    description: 'Combine frontend and backend skills to build complete applications.',
    descriptionNe: 'पूर्ण अनुप्रयोगहरू बनाउन frontend र backend सीलहरू संयोजन गर्नुहोस्।',
    icon: '🚀',
    color: '#e91e63',
    courses: [],
    duration: '10-12 weeks',
    durationNe: '१०-१२ हप्ता'
  },
  {
    id: 11,
    title: 'DevOps & Cloud',
    titleNe: 'DevOps र Cloud',
    description: 'Learn CI/CD, containers, and cloud platforms like AWS.',
    descriptionNe: 'CI/CD, containers, र AWS जस्ता cloud प्लेटफर्महरू सिक्नुहोस्।',
    icon: '☁️',
    color: '#326ce5',
    courses: [],
    duration: '6-8 weeks',
    durationNe: '६-८ हप्ता'
  },
  {
    id: 12,
    title: 'Specializations',
    titleNe: 'विशेषज्ञता',
    description: 'Choose your path: AI/ML, Mobile, Cybersecurity, or Data Science.',
    descriptionNe: 'आफ्नो बाटो रोज्नुहोस्: AI/ML, Mobile, Cybersecurity, या Data Science।',
    icon: '🎯',
    color: '#ff6b6b',
    courses: [],
    duration: '12+ weeks',
    durationNe: '१२+ हप्ता'
  }
];
