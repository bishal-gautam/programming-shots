export interface GlossaryTerm {
  term: string;
  termNe: string;
  definition: string;
  definitionNe: string;
  category: string;
}

export const glossary: GlossaryTerm[] = [
  {
    term: 'Algorithm',
    termNe: 'एल्गोरिदम',
    definition: 'A step-by-step procedure for solving a problem or accomplishing a task.',
    definitionNe: 'कुनै समस्या समाधान गर्न वा कार्य पूरा गर्ने चरण-दर-चरण प्रक्रिया।',
    category: 'Programming'
  },
  {
    term: 'API',
    termNe: 'API',
    definition: 'Application Programming Interface - a set of rules that allows one software to interact with another.',
    definitionNe: 'एक नियमहरूको सेट जसले एउटा सफ्टवेयरलाई अर्कोसँग अन्तरक्रिया गर्न अनुमति दिन्छ।',
    category: 'Web'
  },
  {
    term: 'Array',
    termNe: 'एरे',
    definition: 'A data structure that stores a collection of elements in contiguous memory.',
    definitionNe: 'एक डेटा संरचना जसले स्मृिमा निरन्तर तत्वहरूको संग्रह भण्डारण गर्छ।',
    category: 'Data Structures'
  },
  {
    term: 'Boolean',
    termNe: 'बुलियन',
    definition: 'A data type that can only have two values: true or false.',
    definitionNe: 'एक डेटा प्रकार जसका केवल दुई मानहरू हुन सक्छन्: true वा false।',
    category: 'Programming'
  },
  {
    term: 'Bug',
    termNe: 'बग',
    definition: 'An error or flaw in a program that causes it to produce incorrect results.',
    definitionNe: 'कुनै प्रोग्राममा त्रुटि जसले गलत परिणामहरू उत्पन्न गर्छ।',
    category: 'General'
  },
  {
    term: 'Class',
    termNe: 'क्लास',
    definition: 'A blueprint for creating objects in object-oriented programming.',
    definitionNe: 'Object-oriented प्रोग्रामिङमा वस्तुहरू सिर्जना गर्ने नक्शा।',
    category: 'OOP'
  },
  {
    term: 'Compiler',
    termNe: 'कम्पाइलर',
    definition: 'A program that translates source code into machine code.',
    definitionNe: 'स्रोत कोडलाई मेशिन कोडमा अनुवाद गर्ने प्रोग्राम।',
    category: 'Tools'
  },
  {
    term: 'Database',
    termNe: 'डेटाबेस',
    definition: 'An organized collection of data stored electronically.',
    definitionNe: 'इलेक्ट्रोनिक रूपमा भण्डारित डेटाको संगठित संग्रह।',
    category: 'Data'
  },
  {
    term: 'Exception',
    termNe: 'अपवाद',
    definition: 'An error that occurs during program execution that can be caught and handled.',
    definitionNe: 'प्रोग्राम कार्यान्वयनको क्रममा हुने त्रुटि जसलाई समात्न र ह्यान्डल गर्न सकिन्छ।',
    category: 'Programming'
  },
  {
    term: 'Framework',
    termNe: 'फ्रेमवर्क',
    definition: 'A pre-built structure that provides a foundation for software development.',
    definitionNe: 'सफ्टवेयर विकासको लागि आधार प्रदान गर्ने पूर्व-निर्मित संरचना।',
    category: 'Tools'
  },
  {
    term: 'Function',
    termNe: 'फंक्सन',
    definition: 'A reusable block of code that performs a specific task.',
    definitionNe: 'विशेष कार्य गर्ने पुन: प्रयोज्य कोड ब्लक।',
    category: 'Programming'
  },
  {
    term: 'Git',
    termNe: 'Git',
    definition: 'A distributed version control system for tracking changes in source code.',
    definitionNe: 'स्रोत कोडमा परिवर्तनहरू ट्र्याक गर्ने वितरित संस्करण नियन्त्रण प्रणाली।',
    category: 'Tools'
  },
  {
    term: 'HTML',
    termNe: 'HTML',
    definition: 'HyperText Markup Language - the standard language for creating web pages.',
    definitionNe: 'वेब पृष्ठहरू सिर्जना गर्ने मानक भाषा।',
    category: 'Web'
  },
  {
    term: 'IDE',
    termNe: 'IDE',
    definition: 'Integrated Development Environment - software with tools for writing and testing code.',
    definitionNe: 'कोड लेख्ने र परीक्षण गर्ने उपकरणहरू भएको सफ्टवेयर।',
    category: 'Tools'
  },
  {
    term: 'JSON',
    termNe: 'JSON',
    definition: 'JavaScript Object Notation - a lightweight format for storing and transmitting data.',
    definitionNe: 'डेटा भण्डारण र प्रसारणको लागि हल्का ढाँचा।',
    category: 'Data'
  },
  {
    term: 'Library',
    termNe: 'लाइब्रेरी',
    definition: 'A collection of pre-written code that can be reused in programs.',
    definitionNe: 'प्रोग्रामहरूमा पुन: प्रयोग गर्न सकिने पूर्व-लेखिएको कोडको संग्रह।',
    category: 'Tools'
  },
  {
    term: 'Loop',
    termNe: 'लुप',
    definition: 'A control structure that repeats a block of code multiple times.',
    definitionNe: 'कोड ब्लकलाई धेरै पटक दोहोर्याउने नियन्त्रण संरचना।',
    category: 'Programming'
  },
  {
    term: 'Object',
    termNe: 'अब्जेक्ट',
    definition: 'An instance of a class that contains data and behavior.',
    definitionNe: 'डेटा र व्यवहार समावेश गर्ने क्लासको एक उदाहरण।',
    category: 'OOP'
  },
  {
    term: 'OOP',
    termNe: 'OOP',
    definition: 'Object-Oriented Programming - a paradigm based on objects and classes.',
    definitionNe: 'वस्तु र क्लासमा आधारित प्रोग्रामिङ दृष्टिकोण।',
    category: 'Programming'
  },
  {
    term: 'Package',
    termNe: 'प्याकेज',
    definition: 'A directory containing related modules or libraries.',
    definitionNe: 'सम्बन्धित मोड्युल वा लाइब्रेरीहरू समावेश गर्ने डाइरेक्टरी।',
    category: 'Programming'
  },
  {
    term: 'Recursion',
    termNe: 'रेकर्सन',
    definition: 'A technique where a function calls itself to solve smaller instances of a problem.',
    definitionNe: 'एक प्रविधि जहाँ फंक्सनले आफैलाई समस्याको साना उदाहरणहरू समाधान गर्न कल गर्छ।',
    category: 'Algorithms'
  },
  {
    term: 'Repository',
    termNe: 'रिपोजिटरी',
    definition: 'A storage location for code, typically managed by version control.',
    definitionNe: 'कोडको लागि भण्डारण स्थान, सामान्यतया संस्करण नियन्त्रण द्वारा प्रबंधित।',
    category: 'Tools'
  },
  {
    term: 'Runtime',
    termNe: 'रनटाइम',
    definition: 'The period when a program is executing.',
    definitionNe: 'प्रोग्राम कार्यान्वयन भइरहेको अवधि।',
    category: 'Programming'
  },
  {
    term: 'SQL',
    termNe: 'SQL',
    definition: 'Structured Query Language - used to manage and manipulate databases.',
    definitionNe: 'डेटाबेसहरू प्रबंधित र ह्यान्डल गर्न प्रयोग गरिने भाषा।',
    category: 'Database'
  },
  {
    term: 'String',
    termNe: 'स्ट्रिङ',
    definition: 'A sequence of characters used to represent text.',
    definitionNe: 'पाठ प्रस्तुत गर्न प्रयोग गरिने क्यारेक्टरहरूको क्रम।',
    category: 'Programming'
  },
  {
    term: 'Variable',
    termNe: 'भेरिएबल',
    definition: 'A named storage location in memory that holds a value.',
    definitionNe: 'मान राख्ने मेमोरीमा नाम दिइएको भण्डारण स्थान।',
    category: 'Programming'
  },
  {
    term: 'Version Control',
    termNe: 'संस्करण नियन्त्रण',
    definition: 'A system that records changes to files over time.',
    definitionNe: 'समयसँगै फाइलहरूमा परिवर्तनहरू रेकर्ड गर्ने प्रणाली।',
    category: 'Tools'
  }
];
