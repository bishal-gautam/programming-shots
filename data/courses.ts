export interface Lesson {
  id: string;
  title: { en: string; ne: string };
  slug: string;
  content: { en: string; ne: string };
  codeExamples: CodeExample[];
  quiz: QuizQuestion[];
}

export interface CodeExample {
  language: string;
  code: string;
  explanation: { en: string; ne: string };
}

export interface QuizQuestion {
  id: string;
  question: { en: string; ne: string };
  options: { en: string[]; ne: string[] };
  correctAnswer: number;
  explanation: { en: string; ne: string };
}

export interface Course {
  id: string;
  title: { en: string; ne: string };
  slug: string;
  description: { en: string; ne: string };
  phase: number;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export const courses: Course[] = [
  // Phase 1: Absolute Beginner (Python)
  {
    id: 'python-basics',
    title: { en: 'Python Basics', ne: 'पाइथनको आधारभूत कुराहरू' },
    slug: 'python-basics',
    description: { 
      en: 'Learn Python programming from scratch. Perfect for absolute beginners.', 
      ne: 'शून्यबाट पाइथन प्रोग्रामिंग सिक्नुहोस्। पूर्ण शुरुआतीहरूको लागि उपयुक्त।' 
    },
    phase: 1,
    icon: '🐍',
    color: '#3776ab',
    lessons: [
      {
        id: 'python-intro',
        slug: 'introduction-to-python',
        title: { 
          en: 'Introduction to Python', 
          ne: 'पाइथनको परिचय' 
        },
        content: {
          en: `
# Introduction to Python

Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular programming languages in the world.

## Why Learn Python?

- **Easy to Learn**: Python has simple, readable syntax that resembles English
- **Versatile**: Used in web development, data science, AI, automation, and more
- **Large Community**: Huge ecosystem of libraries and frameworks
- **High Demand**: Python developers are in high demand

## Your First Python Program

Let's start with the classic "Hello, World!" program:

Python is designed to be readable while still being powerful. The syntax is clean and straightforward.
          `,
          ne: `
# पाइथनको परिचय

पाइथन एक उच्च-स्तर, व्याख्या गरिएको प्रोग्रामिंग भाषा हो जुन यसको सरलता र पठनीयताको लागि चिनिन्छ। गुइडो भान रोसमले 1991 मा सिर्जना गरेको पाइथन संसारको सबैभन्दा लोकप्रिय प्रोग्रामिंग भाषाहरूमध्ये एक भएको छ।

## पाइथन किन सिक्नुहोस्?

- **सजिलै सिक्ने**: पाइथनमा सरल, पठनीय सिन्ट्याक्स छ जुन अंग्रेजी जस्तै छ
- **बहुमुखी**: वेब विकास, डेटा साइन्स, एआई, अटोमेशन र अरू धेरैमा प्रयोग हुन्छ
- **ठूलो समुदाय**: पुस्तकालय र फ्रेमवर्कको विशाल पारिस्थितिकी
- **उच्च माग**: पाइथन विकासकर्ताहरूको उच्च माग छ

## तपाईंको पहिलो पाइथन कार्यक्रम

"हेलो, वर्ल्ड!" क्लासिक कार्यक्रमबाट सुरु गरौं:

पाइथन शक्तिशाली रहँदा पनि पठनीय हुन डिजाइन गरिएको छ। सिन्ट्याक्स सरल र स्पष्ट छ।
          `
        },
        codeExamples: [
          {
            language: 'python',
            code: `print("Hello, World!")`,
            explanation: {
              en: 'The print() function outputs text to the console. This is typically the first program you write in any language.',
              ne: 'print() प्रकार्य कन्सोलमा पाठ आउटपुट गर्छ। यो सामान्यतया कुनै पनि भाषामा लेख्ने पहिलो कार्यक्रम हो।'
            }
          },
          {
            language: 'python',
            code: `# This is a comment
name = "Student"
print(f"Welcome, {name}!")`,
            explanation: {
              en: "Variables store data. In Python, we don't need to declare the type - Python figures it out automatically.",
              ne: 'भेरिएबलहरूले डेटा भण्डारण गर्छन्। पाइथनमा, प्रकार घोषणा गर्न आवश्यक छैन - पाइथन स्वचालित रूपमा यो निर्धारण गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'Who created Python?', 
              ne: 'पाइथनको सिर्जनाता को हुन्?' 
            },
            options: { 
              en: ['James Gosling', 'Guido van Rossum', 'Bjarne Stroustrup', 'Dennis Ritchie'],
              ne: ['जेम्स गोसलिंग', 'गुइडो भान रोसम', 'ब्यार्ने स्ट्रोस्ट्रप', 'डेनिस रिची']
            },
            correctAnswer: 1,
            explanation: { 
              en: 'Guido van Rossum created Python in 1991.', 
              ne: 'गुइडो भान रोसमले 1991 मा पाइथन सिर्जना गरे।' 
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'What function is used to output text in Python?', 
              ne: 'पाइथनमा पाठ आउटपुट गर्न कुन प्रकार्य प्रयोग गरिन्छ?' 
            },
            options: { 
              en: ['echo()', 'console.log()', 'print()', 'output()'],
              ne: ['echo()', 'console.log()', 'print()', 'output()']
            },
            correctAnswer: 2,
            explanation: { 
              en: 'The print() function is used to output text in Python.', 
              ne: 'पाइथनमा पाठ आउटपुट गर्न print() प्रकार्य प्रयोग गरिन्छ।' 
            }
          }
        ]
      },
      {
        id: 'python-variables',
        slug: 'variables-and-data-types',
        title: { 
          en: 'Variables and Data Types', 
          ne: 'भेरिएबल र डेटा प्रकारहरू' 
        },
        content: {
          en: `
# Variables and Data Types

Variables are containers for storing data values. Python has several built-in data types.

## Variable Naming Rules

- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Case-sensitive (age and AGE are different)
- Cannot be Python keywords

## Basic Data Types

### Numbers
- **int**: Whole numbers (1, 42, -10)
- **float**: Decimal numbers (3.14, -0.5)

### Strings
- Text enclosed in quotes: "hello" or 'hello'

### Booleans
- True or False (capitalized in Python)
          `,
          ne: `
# भेरिएबल र डेटा प्रकारहरू

भेरिएबलहरू डेटा मानहरू भण्डारण गर्ने कन्टेनरहरू हुन्। पाइथनमा धेरै built-in डेटा प्रकारहरू छन्।

## भेरिएबल नामकरण नियमहरू

- अक्षर वा अन्डरस्कोरबाट सुरु हुनुपर्छ
- अक्षर, अंक, र अन्डरस्कोर समावेश हुन सक्छ
- केस-सेन्सिटिभ (age र AGE फरक हुन्)
- पाइथन कीवर्ड हुन सक्दैन

## आधारभूत डेटा प्रकारहरू

### अंकहरू
- **int**: पूर्ण अंकहरू (1, 42, -10)
- **float**: दशमलव अंकहरू (3.14, -0.5)

### स्ट्रिङहरू
- उद्धरणमा संलग्न पाठ: "hello" वा 'hello'

### बुलियनहरू
- True वा False (पाइथनमा क्यापिटलाइज्ड)
          `
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Integer
age = 25

# Float
price = 19.99

# String
name = "Python"

# Boolean
is_active = True

print(f"Age: {age}, Price: {price}, Name: {name}, Active: {is_active}")`,
            explanation: {
              en: 'Python automatically determines the data type. You can check the type using type().',
              ne: 'पाइथनले स्वचालित रूपमा डेटा प्रकार निर्धारण गर्छ। तपाईं type() प्रयोग गरेर प्रकार जाँच्न सक्नुहुन्छ।'
            }
          },
          {
            language: 'python',
            code: `# Multiple assignment
x, y, z = 1, 2, 3

# Same value to multiple variables
a = b = c = 0

print(x, y, z, a, b, c)`,
            explanation: {
              en: 'Python allows multiple assignment in a single line, making code concise.',
              ne: 'पाइथनले एकै रेखामा धेरै असाइनमेंटहरू अनुमति दिन्छ, जसले कोड संक्षिप्त बनाउँछ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What is the data type of x = 3.14?', 
              ne: 'x = 3.14 को डेटा प्रकार के हो?' 
            },
            options: { 
              en: ['int', 'str', 'float', 'bool'],
              ne: ['int', 'str', 'float', 'bool']
            },
            correctAnswer: 2,
            explanation: { 
              en: '3.14 is a floating-point number, so its type is float.', 
              ne: '3.14 एक फ्लोटिंग-पोइन्ट अंक हो, त्यसैले यसको प्रकार float हो।' 
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'Which is NOT a valid variable name in Python?', 
              ne: 'पाइथनमा कुन वैध भेरिएबल नाम होइन?' 
            },
            options: { 
              en: ['my_var', '_private', '2fast', 'count'],
              ne: ['my_var', '_private', '2fast', 'count']
            },
            correctAnswer: 2,
            explanation: { 
              en: 'Variable names cannot start with a number.', 
              ne: 'भेरिएबल नामहरू अंकबाट सुरु हुन सक्दैनन्।' 
            }
          }
        ]
      },
      {
        id: 'python-operators',
        slug: 'operators-and-expressions',
        title: { 
          en: 'Operators and Expressions', 
          ne: 'अपरेटर र एक्स्प्रेशनहरू' 
        },
        content: {
          en: `
# Operators and Expressions

Operators are used to perform operations on variables and values.

## Arithmetic Operators

- **+** Addition
- **-** Subtraction
- **\*** Multiplication
- **/** Division
- **//** Floor Division (rounds down)
- **%** Modulus (remainder)
- **\*\*** Exponentiation

## Comparison Operators

Return True or False:
- **==** Equal
- **!=** Not equal
- **>** Greater than
- **<** Less than
- **>=** Greater than or equal
- **<=** Less than or equal
          `,
          ne: `
# अपरेटर र एक्स्प्रेशनहरू

अपरेटरहरू भेरिएबल र मानहरूमा कार्यहरू गर्न प्रयोग गरिन्छन्।

## अरिथमेटिक अपरेटरहरू

- **+** जोड
- **-** घटाउ
- **\*** गुणा
- **/** भाग
- **//** फ्लोर डिभिजन (तल राउन्ड)
- **%** मोड्युलस (बाँकी)
- **\*\*** एक्सपोनेन्सियेशन

## तुलना अपरेटरहरू

True वा False फर्काउँछ:
- **==** बराबर
- **!=** बराबर छैन
- **>** भन्दा ठूलो
- **<** भन्दा सानो
- **>=** भन्दा ठूलो वा बराबर
- **<=** भन्दा सानो वा बराबर
          `
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Arithmetic
a, b = 10, 3
print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...
print(a // b)  # 3
print(a % b)   # 1
print(a ** b)  # 1000`,
            explanation: {
              en: 'Python supports all standard arithmetic operators. Note that / returns float, // returns integer.',
              ne: 'पाइथनले सबै मानक अरिथमेटिक अपरेटरहरू समर्थन गर्छ। नोट गर्नुहोस् कि / ले float फर्काउँछ, // ले integer।'
            }
          },
          {
            language: 'python',
            code: `# Comparison
x, y = 5, 10

print(x == y)  # False
print(x != y)  # True
print(x > y)   # False
print(x < y)   # True
print(x >= 5)  # True
print(y <= 10) # True`,
            explanation: {
              en: 'Comparison operators always return a boolean value (True or False).',
              ne: 'तुलना अपरेटरहरू सधैं बुलियन मान (True वा False) फर्काउँछन्।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What is the result of 17 // 5?', 
              ne: '17 // 5 को परिणाम के हो?' 
            },
            options: { 
              en: ['3.4', '3', '2', '4'],
              ne: ['3.4', '3', '2', '4']
            },
            correctAnswer: 1,
            explanation: { 
              en: '// is floor division, which rounds down to the nearest integer.', 
              ne: '// फ्लोर डिभिजन हो, जुन निकटतम पूर्ण अंकमा तल राउन्ड गर्छ।' 
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'What does % operator return?', 
              ne: '% अपरेटरले के फर्काउँछ?' 
            },
            options: { 
              en: ['Quotient', 'Remainder', 'Product', 'Difference'],
              ne: ['भागफल', 'बाँकी', 'गुणनफल', 'फरक']
            },
            correctAnswer: 1,
            explanation: { 
              en: 'The % (modulus) operator returns the remainder of division.', 
              ne: '% (मोड्युलस) अपरेटरले भागको बाँकी फर्काउँछ।' 
            }
          }
        ]
      },
      {
        id: 'python-conditionals',
        slug: 'conditional-statements',
        title: { 
          en: 'Conditional Statements', 
          ne: 'सशर्त स्टेटमेंटहरू' 
        },
        content: {
          en: `
# Conditional Statements

Conditional statements allow you to execute code based on certain conditions.

## If Statement

The if statement executes a block of code only if a condition is true.

## Elif and Else

- **elif**: Short for "else if" - check additional conditions
- **else**: Executes when none of the previous conditions are true

## Comparison Operators

Used in conditions:
- **==** Equal
- **!=** Not equal
- **>** Greater than
- **<** Less than
- **>=** Greater than or equal
- **<=** Less than or equal
          `,
          ne: `
# सशर्त स्टेटमेंटहरू

सशर्त स्टेटमेंटहरूले तपाईंलाई निश्चित शर्तहरूको आधारमा कोड कार्यान्वयन गर्न अनुमति दिन्छ।

## If Statement

if स्टेटमेंटले कुनै शर्त सत्य हुँदा मात्र कोडको ब्लक कार्यान्वयन गर्छ।

## Elif र Else

- **elif**: "else if" को संक्षिप्त रूप - अतिरिक्त शर्तहरू जाँच्नुहोस्
- **else**: जब पहिलेका शर्तहरू मध्ये कुनै पनि सत्य नहोस् तब कार्यान्वयन हुन्छ

## तुलना अपरेटरहरू

शर्तहरूमा प्रयोग गरिन्छ:
- **==** बराबर
- **!=** बराबर छैन
- **>** भन्दा ठूलो
- **<** भन्दा सानो
- **>=** भन्दा ठूलो वा बराबर
- **<=** भन्दा सानो वा बराबर
          `
        },
        codeExamples: [
          {
            language: 'python',
            code: `# If-Else Example
age = 18

if age >= 18:
    print("You are an adult!")
else:
    print("You are a minor.")`,
            explanation: {
              en: 'The if statement checks if age is 18 or more. If true, it prints the first message.',
              ne: 'if स्टेटमेंटले जाँच्छ कि उमेर 18 वा सोभन्दा माथि छ। यदि सत्य हो भने, यो पहिलो सन्देश प्रिन्ट गर्छ।'
            }
          },
          {
            language: 'python',
            code: `# Elif Example
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Your grade: {grade}")`,
            explanation: {
              en: 'Elif allows you to check multiple conditions in sequence.',
              ne: 'Elif ले तपाईंलाई क्रममा धेरै शर्तहरू जाँच्न अनुमति दिन्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What keyword is used to check additional conditions after an if statement?', 
              ne: 'if स्टेटमेंटपछि अतिरिक्त शर्तहरू जाँच्न कुन कीवर्ड प्रयोग गरिन्छ?' 
            },
            options: { 
              en: ['else', 'elif', 'then', 'when'],
              ne: ['else', 'elif', 'then', 'when']
            },
            correctAnswer: 1,
            explanation: { 
              en: 'elif is used to check additional conditions after an if statement.', 
              ne: 'elif प्रयोग गरिन्छ if स्टेटमेंटपछि अतिरिक्त शर्तहरू जाँच्न।' 
            }
          }
        ]
      },
      {
        id: 'python-loops',
        slug: 'loops-in-python',
        title: { 
          en: 'Loops in Python', 
          ne: 'पाइथनमा लूपहरू' 
        },
        content: {
          en: `
# Loops in Python

Loops allow you to execute a block of code multiple times.

## For Loop

The for loop iterates over a sequence (like a list, tuple, or string).

## While Loop

The while loop continues as long as a condition is true.

## Loop Control

- **break**: Exit the loop immediately
- **continue**: Skip to the next iteration
- **pass**: Do nothing (placeholder)
          `,
          ne: `
# पाइथनमा लूपहरू

लूपहरूले तपाईंलाई कोडको ब्लक धेरै पटक कार्यान्वयन गर्न अनुमति दिन्छ।

## For Loop

for लूपले अनुक्रम (जस्तै सूची, टपल, वा स्ट्रिङ) मा दोहोर्याउँछ।

## While Loop

while लूप जबसम्म शर्त सत्य हुन्छ तबसम्म जारी रहन्छ।

## लूप नियन्त्रण

- **break**: तुरुन्तै लूपबाट बाहिर निस्कनुहोस्
- **continue**: अर्को इटरेशनमा जानुहोस्
- **pass**: केही नगर्नुहोस् (स्थानधारक)
          `
        },
        codeExamples: [
          {
            language: 'python',
            code: `# For Loop
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)

# Range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4`,
            explanation: {
              en: 'for loop can iterate over lists and use range() for numbered iterations.',
              ne: 'for लूपले सूचीहरूमा दोहोर्याउन सक्छ र संख्याको इटरेशनको लागि range() प्रयोग गर्न सक्छ।'
            }
          },
          {
            language: 'python',
            code: `# While Loop
count = 0

while count < 5:
    print(count)
    count += 1

# Break example
for i in range(10):
    if i == 5:
        break
    print(i)`,
            explanation: {
              en: 'while loop continues until the condition becomes false. break exits the loop early.',
              ne: 'while लूप शर्त false नहुँदासम्म जारी रहन्छ। break ले लूपबाट चाँडै बाहिर निस्कन्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'Which keyword is used to exit a loop immediately?', 
              ne: 'लूपबाट तुरुन्तै बाहिर निस्कन कुन कीवर्ड प्रयोग गरिन्छ?' 
            },
            options: { 
              en: ['exit', 'break', 'stop', 'quit'],
              ne: ['exit', 'break', 'stop', 'quit']
            },
            correctAnswer: 1,
            explanation: { 
              en: 'break is used to exit a loop immediately.', 
              ne: 'break प्रयोग गरिन्छ लूपबाट तुरुन्तै बाहिर निस्कन।' 
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'What does range(3) produce?', 
              ne: 'range(3) ले के उत्पादन गर्छ?' 
            },
            options: { 
              en: ['[0, 1, 2]', '[1, 2, 3]', '[0, 1, 2, 3]', '[1, 2]'],
              ne: ['[0, 1, 2]', '[1, 2, 3]', '[0, 1, 2, 3]', '[1, 2]']
            },
            correctAnswer: 0,
            explanation: { 
              en: 'range(3) produces [0, 1, 2] - starting from 0 up to but not including 3.', 
              ne: 'range(3) ले [0, 1, 2] उत्पादन गर्छ - 0 बाट सुरु भई 3 सम्म समावेश नगरी।' 
            }
          }
        ]
      }
    ]
  },
  // Phase 2: C/C++
  {
    id: 'c-basics',
    title: { en: 'C Programming Basics', ne: 'C प्रोग्रामिंगको आधारभूत कुराहरू' },
    slug: 'c-basics',
    description: { 
      en: 'Master C programming fundamentals - the language that influenced many others.', 
      ne: 'C प्रोग्रामिंगको आधारभूत कुराहरूमा महारत हासिल गर्नुहोस् - जसले धेरै अन्य भाषाहरूलाई प्रभाव पारेको छ।' 
    },
    phase: 2,
    icon: '⚡',
    color: '#a8b9cc',
    lessons: [
      {
        id: 'c-intro',
        slug: 'introduction-to-c',
        title: { 
          en: 'Introduction to C', 
          ne: 'C को परिचय' 
        },
        content: {
          en: `
# Introduction to C

C is a general-purpose programming language developed by Dennis Ritchie in 1972 at Bell Labs. It's known as the mother of modern programming languages.

## Why Learn C?

- **Foundation**: Understanding C helps you learn other languages
- **Performance**: Extremely fast and efficient
- **System Programming**: Used for operating systems, embedded systems
- **Portable**: Runs on almost any platform

## Your First C Program

The classic "Hello, World!" in C:
          `,
          ne: `
# C को परिचय

C एक सामान्य-उद्देश्य प्रोग्रामिंग भाषा हो जुन डेनिस रिचीले 1972 मा बेल ल्याबमा विकास गरे। यो आधुनिक प्रोग्रामिंग भाषाहरूको माता भनेर चिनिन्छ।

## C किन सिक्नुहोस्?

- **आधार**: C बुझ्नाले अन्य भाषाहरू सिक्न मद्दत गर्छ
- **प्रदर्शन**: अत्यन्त छिटो र कुशल
- **प्रणाली प्रोग्रामिंग**: अपरेटिंग सिस्टम, एम्बेडेड सिस्टममा प्रयोग हुन्छ
- **पोर्टेबल**: लगभग कुनै पनि प्लेटफर्ममा चल्छ

## तपाईंको पहिलो C कार्यक्रम

C मा क्लासिक "हेलो, वर्ल्ड!":
          `
        },
        codeExamples: [
          {
            language: 'c',
            code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
            explanation: {
              en: 'Every C program needs main() as the entry point. printf() prints text. return 0 indicates successful execution.',
              ne: 'प्रत्येक C कार्यक्रमलाई main() प्रवेश बिन्दुको रूपमा चाहिन्छ। printf() ले पाठ प्रिन्ट गर्छ। return 0 सफल कार्यान्वयन संकेत गर्छ।'
            }
          },
          {
            language: 'c',
            code: `#include <stdio.h>

int main() {
    int age = 25;
    printf("I am %d years old\\n", age);
    return 0;
}`,
            explanation: {
              en: 'Variables in C must have a declared type. %d is used to print integers.',
              ne: 'C मा भेरिएबलहरूको घोषित प्रकार हुनुपर्छ। %d पूर्ण अंकहरू प्रिन्ट गर्न प्रयोग हुन्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'Who created C programming language?', 
              ne: 'C प्रोग्रामिंग भाषाको सिर्जनाता को हुन्?' 
            },
            options: { 
              en: ['Bjarne Stroustrup', 'Dennis Ritchie', 'Ken Thompson', 'James Gosling'],
              ne: ['ब्यार्ने स्ट्रोस्ट्रप', 'डेनिस रिची', 'केन थम्पसन', 'जेम्स गोसलिंग']
            },
            correctAnswer: 1,
            explanation: { 
              en: 'Dennis Ritchie created C at Bell Labs in 1972.', 
              ne: 'डेनिस रिचीले 1972 मा बेल ल्याबमा C सिर्जना गरे।' 
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'What is the entry point of a C program?', 
              ne: 'C कार्यक्रमको प्रवेश बिन्दु के हो?' 
            },
            options: { 
              en: ['start()', 'main()', 'entry()', 'run()'],
              ne: ['start()', 'main()', 'entry()', 'run()']
            },
            correctAnswer: 1,
            explanation: { 
              en: 'The main() function is the entry point of every C program.', 
              ne: 'main() प्रकार्य प्रत्येक C कार्यक्रमको प्रवेश बिन्दु हो।' 
            }
          }
        ]
      },
      {
        id: 'c-variables',
        slug: 'variables-and-data-types-in-c',
        title: { 
          en: 'Variables and Data Types in C', 
          ne: 'C मा भेरिएबल र डेटा प्रकारहरू' 
        },
        content: {
          en: `
# Variables and Data Types in C

C is a statically typed language - you must declare the type of each variable.

## Basic Data Types

- **int**: Integer (whole numbers)
- **float**: Floating point (decimal numbers)
- **double**: Double precision floating point
- **char**: Single character
- **void**: No type

## Variable Declaration

In C, you must declare variables before using them.
          `,
          ne: `
# C मा भेरिएबल र डेटा प्रकारहरू

C एक स्थिर रूपमा टाइप गरिएको भाषा हो - तपाईंले प्रत्येक भेरिएबलको प्रकार घोषणा गर्नुपर्छ।

## आधारभूत डेटा प्रकारहरू

- **int**: पूर्ण अंक (whole numbers)
- **float**: फ्लोटिंग पोइन्ट (दशमलव अंकहरू)
- **double**: डबल प्रिसिजन फ्लोटिंग पोइन्ट
- **char**: एकल क्यारेक्टर
- **void**: कोई प्रकार छैन

## भेरिएबल घोषणा

C मा, तपाईंले प्रयोग गर्नुअघि भेरिएबलहरू घोषणा गर्नुपर्छ।
          `
        },
        codeExamples: [
          {
            language: 'c',
            code: `#include <stdio.h>

int main() {
    int age = 25;
    float height = 5.9;
    char grade = 'A';
    double pi = 3.14159265;
    
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c\\n", grade);
    printf("Pi: %.8lf\\n", pi);
    
    return 0;
}`,
            explanation: {
              en: 'C requires explicit type declarations. Each type has specific format specifiers: %d (int), %f (float), %c (char), %lf (double).',
              ne: 'C लाई स्पष्ट प्रकार घोषणा आवश्यक छ। प्रत्येक प्रकारको विशिष्ट फर्माट स्पेसिफायर छन्: %d (int), %f (float), %c (char), %lf (double)।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'Which data type is used for a single character in C?', 
              ne: 'C मा एकल क्यारेक्टरको लागि कुन डेटा प्रकार प्रयोग गरिन्छ?' 
            },
            options: { 
              en: ['string', 'char', 'text', 'character'],
              ne: ['string', 'char', 'text', 'character']
            },
            correctAnswer: 1,
            explanation: { 
              en: 'char is the data type for single characters in C.', 
              ne: 'char C मा एकल क्यारेक्टरहरूको डेटा प्रकार हो।' 
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'What is the format specifier for float in printf?', 
              ne: 'printf मा float को लागि फर्माट स्पेसिफायर के हो?' 
            },
            options: { 
              en: ['%f', '%float', '%fl', '%d'],
              ne: ['%f', '%float', '%fl', '%d']
            },
            correctAnswer: 0,
            explanation: { 
              en: '%f is the format specifier for float in C.', 
              ne: '%f C मा float को लागि फर्माट स्पेसिफायर हो।' 
            }
          }
        ]
      },
      {
        id: 'c-control',
        slug: 'control-flow-statements',
        title: { 
          en: 'Control Flow Statements', 
          ne: 'कन्ट्रोल फ्लो स्टेटमेंटहरू' 
        },
        content: {
          en: `
# Control Flow Statements

Control flow determines the order in which statements are executed.

## Conditional Statements

### If-Else
Execute code based on conditions.

### Switch
Select from multiple options.

## Loops

### For Loop
When you know the number of iterations.

### While Loop
When the number of iterations is unknown.
          `,
          ne: `
# कन्ट्रोल फ्लो स्टेटमेंटहरू

कन्ट्रोल फ्लोले कुन क्रममा स्टेटमेंटहरू कार्यान्वयन हुन्छन् निर्धारण गर्छ।

## सशर्त स्टेटमेंटहरू

### If-Else
शर्तहरूको आधारमा कोड कार्यान्वयन गर्नुहोस्।

### Switch
धेरै विकल्पहरूबाट चयन गर्नुहोस्।

## लूपहरू

### For Loop
जब तपाईंले इटरेशनको सँख्या जान्नुहुन्छ।

### While Loop
जब इटरेशनको सँख्या अज्ञात हुन्छ।
          `
        },
        codeExamples: [
          {
            language: 'c',
            code: `#include <stdio.h>

int main() {
    int num = 10;
    
    if (num > 0) {
        printf("Positive\\n");
    } else if (num < 0) {
        printf("Negative\\n");
    } else {
        printf("Zero\\n");
    }
    
    return 0;
}`,
            explanation: {
              en: 'if-else statements allow conditional execution of code blocks.',
              ne: 'if-else स्टेटमेंटहरूले कोड ब्लकहरूको सशर्त कार्यान्वयन अनुमति दिन्छ।'
            }
          },
          {
            language: 'c',
            code: `#include <stdio.h>

int main() {
    // For loop
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");
    
    // While loop
    int count = 0;
    while (count < 3) {
        printf("Count: %d\\n", count);
        count++;
    }
    
    return 0;
}`,
            explanation: {
              en: 'for loops are ideal when you know iterations. while loops work when conditions may change.',
              ne: 'for लूपहरू आदर्श हुन् जब तपाईं इटरेशनहरू जान्नुहुन्छ। while लूपहरू शर्तहरू परिवर्तन हुँदा काम गर्छन्।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'Which loop is best when you know the exact number of iterations?', 
              ne: 'जब तपाईंले इटरेशनको सही सँख्या जान्नुहुन्छ कुन लूप उत्तम छ?' 
            },
            options: { 
              en: ['while', 'do-while', 'for', 'switch'],
              ne: ['while', 'do-while', 'for', 'switch']
            },
            correctAnswer: 2,
            explanation: { 
              en: 'The for loop is ideal when you know the number of iterations beforehand.', 
              ne: 'for लूप आदर्श हो जब तपाईं इटरेशनको सँख्या पहिले नै जान्नुहुन्छ।' 
            }
          }
        ]
      }
    ]
  },
  // Phase 3: Java
  {
    id: 'java-basics',
    title: { en: 'Java Programming', ne: 'जाभा प्रोग्रामिंग' },
    slug: 'java-basics',
    description: { 
      en: 'Learn Java - the language behind Android apps and enterprise software.', 
      ne: 'जाभा सिक्नुहोस् - एंड्रोइड एप्स र एन्टरप्राइज सफ्टवेयरको पछाडिको भाषा।' 
    },
    phase: 3,
    icon: '☕',
    color: '#f89820',
    lessons: [
      {
        id: 'java-intro',
        slug: 'introduction-to-java',
        title: { 
          en: 'Introduction to Java', 
          ne: 'जाभाको परिचय' 
        },
        content: {
          en: `
# Introduction to Java

Java is a high-level, object-oriented programming language developed by Sun Microsystems in 1995. It's designed to be platform-independent.

## Key Features

- **Write Once, Run Anywhere**: Java programs run on any device with JVM
- **Object-Oriented**: Everything is organized around objects and classes
- **Automatic Memory Management**: Garbage collection handles memory
- **Strong Typing**: Variables must be declared with types
- **Multi-threaded**: Built-in support for concurrent programming
          `,
          ne: `
# जाभाको परिचय

जाभा एक उच्च-स्तर, वस्तु-उन्मुख प्रोग्रामिंग भाषा हो जुन 1995 मा Sun Microsystems द्वारा विकास गरियो। यो प्लेटफर्म-स्वतन्त्र हुन डिजाइन गरिएको छ।

## मुख्य विशेषताहरू

- **एकपटक लेख्नुहोस्, जहाँ पनि चलाउनुहोस्**: जाभा कार्यक्रमहरू JVM भएको कुनै पनि डिवाइसमा चल्छन्
- **वस्तु-उन्मुख**: सबै कुरा वस्तु र क्लासहरूको वरपर संगठित छ
- **स्वचालित मेमोरी प्रबन्धन**: गार्बेज कलेक्शनले मेमोरी ह्यान्डल गर्छ
- **शक्तिशाली टाइपिंग**: भेरिएबलहरू प्रकारहरूसँग घोषित हुनुपर्छ
- **मल्टी-थ्रेडेड**: समानांतर प्रोग्रामिंगको लागि built-in समर्थन
          `
        },
        codeExamples: [
          {
            language: 'java',
            code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
            explanation: {
              en: 'Every Java program needs a main() method. System.out.println() prints to console.',
              ne: 'प्रत्येक जाभा कार्यक्रमलाई main() विधि चाहिन्छ। System.out.println() ले कन्सोलमा प्रिन्ट गर्छ।'
            }
          },
          {
            language: 'java',
            code: `public class Variables {
    public static void main(String[] args) {
        int age = 25;
        double price = 19.99;
        String name = "Java";
        boolean isActive = true;
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}`,
            explanation: {
              en: "Java is strongly typed. String is capitalized - it's an object, not a primitive.",
              ne: 'जाभा शक्तिशाली रूपमा टाइप गरिएको छ। String क्यापिटलाइज्ड छ - यो वस्तु हो, प्रिमिटिभ होइन।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What does "Write Once, Run Anywhere" mean about Java?', 
              ne: '"एकपटक लेख्नुहोस्, जहाँ पनि चलाउनुहोस्" ले जाभाको बारेमा के जनाउँछ?' 
            },
            options: { 
              en: ['Java code runs on all operating systems', 'Java is only for Windows', 'Java code is always free', 'Java never has bugs'],
              ne: ['जाभा कोड सबै अपरेटिंग सिस्टममा चल्छ', 'जाभा केवल Windows को लागि हो', 'जाभा कोड सदैव निःशुल्क छ', 'जाभामा कहिल्यै बग हुँदैन']
            },
            correctAnswer: 0,
            explanation: { 
              en: 'Java runs on any device with Java Virtual Machine (JVM), making it platform-independent.', 
              ne: 'जाभा Java Virtual Machine (JVM) भएको कुनै पनि डिवाइसमा चल्छ, जसले यसलाई प्लेटफर्म-स्वतन्त्र बनाउँछ।' 
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'What is the entry point of a Java program?', 
              ne: 'जाभा कार्यक्रमको प्रवेश बिन्दु के हो?' 
            },
            options: { 
              en: ['start()', 'main()', 'run()', 'init()'],
              ne: ['start()', 'main()', 'run()', 'init()']
            },
            correctAnswer: 1,
            explanation: { 
              en: 'The main() method is the entry point of any Java application.', 
              ne: 'main() विधि कुनै पनि जाभा अनुप्रयोगको प्रवेश बिन्दु हो।' 
            }
          }
        ]
      },
      {
        id: 'java-oop',
        slug: 'object-oriented-programming',
        title: { 
          en: 'Object-Oriented Programming', 
          ne: 'वस्तु-उन्मुख प्रोग्रामिंग' 
        },
        content: {
          en: `
# Object-Oriented Programming in Java

Java is built around OOP concepts: Classes, Objects, Inheritance, Polymorphism, Encapsulation, and Abstraction.

## Classes and Objects

- **Class**: Blueprint for creating objects
- **Object**: Instance of a class

## Core OOP Concepts

### Encapsulation
Bundling data and methods together, restricting direct access.

### Inheritance
One class inherits properties from another.

### Polymorphism
Same action, different behaviors.

### Abstraction
Hiding complex implementation details.
          `,
          ne: `
# जाभामा वस्तु-उन्मुख प्रोग्रामिंग

जाभा OOP अवधारणाहरूको वरपर निर्मित छ: क्लासहरू, वस्तुहरू, इनहेरिटेंस, पॉलीमोर्फिज्म, एनकैप्सुलेशन, र एब्स्ट्राक्शन।

## क्लासहरू र वस्तुहरू

- **Class**: वस्तुहरू सिर्जना गर्ने ब्लुप्रिन्ट
- **Object**: क्लासको उदाहरण

## मुख्य OOP अवधारणाहरू

### एनकैप्सुलेशन
डेटा र विधिहरू एकसाथ बन्डल गर्ने, प्रत्यक्ष पहुँच प्रतिबंधित गर्ने।

### इनहेरिटेंस
एक क्लासले अर्कोबाट गुणहरू प्राप्त गर्छ।

### पॉलीमोर्फिज्म
एकै कार्य, फरक व्यवहारहरू।

### एब्स्ट्राक्शन
जटिल कार्यान्वयन विवरणहरू लुकाउने।
          `
        },
        codeExamples: [
          {
            language: 'java',
            code: `// Class definition
public class Car {
    // Properties
    private String brand;
    private int speed;
    
    // Constructor
    public Car(String brand) {
        this.brand = brand;
        this.speed = 0;
    }
    
    // Method
    public void accelerate(int increment) {
        speed += increment;
    }
    
    // Getter
    public String getBrand() {
        return brand;
    }
}`,
            explanation: {
              en: 'Classes encapsulate data (properties) and behavior (methods).',
              ne: 'क्लासहरूले डेटा (प्रोपर्टी) र व्यवहार (विधिहरू) इनकैप्सुलेट गर्छन्।'
            }
          },
          {
            language: 'java',
            code: `// Inheritance
public class ElectricCar extends Car {
    private int batteryLevel;
    
    public ElectricCar(String brand) {
        super(brand);
        batteryLevel = 100;
    }
    
    public void charge() {
        batteryLevel = 100;
    }
}`,
            explanation: {
              en: 'ElectricCar extends (inherits from) Car, gaining all its properties and methods.',
              ne: 'ElectricCar ले Car लाई एक्सटेंड (इनहेरिट) गर्छ, यसको सबै प्रोपर्टी र विधिहरू प्राप्त गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What keyword is used to inherit a class in Java?', 
              ne: 'जाभामा क्लास इनहेरिट गर्न कुन कीवर्ड प्रयोग हुन्छ?' 
            },
            options: { 
              en: ['inherits', 'extends', 'implements', 'derives'],
              ne: ['inherits', 'extends', 'implements', 'derives']
            },
            correctAnswer: 1,
            explanation: { 
              en: 'The extends keyword is used for class inheritance in Java.', 
              ne: 'जाभामा क्लास इनहेरिटेंसको लागि extends कीवर्ड प्रयोग हुन्छ।' 
            }
          }
        ]
      },
      {
        id: 'java-collections',
        slug: 'java-collections-framework',
        title: { 
          en: 'Java Collections Framework', 
          ne: 'जाभा कलेक्सन्स फ्रेमवर्क' 
        },
        content: {
          en: `
# Java Collections Framework

The Collections Framework provides a set of interfaces and classes for storing and manipulating groups of objects.

## Main Interfaces

- **List**: Ordered collection, allows duplicates (ArrayList, LinkedList)
- **Set**: Unordered, no duplicates (HashSet, TreeSet)
- **Map**: Key-value pairs (HashMap, TreeMap)
- **Queue**: FIFO (First In First Out)
          `,
          ne: `
# जाभा कलेक्सन्स फ्रेमवर्क

कलेक्सन्स फ्रेमवर्कले वस्तुहरूको समूहहरू भण्डारण र ह्यान्डल गर्नको लागि इन्टरफेस र क्लासहरूको सेट प्रदान गर्छ।

## मुख्य इन्टरफेसहरू

- **List**: क्रमबद्ध संग्रह, डुप्लिकेटहरू अनुमति दिन्छ (ArrayList, LinkedList)
- **Set**: अनक्रमबद्ध, डुप्लिकेटहरू छैनन् (HashSet, TreeSet)
- **Map**: कुज-मान जोडीहरू (HashMap, TreeMap)
- **Queue**: FIFO (First In First Out)
          `
        },
        codeExamples: [
          {
            language: 'java',
            code: `import java.util.ArrayList;
import java.util.HashMap;

public class CollectionsDemo {
    public static void main(String[] args) {
        // ArrayList
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Alice"); // Duplicate allowed
        System.out.println(names);
        
        // HashMap
        HashMap<String, Integer> ages = new HashMap<>();
        ages.put("Alice", 25);
        ages.put("Bob", 30);
        System.out.println(ages.get("Alice"));
    }
}`,
            explanation: {
              en: 'ArrayList is dynamic, HashMap provides key-value storage.',
              ne: 'ArrayList गतिशील छ, HashMap ले कुज-मान भण्डारण प्रदान गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'Which collection does not allow duplicates?', 
              ne: 'कुन कलेक्सनले डुप्लिकेटहरू अनुमति दिँदैन?' 
            },
            options: { 
              en: ['ArrayList', 'List', 'Set', 'Queue'],
              ne: ['ArrayList', 'List', 'Set', 'Queue']
            },
            correctAnswer: 2,
            explanation: { 
              en: 'Set is a collection that does not allow duplicate elements.', 
              ne: 'Set ले डुप्लिकेट तत्वहरू अनुमति दिँदैन।' 
            }
          }
        ]
      }
    ]
  },
  // Phase 4: Web (HTML/CSS/JS)
  {
    id: 'html-css',
    title: { en: 'HTML & CSS', ne: 'HTML र CSS' },
    slug: 'html-css',
    description: { 
      en: 'Build beautiful websites with HTML for structure and CSS for styling.', 
      ne: 'HTML ले संरचना र CSS ले स्टाइलिंगको साथ सुंदर वेबसाइटहरू निर्माण गर्नुहोस्।' 
    },
    phase: 4,
    icon: '🌐',
    color: '#e34f26',
    lessons: [
      {
        id: 'html-intro',
        slug: 'introduction-to-html',
        title: { 
          en: 'Introduction to HTML', 
          ne: 'HTML को परिचय' 
        },
        content: {
          en: `
# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages.

## What is HTML?

- Defines the structure of web pages
- Uses tags to define elements
- Stands for HyperText Markup Language
- Not a programming language (it's a markup language)

## Basic HTML Structure

Every HTML document has a standard structure with head and body sections.
          `,
          ne: `
# HTML को परिचय

HTML (HyperText Markup Language) वेब पृष्ठहरू सिर्जना गर्नको लागि मानक मार्कअप भाषा हो।

## HTML के हो?

- वेब पृष्ठहरूको संरचना परिभाषित गर्छ
- तत्वहरू परिभाषित गर्न टैगहरू प्रयोग गर्छ
- HyperText Markup Language को लागि हो
- प्रोग्रामिंग भाषा होइन (यो मार्कअप भाषा हो)

## आधारभूत HTML संरचना

प्रत्येक HTML दस्तावेजमा head र body खण्डहरूको साथ मानक संरचना हुन्छ।
          `
        },
        codeExamples: [
          {
            language: 'html',
            code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
</body>
</html>`,
            explanation: {
              en: 'The DOCTYPE declares this is HTML5. The <html> element wraps everything.',
              ne: 'DOCTYPE घोषणा गर्छ कि यो HTML5 हो। <html> तत्वले सबै कुरा लपेट्छ।'
            }
          },
          {
            language: 'html',
            code: `<!-- Common HTML Elements -->
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p>Paragraph text</p>
<a href="https://example.com">Link</a>
<img src="image.jpg" alt="Description">
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>`,
            explanation: {
              en: 'HTML provides many elements for different types of content.',
              ne: 'HTML ले विभिन्न प्रकारको सामग्रीको लागि धेरै तत्वहरू प्रदान गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What does HTML stand for?', 
              ne: 'HTML ले के जनाउँछ?' 
            },
            options: { 
              en: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyper Transfer Markup Language'],
              ne: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyper Transfer Markup Language']
            },
            correctAnswer: 0,
            explanation: { 
              en: 'HTML stands for HyperText Markup Language.', 
              ne: 'HTML ले HyperText Markup Language जनाउँछ।' 
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'Which tag is used for the largest heading?', 
              ne: 'ठूलो शीर्षकको लागि कुन टैग प्रयोग गरिन्छ?' 
            },
            options: { 
              en: ['<heading>', '<h6>', '<h1>', '<head>'],
              ne: ['<heading>', '<h6>', '<h1>', '<head>']
            },
            correctAnswer: 2,
            explanation: { 
              en: '<h1> is the largest heading. Headings go from h1 (largest) to h6 (smallest).',
              ne: '<h1> ठूलो शीर्षक हो। शीर्षकहरू h1 (सबैभन्दा ठूलो) देखि h6 (सबैभन्दा सानो) सम्म हुन्छन्।'
            }
          }
        ]
      },
      {
        id: 'css-intro',
        slug: 'introduction-to-css',
        title: { 
          en: 'Introduction to CSS', 
          ne: 'CSS को परिचय' 
        },
        content: {
          en: `
# Introduction to CSS

CSS (Cascading Style Sheets) is used to style and layout web pages.

## What Can CSS Do?

- Change colors, fonts, and spacing
- Create layouts (flexbox, grid)
- Add animations and transitions
- Make responsive designs
- Style different screen sizes

## Three Ways to Add CSS

1. **Inline**: style attribute in HTML
2. **Internal**: <style> tag in <head>
3. **External**: Separate .css file (recommended)
          `,
          ne: `
# CSS को परिचय

CSS (Cascading Style Sheets) वेब पृष्ठहरूलाई स्टाइल र लेआउट गर्नको लागि प्रयोग गरिन्छ।

## CSS ले के गर्न सक्छ?

- रंग, फन्ट, र स्पेसिङ परिवर्तन गर्नुहोस्
- लेआउटहरू सिर्जना गर्नुहोस् (flexbox, grid)
- एनिमेशन र ट्रान्जिसनहरू थप्नुहोस्
- रिस्पोन्सिभ डिजाइनहरू बनाउनुहोस्
- विभिन्न स्क्रिन साइजहरूलाई स्टाइल गर्नुहोस्

## CSS थप्ने तीन तरिकाहरू

1. **Inline**: HTML मा style attribute
2. **Internal**: <head> मा <style> टैग
3. **External**: अलग .css फाइल (सिफारिस गरिएको)
          `
        },
        codeExamples: [
          {
            language: 'css',
            code: `/* Internal CSS */
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
    }
    h1 {
        color: blue;
        text-align: center;
    }
</style>`,
            explanation: {
              en: 'Internal CSS goes in the <head> section. Good for single-page styles.',
              ne: 'Internal CSS <head> खण्डमा जान्छ। एक पृष्ठको स्टाइलको लागि राम्रो।'
            }
          },
          {
            language: 'css',
            code: `/* External CSS - styles.css */
h1 {
    color: #333;
    font-size: 2rem;
}

.button {
    background-color: #2563eb;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}`,
            explanation: {
              en: 'External CSS is best for multi-page websites. Link it with <link rel="stylesheet" href="styles.css">',
              ne: 'External CSS बहु-पृष्ठ वेबसाइटहरूको लागि उत्तम हो। यसलाई <link rel="stylesheet" href="styles.css"> सँग लिंक गर्नुहोस्।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What is the best way to add CSS for a multi-page website?', 
              ne: 'बहु-पृष्ठ वेबसाइटको लागि CSS थप्ने उत्तम तरिका के हो?' 
            },
            options: { 
              en: ['Inline CSS', 'Internal CSS', 'External CSS', 'JavaScript'],
              ne: ['Inline CSS', 'Internal CSS', 'External CSS', 'JavaScript']
            },
            correctAnswer: 2,
            explanation: { 
              en: 'External CSS allows you to style all pages from one file.', 
              ne: 'External CSS ले तपाईंलाई एउटा फाइलबाट सबै पृष्ठहरूलाई स्टाइल गर्न अनुमति दिन्छ।' 
            }
          }
        ]
      },
      {
        id: 'js-intro',
        slug: 'javascript-basics',
        title: { 
          en: 'JavaScript Basics', 
          ne: 'JavaScript का आधारभूत कुराहरू' 
        },
        content: {
          en: `
# JavaScript Basics

JavaScript makes web pages interactive. It's the third layer of web technologies (HTML + CSS + JavaScript).

## What Can JavaScript Do?

- Respond to user actions
- Validate forms
- Create dynamic content
- Build web applications
- Communicate with servers

## Adding JavaScript

Put <script> tags at the end of <body> for better performance.
          `,
          ne: `
# JavaScript का आधारभूत कुराहरू

JavaScript ले वेब पृष्ठहरूलाई अन्तरक्रियात्मक बनाउँछ। यो वेब प्रविधिहरूको तेस्रो तह हो (HTML + CSS + JavaScript)।

## JavaScript ले के गर्न सक्छ?

- प्रयोगकर्ताको कार्यहरूको प्रतिक्रिया दिनुहोस्
- फारमहरू मान्य गर्नुहोस्
- गतिशील सामग्री सिर्जना गर्नुहोस्
- वेब अनुप्रयोगहरू निर्माण गर्नुहोस्
- सर्वरहरूसँग संचार गर्नुहोस्

## JavaScript थप्नुहोस्

राम्रो प्रदर्शनको लागि <body> को अन्त्यमा <script> टैगहरू राख्नुहोस्।
          `
        },
        codeExamples: [
          {
            language: 'javascript',
            code: `// Variables
let name = "John";
const age = 25;
var isStudent = true;

// Output
console.log("Hello, " + name);

// Functions
function greet(message) {
    return "Hello, " + message;
}`,
            explanation: {
              en: 'let and const are modern ways to declare variables. var is older.',
              ne: 'let र const भेरिएबल घोषणा गर्ने आधुनिक तरिकाहरू हुन्। var पुरानो हो।'
            }
          },
          {
            language: 'javascript',
            code: `// DOM Manipulation
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// Arrays
const fruits = ["apple", "banana", "orange"];
fruits.push("mango");
console.log(fruits[0]); // "apple"`,
            explanation: {
              en: 'JavaScript can interact with HTML elements through the DOM.',
              ne: 'JavaScript DOM मार्फत HTML तत्वहरूसँग अन्तरक्रिया गर्न सक्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'Which keyword declares a variable that cannot be reassigned?', 
              ne: 'कुन कीवर्डले पुनः असाइन गर्न नसकिने भेरिएबल घोषणा गर्छ?' 
            },
            options: { 
              en: ['var', 'let', 'const', 'static'],
              ne: ['var', 'let', 'const', 'static']
            },
            correctAnswer: 2,
            explanation: { 
              en: 'const declares a constant - its value cannot be changed after initialization.',
              ne: 'const ले स्थिर घोषणा गर्छ - यसको मान प्रारंभिककरणपछि परिवर्तन गर्न सकिँदैन।' 
            }
          }
        ]
      }
    ]
  },
  // Phase 5: Git
  {
    id: 'git-basics',
    title: { en: 'Git Version Control', ne: 'Git भर्सन कन्ट्रोल' },
    slug: 'git-basics',
    description: { 
      en: 'Master Git - the essential tool for tracking changes in your code.', 
      ne: 'Git मा महारत हासिल गर्नुहोस् - तपाईंको कोडमा परिवर्तनहरू ट्रैक गर्नको लागि आवश्यक उपकरण।' 
    },
    phase: 5,
    icon: '📦',
    color: '#f05032',
    lessons: [
      {
        id: 'git-intro',
        slug: 'introduction-to-version-control',
        title: { 
          en: 'Introduction to Version Control', 
          ne: 'भर्सन कन्ट्रोलको परिचय' 
        },
        content: {
          en: `
# Introduction to Version Control

Version control tracks changes to your files over time. It's essential for any development project.

## Why Use Version Control?

- **History**: See who changed what and when
- **Collaboration**: Work with others without conflicts
- **Backup**: Your code is safely stored
- **Experimentation**: Try new features without breaking code
- **Rollback**: Return to previous versions if needed

## Types of Version Control

- **Local**: Single computer (simple but limited)
- **Centralized**: Server stores all versions (SVN, CVS)
- **Distributed**: Every user has full copy (Git, Mercurial)
          `,
          ne: `
# भर्सन कन्ट्रोलको परिचय

भर्सन कन्ट्रोलले समयको साथ तपाईंको फाइलहरूमा परिवर्तनहरू ट्रैक गर्छ। यो कुनै पनि विकास परियोजनाको लागि आवश्यक छ।

## भर्सन कन्ट्रोल किन प्रयोग गर्नुहोस्?

- **इतिहास**: को, के र कहिले परिवर्तन भयो हेर्नुहोस्
- **सहयोग**: द्वंद्व बिना अरूसँग काम गर्नुहोस्
- **ब्याकअप**: तपाईंको कोड सुरक्षित रूपमा भण्डारण गरिएको छ
- **प्रयोग**: कोड भाँच्न बिना नयाँ सुविधाहरू प्रयास गर्नुहोस्
- **रोलब्याक**: आवश्यक भएमा पहिलेको संस्करणमा फर्कनुहोस्

## भर्सन कन्ट्रोलका प्रकारहरू

- **स्थानीय**: एकल कम्प्युटर (सरल तर सीमित)
- **केन्द्रीकृत**: सर्वरले सबै संस्करणहरू भण्डारण गर्छ (SVN, CVS)
- **वितरित**: प्रत्येक प्रयोगकर्तासँग पूर्ण प्रति छ (Git, Mercurial)
          `
        },
        codeExamples: [
          {
            language: 'bash',
            code: `# Check git version
git --version

# Configure git
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Initialize a repository
git init`,
            explanation: {
              en: 'Always configure your identity before starting. git init creates a new repository.',
              ne: 'सुरु गर्नुअघि सदैव आफ्नो पहिचान कन्फिगर गर्नुहोस्। git init ले नयाँ रिपोजिटरी सिर्जना गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What type of version control system is Git?', 
              ne: 'Git कुन प्रकारको भर्सन कन्ट्रोल प्रणाली हो?' 
            },
            options: { 
              en: ['Local', 'Centralized', 'Distributed', 'Hybrid'],
              ne: ['स्थानीय', 'केन्द्रीकृत', 'वितरित', 'हाइब्रिड']
            },
            correctAnswer: 2,
            explanation: { 
              en: 'Git is a distributed version control system - every user has a full copy of the repository.',
              ne: 'Git वितरित भर्सन कन्ट्रोल प्रणाली हो - प्रत्येक प्रयोगकर्तासँग रिपोजिटरीको पूर्ण प्रति हुन्छ।' 
            }
          }
        ]
      },
      {
        id: 'git-basic-commands',
        slug: 'basic-git-commands',
        title: { 
          en: 'Basic Git Commands', 
          ne: 'आधारभूत Git कमाण्डहरू' 
        },
        content: {
          en: `
# Basic Git Commands

Learn the essential Git commands for daily work.

## Common Commands

### git status
Shows the current state of your working directory.

### git add
Stages changes for commit.

### git commit
Saves your staged changes with a message.

### git log
Shows commit history.
          `,
          ne: `
# आधारभूत Git कमाण्डहरू

दैनिक कामको लागि आवश्यक Git कमाण्डहरू सिक्नुहोस्।

## सामान्य कमाण्डहरू

### git status
तपाईंको कार्य निर्देशिकाको हालको स्थिति देखाउँछ।

### git add
कमिटको लागि परिवर्तनहरू स्टेज गर्छ।

### git commit
सन्देशसहित तपाईंका स्टेज गरिएका परिवर्तनहरू बचत गर्छ।

### git log
कमिट इतिहास देखाउँछ।
          `
        },
        codeExamples: [
          {
            language: 'bash',
            code: `# Check status
git status

# Add all changes
git add .

# Or add specific file
git add filename.txt

# Commit with message
git commit -m "Add new feature"

# View history
git log --oneline`,
            explanation: {
              en: 'git add stages changes, git commit saves them. Always write clear commit messages!',
              ne: 'git add ले परिवर्तनहरू स्टेज गर्छ, git commit ले तिनीहरूलाई बचत गर्छ। सदैव स्पष्ट कमिट सन्देशहरू लेख्नुहोस्!'
            }
          },
          {
            language: 'bash',
            code: `# Check differences
git diff

# See staged changes
git diff --staged

# Unstage a file
git reset filename.txt

# Discard changes
git checkout -- filename.txt`,
            explanation: {
              en: 'git diff shows what\'s changed. git reset unstages files.',
              ne: 'git diff ले के परिवर्तन भयो देखाउँछ। git reset ले फाइलहरू अनस्टेज गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'Which command stages all changes for commit?', 
              ne: 'कुन कमाण्डले सबै परिवर्तनहरू कमिटको लागि स्टेज गर्छ?' 
            },
            options: { 
              en: ['git commit -a', 'git add .', 'git push', 'git status'],
              ne: ['git commit -a', 'git add .', 'git push', 'git status']
            },
            correctAnswer: 1,
            explanation: { 
              en: 'git add . stages all changes in the current directory.',
              ne: 'git add . ले हालको निर्देशिकामा सबै परिवर्तनहरू स्टेज गर्छ।' 
            }
          }
        ]
      },
      {
        id: 'git-branching',
        slug: 'git-branching-and-merging',
        title: { 
          en: 'Branching and Merging', 
          ne: 'ब्रान्चिङ र मर्जिङ' 
        },
        content: {
          en: `
# Branching and Merging

Branches let you work on features without affecting the main code.

## Why Use Branches?

- Develop new features
- Fix bugs separately
- Experiment safely
- Work on multiple things at once

## Key Concepts

- **Main/Master**: The primary branch
- **Feature Branch**: For new features
- **Merge**: Combine branches together
- **Pull Request**: Request to merge changes
          `,
          ne: `
# ब्रान्चिङ र मर्जिङ

ब्रान्चहरूले तपाईंलाई मुख्य कोडलाई प्रभाव नपारी सुविधाहरूमा काम गर्न अनुमति दिन्छ।

## ब्रान्चहरू किन प्रयोग गर्नुहोस्?

- नयाँ सुविधाहरू विकास गर्नुहोस्
- बगहरू छुट्टै ठिक गर्नुहोस्
- सुरक्षित रूपमा प्रयोग गर्नुहोस्
- एकै पटक धेरै कुराहरूमा काम गर्नुहोस्

## मुख्य अवधारणाहरू

- **Main/Master**: प्राथमिक ब्रान्च
- **Feature Branch**: नयाँ सुविधाहरूको लागि
- **Merge**: ब्रान्चहरू एकसाथ संयोजन गर्नुहोस्
- **Pull Request**: परिवर्तनहरू मर्ज गर्न अनुरोध गर्नुहोस्
          `
        },
        codeExamples: [
          {
            language: 'bash',
            code: `# Create new branch
git branch feature-login

# Switch to branch
git checkout feature-login
# Or create and switch
git checkout -b feature-login

# List branches
git branch

# Switch back to main
git checkout main`,
            explanation: {
              en: 'Branches allow parallel development. Always create a new branch for new features.',
              ne: 'ब्रान्चहरूले समानांतर विकास अनुमति दिन्छ। नयाँ सुविधाहरूको लागि सदैव नयाँ ब्रान्च सिर्जना गर्नुहोस्।'
            }
          },
          {
            language: 'bash',
            code: `# Merge branch into main
git checkout main
git merge feature-login

# Delete branch
git branch -d feature-login

# View branches with commits
git log --all --oneline --graph`,
            explanation: {
              en: 'Merge combines branch history. Delete branches after merging to keep repo clean.',
              ne: 'Merge ले ब्रान्च इतिहास संयोजन गर्छ। रिपो सफा राख्नको लागि मर्ज गर्नुअघि ब्रान्चहरू मेट्नुहोस्।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What command creates and switches to a new branch?', 
              ne: 'कुन कमाण्डले नयाँ ब्रान्च सिर्जना गर्छ र त्यसमा स्विच गर्छ?' 
            },
            options: { 
              en: ['git branch new-branch', 'git checkout new-branch', 'git checkout -b new-branch', 'git merge new-branch'],
              ne: ['git branch new-branch', 'git checkout new-branch', 'git checkout -b new-branch', 'git merge new-branch']
            },
            correctAnswer: 2,
            explanation: { 
              en: 'git checkout -b creates a new branch and switches to it in one command.',
              ne: 'git checkout -b ले नयाँ ब्रान्च सिर्जना गर्छ र एउटै कमाण्डमा त्यसमा स्विच गर्छ।' 
            }
          }
        ]
      }
    ]
  }
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug);
};

export const getLessonBySlug = (courseSlug: string, lessonSlug: string): Lesson | undefined => {
  const course = getCourseBySlug(courseSlug);
  return course?.lessons.find(lesson => lesson.slug === lessonSlug);
};

export const getAllLessons = () => {
  return courses.flatMap(course => 
    course.lessons.map(lesson => ({
      ...lesson,
      courseSlug: course.slug,
      courseTitle: course.title,
      phase: course.phase
    }))
  );
};
