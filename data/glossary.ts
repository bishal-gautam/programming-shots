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
  },
  // JavaScript Terms
  {
    term: 'DOM',
    termNe: 'DOM',
    definition: 'Document Object Model - a programming interface for web documents that represents the page structure.',
    definitionNe: 'Document Object Model - वेब कागजातहरूको लागि प्रोग्रामिंग इन्टरफेस जसले पृष्ठ संरचनालाई प्रस्तुत गर्छ।',
    category: 'JavaScript'
  },
  {
    term: 'Event Listener',
    termNe: 'इभेन्ट लिसनर',
    definition: 'A function that waits for an event to occur and then executes code in response.',
    definitionNe: 'एक फंक्सन जसले इभेन्ट हुने प्रतीक्षा गर्छ र त्यसपछि प्रतिक्रियामा कोड कार्यान्वयन गर्छ।',
    category: 'JavaScript'
  },
  {
    term: 'Promise',
    termNe: 'प्रोमिस',
    definition: 'An object representing the eventual completion or failure of an asynchronous operation.',
    definitionNe: 'असिंक्रोनस अपरेसनको अन्तिम पूर्णता वा असफलतालाई प्रस्तुत गर्ने एक वस्तु।',
    category: 'JavaScript'
  },
  {
    term: 'Arrow Function',
    termNe: 'एरो फंक्सन',
    definition: 'A concise syntax for writing function expressions using the => symbol.',
    definitionNe: '=> प्रतीक प्रयोग गरेर फंक्सन एक्सप्रेशन लेख्ने संक्षिप्त सिन्ट्याक्स।',
    category: 'JavaScript'
  },
  {
    term: 'Template Literal',
    termNe: 'टेम्पलेट लिटरल',
    definition: 'A way to embed expressions in strings using backticks (`) and ${} for interpolation.',
    definitionNe: 'बैकटिक्स (`) र ${} प्रयोग गरेर स्ट्रिङहरूमा एक्सप्रेशनहरू एम्बेड गर्ने तरिका।',
    category: 'JavaScript'
  },
  {
    term: 'Destructuring',
    termNe: 'डिस्ट्रक्चरिंग',
    definition: 'A JavaScript expression that makes it possible to unpack values from arrays or properties from objects.',
    definitionNe: 'एक जाभास्क्रिप्ट एक्सप्रेशन जसले एरेहरूबाट मानहरू वा वस्तुहरूबाट प्रोपर्टीहरू अनप्याक गर्न सम्भव बनाउँछ।',
    category: 'JavaScript'
  },
  {
    term: 'Closure',
    termNe: 'क्लोजर',
    definition: 'A function that has access to variables from its outer (enclosing) scope even after the outer function has returned.',
    definitionNe: 'एक फंक्सन जसले बाहिरी फंक्सन फर्केपछि पनि आफ्नो बाहिरी स्कोपको भेरिएबलहरूमा पहुँच राख्छ।',
    category: 'JavaScript'
  },
  {
    term: 'Hoisting',
    termNe: 'होइस्टिंग',
    definition: 'JavaScript behavior where variable and function declarations are moved to the top of their scope.',
    definitionNe: 'जाभास्क्रिप्ट व्यवहार जहाँ भेरिएबल र फंक्सन घोषणाहरू तिनीहरूको स्कोपको शीर्षमा सारिन्छन्।',
    category: 'JavaScript'
  },
  {
    term: 'Spread Operator',
    termNe: 'स्प्रेड अपरेटर',
    definition: 'The ... syntax that expands an iterable into individual elements.',
    definitionNe: '... सिन्ट्याक्स जसले इटरेबललाई व्यक्तिगत तत्वहरूमा विस्तार गर्छ।',
    category: 'JavaScript'
  },
  {
    term: 'Callback',
    termNe: 'कलब्याक',
    definition: 'A function passed as an argument to another function that is executed after an operation completes.',
    definitionNe: 'अर्को फंक्सनमा पास गरिएको फंक्सन जसलाई अपरेसन पूरा भएपछि कार्यान्वयन गरिन्छ।',
    category: 'JavaScript'
  },
  {
    term: 'JSON',
    termNe: 'JSON',
    definition: 'JavaScript Object Notation - a lightweight format for storing and transmitting data.',
    definitionNe: 'डेटा भण्डारण र प्रसारणको लागि हल्का ढाँचा।',
    category: 'Data'
  },
  {
    term: 'API',
    termNe: 'API',
    definition: 'Application Programming Interface - a set of rules that allows one software to interact with another.',
    definitionNe: 'एक नियमहरूको सेट जसले एउटा सफ्टवेयरलाई अर्कोसँग अन्तरक्रिया गर्न अनुमति दिन्छ।',
    category: 'Web'
  },
  {
    term: 'Fetch API',
    termNe: 'Fetch API',
    definition: 'A modern JavaScript API for making HTTP requests to servers.',
    definitionNe: 'सर्भरहरूलाई HTTP अनुरोधहरू गर्ने आधुनिक जाभास्क्रिप्ट API।',
    category: 'JavaScript'
  },
  {
    term: 'Async/Await',
    termNe: 'Async/Await',
    definition: 'Modern syntax for handling asynchronous operations using promises in a cleaner way.',
    definitionNe: 'प्रोमिसहरू प्रयोग गरेर असिंक्रोनस अपरेसनहरू ह्यान्डल गर्ने आधुनिक सिन्ट्याक्स।',
    category: 'JavaScript'
  },
  {
    term: 'Recursion',
    termNe: 'रिकर्सन',
    definition: 'A programming technique where a function calls itself to solve a problem.',
    definitionNe: 'एक प्रोग्रामिंग प्रविधि जहाँ फंक्सनले समस्या समाधान गर्न आफैलाई कल गर्छ।',
    category: 'Programming'
  },
  {
    term: 'Stack',
    termNe: 'स्ट्याक',
    definition: 'A linear data structure that follows LIFO (Last In First Out) principle.',
    definitionNe: 'LIFO (Last In First Out) सिद्धांत पालना गर्ने रैखिक डेटा संरचना।',
    category: 'Data Structures'
  },
  {
    term: 'Queue',
    termNe: 'क्यू',
    definition: 'A linear data structure that follows FIFO (First In First Out) principle.',
    definitionNe: 'FIFO (First In First Out) सिद्धांत पालना गर्ने रैखिक डेटा संरचना।',
    category: 'Data Structures'
  },
  {
    term: 'Hash Table',
    termNe: 'ह्यास टेबल',
    definition: 'A data structure that maps keys to values and provides fast lookup using a hash function.',
    definitionNe: 'कुञ्जीहरूलाई मानहरूमा मैप गर्ने र ह्यास प्रकार्य प्रयोग गरेर छिटो खोजी प्रदान गर्ने डेटा संरचना।',
    category: 'Data Structures'
  },
  {
    term: 'Docker',
    termNe: 'Docker',
    definition: 'A platform for developing, shipping, and running applications in containers.',
    definitionNe: 'कन्टेनरहरूमा अनुप्रयोगहरू विकास, शिपिङ, र चलाउने प्लेटफर्म।',
    category: 'DevOps'
  },
  {
    term: 'Kubernetes',
    termNe: 'Kubernetes',
    definition: 'An open-source container orchestration platform for automating deployment and scaling.',
    definitionNe: 'स्वचालित deployment र scaling को लागि खुला-स्रोत कन्टेनर अर्केस्ट्रेशन प्लेटफर्म।',
    category: 'DevOps'
  },
  {
    term: 'REST API',
    termNe: 'REST API',
    definition: 'An architectural style for designing networked applications using HTTP methods.',
    definitionNe: 'HTTP विधिहरू प्रयोग गरेर नेटवर्क अनुप्रयोगहरू डिजाइन गर्ने वास्तुकला शैली।',
    category: 'Web'
  },
  {
    term: 'CRUD',
    termNe: 'CRUD',
    definition: 'Create, Read, Update, Delete - the four basic operations of persistent storage.',
    definitionNe: 'सिर्जना, पढ्नुहोस्, अपडेट, डिलीट - दीर्घकालीन भण्डारणका चारवटा आधारभूत सञ्चालनहरू।',
    category: 'Database'
  },
  {
    term: 'SQL',
    termNe: 'SQL',
    definition: 'Structured Query Language - a language for managing relational databases.',
    definitionNe: 'संरचित क्वेरी भाषा - रिलेशनल डेटाबेसहरू प्रबन्धन गर्ने भाषा।',
    category: 'Database'
  },
  {
    term: 'NoSQL',
    termNe: 'NoSQL',
    definition: 'Non-relational databases that provide flexible schemas and horizontal scaling.',
    definitionNe: 'लचिलो स्किमा र क्षैतिज स्केलिंग प्रदान गर्ने गैर-रिलेशनल डेटाबेसहरू।',
    category: 'Database'
  },
  {
    term: 'Machine Learning',
    termNe: 'मेशिन लर्निङ',
    definition: 'A subset of AI that enables systems to learn and improve from experience.',
    definitionNe: 'अनुभवबाट सिक्न र सुधार्न सक्षम बनाउने AI को उपसमूह।',
    category: 'AI'
  },
  {
    term: 'Neural Network',
    termNe: 'न्यूरल नेटवर्क',
    definition: 'A computing system inspired by biological neural networks for pattern recognition.',
    definitionNe: 'पैटर्न पहिचानको लागि जैविक न्यूरल नेटवर्कहरूबाट प्रेरित कम्प्युटिङ प्रणाली।',
    category: 'AI'
  },
  {
    term: 'Encryption',
    termNe: 'इन्क्रिप्सन',
    definition: 'The process of converting data into a coded format to prevent unauthorized access.',
    definitionNe: 'अनधिकृत पहुँच रोक्न डेटालाई कोडेड ढाँचामा रूपांतरण गर्ने प्रक्रिया।',
    category: 'Security'
  },
  {
    term: 'Agile',
    termNe: 'एजाइल',
    definition: 'A project management methodology emphasizing iterative development and collaboration.',
    definitionNe: 'दोहोरिने विकास र सहयोगमा जोड दिने परियोजना व्यवस्थापन पद्धति।',
    category: 'Methodology'
  },
  {
    term: 'Scrum',
    termNe: 'स्क्रम',
    definition: 'An Agile framework for managing complex software development projects.',
    definitionNe: 'जटिल सफ्टवेयर विकास परियोजनाहरू व्यवस्थापनको लागि एजाइल फ्रेमवर्क।',
    category: 'Methodology'
  }
];
