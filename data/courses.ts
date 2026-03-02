export interface Lesson {
  id: string;
  title: { en: string; ne: string };
  slug: string;
  content: { en: string; ne: string };
  codeExamples: { language: string; code: string; explanation: { en: string; ne: string } }[];
  quiz: QuizQuestion[];
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
    description: { en: 'Learn Python programming from scratch. Perfect for absolute beginners.', ne: 'शून्यबाट पाइथन प्रोग्रामिंग सिक्नुहोस्। पूर्ण शुरुआतीहरूको लागि उपयुक्त।' },
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
          en: `# Introduction to Python

Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular programming languages in the world.

## Why Learn Python?

- **Easy to Learn**: Python has simple, readable syntax that resembles English
- **Versatile**: Used in web development, data science, AI, automation, and more
- **Large Community**: Huge ecosystem of libraries and frameworks
- **High Demand**: Python developers are in high demand

## Your First Python Program

Let's start with the classic "Hello, World!" program:

Python is designed to be readable while still being powerful. The syntax is clean and straightforward.`,
          ne: `# पाइथनको परिचय

पाइथन एक उच्च-स्तर, व्याख्या गरिएको प्रोग्रामिंग भाषा हो जुन यसको सरलता र पठनीयताको लागि चिनिन्छ। गुइडो भान रोसमले 1991 मा सिर्जना गरेको पाइथन संसारको सबैभन्दा लोकप्रिय प्रोग्रामिंग भाषाहरूमध्ये एक भएको छ।

## पाइथन किन सिक्नुहोस्?

- **सजिलै सिक्ने**: पाइथनमा सरल, पठनीय सिन्ट्याक्स छ जुन अंग्रेजी जस्तै छ
- **बहुमुखी**: वेब विकास, डेटा साइन्स, एआई, अटोमेशन र अरू धेरैमा प्रयोग हुन्छ
- **ठूलो समुदाय**: पुस्तकालय र फ्रेमवर्कको विशाल पारिस्थितिकी
- **उच्च माग**: पाइथन विकासकर्ताहरूको उच्च माग छ

## तपाईंको पहिलो पाइथन कार्यक्रम

"हेलो, वर्ल्ड!" क्लासिक कार्यक्रमबाट सुरु गरौं:

पाइथन शक्तिशाली रहँदा पनि पठनीय हुन डिजाइन गरिएको छ। सिन्ट्याक्स सरल र स्पष्ट छ।`
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
              en: 'Variables store data. In Python, we don\'t need to declare the type - Python figures it out automatically.', 
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
              ne: ['जेम्स गोस्लिंग', 'गुइडो भान रोसम', 'ब्यार्न स्ट्राउस्ट्रप', 'डेनिस रिची'] 
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
          en: `# Variables and Data Types

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
- True or False (capitalized in Python)`,
          ne: `# भेरिएबल र डेटा प्रकारहरू

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
- True वा False (पाइथनमा क्यापिटलाइज्ड)`
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
          en: `# Operators and Expressions

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
- **<=** Less than or equal`,
          ne: `# अपरेटर र एक्स्प्रेशनहरू

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
- **<=** भन्दा सानो वा बराबर`
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
              ne: 'पाइथनलेानक अरिथमे सबै मटिक अपरेटरहरू समर्थन गर्छ। नोट गर्नुहोस् कि / ले float फर्काउँछ, // ले integer।'
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
              ne: ['भागफल', 'बाँकी', 'गुणन', 'भिन्नता'] 
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
        slug: 'conditionals-and-control-flow',
        title: { 
          en: 'Conditionals and Control Flow', 
          ne: 'कन्डिशनल र कन्ट्रोल फ्लो' 
        },
        content: {
          en: `# Conditionals and Control Flow

Control flow determines the order in which statements are executed. In Python, we use if, elif, and else statements.

## If Statements

The if statement executes a block of code only if a condition is True.

## Elif and Else

- **elif**: Short for "else if" - check additional conditions
- **else**: Executes when none of the above conditions are True

## Logical Operators

Combine multiple conditions:
- **and**: Both conditions must be True
- **or**: At least one condition must be True
- **not**: Inverts the condition`,
          ne: `# कन्डिशनल र कन्ट्रोल फ्लो

कन्ट्रोल फ्लोले निर्धारण गर्छ कि कथनहरू कुन क्रममा कार्यान्वयन गरिन्छन्। पाइथनमा, हामी if, elif, र else कथनहरू प्रयोग गर्छौं।

## If कथनहरू

if कथनले कोडको एउटा ब्लक कार्यान्वयन गर्छ केवल यदि सर्त True हो।

## Elif र Else

- **elif**: "else if" को छोटो रूप - अतिरिक्त सर्तहरू जाँच्नुहोस्
- **else**: कार्यान्वयन हुन्छ जब माथिका कुनै पनि सर्तहरू True हुँदैनन्

## लॉजिकल अपरेटरहरू

धेरै सर्तहरू संयोजन गर्नुहोस्:
- **and**: दुवै सर्तहरू True हुनुपर्छ
- **or**: कम्तीमा एउटा सर्त True हुनुपर्छ
- **not**: सर्तलाई उलट्छ`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Simple if
age = 18
if age >= 18:
    print("You are an adult")

# If-else
temperature = 25
if temperature > 30:
    print("Hot")
else:
    print("Nice weather")

# If-elif-else
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(f"Grade: {grade}")`,
            explanation: { 
              en: 'Python uses indentation to define code blocks. Each if/elif/else block must be properly indented.', 
              ne: 'पाइथनले कोड ब्लकहरू परिभाषित गर्न इन्डेन्टेशन प्रयोग गर्छ। प्रत्येक if/elif/else ब्लक समान रूपमा इन्डेन्टेड हुनुपर्छ।'
            }
          },
          {
            language: 'python',
            code: `# Logical operators
age = 25
has_license = True

# and - both must be true
if age >= 18 and has_license:
    print("Can drive")

# or - at least one must be true
day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print("Weekend!")

# not - inverts condition
is raining = False
if not is_raining:
    print("Go outside!")`,
            explanation: { 
              en: 'Logical operators combine multiple conditions for more complex decision making.', 
              ne: 'लॉजिकल अपरेटरहरू अझ जटिल निर्णय लिनको लागि धेरै सर्तहरू संयोजन गर्छन्।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What is the output of: x = 5; print("Big" if x > 10 else "Small")', 
              ne: 'को परिणाम के हो: x = 5; print("Big" if x > 10 else "Small")' 
            },
            options: { 
              en: ['Big', 'Small', 'Error', 'None'], 
              ne: ['Big', 'Small', 'Error', 'None'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'Ternary expression evaluates to "Small" because x > 10 is False.', 
              ne: 'टर्नरी एक्सप्रेशनले "Small" मूल्यांकन गर्छ किनभने x > 10 False हो।'
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'Which operator makes both conditions need to be true?', 
              ne: 'कुन अपरेटरले दुवै सर्तहरू True हुनु आवश्यक बनाउँछ?' 
            },
            options: { 
              en: ['or', 'and', 'not', 'both'], 
              ne: ['or', 'and', 'not', 'both'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'The "and" operator requires both conditions to be True.', 
              ne: '"and" अपरेटरले दुवै सर्तहरू True हुनु आवश्यक छ।'
            }
          }
        ]
      },
      {
        id: 'python-loops',
        slug: 'loops-in-python',
        title: { 
          en: 'Loops in Python', 
          ne: 'पाइथनमा लुपहरू' 
        },
        content: {
          en: `# Loops in Python

Loops allow you to execute a block of code multiple times. Python has two main types of loops: for and while.

## For Loop

Used to iterate over sequences (lists, strings, ranges, etc.)

## While Loop

Repeats as long as a condition is True

## Loop Control

- **break**: Exit the loop immediately
- **continue**: Skip to the next iteration
- **else**: Runs when loop completes normally

## List Comprehension

A concise way to create lists`,
          ne: `# पाइथनमा लुपहरू

लुपहरूले तपाईंलाई कोडको एउटा ब्लक धेरै पटक कार्यान्वयन गर्न दिन्छ। पाइथनमा दुई मुख्य प्रकारका लुपहरू छन्: for र while।

## For लुप

क्रमहरूमा दोहोर्याउन प्रयोग गरिन्छ (लिस्ट, स्ट्रिङ, रेन्ज, आदि)

## While लुप

जबसम्म सर्त True हो दोहोर्याउँछ

## लुप कन्ट्रोल

- **break**: तुरूंत लुपबाट बाहिर निस्कनुहोस्
- **continue**: अर्को इटरेशनमा जानुहोस्
- **else**: लुप सामान्य रूपमा पूरा भएपछि चल्छ

## लिस्ट कम्प्रिहेन्सन

लिस्टहरू सिर्जना गर्ने संक्षिप्त तरिका`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# For loop with range
for i in range(5):
    print(i)  # 0,1,2,3,4

# For loop with list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# For loop with string
for char in "Python":
    print(char)`,
            explanation: { 
              en: 'range(5) generates 0 to 4. The for loop iterates over each element in the sequence.', 
              ne: 'range(5) ले 0 देखि 4 उत्पन्न गर्छ। for लुप क्रमको प्रत्येक तत्वमा दोहोर्याउँछ।'
            }
          },
          {
            language: 'python',
            code: `# While loop
count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1

# Break and continue
for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 7:
        break     # Stop at 7
    print(i)`,
            explanation: { 
              en: 'continue skips the current iteration, break exits the loop entirely.', 
              ne: 'continue ले हालको इटरेशन बिराउँछ, break ले लुपबाट पूर्णता बाहिर निस्कन्छ।'
            }
          },
          {
            language: 'python',
            code: `# List comprehension
squares = [x**2 for x in range(5)]
# [0, 1, 4, 9, 16]

# With condition
evens = [x for x in range(10) if x % 2 == 0]
# [0, 2, 4, 6, 8]

# Nested
pairs = [(x, y) for x in [1,2] for y in [3,4]]`,
            explanation: { 
              en: 'List comprehension provides a concise way to create lists based on existing sequences.', 
              ne: 'लिस्ट कम्प्रिहेन्सनले अस्तित्व क्रमहरूको आधारमा लिस्टहरू सिर्जना गर्ने संक्षिप्त तरिका प्रदान गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'How many times will "Hello" be printed? for i in range(3): print("Hello")', 
              ne: 'कति पटक "Hello" प्रिन्ट हुनेछ? for i in range(3): print("Hello")' 
            },
            options: { 
              en: ['2', '3', '4', 'Infinite'], 
              ne: ['2', '3', '4', 'अनलिमिटेड'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'range(3) produces 0, 1, 2 - three values, so the loop runs three times.', 
              ne: 'range(3) ले 0, 1, 2 उत्पन्न गर्छ - तीन मानहरू, त्यसैले लुप तीन पटक चल्छ।'
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'What does range(1, 10, 2) generate?', 
              ne: 'range(1, 10, 2) ले के उत्पन्न गर्छ?' 
            },
            options: { 
              en: ['1 to 10', '1, 3, 5, 7, 9', '1 to 9', '0, 2, 4, 6, 8'], 
              ne: ['1 देखि 10', '1, 3, 5, 7, 9', '1 देखि 9', '0, 2, 4, 6, 8'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'range(start, stop, step) generates numbers from start to stop-1, incrementing by step.', 
              ne: 'range(start, stop, step) ले start देखि stop-1 सम्मका संख्याहरू उत्पन्न गर्छ, step ले बढाउँदै।'
            }
          }
        ]
      },
      {
        id: 'python-functions',
        slug: 'functions-in-python',
        title: { 
          en: 'Functions in Python', 
          ne: 'पाइथनमा फंक्सनहरू' 
        },
        content: {
          en: `# Functions in Python

Functions are reusable blocks of code that perform a specific task. They help organize code and avoid repetition.

## Defining Functions

Use the def keyword followed by function name and parameters.

## Parameters and Arguments

- **Parameters**: Variables in the function definition
- **Arguments**: Actual values passed to the function

## Return Values

Functions can return values using the return statement.

## Lambda Functions

Anonymous functions for simple operations.`,
          ne: `# पाइथनमा फंक्सनहरू

फंक्सनहरू निश्चित कार्य गर्ने पुन: प्रयोज्य कोड ब्लकहरू हुन्। तिनीहरूले कोड व्यवस्थित गर्न र दोहोराबाट बच्न मद्दत गर्छन्।

## फंक्सनहरू परिभाषित गर्नुहोस्

def कीवर्ड प्रयोग गर्नुहोस् त्यसपछि फंक्सन नाम र प्यारामिटरहरू।

## प्यारामिटर र आर्गुमेन्टहरू

- **प्यारामिटरहरू**: फंक्सन परिभाषामा भेरिएबलहरू
- **आर्गुमेन्टहरू**: फंक्सनलाई पास गरिएका वास्तविक मानहरू

## रिटर्न मानहरू

फंक्सनहरूले return कथन प्रयोग गरेर मानहरू फर्काउन सक्छन्।

## लाम्ब्डा फं्क्सनहरू

सरल अपरेसनहरूको लागि अनाम फंक्सनहरू।`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Basic function
def greet(name):
    return f"Hello, {name}!"

message = greet("Ram")
print(message)

# Function with default parameter
def greet(greeting, name="World"):
    return f"{greeting}, {name}!"

print(greet("Hi"))
print(greet("Hi", "Ram"))`,
            explanation: { 
              en: 'Functions can have default parameter values. If not provided, defaults are used.', 
              ne: 'फंक्सनहरूसँग पूर्वनिर्धारित प्यारामिटर मानहरू हुन सक्छन्। नदिएमा, पूर्वनिर्धारित प्रयोग गरिन्छ।'
            }
          },
          {
            language: 'python',
            code: `# Return multiple values
def get_stats(numbers):
    total = sum(numbers)
    average = total / len(numbers)
    return total, average

total, avg = get_stats([10, 20, 30])
print(f"Total: {total}, Average: {avg}")

# Lambda function
square = lambda x: x ** 2
print(square(5))  # 25

# Lambda with multiple arguments
add = lambda a, b: a + b
print(add(3, 4))  # 7`,
            explanation: { 
              en: 'Lambda functions are anonymous functions defined in a single line. Great for simple operations.', 
              ne: 'लाम्ब्डा फंक्सनहरू एक रेखामा परिभाषित अनाम फंक्सनहरू हुन्। सरल अपरेसनहरूको लागि राम्रो।'
            }
          },
          {
            language: 'python',
            code: `# *args and **kwargs
def flexible(*args, **kwargs):
    print("Args:", args)
    print("Kwargs:", kwargs)

flexible(1, 2, 3, name="Ram", age=25)

# Docstring
def calculate_area(width, height):
    \"\"\"Calculate the area of a rectangle.
    
    Args:
        width: The width of the rectangle
        height: The height of the rectangle
    
    Returns:
        The area of the rectangle
    \"\"\"
    return width * height`,
            explanation: { 
              en: '*args accepts variable positional arguments, **kwargs accepts keyword arguments. Docstrings document functions.', 
              ne: '*args ले परिवर्तनीय पोजिशनल आर्गुमेन्टहरू स्वीकार्छ, **kwargs ले कीवर्ड आर्गुमेन्टहरू स्वीकार्छ। Docstrings ले फंक्सनहरू कागजात बनाउँछ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What is the output of: add = lambda x, y: x + y; print(add(2, 3))', 
              ne: 'को परिणाम के हो: add = lambda x, y: x + y; print(add(2, 3))' 
            },
            options: { 
              en: ['x + y', '5', '2, 3', 'Error'], 
              ne: ['x + y', '5', '2, 3', 'Error'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'Lambda functions can take multiple arguments and return a value like regular functions.', 
              ne: 'लाम्ब्डा फंक्सनहरूले धेरै आर्गुमेन्टहरू लिन सक्छन् र नियमित फंक्सनहरू जस्तै मान फर्काउन सक्छन्।'
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'Which keyword is used to define a function?', 
              ne: 'फंक्सन परिभाषित गर्न कुन कीवर्ड प्रयोग गरिन्छ?' 
            },
            options: { 
              en: ['function', 'def', 'func', 'define'], 
              ne: ['function', 'def', 'func', 'define'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'The "def" keyword is used to define functions in Python.', 
              ne: 'पाइथनमा फंक्सनहरू परिभाषित गर्न "def" कीवर्ड प्रयोग गरिन्छ।'
            }
          }
        ]
      },
      {
        id: 'python-strings',
        slug: 'strings-in-python',
        title: { 
          en: 'Strings in Python', 
          ne: 'पाइथनमा स्ट्रिङहरू' 
        },
        content: {
          en: `# Strings in Python

Strings are used to store text data. In Python, strings are immutable sequences of characters.

## Creating Strings

Strings can be created using single quotes, double quotes, or triple quotes for multi-line strings.

## String Methods

Python provides many built-in methods for string manipulation.

## String Formatting

Python offers several ways to format strings: f-strings, format(), and % formatting.`,
          ne: `# पाइथनमा स्ट्रिङहरू

स्ट्रिङहरू पाठ डेटा भण्डारण गर्न प्रयोग गरिन्छन्। पाइथनमा, स्ट्रिङहरू अपरिवर्तनीय क्यारेक्टरहरूको क्रम हुन्।

## स्ट्रिङहरू सिर्जना गर्नुहोस्

स्ट्रिङहरू एकल उद्धरण, डबल उद्धरण, वा बहु-लाइन स्ट्रिङहरूको लागि ट्रिपल उद्धरण प्रयोग गरेर सिर्जना गर्न सकिन्छ।

## स्ट्रिङ विधिहरू

पाइथनले स्ट्रिङ हेरफेटको लागि धेरै बिल्ट-इन विधिहरू प्रदान गर्छ।

## स्ट्रिङ फरम्याटिङ

पाइथनले स्ट्रिङहरू फरम्याट गर्ने धेरै तरिकाहरू प्रदान गर्छ: f-strings, format(), र % फरम्याटिङ।`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Creating strings
single = 'Hello'
double = "Hello"
multi_line = """This is a
multi-line string"""

# String indexing
text = "Python"
print(text[0])    # P
print(text[-1])    # n
print(text[0:3])   # Pyt

# String methods
message = "Hello World"
print(message.upper())        # HELLO WORLD
print(message.lower())        # hello world
print(message.split())        # ['Hello', 'World']
print(message.replace("World", "Python"))  # Hello Python`,
            explanation: { 
              en: 'Strings are indexed starting from 0. Negative indices count from the end.', 
              ne: 'स्ट्रिङहरू 0 बाट इन्डेक्स हुन्छन्। नकारात्मक इन्डेक्सहरू अन्त्यबाट गणना गर्छन्।'
            }
          },
          {
            language: 'python',
            code: `# F-strings (recommended)
name = "Ram"
age = 25
print(f"My name is {name} and I am {age} years old")

# Format method
print("Hello, {}".format(name))
print("{0} is {1} years old".format(name, age))

# f-strings with expressions
price = 100
tax = 0.1
print(f"Total: {price + price * tax}")

# String slicing
text = "Python Programming"
print(text[0:6])    # Python
print(text[7:])    # Programming
print(text[::2])   # Pto rgamn`,
            explanation: { 
              en: 'F-strings are the most readable and recommended way to format strings in Python.', 
              ne: 'F-strings पाइथनमा स्ट्रिङहरू फरम्याट गर्ने सबैभन्दा पठनीय र सिफारिस गरिएको तरिका हो।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What is the output of "Python"[0:3]?', 
              ne: '"Python"[0:3] को आउटपुट के हो?' 
            },
            options: { 
              en: ['Pyt', 'Pyth', 'yth', 'Python'], 
              ne: ['Pyt', 'Pyth', 'yth', 'Python'] 
            },
            correctAnswer: 0,
            explanation: { 
              en: 'Slicing [0:3] returns characters from index 0 up to (but not including) index 3.', 
              ne: 'Slicing [0:3] ले इन्डेक्स 0 बाट (तर इन्डेक्स 3 समावेश नगरी) क्यारेक्टरहरू फर्काउँछ।'
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'Which method converts a string to uppercase?', 
              ne: 'कुन विधिले स्ट्रिङलाई अपरकेसमा रूपांतरण गर्छ?' 
            },
            options: { 
              en: ['uppercase()', 'to_upper()', 'upper()', 'capitalize()'], 
              ne: ['uppercase()', 'to_upper()', 'upper()', 'capitalize()'] 
            },
            correctAnswer: 2,
            explanation: { 
              en: 'The upper() method converts all characters to uppercase.', 
              ne: 'upper() विधिले सबै क्यारेक्टरहरूलाई अपरकेसमा रूपांतरण गर्छ।'
            }
          }
        ]
      },
      {
        id: 'python-lists',
        slug: 'lists-in-python',
        title: { 
          en: 'Lists in Python', 
          ne: 'पाइथनमा लिस्टहरू' 
        },
        content: {
          en: `# Lists in Python

Lists are one of the most versatile data structures in Python. They can store multiple items of any type in a single variable.

## Creating Lists

Lists are created using square brackets with items separated by commas.

## List Operations

Python provides many built-in methods to manipulate lists.

## List Comprehension

A concise way to create new lists based on existing sequences.`,
          ne: `# पाइथनमा लिस्टहरू

लिस्टहरू पाइथनमा सबैभन्दा बहुमुखी डेटा संरचनाहरू मध्ये एक हुन्। तिनीहरूले एउटै भेरिएबलमा कुनै पनि प्रकारका धेरै आइटमहरू भण्डारण गर्न सक्छन्।

## लिस्टहरू सिर्जना गर्नुहोस्

लिस्टहरू वर्ग कोष्ठकहरू प्रयोग गरेर सिर्जना गरिन्छन् जहाँ आइटमहरू अल्पविरामले छुट्याइएका हुन्छन्।

## लिस्ट अपरेसनहरू

पाइथनले लिस्टहरू ह्यान्डल गर्न धेरै बिल्ट-इन विधिहरू प्रदान गर्छ।

## लिस्ट कम्प्रिहेन्सन

अस्तित्व क्रमहरूको आधारमा नयाँ लिस्टहरू सिर्जना गर्ने संक्षिप्त तरिका।`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Creating lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty = []

# Accessing elements
fruits = ["apple", "banana", "cherry"]
print(fruits[0])     # apple
print(fruits[-1])    # cherry

# Modifying lists
fruits.append("orange")
fruits.insert(1, "mango")
fruits.remove("banana")
popped = fruits.pop()

print(fruits)  # ['apple', 'mango', 'cherry']`,
            explanation: { 
              en: 'Lists are mutable - you can change their content after creation.', 
              ne: 'लिस्टहरू परिवर्तनीय हुन् - तपाईं सिर्जना पछि तिनीहरूको सामग्री परिवर्तन गर्न सक्नुहुन्छ।'
            }
          },
          {
            language: 'python',
            code: `# List slicing
numbers = [0, 1, 2, 3, 4, 5]
print(numbers[1:4])    # [1, 2, 3]
print(numbers[:3])     # [0, 1, 2]
print(numbers[3:])     # [3, 4, 5]
print(numbers[::2])    # [0, 2, 4]

# List comprehension
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# With condition
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Nested list
matrix = [[1, 2], [3, 4]]
print(matrix[1][0])  # 3`,
            explanation: { 
              en: 'List comprehension provides a compact way to filter and transform lists.', 
              ne: 'लिस्ट कम्प्रिहेन्सनले लिस्टहरू फिल्टर र रूपांतरण गर्ने संक्षिप्त तरिका प्रदान गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What is the output of [1, 2, 3].append([4, 5])?', 
              ne: '[1, 2, 3].append([4, 5]) को आउटपुट के हो?' 
            },
            options: { 
              en: ['[1, 2, 3, 4, 5]', '[1, 2, 3, [4, 5]]', 'Error', '[4, 5, 1, 2, 3]'], 
              ne: ['[1, 2, 3, 4, 5]', '[1, 2, 3, [4, 5]]', 'Error', '[4, 5, 1, 2, 3]'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'append() adds the entire object as a single element. Use extend() to add each element.', 
              ne: 'append() ले सम्पूर्ण वस्तुलाई एउटा तत्वको रूपमा थप्छ। प्रत्येक तत्व थप्न extend() प्रयोग गर्नुहोस्।'
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'How do you create a list of squares for numbers 0-4?', 
              ne: 'संख्याहरू 0-4 को लागि वर्गहरूको लिस्ट कसरी बनाउने?' 
            },
            options: { 
              en: ['[x**2 for x in range(5)]', '[x^2 for x in 0:4]', 'squares(5)', 'for x in 5: squares.append(x**2)'], 
              ne: ['[x**2 for x in range(5)]', '[x^2 for x in 0:4]', 'squares(5)', 'for x in 5: squares.append(x**2)'] 
            },
            correctAnswer: 0,
            explanation: { 
              en: 'List comprehension with range(5) generates [0,1,2,3,4], then squares each.', 
              ne: 'range(5) सँग लिस्ट कम्प्रिहेन्सनले [0,1,2,3,4] उत्पन्न गर्छ, त्यसपछि प्रत्येकको वर्ग गर्छ।'
            }
          }
        ]
      },
      {
        id: 'python-dictionaries',
        slug: 'dictionaries-in-python',
        title: { 
          en: 'Dictionaries in Python', 
          ne: 'पाइथनमा डिक्शनरीहरू' 
        },
        content: {
          en: `# Dictionaries in Python

Dictionaries are unordered collections of key-value pairs. They provide fast lookup by key.

## Creating Dictionaries

Dictionaries are created using curly braces with key: value pairs.

## Accessing Values

You can access values using their keys.

## Dictionary Methods

Python provides many methods for working with dictionaries.`,
          ne: `# पाइथनमा डिक्शनरीहरू

डिक्शनरीहरू कुज-मान जोडीहरूको अव्यवस्थित संग्रह हुन्। तिनीहरूले कुजद्वारा छिटो खोजी प्रदान गर्छन्।

## डिक्शनरीहरू सिर्जना गर्नुहोस्

डिक्शनरीहरू कर्ली ब्रेसिजमा कुज: मान जोडीहरू प्रयोग गरेर सिर्जना गरिन्छन्।

## मानहरूमा पहुँच

तपाईं आफ्नो कुजहरू प्रयोग गरेर मानहरूमा पहुँच सक्नुहुन्छ।

## डिक्शनरी विधिहरू

पाइथनले डिक्शनरीहरूसँग काम गर्न धेरै विधिहरू प्रदान गर्छ।`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Creating dictionaries
person = {
    "name": "Ram",
    "age": 25,
    "city": "Kathmandu"
}

# Accessing values
print(person["name"])      # Ram
print(person.get("age"))   # 25
print(person.get("job", "Not specified"))  # Not specified

# Adding/modifying
person["job"] = "Developer"
person["age"] = 26

# Delete
del person["city"]

print(person)  # {'name': 'Ram', 'age': 26, 'job': 'Developer'}`,
            explanation: { 
              en: 'Dictionary keys must be unique and immutable (strings, numbers, tuples).', 
              ne: 'डिक्शनरी कुजहरू अद्वितीय र अपरिवर्तनीय (strings, numbers, tuples) हुनुपर्छ।'
            }
          },
          {
            language: 'python',
            code: `# Dictionary methods
student = {"name": "Ram", "age": 20, "grade": "A"}

# Get all keys/values/items
print(student.keys())    # dict_keys(['name', 'age', 'grade'])
print(student.values())  # dict_values(['Ram', 20, 'A'])
print(student.items())   # dict_items([('name', 'Ram'), ...])

# Loop through dictionary
for key, value in student.items():
    print(f"{key}: {value}")

# Dictionary comprehension
squares = {x: x**2 for x in range(5)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}`,
            explanation: { 
              en: 'Use items() to loop through key-value pairs together.', 
              ne: 'कुज-मान जोडीहरू एकसाथ दोहोर्याउन items() प्रयोग गर्नुहोस्।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What does dict.get("key", "default") return if key does not exist?', 
              ne: 'यदि key अस्तित्वमा छैन भने dict.get("key", "default") के फर्काउँछ?' 
            },
            options: { 
              en: ['None', '"default"', 'Error', 'False'], 
              ne: ['None', '"default"', 'Error', 'False'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'get() returns the default value if the key is not found.', 
              ne: 'get() ले यदि key नभेटिएमा पूर्वनिर्धारित मान फर्काउँछ।'
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'Which method returns all key-value pairs as tuples?', 
              ne: 'कुन विधिले सबै कुज-मान जोडीहरू tuples को रूपमा फर्काउँछ?' 
            },
            options: { 
              en: ['keys()', 'values()', 'items()', 'pairs()'], 
              ne: ['keys()', 'values()', 'items()', 'pairs()'] 
            },
            correctAnswer: 2,
            explanation: { 
              en: 'items() returns key-value pairs as tuples in a list-like view.', 
              ne: 'items() ले कुज-मान जोडीहरूलाई list-जस्तो दृश्यमा tuples को रूपमा फर्काउँछ।'
            }
          }
        ]
      },
      // New Lesson: Sets
      {
        id: 'python-sets',
        slug: 'sets-in-python',
        title: { 
          en: 'Sets in Python', 
          ne: 'पाइथनमा सेटहरू' 
        },
        content: {
          en: `# Sets in Python

Sets are unordered collections of unique elements. They are useful when you need to store unique values and perform set operations.

## Creating Sets

Sets are created using curly braces or the set() function.

## Set Operations

Python supports mathematical set operations like union, intersection, and difference.`,
          ne: `# पाइथनमा सेटहरू

सेटहरू अद्वितीय तत्वहरूको अव्यवस्थित संग्रह हुन्। तिनीहरू उपयोगी हुन् जब तपाईंलाई अद्वितीय मानहरू भण्डारण गर्न र सेट सञ्चालनहरू गर्न आवश्यक हुन्छ।

## सेटहरू सिर्जना गर्नुहोस्

सेटहरू कर्ली ब्रेसिज वा set() प्रकार्य प्रयोग गरेर सिर्जना गरिन्छन्।

## सेट सञ्चालनहरू

पाइथनले यूनियन, इन्टरसेक्सन, र डिफरेन्स जस्ता गणितीय सेट सञ्चालनहरूलाई समर्थन गर्छ।`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Creating sets
fruits = {"apple", "banana", "cherry"}
numbers = set([1, 2, 3, 2, 1])  # Removes duplicates
empty_set = set()

# Adding/removing elements
fruits.add("orange")
fruits.remove("banana")  # Raises error if not found
fruits.discard("mango")  # No error if not found

print(fruits)  # {'apple', 'cherry', 'orange'}
print(numbers)  # {1, 2, 3}`,
            explanation: { 
              en: 'Sets automatically remove duplicates. remove() raises KeyError if element doesn\'t exist, discard() does not.', 
              ne: 'सेटहरूले स्वचालित रूपमा डुप्लिकेटहरू हटाउँछन्। remove() ले यदि तत्व अस्तित्वमा छैन भने KeyError उठाउँछ, discard() ले गर्दैन।'
            }
          },
          {
            language: 'python',
            code: `# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Union - all elements
print(set1 | set2)        # {1, 2, 3, 4, 5, 6}
print(set1.union(set2))   # {1, 2, 3, 4, 5, 6}

# Intersection - common elements
print(set1 & set2)        # {3, 4}
print(set1.intersection(set2))  # {3, 4}

# Difference - elements in set1 but not in set2
print(set1 - set2)        # {1, 2}
print(set1.difference(set2))    # {1, 2}

# Symmetric difference - elements in either but not both
print(set1 ^ set2)        # {1, 2, 5, 6}`,
            explanation: { 
              en: 'Use | for union, & for intersection, - for difference, and ^ for symmetric difference.', 
              ne: 'यूनियनको लागि |, इन्टरसेक्सनको लागि &, डिफरेन्सको लागि -, र symmetric difference को लागि ^ प्रयोग गर्नुहोस्।'
            }
          }
        ],
        quiz: [
          {
            id: 'py-set-q1',
            question: { 
              en: 'What happens when you add a duplicate to a set?', 
              ne: 'जब तपाईं सेटमा डुप्लिकेट थप्नुहुन्छ के हुन्छ?' 
            },
            options: { 
              en: ['It adds twice', 'It raises an error', 'It is ignored', 'It replaces the original'], 
              ne: ['यो दुई पटक थपिन्छ', 'यो एरोर उठाउँछ', 'यो बेवास्ता गरिन्छ', 'यो मूल लाई प्रतिस्थापन गर्छ'] 
            },
            correctAnswer: 2,
            explanation: { 
              en: 'Sets only store unique elements, so duplicates are silently ignored.', 
              ne: 'सेटहरूले मात्र अद्वितीय तत्वहरू भण्डारण गर्छन्, त्यसैले डुप्लिकेटहरू मौन रूपमा बेवास्ता गरिन्छन्।'
            }
          },
          {
            id: 'py-set-q2',
            question: { 
              en: 'Which operator gives you elements in either set but not in both?', 
              ne: 'कुन अपरेटरले तपाईंलाई कुनै सेटमा भए तर दुवैमा नभएका तत्वहरू दिन्छ?' 
            },
            options: { 
              en: ['|', '&', '-', '^'], 
              ne: ['|', '&', '-', '^'] 
            },
            correctAnswer: 3,
            explanation: { 
              en: '^ (caret) is the symmetric difference operator - elements in either but not both sets.', 
              ne: '^ (caret) symmetric difference अपरेटर हो - कुनै सेटमा भए तर दुवैमा नभएका तत्वहरू।'
            }
          }
        ]
      },
      // New Lesson: File I/O
      {
        id: 'python-file-io',
        slug: 'file-io-in-python',
        title: { 
          en: 'File I/O in Python', 
          ne: 'पाइथनमा फाइल I/O' 
        },
        content: {
          en: `# File I/O in Python

Python provides easy ways to read from and write to files. This is essential for data persistence and processing.

## Opening Files

Use the open() function to open files. Always close files or use context managers.

## Reading Files

You can read entire files, lines, or specific amounts of data.

## Writing Files

Use 'w' mode to write (overwrites) or 'a' mode to append.`,
          ne: `# पाइथनमा फाइल I/O

पाइथनले फाइलहरूबाट पढ्न र फाइलहरूमा लेख्न सजिलो तरिकाहरू प्रदान गर्छ। यो डेटा दृढता र प्रशोधनको लागि आवश्यक छ।

## फाइलहरू खोल्नुहोस्

फाइलहरू खोल्न open() प्रकार्य प्रयोग गर्नुहोस्। सधैँ फाइलहरू बन्द गर्नुहोस् वा context managers प्रयोग गर्नुहोस्।

## फाइलहरू पढ्नुहोस्

तपाईं सम्पूर्ण फाइलहरू, लाइनहरू, वा डेटाको विशिष्ट मात्रा पढ्न सक्नुहुन्छ।

## फाइलहरू लेख्नुहोस्

लेख्नको लागि 'w' मोड (अधिलेखन) वा थप्नको लागि 'a' मोड प्रयोग गर्नुहोस्।`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Reading a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# Reading line by line
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())

# Reading all lines into list
with open("example.txt", "r") as file:
    lines = file.readlines()`,
            explanation: { 
              en: 'Using "with" ensures the file is properly closed even if errors occur.', 
              ne: '"with" प्रयोग गर्नाले फाइल ठीक से बन्द हुन्छ भनेर सुनिश्चित गर्छ त्रुटिहरू भए पनि।'
            }
          },
          {
            language: 'python',
            code: `# Writing to a file
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("Second line\\n")

# Appending to a file
with open("output.txt", "a") as file:
    file.write("Appended line\\n")

# Writing multiple lines
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
with open("output.txt", "w") as file:
    file.writelines(lines)

# Reading and writing simultaneously
with open("input.txt", "r") as infile:
    with open("output.txt", "w") as outfile:
        for line in infile:
            outfile.write(line.upper())`,
            explanation: { 
              en: '"w" mode overwrites the file, "a" mode appends to the end.', 
              ne: '"w" मोडले फाइल अधिलेखन गर्छ, "a" मोडले अन्त्यमा थप्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'py-io-q1',
            question: { 
              en: 'Which mode should you use to append to a file?', 
              ne: 'फाइलमा थप्नको लागि कुन मोड प्रयोग गर्नुहुन्छ?' 
            },
            options: { 
              en: ['"r"', '"w"', '"a"', '"x"'], 
              ne: ['"r"', '"w"', '"a"', '"x"'] 
            },
            correctAnswer: 2,
            explanation: { 
              en: '"a" mode opens the file for appending, creating it if it doesn\'t exist.', 
              ne: '"a" मोडले फाइल थप्नको लागि खोल्छ, यदि अस्तित्वमा छैन भने सिर्जना गर्छ।'
            }
          },
          {
            id: 'py-io-q2',
            question: { 
              en: 'Why is using "with" recommended for file operations?', 
              ne: 'फाइल सञ्चालनहरूको लागि "with" प्रयोग गर्न किन सिफारिस गरिन्छ?' 
            },
            options: { 
              en: ['It makes code faster', 'It ensures the file is closed properly', 'It prevents reading errors', 'It allows writing'], 
              ne: ['यो कोडलाई छिटो बनाउँछ', 'यो फाइल ठीक से बन्द हुन्छ भनेर सुनिश्चित गर्छ', 'यो पढ्ने त्रुटिहरू रोक्छ', 'यो लेख्न अनुमति दिन्छ'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'The "with" statement automatically closes the file when done, even if errors occur.', 
              ne: '"with" कथनले स्वचालित रूपमा फाइल बन्द गर्छ जब समाप्त हुन्छ, त्रुटिहरू भए पनि।'
            }
          }
        ]
      },
      // New Lesson: Error Handling
      {
        id: 'python-error-handling',
        slug: 'error-handling-in-python',
        title: { 
          en: 'Error Handling in Python', 
          ne: 'पाइथनमा त्रुटि ह्यान्डलिंग' 
        },
        content: {
          en: `# Error Handling in Python

Python uses try...except blocks to handle errors gracefully. This prevents your program from crashing.

## Types of Errors

- SyntaxError: Code is not valid Python
- TypeError: Wrong data type operation
- ValueError: Right type but wrong value
- FileNotFoundError: File doesn\'t exist

## Raising Exceptions

You can raise your own exceptions using the raise keyword.`,
          ne: `# पाइथनमा त्रुटि ह्यान्डलिंग

पाइथनले try...except ब्लकहरू प्रयोग गरेर त्रुटिहरू सञ्चालन गर्छ। यसले तपाईंको प्रोग्राम क्र्यास हुनबाट रोक्छ।

## त्रुटिहरूको प्रकारहरू

- SyntaxError: कोड वैध पाइथन होइन
- TypeError: गलत डेटा प्रकार सञ्चालन
- ValueError: सही प्रकार तर गलत मान
- FileNotFoundError: फाइल अस्तित्वमा छैन

## अपवादहरू उठाउनुहोस्

तपाईं raise कीवर्ड प्रयोग गरेर आफ्नै अपवादहरू उठााउन सक्नुहुन्छ।`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Basic try...except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Multiple except blocks
try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ValueError:
    print("Invalid input - not a number")
except ZeroDivisionError:
    print("Cannot divide by zero")

# Catch all exceptions
try:
    risky_operation()
except Exception as e:
    print(f"Error: {e}")`,
            explanation: { 
              en: 'Handle specific exceptions first, then general ones. The Exception as e syntax lets you access the error message.', 
              ne: 'पहिले विशिष्ट अपवादहरू ह्यान्डल गर्नुहोस्, त्यसपछि सामान्य। Exception as e सिन्ट्याक्सले तपाईंलाई त्रुटि सन्देश पहुँच गर्न दिन्छ।'
            }
          },
          {
            language: 'python',
            code: `# Raising exceptions
def divide(a, b):
    if b == 0:
        raise ValueError("Divisor cannot be zero")
    return a / b

try:
    result = divide(10, 0)
except ValueError as e:
    print(e)  # "Divisor cannot be zero"

# Finally block
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found")
finally:
    # This always runs
    print("Operation complete")

# Custom exception class
class InvalidAgeError(Exception):
    pass

def set_age(age):
    if age < 0:
        raise InvalidAgeError("Age cannot be negative")`,
            explanation: { 
              en: 'The finally block always executes, useful for cleanup. Custom exceptions help validate input.', 
              ne: 'finally ब्लक सधैँ कार्यान्वयन हुन्छ, cleanup को लागि उपयोगी। कस्टम अपवादहरूले इनपुट मान्यता गर्न मद्दत गर्छन्।'
            }
          }
        ],
        quiz: [
          {
            id: 'py-err-q1',
            question: { 
              en: 'What happens if an exception is not caught by any except block?', 
              ne: 'यदि कुनै except ब्लकद्वारा अपवाद समातिएन भने के हुन्छ?' 
            },
            options: { 
              en: ['Program continues', 'Program crashes', 'Returns None', 'Prints error'], 
              ne: ['प्रोग्राम जारी रहन्छ', 'प्रोग्राम क्र्यास हुन्छ', 'None फर्काउँछ', 'त्रुटि प्रिन्ट गर्छ'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'Unhandled exceptions cause the program to crash. Always catch potential exceptions.', 
              ne: 'ह्यान्डल नगरिएका अपवादहरूले प्रोग्राम क्र्यास हुन्छ। सधैँ सम्भावित अपवादहरू समात्नुहोस्।'
            }
          },
          {
            id: 'py-err-q2',
            question: { 
              en: 'When does the finally block execute?', 
              ne: 'finally ब्लक कार्यान्वयन हुन्छ?' 
            },
            options: { 
              en: ['Only on success', 'Only on error', 'Always', 'Never'], 
              ne: ['केवल सफलतामा', 'केवल त्रुटिमा', 'सधैँ', 'कहिल्यै पनि'] 
            },
            correctAnswer: 2,
            explanation: { 
              en: 'The finally block always executes, regardless of whether an exception occurred.', 
              ne: 'finally ब्लक सधैँ कार्यान्वयन हुन्छ, अपवाद भएको नभएको पर्वाह नगरी।'
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
          en: `# Introduction to C

C is a general-purpose programming language developed by Dennis Ritchie in 1972 at Bell Labs. It's known as the mother of modern programming languages.

## Why Learn C?

- **Foundation**: Understanding C helps you learn other languages
- **Performance**: Extremely fast and efficient
- **System Programming**: Used for operating systems, embedded systems
- **Portable**: Runs on almost any platform

## Your First C Program

The classic "Hello, World!" in C:`,
          ne: `# C को परिचय

C एक सामान्य-उद्देश्य प्रोग्रामिंग भाषा हो जुन डेनिस रिचीले 1972 मा बेल ल्याबमा विकास गरे। यो आधुनिक प्रोग्रामिंग भाषाहरूको माता भनेर चिनिन्छ।

## C किन सिक्नुहोस्?

- **आधार**: C बुझ्नाले अन्य भाषाहरू सिक्न मद्दत गर्छ
- **प्रदर्शन**: अत्यन्त छिटो र कुशल
- **प्रणाली प्रोग्रामिंग**: अपरेटिंग सिस्टम, एम्बेडेड सिस्टममा प्रयोग हुन्छ
- **पोर्टेबल**: लगभग कुनै पनि प्लेटफर्ममा चल्छ

## तपाईंको पहिलो C कार्यक्रम

C मा क्लासिक "हेलो, वर्ल्ड!":`
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
              ne: ['ब्यार्न स्ट्राउस्ट्रप', 'डेनिस रिची', 'केन थम्प्सन', 'जेम्स गोस्लिंग'] 
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
          en: `# Variables and Data Types in C

C is a statically typed language - you must declare the type of each variable.

## Basic Data Types

- **int**: Integer (whole numbers)
- **float**: Floating point (decimal numbers)
- **double**: Double precision floating point
- **char**: Single character
- **void**: No type

## Variable Declaration

In C, you must declare variables before using them.`,
          ne: `# C मा भेरिएबल र डेटा प्रकारहरू

C एक स्थिर रूपमा टाइप गरिएको भाषा हो - तपाईंले प्रत्येक भेरिएबलको प्रकार घोषणा गर्नुपर्छ।

## आधारभूत डेटा प्रकारहरू

- **int**: पूर्ण अंक (whole numbers)
- **float**: फ्लोटिंग पोइन्ट (दशमलव अंकहरू)
- **double**: डबल प्रिसिजन फ्लोटिंग पोइन्ट
- **char**: एकल क्यारेक्टर
- **void**: कोई प्रकार छैन

## भेरिएबल घोषणा

C मा, तपाईंले प्रयोग गर्नुअघि भेरिएबलहरू घोषणा गर्नुपर्छ।`
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
          en: `# Control Flow Statements

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
When the number of iterations is unknown.`,
          ne: `# कन्ट्रोल फ्लो स्टेटमेंटहरू

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
जब इटरेशनको सँख्या अज्ञात हुन्छ।`
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
      },
      {
        id: 'c-arrays',
        slug: 'arrays-and-pointers-in-c',
        title: { 
          en: 'Arrays and Pointers in C', 
          ne: 'C मा एरे र पोइन्टरहरू' 
        },
        content: {
          en: `# Arrays and Pointers in C

Arrays and pointers are fundamental concepts in C that work closely together.

## Arrays

An array is a collection of elements of the same type stored in contiguous memory.

## Pointers

A pointer is a variable that stores the memory address of another variable.

## Relationship Between Arrays and Pointers

In C, the name of an array is a pointer to the first element.`,
          ne: `# C मा एरे र पोइन्टरहरू

C मा एरे र पोइन्टरहरू मूलभूत अवधारणाहरू हुन् जुन एकसँग नजिक काम गर्छन्।

## एरेहरू

एरे एउटै प्रकारका तत्वहरूको संग्रह हो जुन सन्निकट मेमोरीमा भण्डारण गरिन्छ।

## पोइन्टरहरू

पोइन्टर एउटा भेरिएबल हो जुन अर्को भेरिएबलको मेमोरी ठेगाना भण्डारण गर्छ।

## एरे र पोइन्टरहरू बीचको सम्बन्ध

C मा, एरेको नाम पहिलो तत्वतर्फ इंगित गर्ने पोइन्टर हो।`
        },
        codeExamples: [
          {
            language: 'c',
            code: `#include <stdio.h>

int main() {
    // Array declaration
    int numbers[5] = {1, 2, 3, 4, 5};
    
    // Accessing elements
    printf("First: %d\\n", numbers[0]);
    printf("Third: %d\\n", numbers[2]);
    
    // Array and pointer relationship
    printf("Pointer: %p\\n", numbers);
    printf("First element: %d\\n", *numbers);
    
    // Loop through array
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    
    return 0;
}`,
            explanation: { 
              en: 'Array name "numbers" acts as a pointer to the first element. Use *numbers to dereference.', 
              ne: 'एरे नाम "numbers" ले पहिलो तत्वतर्फ पोइन्टरको रूपमा काम गर्छ। डिरिफरेन्सको लागि *numbers प्रयोग गर्नुहोस्।'
            }
          },
          {
            language: 'c',
            code: `#include <stdio.h>

int main() {
    int num = 42;
    int *ptr;
    
    // Store address in pointer
    ptr = &num;
    
    printf("Value of num: %d\\n", num);
    printf("Address of num: %p\\n", &num);
    printf("Value through pointer: %d\\n", *ptr);
    
    // Modify value through pointer
    *ptr = 100;
    printf("New value of num: %d\\n", num);
    
    return 0;
}`,
            explanation: { 
              en: '& gives the address of a variable. * dereferences a pointer to get the value.', 
              ne: '& ले भेरिएबलको ठेगाना दिन्छ। * ले पोइन्टरलाई डिरिफरेन्स गरेर मान प्राप्त गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What does &num return?', 
              ne: '&num के फर्काउँछ?' 
            },
            options: { 
              en: ['The value of num', 'The address of num', 'A pointer to num', 'The type of num'], 
              ne: ['num को मान', 'num को ठेगाना', 'num मा पोइन्टर', 'num को प्रकार'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: '& (address-of operator) returns the memory address of a variable.', 
              ne: '& (ठेगाना-अफ अपरेटर) ले भेरिएबलको मेमोरी ठेगाना फर्काउँछ।'
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'What is *ptr when ptr is a pointer?', 
              ne: 'ptr पोइन्टर हो भने *ptr के हो?' 
            },
            options: { 
              en: ['The address stored in ptr', 'The value at the address ptr points to', 'A new pointer', 'An error'], 
              ne: ['ptr मा भण्डारित ठेगाना', 'ptr ले इंगित गर्ने ठेगानामा रहेको मान', 'नयाँ पोइन्टर', 'एरर'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: '* (dereference operator) accesses the value stored at the address the pointer contains.', 
              ne: '* (डिरिफरेन्स अप ले पोइन्टरमा ररेटर)हेको ठेगानामा भण्डारित मानमा पहुँच प्राप्त गर्छ।'
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
          en: `# Introduction to Java

Java is a high-level, object-oriented programming language developed by Sun Microsystems in 1995. It's designed to be platform-independent.

## Key Features

- **Write Once, Run Anywhere**: Java programs run on any device with JVM
- **Object-Oriented**: Everything is organized around objects and classes
- **Automatic Memory Management**: Garbage collection handles memory
- **Strong Typing**: Variables must be declared with types
- **Multi-threaded**: Built-in support for concurrent programming`,
          ne: `# जाभाको परिचय

जाभा एक उच्च-स्तर, वस्तु-उन्मुख प्रोग्रामिंग भाषा हो जुन 1995 मा Sun Microsystems द्वारा विकास गरियो। यो प्लेटफर्म-स्वतन्त्र हुन डिजाइन गरिएको छ।

## मुख्य विशेषताहरू

- **एकपटक लेख्नुहोस्, जहाँ पनि चलाउनुहोस्**: जाभा कार्यक्रमहरू JVM भएको कुनै पनि डिवाइसमा चल्छन्
- **वस्तु-उन्मुख**: सबै कुरा वस्तु र क्लासहरूको वरपर संगठित छ
- **स्वचालित मेमोरी प्रबन्धन**: गार्बेज कलेक्शनले मेमोरी ह्यान्डल गर्छ
- **शक्तिशाली टाइपिंग**: भेरिएबलहरू प्रकारहरूसँग घोषित हुनुपर्छ
- **मल्टी-थ्रेडेड**: समानांतर प्रोग्रामिंगको लागि built-in समर्थन`
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
              en: 'Java is strongly typed. String is capitalized - it\'s an object, not a primitive.', 
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
          en: `# Object-Oriented Programming in Java

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
Hiding complex implementation details.`,
          ne: `# वस्तु-उन्मुख प्रोग्रामिंगमा जाभा

जाभा OOP अवधारणाहरूको वरपर निर्मित छ: क्लासहरू, वस्तुहरू, इनहेरिटेंस, पॉलर्फिज्म, एनकैप्सुलीमोेशन, र एब्स्ट्राक्शन।

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
जटिल कार्यान्वयन विवरणहरू लुकाउने।`
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
              ne: 'जाभामा क्लास इनहरिट गर्न कुन कीवर्ड प्रयोग हुन्छ?' 
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
          en: `# Java Collections Framework

The Collections Framework provides a set of interfaces and classes for storing and manipulating groups of objects.

## Main Interfaces

- **List**: Ordered collection, allows duplicates (ArrayList, LinkedList)
- **Set**: Unordered, no duplicates (HashSet, TreeSet)
- **Map**: Key-value pairs (HashMap, TreeMap)
- **Queue**: FIFO (First In First Out)`,
          ne: `# जाभा कलेक्सन्स फ्रेमवर्क

कलेक्सन्स फ्रेमवर्कले वस्तुहरूको समूहहरू भण्डारण र ह्यान्डल गर्नको लागि इन्टरफेस र क्लासहरूको सेट प्रदान गर्छ।

## मुख्य इन्टरफेसहरू

- **List**: क्रमबद्ध संग्रह, डुप्लिकेटहरू अनुमति दिन्छ (ArrayList, LinkedList)
- **Set**: अनक्रमबद्ध, डुप्लिकेटहरू छैनन् (HashSet, TreeSet)
- **Map**: कुज-मान जोडीहरू (HashMap, TreeMap)
- **Queue**: FIFO (First In First Out)`
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
      ne: 'HTML ले संरचना र CSS ले स्टाइलिंगको साथ सुन्दर वेबसाइटहरू बनाउनुहोस्।' 
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
          en: `# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages.

## What is HTML?

- Defines the structure of web pages
- Uses tags to define elements
- Stands for HyperText Markup Language
- Not a programming language (it's a markup language)

## Basic HTML Structure

Every HTML document has a standard structure with head and body sections.`,
          ne: `# HTML को परिचय

HTML (HyperText Markup Language) वेब पृष्ठहरू सिर्जना गर्नको लागि मानक मार्कअप भाषा हो।

## HTML के हो?

- वेब पृष्ठहरूको संरचना परिभाषित गर्छ
- तत्वहरू परिभाषित गर्न ट्यागहरू प्रयोग गर्छ
- HyperText Markup Language को लागि हो
- प्रोग्रामिंग भाषा होइन (यो मार्कअप भाषा हो)

## आधारभूत HTML संरचना

प्रत्येक HTML दस्तावेजमा head र body खण्डहरूको साथ मानक संरचना हुन्छ।`
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
              ne: 'DOCTYPE घोषणा गर्छ यो HTML5 हो। <html> तत्वले सबै कुरा लपेट्छ।'
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
              ne: 'HTML को पूर्ण रूप के हो?' 
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
              ne: 'सबैभन्दा ठूलो शीर्षकको लागि कुन ट्याग प्रयोग गरिन्छ?' 
            },
            options: { 
              en: ['<heading>', '<h6>', '<h1>', '<head>'], 
              ne: ['<heading>', '<h6>', '<h1>', '<head>'] 
            },
            correctAnswer: 2,
            explanation: { 
              en: '<h1> is the largest heading. Headings go from h1 (largest) to h6 (smallest).', 
              ne: '<h1> सबैभन्दा ठूलो शीर्षक हो। शीर्षकहरू h1 (सबैभन्दा ठूलो) बाट h6 (सबैभन्दा सानो) सम्म जान्छन्।'
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
          en: `# Introduction to CSS

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
3. **External**: Separate .css file (recommended)`,
          ne: `# CSS को परिचय

CSS (Cascading Style Sheets) वेब पृष्ठहरूलाई स्टाइल र लेआउट गर्नको लागि प्रयोग गरिन्छ।

## CSS ले के गर्न सक्छ?

- रंग, फन्ट, र स्पेसिङ परिवर्तन गर्नुहोस्
- लेआउटहरू सिर्जना गर्नुहोस् (flexbox, grid)
- एनिमेसन र ट्रान्जिसनहरू थप्नुहोस्
- रेस्पोन्सिभ डिजाइनहरू बनाउनुहोस्
- विभिन्न स्क्रिन साइजहरूलाई स्टाइल गर्नुहोस्

## CSS थप्ने तीन तरिकाहरू

1. **Inline**: HTML मा style attribute
2. **Internal**: <head> मा <style> ट्याग
3. **External**: छुट्टै .css फाइल (सिफारिस गरिएको)`
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
              ne: 'Internal CSS <head> खण्डमा जान्छ। एक पृष्ठ स्टाइलहरूको लागि राम्रो।'
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
              ne: 'External CSS बहु-पृष्ठ वेबसाइटहरूको लागि उत्तम हो। यसलाई <link rel="stylesheet" href="styles.css"> ले लिंक गर्नुहोस्'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What is the best way to add CSS for a multi-page website?', 
              ne: 'बहु-पृष्ठ वेबसाइटको लागि CSS थप्ने सबैभन्दा राम्रो तरिका के हो?' 
            },
            options: { 
              en: ['Inline CSS', 'Internal CSS', 'External CSS', 'JavaScript'], 
              ne: ['Inline CSS', 'Internal CSS', 'External CSS', 'JavaScript'] 
            },
            correctAnswer: 2,
            explanation: { 
              en: 'External CSS allows you to style all pages from one file.', 
              ne: 'External CSS ले तपाईंलाई एउटा फाइलबाट सबै पृष्ठहरू स्टाइल गर्न अनुमति दिन्छ।'
            }
          }
        ]
      },
      {
        id: 'css-flexbox',
        slug: 'css-flexbox-layout',
        title: { 
          en: 'CSS Flexbox Layout', 
          ne: 'CSS Flexbox लेआउट' 
        },
        content: {
          en: `# CSS Flexbox Layout

Flexbox is a one-dimensional layout method for arranging items in rows or columns.

## Why Use Flexbox?

- Easy alignment of items
- Flexible sizing
- Reorder items visually
- Handle spacing automatically

## Key Properties

- display: flex
- justify-content
- align-items
- flex-direction
- flex-wrap`,
          ne: `# CSS Flexbox लेआउट

Flexbox वस्तुहरूलाई पंक्ति वा स्तंभहरूमा व्यवस्थित गर्ने एक-आयामी लेआउट विधि हो।

## Flexbox किन प्रयोग गर्ने?

- वस्तुहरूको सजिलो अलाइनमेंट
- लचिलो आकार
- वस्तुहरूलाई दृश्यात्मक रूपमा पुन: क्रम
- स्वचालित रूपमा स्पेसिङ ह्यान्डल गर्नुहोस्

## मुख्य गुणहरू

- display: flex
- justify-content
- align-items
- flex-direction
- flex-wrap`
        },
        codeExamples: [
          {
            language: 'css',
            code: `/* Basic Flexbox */
.container {
  display: flex;
  justify-content: center;  /* horizontal */
  align-items: center;      /* vertical */
  gap: 20px;
}

/* Flex direction */
.row { flex-direction: row; }
.column { flex-direction: column; }

/* Wrap */
.wrap { flex-wrap: wrap; }`,
            explanation: { 
              en: 'display: flex enables flexbox. justify-content handles horizontal alignment.', 
              ne: 'display: flex ले flexbox सक्षम पार्छ। justify-content ले क्षैतिज अलाइनमेंट ह्यान्डल गर्छ।'
            }
          },
          {
            language: 'css',
            code: `/* Flex item properties */
.item {
  flex-grow: 1;    /* grow to fill space */
  flex-shrink: 0; /* don't shrink */
  flex-basis: 200px; /* initial size */
  
  /* Short-hand */
  flex: 1 0 200px;
}

/* Alignment */
.start { align-self: flex-start; }
.center { align-self: center; }
.end { align-self: flex-end; }`,
            explanation: { 
              en: 'flex-grow controls how items expand, flex-shrink controls how they shrink.', 
              ne: 'flex-grow ले कसरी वस्तुहरू विस्तार हुन्छ नियन्त्रण गर्छ, flex-shrink ले कसरी तिनीहरू सङ्कुचित हुन्छन् नियन्त्रण गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'Which property centers items horizontally in flexbox?', 
              ne: 'कुन गुणले flexbox मा वस्तुहरू क्षैतिज रूपमा केन्द्रित गर्छ?' 
            },
            options: { 
              en: ['align-items', 'justify-content', 'text-align', 'center'], 
              ne: ['align-items', 'justify-content', 'text-align', 'center'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'justify-content aligns items along the main axis (horizontally for row direction).', 
              ne: 'justify-content ले मुख्य अक्ष (पंक्ति दिशाको लागि क्षैतिज) बाट वस्तुहरू अलाइन गर्छ।'
            }
          },
          {
            id: 'q2',
            question: { 
              en: 'How do you make flex items wrap to new lines?', 
              ne: 'तपाईं flex वस्तुहरूलाई नयाँ लाइनहरूमा कसरी र्याप गर्नुहुन्छ?' 
            },
            options: { 
              en: ['flex-wrap: wrap', 'flex-direction: wrap', 'display: block', 'wrap: true'], 
              ne: ['flex-wrap: wrap', 'flex-direction: wrap', 'display: block', 'wrap: true'] 
            },
            correctAnswer: 0,
            explanation: { 
              en: 'flex-wrap: wrap allows items to flow onto multiple lines.', 
              ne: 'flex-wrap: wrap ले वस्तुहरूलाई धेरै लाइनहरूमा बग्न अनुमति दिन्छ।'
            }
          }
        ]
      },
      {
        id: 'js-intro',
        slug: 'javascript-basics',
        title: { 
          en: 'JavaScript Basics', 
          ne: 'जाभास्क्रिप्टको आधारभूत कुराहरू' 
        },
        content: {
          en: `# JavaScript Basics

JavaScript makes web pages interactive. It's the third layer of web technologies (HTML + CSS + JavaScript).

## What Can JavaScript Do?

- Respond to user actions
- Validate forms
- Create dynamic content
- Build web applications
- Communicate with servers

## Adding JavaScript

Put <script> tags at the end of <body> for better performance.`,
          ne: `# जाभास्क्रिप्टको आधारभूत कुराहरू

जाभास्क्रिप्टले वेब पृष्ठहरूलाई अन्तरक्रियात्मक बनाउँछ। यो वेब प्रविधिहरूको तेस्रो तह हो (HTML + CSS + JavaScript)।

## जाभास्क्रिप्टले के गर्न सक्छ?

- प्रयोगकर्ताको कार्यहरूमा प्रतिक्रिया दिनुहोस्
- फारमहरू प्रमाणित गर्नुहोस्
- गतिशील सामग्री सिर्जना गर्नुहोस्
- वेब अनुप्रयोगहरू बनाउनुहोस्
- सर्भरहरूसँग सञ्चार गर्नुहोस्

## जाभास्क्रिप्ट थप्नुहोस्

राम्रो प्रदर्शनको लागि <script> ट्यागहरू <body> को अन्त्यमा राख्नुहोस्।`
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
              ne: 'let र const भेरिएबलहरू घोषित गर्ने आधुनिक तरिकाहरू हुन्। var पुरानो हो।'
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
              ne: 'जाभास्क्रिप्ट DOM मार्फत HTML तत्वहरूसँग अन्तरक्रिया गर्न सक्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'Which keyword declares a variable that cannot be reassigned?', 
              ne: 'कुन कीवर्डले पुन: असाइन गर्न नसकिने भेरिएबल घोषणा गर्छ?' 
            },
            options: { 
              en: ['var', 'let', 'const', 'static'], 
              ne: ['var', 'let', 'const', 'static'] 
            },
            correctAnswer: 2,
            explanation: { 
              en: 'const declares a constant - its value cannot be changed after initialization.', 
              ne: 'const ले एक स्थिर घोषणा गर्छ - यसको मान आरम्भिकरण पछि परिवर्तन गर्न सकिँदैन।'
            }
          }
        ]
      }
    ]
  },
  // Phase 5: Git
  {
    id: 'git-basics',
    title: { en: 'Git Version Control', ne: 'Git भर्जन कन्ट्रोल' },
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
          ne: 'भर्जन कन्ट्रोलको परिचय' 
        },
        content: {
          en: `# Introduction to Version Control

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
- **Distributed**: Every user has full copy (Git, Mercurial)`,
          ne: `# भर्जन कन्ट्रोलको परिचय

भर्जन कन्ट्रोलले समयको साथ तपाईंको फाइलहरूमा परिवर्तनहरू ट्रैक गर्छ। कुनै पनि विकास परियोजनाको लागि यो आवश्यक छ।

## भर्जन कन्ट्रोल किन प्रयोग गर्ने?

- **इतिहास**: कसले के र कहिले परिवर्तन गर्यो हेर्नुहोस्
- **सहयोग**: द्वंद्व बिना अरूसँग काम गर्नुहोस्
- **ब्याकअप**: तपाईंको कोड सुरक्षित रूपमा भण्डारण गरिएको छ
- **प्रयोग**: कोड नभाँचीकन नयाँ सुविधाहरू प्रयास गर्नुहोस्
- **रोलब्याक**: आवश्यक भएमा पिछलै संस्करणमा फर्किनुहोस्

## भर्जन कन्ट्रोलका प्रकारहरू

- **स्थानीय**: एकल कम्प्युटर (सरल तर सीमित)
- **केन्द्रीकृत**: सर्भरले सबै संस्करणहरू भण्डारण गर्छ (SVN, CVS)
- **वितरित**: प्रत्येक प्रयोगकर्तासँग पूर्ण प्रति छ (Git, Mercurial)`
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
              ne: 'सधैं सुरु गर्नुअघि आफ्नो पहिचान कन्फिगर गर्नुहोस्। git init ले नयाँ रिपोजिटरी सिर्जना गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'What type of version control system is Git?', 
              ne: 'Git कस्तो प्रकारको भर्जन कन्ट्रोल प्रणाली हो?' 
            },
            options: { 
              en: ['Local', 'Centralized', 'Distributed', 'Hybrid'], 
              ne: ['स्थानीय', 'केन्द्रीकृत', 'वितरित', 'हाइब्रिड'] 
            },
            correctAnswer: 2,
            explanation: { 
              en: 'Git is a distributed version control system - every user has a full copy of the repository.', 
              ne: 'Git वितरित भर्जन कन्ट्रोल प्रणाली हो - प्रत्येक प्रयोगकर्तासँग रिपोजिटरीको पूर्ण प्रति हुन्छ।'
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
          en: `# Basic Git Commands

Learn the essential Git commands for daily work.

## Common Commands

### git status
Shows the current state of your working directory.

### git add
Stages changes for commit.

### git commit
Saves your staged changes with a message.

### git log
Shows commit history.`,
          ne: `# आधारभूत Git कमाण्डहरू

दैनिक कामको लागि आवश्यक Git कमाण्डहरू सिक्नुहोस्।

## सामान्य कमाण्डहरू

### git status
तपाईंको कार्य निर्देशिकाको हालको स्थिति देखाउँछ।

### git add
commit को लागि परिवर्तनहरू चरणबद्ध गर्छ।

### git commit
सँगै सन्देशको साथ तपाईंको चरणबद्ध परिवर्तनहरू बचत गर्छ।

### git log
commit इतिहास देखाउँछ।`
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
              ne: 'git add ले परिवर्तनहरू चरणबद्ध गर्छ, git commit ले तिनीहरूलाई बचत गर्छ। सधैं स्पष्ट commit सन्देशहरू लेख्नुहोस्!'
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
              ne: 'git diff ले के परिवर्तन भयो देखाउँछ। git reset ले फाइलहरू unstage गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: { 
              en: 'Which command stages all changes for commit?', 
              ne: 'कुन कमाण्डले सबै परिवर्तनहरू commit को लागि चरणबद्ध गर्छ?' 
            },
            options: { 
              en: ['git commit -a', 'git add .', 'git push', 'git status'], 
              ne: ['git commit -a', 'git add .', 'git push', 'git status'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'git add . stages all changes in the current directory.', 
              ne: 'git add . ले हालको निर्देशिकामा सबै परिवर्तनहरू चरणबद्ध गर्छ।'
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
          en: `# Branching and Merging

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
- **Pull Request**: Request to merge changes`,
          ne: `# ब्रान्चिङ र मर्जिङ

ब्रान्चहरूले तपाईंलाई मुख्य कोडलाई प्रभाव पार्नुहोस् बिना सुविधाहरूमा काम गर्न अनुमति दिन्छ।

## ब्रान्चहरू किन प्रयोग गर्ने?

- नयाँ सुविधाहरू विकास गर्नुहोस्
- बगहरू छुट्टै ठिक गर्नुहोस्
- सुरक्षित रूपमा प्रयोग गर्नुहोस्
- एकै समयमा धेरै कुरामा काम गर्नुहोस्

## मुख्य अवधारणाहरू

- **Main/Master**: प्राथमिक ब्रान्च
- **Feature Branch**: नयाँ सुविधाहरूको लागि
- **Merge**: ब्रान्चहरूलाई एकसाथ संयोजन गर्नुहोस्
- **Pull Request**: परिवर्तनहरू मर्ज गर्न अनुरोध`
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
              ne: 'ब्रान्चहरूले समानांतर विकास अनुमति दिन्छ। नयाँ सुविधाहरूको लागि सधैं नयाँ ब्रान्च सिर्जना गर्नुहोस्।'
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
              ne: 'Merge ले ब्रान्च इतिहास संयोजन गर्छ। रिपो सफा राख्नको लागि मर्ज गरेपछि ब्रान्चहरू मेटाउनुहोस्।'
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
  },
  // Phase 6: JavaScript
  {
    id: 'javascript-basics',
    title: { en: 'JavaScript Basics', ne: 'जाभास्क्रिप्टको आधारभूत कुराहरू' },
    slug: 'javascript-basics',
    description: { en: 'Learn JavaScript - the programming language of the web. Add interactivity to your websites.', ne: 'जाभास्क्रिप्ट सिक्नुहोस् - वेबको प्रोग्रामिंग भाषा। आफ्नो वेबसाइटहरूमा अन्तरक्रियात्मकता थप्नुहोस्।' },
    phase: 6,
    icon: '🟨',
    color: '#f7df1e',
    lessons: [
      {
        id: 'js-intro',
        slug: 'introduction-to-javascript',
        title: { 
          en: 'Introduction to JavaScript', 
          ne: 'जाभास्क्रिप्टको परिचय' 
        },
        content: {
          en: `# Introduction to JavaScript

JavaScript is the programming language of the web. It makes websites interactive and dynamic. Every website that does more than just display static content uses JavaScript.

## Why Learn JavaScript?

- **Universal**: Runs in every web browser
- **Versatile**: Can be used for web, mobile apps, server-side, and more
- **In-Demand**: One of the most sought-after programming skills
- **Easy to Start**: No special software needed - just a browser

## Your First JavaScript

JavaScript can be added directly in HTML using the <script> tag. Let's start with a simple example:

JavaScript is executed by the browser's JavaScript engine.`,
          ne: `# जाभास्क्रिप्टको परिचय

जाभास्क्रिप्ट वेबको प्रोग्रामिंग भाषा हो। यसले वेबसाइटहरूलाई अन्तरक्रियात्मक र गतिशील बनाउँछ। जुन वेबसाइटहरूले केवल स्थिर सामग्री मात्र प्रदर्शन गर्छन् तिनीहरूले जाभास्क्रिप्ट प्रयोग गर्छन्।

## जाभास्क्रिप्ट किन सिक्नुहोस्?

- **सार्वभौमिक**: प्रत्येक वेब ब्राउजरमा चल्छ
- **बहुमुखी**: वेब, मोबाइल एप्स, सर्भर-साइड, र अरू धेरैको लागि प्रयोग गर्न सकिन्छ
- **मागमा**: सबैभन्दा खोजेको प्रोग्रामिंग सीपहरूमध्ये एक
- **सजिलै सुरु गर्ने**: कुनै विशेष सफ्टवेयर आवश्यक छैन - केवल ब्राउजर

## तपाईंको पहिलो जाभास्क्रिप्ट

जाभास्क्रिप्टलाई HTML मा सीधै <script> ट्याग प्रयोग गरेर थप्न सकिन्छ। सरल उदाहरणबाट सुरु गरौं:

जाभास्क्रिप्ट ब्राउजरको जाभास्क्रिप्ट इन्जिनद्वारा कार्यान्वयन गरिन्छ।`
        },
        codeExamples: [
          {
            language: 'html',
            code: `<!-- Add JavaScript to HTML -->
<!DOCTYPE html>
<html>
<body>
  <h1>My First JavaScript</h1>
  <button onclick="alert('Hello!')">Click Me</button>
  <script>
    console.log("JavaScript is running!");
  </script>
</body>
</html>`,
            explanation: { 
              en: 'JavaScript can be embedded in HTML using the <script> tag. The onclick attribute runs JavaScript when clicked.', 
              ne: 'जाभास्क्रिप्टलाई HTML मा <script> ट्याग प्रयोग गरेर एम्बेड गर्न सकिन्छ। onclick विशेषता क्लिक गर्दा जाभास्क्रिप्ट चलाउँछ।'
            }
          },
          {
            language: 'javascript',
            code: `// Variables in JavaScript
let name = "John";
const age = 25;
var isStudent = true;

console.log("Name:", name);
console.log("Age:", age);

// Simple calculation
let a = 10, b = 5;
console.log("Sum:", a + b);`,
            explanation: { 
              en: 'let and const are modern ways to declare variables. var is older. const cannot be reassigned.', 
              ne: 'let र const भेरिएबल घोषणा गर्ने आधुनिक तरिकाहरू हुन्। var पुरानो हो। const लाई पुन: असाइन गर्न सकिँदैन।'
            }
          }
        ],
        quiz: [
          {
            id: 'js-intro-q1',
            question: { 
              en: 'Which HTML tag is used to add JavaScript to a webpage?', 
              ne: 'वेबपेजमा जाभास्क्रिप्ट थप्न कुन HTML ट्याग प्रयोग गरिन्छ?' 
            },
            options: { 
              en: ['<script>', '<js>', '<javascript>', '<code>'], 
              ne: ['<script>', '<js>', '<javascript>', '<code>'] 
            },
            correctAnswer: 0,
            explanation: { 
              en: 'The <script> tag is used to embed JavaScript in HTML documents.', 
              ne: 'HTML कागजातहरूमा जाभास्क्रिप्ट एम्बेड गर्न <script> ट्याग प्रयोग गरिन्छ।'
            }
          },
          {
            id: 'js-intro-q2',
            question: { 
              en: 'Which keyword declares a variable that cannot be reassigned?', 
              ne: 'कुन कीवर्डले पुन: असाइन गर्न नसकिने भेरिएबल घोषणा गर्छ?' 
            },
            options: { 
              en: ['var', 'let', 'const', 'static'], 
              ne: ['var', 'let', 'const', 'static'] 
            },
            correctAnswer: 2,
            explanation: { 
              en: 'const declares a constant - its value cannot be changed after initialization.', 
              ne: 'const ले constant घोषणा गर्छ - यसको मान प्रारंभिककरण पछि परिवर्तन गर्न सकिँदैन।'
            }
          }
        ]
      },
      {
        id: 'js-variables',
        slug: 'variables-and-data-types',
        title: { 
          en: 'Variables and Data Types', 
          ne: 'भेरिएबल र डेटा प्रकारहरू' 
        },
        content: {
          en: `# Variables and Data Types

Variables are containers for storing data values. JavaScript has several data types that determine what kind of data a variable can hold.

## Variable Declarations

- **let**: Block-scoped, can be reassigned
- **const**: Block-scoped, cannot be reassigned
- **var**: Function-scoped, older syntax (avoid in modern code)

## Primitive Data Types

- **String**: Text enclosed in quotes ("hello" or 'hello')
- **Number**: Both integers and decimals (42, 3.14)
- **Boolean**: true or false
- **Undefined**: Variable declared but not assigned
- **Null**: Intentional absence of value`,
          ne: `# भेरिएबल र डेटा प्रकारहरू

भेरिएबलहरू डेटा मानहरू भण्डारण गर्ने कन्टेनरहरू हुन्। जाभास्क्रिप्टमा केही डेटा प्रकारहरू छन् जसले निर्धारण गर्छ कि भेरिएबलले कुन प्रकारको डेटा राख्न सक्छ।

## भेरिएबल घोषणाहरू

- **let**: ब्लक-स्कोप्ड, पुन: असाइन गर्न सकिन्छ
- **const**: ब्लक-स्कोप्ड, पुन: असाइन गर्न सकिँदैन
- **var**: फंक्शन-स्कोप्ड, पुरानो सिन्ट्याक्स (आधुनिक कोडमा रोक्नुहोस्)

## आदिम डेटा प्रकारहरू

- **String**: उद्धरणमा राखिएको पाठ ("hello" वा 'hello')
- **Number**: दुवै पूर्णांक र दशमलव (42, 3.14)
- **Boolean**: true वा false
- **Undefined**: भेरिएबल घोषित तर असाइन नगरिएको
- **Null**: मानको जानकारी अनुपस्थिति`
        },
        codeExamples: [
          {
            language: 'javascript',
            code: `// String
let name = "Ram";
let greeting = 'Hello';

// Number
let age = 25;
let price = 19.99;

// Boolean
let isActive = true;
let hasPermission = false;

// Undefined
let notAssigned;
console.log(notAssigned); // undefined

// Null
let empty = null;`,
            explanation: { 
              en: 'JavaScript automatically determines the data type. You can check the type using typeof.', 
              ne: 'जाभास्क्रिप्टले स्वचालित रूपमा डेटा प्रकार निर्धारण गर्छ। तपाईं typeof प्रयोग गरेर प्रकार जाँच गर्न सक्नुहुन्छ।'
            }
          },
          {
            language: 'javascript',
            code: `// Type checking
let text = "Hello";
let num = 42;
let isTrue = true;

console.log(typeof text);  // "string"
console.log(typeof num);    // "number"
console.log(typeof isTrue); // "boolean"

// String methods
let message = "Hello World";
console.log(message.length);        // 11
console.log(message.toUpperCase()); // "HELLO WORLD"
console.log(message.includes("World")); // true`,
            explanation: { 
              en: 'Use typeof to check variable types. Strings have built-in methods for manipulation.', 
              ne: 'भेरिएबल प्रकारहरू जाँच्न typeof प्रयोग गर्नुहोस्। स्ट्रिङहरूमा हेरफेरको लागि बिल्ट-इन विधिहरू छन्।'
            }
          }
        ],
        quiz: [
          {
            id: 'js-var-q1',
            question: { 
              en: 'What is the result of typeof 42?', 
              ne: 'typeof 42 को परिणाम के हो?' 
            },
            options: { 
              en: ['"integer"', '"number"', '"float"', '"numeric"'], 
              ne: ['"integer"', '"number"', '"float"', '"numeric"'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'JavaScript has only one number type - "number" - for both integers and decimals.', 
              ne: 'जाभास्क्रिप्टमा एउटा मात्र संख्या प्रकार छ - "number" - दुवै पूर्णांक र दशमलवको लागि।'
            }
          },
          {
            id: 'js-var-q2',
            question: { 
              en: 'What does undefined mean?', 
              ne: 'undefined को अर्थ के हो?' 
            },
            options: { 
              en: ['An empty value', 'A variable declared but not assigned', 'An error', 'A zero value'], 
              ne: ['खाली मान', 'घोषित तर असाइन नगरिएको भेरिएबल', 'एरर', 'शून्य मान'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'undefined means a variable has been declared but no value has been assigned yet.', 
              ne: 'undefined ले भनाउँछ कि भेरिएबल घोषित भएको छ तर अझै कुनै मान असाइन गरिएको छैन।'
            }
          }
        ]
      },
      {
        id: 'js-functions',
        slug: 'functions-and-events',
        title: { 
          en: 'Functions and Events', 
          ne: 'फंक्शन र इभेन्टहरू' 
        },
        content: {
          en: `# Functions and Events

Functions are reusable blocks of code that perform a specific task. Events are actions that happen in the browser that JavaScript can respond to.

## Creating Functions

There are several ways to create functions:
- Function Declaration
- Function Expression
- Arrow Functions

## Event Handling

JavaScript can respond to user actions through event listeners:
- click
- mouseover
- keypress
- submit
- load`,
          ne: `# फंक्शन र इभेन्टहरू

फंक्शनहरू निश्चित कार्य गर्ने पुन: प्रयोग योग्य कोड ब्लकहरू हुन्। इभेन्टहरू ब्राउजरमा हुने कार्यहरू हुन् जसको जाभास्क्रिप्टले प्रतिक्रिया दिन सक्छ।

## फंक्शनहरू सिर्जना गर्ने

फंक्शनहरू सिर्जना गर्ने धेरै तरिकाहरू छन्:
- फंक्शन डिक्लेरेशन
- फंक्शन एक्सप्रेशन
- एरो फंक्शन

## इभेन्ट ह्यान्डलिंग

जाभास्क्रिप्ट इभेन्ट लिसनरहरू मार्फत प्रयोगकर्ता कार्यहरूको प्रतिक्रिया दिन सक्छ:
- click
- mouseover
- keypress
- submit
- load`
        },
        codeExamples: [
          {
            language: 'javascript',
            code: `// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow Function
const add = (a, b) => a + b;

// Function with default parameter
function multiply(a, b = 1) {
  return a * b;
}

// Using the functions
console.log(greet("Ram"));    // "Hello, Ram!"
console.log(add(5, 3));       // 8
console.log(multiply(4));     // 4`,
            explanation: { 
              en: 'Functions can be declared in multiple ways. Arrow functions are concise and modern.', 
              ne: 'फंक्शनहरू धेरै तरिकाले घोषित गर्न सकिन्छ। एरो फंक्सनहरू संक्षिप्त र आधुनिक छन्।'
            }
          },
          {
            language: 'javascript',
            code: `// Event Listener Example
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  alert("Button clicked!");
});

// Arrow function version
button.addEventListener("mouseover", () => {
  console.log("Mouse over button");
});

// Multiple events on same element
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});

// Page load event
window.addEventListener("load", () => {
  console.log("Page loaded!");
});`,
            explanation: { 
              en: 'addEventListener attaches event handlers to elements. The first argument is the event type.', 
              ne: 'addEventListener ले तत्वहरूमा इभेन्ट ह्यान्डलरहरू जोड्छ। पहिलो argument इभेन्ट प्रकार हो।'
            }
          }
        ],
        quiz: [
          {
            id: 'js-func-q1',
            question: { 
              en: 'Which is the correct syntax for an arrow function?', 
              ne: 'एरो फंक्सनको लागि कुन सिन्ट्याक्स सही हो?' 
            },
            options: { 
              en: ['function => (a, b) { return a + b }', '(a, b) => a + b', '=> (a, b) a + b', 'function (a, b) -> a + b'], 
              ne: ['function => (a, b) { return a + b }', '(a, b) => a + b', '=> (a, b) a + b', 'function (a, b) -> a + b'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'Arrow functions use => syntax. For single expressions, you can omit curly braces and return.', 
              ne: 'एरो फंक्सनहरूले => सिन्ट्याक्स प्रयोग गर्छन्। एकल एक्सप्रेशनको लागि, तपाईं curly braces र return हटाउन सक्नुहुन्छ।'
            }
          },
          {
            id: 'js-func-q2',
            question: { 
              en: 'What method is used to handle click events on an element?', 
              ne: 'तत्वमा click इभेन्ट ह्यान्डल गर्न कुन मेथड प्रयोग गरिन्छ?' 
            },
            options: { 
              en: ['onClick()', 'addEventListener()', 'handleEvent()', 'bindClick()'], 
              ne: ['onClick()', 'addEventListener()', 'handleEvent()', 'bindClick()'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'addEventListener is the standard method to attach event handlers to DOM elements.', 
              ne: 'addEventListener DOM तत्वहरूमा इभेन्ट ह्यान्डलरहरू जोड्ने मानक मेथड हो।'
            }
          }
        ]
      },
      // New Lesson: Arrays
      {
        id: 'js-arrays',
        slug: 'arrays-in-javascript',
        title: { 
          en: 'Arrays in JavaScript', 
          ne: 'जाभास्क्रिप्टमा एरेहरू' 
        },
        content: {
          en: `# Arrays in JavaScript

Arrays are used to store multiple values in a single variable. They are one of the most commonly used data structures in JavaScript.

## Creating Arrays

You can create arrays using square brackets [] or the Array constructor.

## Array Methods

JavaScript provides many built-in methods to work with arrays:
- push() - Add element to end
- pop() - Remove element from end
- shift() - Remove element from start
- unshift() - Add element to start
- map() - Transform each element
- filter() - Filter elements
- reduce() - Reduce to single value`,
          ne: `# जाभास्क्रिप्टमा एरेहरू

एरेहरू एउटा भेरिएबलमा धेरै मानहरू भण्डारण गर्न प्रयोग गरिन्छ। तिनीहरू जाभास्क्रिप्टमा सबैभन्दा धेरै प्रयोग गरिने डेटा संरचनाहरू मध्ये एक हुन्।

## एरेहरू सिर्जना गर्नुहोस्

तपाईं वर्गाकार ब्राकेट [] वा Array कन्स्ट्रक्टर प्रयोग गरेर एरेहरू सिर्जना गर्न सक्नुहुन्छ।

## एरे मेथडहरू

जाभास्क्रिप्टले एरेहरूसँग काम गर्न धेरै बिल्ट-इन मेथडहरू प्रदान गर्छ:
- push() - अन्त्यमा तत्व थप्नुहोस्
- pop() - अन्त्यबाट तत्व हटाउनुहोस्
- shift() - सुरुआतबाट तत्व हटाउनुहोस्
- unshift() - सुरुआतमा तत्व थप्नुहोस्
- map() - प्रत्येक तत्व रूपांतरण गर्नुहोस्
- filter() - तत्वहरू फिल्टर गर्नुहोस्
- reduce() - एउटा मानमा घटाउनुहोस्`
        },
        codeExamples: [
          {
            language: 'javascript',
            code: `// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = new Array(1, 2, 3, 4, 5);
let mixed = [1, "hello", true, null];

// Accessing elements (0-indexed)
console.log(fruits[0]);  // "apple"
console.log(fruits.length);  // 3

// Modifying arrays
fruits.push("mango");      // Add to end
fruits.pop();              // Remove from end
fruits.unshift("grape");   // Add to start
fruits.shift();            // Remove from start

console.log(fruits);`,
            explanation: { 
              en: 'Arrays are zero-indexed, meaning the first element is at index 0. Use push/pop for end and shift/unshift for start.', 
              ne: 'एरेहरू शून्य-अनुक्रमित छन्, यसको अर्थ पहिलो तत्व अनुक्रमणिका 0 मा हुन्छ। अन्त्यको लागि push/pop र सुरुआतको लागि shift/unshift प्रयोग गर्नुहोस्।'
            }
          },
          {
            language: 'javascript',
            code: `let numbers = [1, 2, 3, 4, 5];

// map - transform each element
let doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter - keep matching elements
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4]

// reduce - combine to single value
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);  // 15

// find - get first matching element
let found = numbers.find(n => n > 3);
console.log(found);  // 4

// includes - check if element exists
console.log(numbers.includes(3));  // true`,
            explanation: { 
              en: 'map, filter, and reduce are powerful array methods. They don\'t modify the original array.', 
              ne: 'map, filter, र reduce शक्तिशाली एरे मेथडहरू हुन्। तिनीहरूले मूल एरे परिमार्जन गर्दैनन्।'
            }
          }
        ],
        quiz: [
          {
            id: 'js-arr-q1',
            question: { 
              en: 'What method adds an element to the end of an array?', 
              ne: 'कुन मेथडले एरेको अन्त्यमा तत्व थप्छ?' 
            },
            options: { 
              en: ['push()', 'pop()', 'shift()', 'unshift()'], 
              ne: ['push()', 'pop()', 'shift()', 'unshift()'] 
            },
            correctAnswer: 0,
            explanation: { 
              en: 'push() adds elements to the end of an array.', 
              ne: 'push() ले एरेको अन्त्यमा तत्वहरू थप्छ।'
            }
          },
          {
            id: 'js-arr-q2',
            question: { 
              en: 'What does the map() method do?', 
              ne: 'map() मेथडले के गर्छ?' 
            },
            options: { 
              en: ['Removes elements', 'Transforms each element', 'Sorts the array', 'Searches for element'], 
              ne: ['तत्वहरू हटाउँछ', 'प्रत्येक तत्व रूपांतरण गर्छ', 'एरे क्रमबद्ध गर्छ', 'तत्व खोज्छ'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'map() creates a new array by transforming each element using the provided function.', 
              ne: 'map() ले प्रदान गरिएको प्रकार्य प्रयोग गरेर प्रत्येक तत्व रूपांतरण गरेर नयाँ एरे सिर्जना गर्छ।'
            }
          }
        ]
      },
      // New Lesson: Objects
      {
        id: 'js-objects',
        slug: 'objects-in-javascript',
        title: { 
          en: 'Objects in JavaScript', 
          ne: 'जाभास्क्रिप्टमा अब्जेक्टहरू' 
        },
        content: {
          en: `# Objects in JavaScript

Objects are collections of key-value pairs. They are used to represent real-world entities with properties and behaviors.

## Creating Objects

You can create objects using curly braces {} with key-value pairs.

## Object Methods

Objects can have methods - functions that belong to the object.

## Destructuring

Destructuring allows you to extract values from objects into distinct variables.`,
          ne: `# जाभास्क्रिप्टमा अब्जेक्टहरू

अब्जेक्टहरू कुञ्जी-मान जोडीहरूको संग्रह हुन्। तिनीहरू प्रॉपर्टी र व्यवहारहरू सहित वास्तविक संसारका इकाईहरू प्रतिनिधित्व गर्न प्रयोग गरिन्छ।

## अब्जेक्टहरू सिर्जना गर्नुहोस्

तपाईं कुञ्जी-मान जोडीहरूसहित कर्ली ब्राकेट {} प्रयोग गरेर अब्जेक्टहरू सिर्जना गर्न सक्नुहुन्छ।

## अब्जेक्ट मेथडहरू

अब्जेक्टहरूसँग मेथडहरू हुन सक्छन् - अब्जेक्टसँग सम्बन्धित प्रकार्यहरू।

## डिस्ट्रक्चरिंग

डिस्ट्रक्चरिंगले तपाईंलाई अब्जेक्टहरूबाट मानहरू छुट्टै भेरिएबलहरूमा निकाल्न अनुमति दिन्छ।`
        },
        codeExamples: [
          {
            language: 'javascript',
            code: `// Creating an object
let person = {
  name: "Ram",
  age: 25,
  city: "Kathmandu",
  isStudent: true
};

// Accessing properties
console.log(person.name);      // "Ram"
console.log(person["age"]);   // 25

// Modifying object
person.email = "ram@example.com";
person.age = 26;

// Adding methods
let calculator = {
  a: 10,
  b: 5,
  add: function() {
    return this.a + this.b;
  },
  subtract() {
    return this.a - this.b;
  }
};

console.log(calculator.add());      // 15
console.log(calculator.subtract()); // 5`,
            explanation: { 
              en: 'Objects store key-value pairs. Access values using dot notation (obj.key) or bracket notation (obj["key"]).', 
              ne: 'अब्जेक्टहरूले कुञ्जी-मान जोडीहरू भण्डारण गर्छन्। डट नोटेशन (obj.key) वा ब्राकेट नोटेशन (obj["key"]) प्रयोग गरेर मानहरू पहुँच गर्नुहोस्।'
            }
          },
          {
            language: 'javascript',
            code: `// Destructuring
let user = { name: "Sita", age: 22, country: "Nepal" };

// Extract to variables
let { name, age } = user;
console.log(name);  // "Sita"
console.log(age);   // 22

// With default values
let { status = "active" } = user;
console.log(status);  // "active"

// Spread operator
let updatedUser = { ...user, age: 23, city: "Pokhara" };
console.log(updatedUser);
// { name: "Sita", age: 23, country: "Nepal", city: "Pokhara" }

// Object methods
console.log(Object.keys(user));   // ["name", "age", "country"]
console.log(Object.values(user)); // ["Sita", 22, "Nepal"]`,
            explanation: { 
              en: 'Destructuring makes code cleaner by extracting values into variables. Spread operator (...) creates a copy with modifications.', 
              ne: 'डिस्ट्रक्चरिंगले भेरिएबलहरूमा मानहरू निकालेर कोड सफा बनाउँछ। स्प्रेड अपरेटर (...) परिमार्जनहरूसहित प्रति सिर्जना गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'js-obj-q1',
            question: { 
              en: 'How do you access the "name" property of an object person?', 
              ne: 'तपाईं अब्जेक्ट person को "name" प्रॉपर्टी कसरी पहुँच गर्नुहुन्छ?' 
            },
            options: { 
              en: ['person["name"]', 'person->name', 'person.name', 'Both A and C'], 
              ne: ['person["name"]', 'person->name', 'person.name', 'A र C दुवै'] 
            },
            correctAnswer: 3,
            explanation: { 
              en: 'Both dot notation (person.name) and bracket notation (person["name"]) can access object properties.', 
              ne: 'डट नोटेशन (person.name) र ब्राकेट नोटेशन (person["name"]) दुवैले अब्जेक्ट प्रॉपर्टीहरू पहुँच गर्न सक्छन्।'
            }
          },
          {
            id: 'js-obj-q2',
            question: { 
              en: 'What does the spread operator (...) do?', 
              ne: 'स्प्रेड अपरेटर (...) ले के गर्छ?' 
            },
            options: { 
              en: ['Deletes properties', 'Creates a copy with modifications', 'Combines arrays', 'Converts to string'], 
              ne: ['प्रॉपर्टीहरू हटाउँछ', 'परिमार्जनहरूसहित प्रति सिर्जना गर्छ', 'एरेहरू संयोजन गर्छ', 'स्ट्रिङमा रूपांतरण गर्छ'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'The spread operator creates a shallow copy of an object and can add or overwrite properties.', 
              ne: 'स्प्रेड अपरेटरले अब्जेक्टको उथले प्रति सिर्जना गर्छ र प्रॉपर्टीहरू थप्न वा अधिलेखन गर्न सक्छ।'
            }
          }
        ]
      },
      // New Lesson: Control Flow
      {
        id: 'js-controlflow',
        slug: 'control-flow-in-javascript',
        title: { 
          en: 'Control Flow in JavaScript', 
          ne: 'जाभास्क्रिप्टमा कन्ट्रोल फ्लो' 
        },
        content: {
          en: `# Control Flow in JavaScript

Control flow determines the order in which statements are executed. JavaScript provides several structures to control the flow of your program.

## Conditional Statements

- if...else - Execute code based on conditions
- switch - Multiple condition checking

## Loops

- for - Loop with counter
- while - Loop while condition is true
- do...while - Execute at least once
- for...of - Loop through iterables

## Error Handling

- try...catch - Handle errors gracefully
- throw - Create custom errors`,
          ne: `# जाभास्क्रिप्टमा कन्ट्रोल फ्लो

कन्ट्रोल फ्लोले कथनहरू कुन क्रममा कार्यान्वयन हुन्छन् निर्धारण गर्छ। जाभास्क्रिप्टले तपाईंको प्रोग्रामको प्रवाह नियन्त्रण गर्ने धेरै संरचनाहरू प्रदान गर्छ।

## कन्डिशनल कथनहरू

- if...else - सर्तहरूको आधारमा कोड कार्यान्वयन गर्नुहोस्
- switch - धेरै सर्त जाँच

## लूपहरू

- for - काउन्टरसँग लूप
- while - सत्य हुँदा लूप
- do...while - कम्तिमा एकपटक कार्यान्वयन गर्नुहोस्
- for...of - इटरेबलहरूमार्फत लूप

## त्रुटि ह्यान्डलिंग

- try...catch - त्रुटिहरू सञ्चालन गर्नुहोस्
- throw - कस्टम त्रुटिहरू सिर्जना गर्नुहोस्`
        },
        codeExamples: [
          {
            language: 'javascript',
            code: `// if...else statement
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// switch statement
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}`,
            explanation: { 
              en: 'if...else checks conditions in order. switch is useful for multiple discrete values.', 
              ne: 'if...else ले क्रममा सर्तहरू जाँच गर्छ। switch धेरै discrete मानहरूको लागि उपयोगी हो।'
            }
          },
          {
            language: 'javascript',
            code: `// for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// while loop
let count = 0;
while (count < 3) {
  console.log("While:", count);
  count++;
}

// for...of (arrays)
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// try...catch
try {
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Always runs");
}`,
            explanation: { 
              en: 'for is best for known iteration count, while for unknown. for...of iterates over values. try...catch handles errors.', 
              ne: 'for ज्ञात iteration count को लागि र while अज्ञातको लागि उत्तम हो। for...of मानहरूमार्फत iterate गर्छ। try...catch ले त्रुटिहरू ह्यान्डल गर्छ।'
            }
          }
        ],
        quiz: [
          {
            id: 'js-cf-q1',
            question: { 
              en: 'Which loop is best when you don\'t know how many times to iterate?', 
              ne: 'तपाईंलाई कति पटक iterate गर्ने थाहा नहुँदा कुन लूप उत्तम हो?' 
            },
            options: { 
              en: ['for loop', 'while loop', 'for...of loop', 'forEach loop'], 
              ne: ['for लूप', 'while लूप', 'for...of लूप', 'forEach लूप'] 
            },
            correctAnswer: 1,
            explanation: { 
              en: 'while loop continues as long as the condition is true, making it suitable for unknown iteration counts.', 
              ne: 'while लूप सर्त सत्य हुँदासम्य जारी रहन्छ, जसले यसलाई अज्ञात iteration गणनाको लागि उपयुक्त बनाउँछ।'
            }
          },
          {
            id: 'js-cf-q2',
            question: { 
              en: 'What does the finally block do in try...catch?', 
              ne: 'try...catch मा finally ब्लकले के गर्छ?' 
            },
            options: { 
              en: ['Runs only if there\'s an error', 'Runs only if there\'s no error', 'Always runs regardless of error', 'Skips error handling'], 
              ne: ['त्रुटि भएमा 만 मात्र चल्छ', 'त्रुटि नभएमा मात्र चल्छ', 'त्रुटिको पर्वाह नगरी सधैँ चल्छ', 'त्रुटि ह्यान्डलिंग छोड्छ'] 
            },
            correctAnswer: 2,
            explanation: { 
              en: 'The finally block always executes, regardless of whether an error occurred or not.', 
              ne: 'finally ब्लक सधैँ कार्यान्वयन हुन्छ, त्रुटि भएको नभएको पर्वाह नगरी।'
            }
          }
        ]
      }
    ]
  },
  // Phase 7: Data Structures & Algorithms
  {
    id: 'dsa-fundamentals',
    title: { en: 'Data Structures & Algorithms', ne: 'डेटा संरचना र एल्गोरिदम' },
    slug: 'dsa-fundamentals',
    description: { en: 'Master DSA for Big Tech interviews. Arrays, Trees, Graphs, DP, and more.', ne: 'बिग टेक इन्टरभ्यूको लागि DSA मास्टर गर्नुहोस्। एरे, ट्री, ग्राफ, DP, र अरू।' },
    phase: 7,
    icon: '🧮',
    color: '#1a1a2e',
    lessons: [
      {
        id: 'dsa-arrays',
        slug: 'arrays-and-strings',
        title: { en: 'Arrays & Strings', ne: 'एरे र स्ट्रिङ' },
        content: {
          en: `# Arrays & Strings

Arrays and strings are the most fundamental data structures. Master these before moving to complex topics.

## Arrays

An array stores elements in contiguous memory. Access by index is O(1).

### Common Operations:
- Access: O(1)
- Search: O(n)
- Insert/Delete at end: O(1)
- Insert/Delete at beginning: O(n)

### Key Patterns:

**Prefix Sum**: Useful for range queries.
\`\`\`
prefix[i] = sum of arr[0] to arr[i]
rangeSum(l,r) = prefix[r] - prefix[l-1]
\`\`\`

**Two Pointers**: For sorted arrays.
- One at start, one at end
- Move based on comparison

### LeetCode Problems:
- Two Sum (Easy)
- Maximum Subarray (Kadane's)
- Product of Array Except Self`,
          ne: `# एरे र स्ट्रिङ

एरे र स्ट्रिङ सबैभन्दा मूलभूत डेटा संरचना हुन्। जटिल विषयहरूमा जानु अघि यीमा महारत हासिल गर्नुहोस्।

## एरे

एरेले तत्वहरू लगातार मेमोरीमा भण्डारण गर्छ। इन्डेक्सद्वारा पहुँच O(1) हो।

### सामान्य सञ्चालन:
- पहुँच: O(1)
- खोज: O(n)
- अन्त्यमा घुसाउनु/हटाउनु: O(1)
- सुरुमा घुसाउनु/हटाउनु: O(n)

### प्रमुख प्याटर्न:

**प्रिफिक्स सम**: दायरा प्रश्नहरूको लागि उपयोगी।
\`\`\`
prefix[i] = arr[0] देखि arr[i] को योग
rangeSum(l,r) = prefix[r] - prefix[l-1]
\`\`\`

**टू पोइन्टर्स**: क्रमबद्ध एरेहरूको लागि।
- एउटा सुरुमा, एउटा अन्त्यमा
- तुलनाको आधारमा सार्नुहोस्`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Two Sum - O(n) time, O(n) space
def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Test
print(twoSum([2,7,11,15], 9))  # [0,1]`,
            explanation: { en: 'Use a hash map to store seen numbers. For each number, check if (target - num) exists.', ne: 'देखिएका नम्बरहरू भण्डारण गर्न हैश म्याप प्रयोग गर्नुहोस्। प्रत्येक नम्बरको लागि, (target - num) छ कि छैन जाँच्नुहोस्।' }
          },
          {
            language: 'javascript',
            code: `// Maximum Subarray - Kadane's Algorithm
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// Test
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6`,
            explanation: { en: 'If current sum becomes negative, start fresh from current element.', ne: 'यदि हालको योग नकारात्मक भयो, हालको तत्वबाट नयाँ सुरु गर्नुहोस्।' }
          }
        ],
        quiz: [
          {
            id: 'dsa-arr-q1',
            question: { en: 'What is the time complexity of accessing an element in an array by index?', ne: 'इन्डेक्स द्वारा एरेको एलिमेन्ट पहुँच गर्ने समय जटिलता के हो?' },
            options: { en: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], ne: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'] },
            correctAnswer: 0,
            explanation: { en: 'Array access by index is O(1) because elements are stored in contiguous memory.', ne: 'इन्डेक्स द्वारा एरे पहुँच O(1) हो किनभने तत्वहरू लगातार मेमोरीमा भण्डारण हुन्छन्।' }
          },
          {
            id: 'dsa-arr-q2',
            question: { en: 'Which algorithm is used to find the maximum subarray sum in O(n) time?', ne: 'अधिकतम सबअरे योग O(n) समयमा पत्ता लगाउन कुन एल्गोरिदम प्रयोग हुन्छ?' },
            options: { en: ['Quick Sort', 'Kadane\'s Algorithm', 'Binary Search', 'DFS'], ne: ['क्विक सर्ट', 'कडेनको एल्गोरिदम', 'बाइनरी सर्च', 'DFS'] },
            correctAnswer: 1,
            explanation: { en: 'Kadane\'s algorithm finds max subarray in O(n) by tracking current sum and max sum.', ne: 'कडेनको एल्गोरिदम हालको योग र अधिकतम योग ट्र्याक गरेर O(n) मा अधिकतम सबअरे पत्ता लगाउँछ।' }
          }
        ]
      },
      {
        id: 'dsa-linked-lists',
        slug: 'linked-lists',
        title: { en: 'Linked Lists', ne: 'लिंक्ड लिष्ट' },
        content: {
          en: `# Linked Lists

A linked list is a linear data structure where elements are stored in nodes, each pointing to the next.

## Types:
- **Singly Linked List**: Each node points to next
- **Doubly Linked List**: Each node points to both next and previous

## Complexity:
- Access: O(n)
- Search: O(n)
- Insert/Delete at beginning: O(1)
- Insert/Delete at end: O(n) (O(1) with tail pointer)

## Key Techniques:
1. **Fast & Slow Pointers**: Find middle, detect cycle
2. **Dummy Node**: Simplifies edge cases
3. **Reversal**: In-place reversal technique`,
          ne: `# लिंक्ड लिष्ट

लिंक्ड लिष्ट एक रैखिक डेटा संरचना हो जहाँ तत्वहरू नोडहरूमा भण्डारण हुन्छन्, प्रत्येकले अर्कोलाई औंल्याउँछ।

## प्रकार:
- **सिंगली लिंक्ड लिष्ट**: प्रत्येक नोडले अर्कोलाई औंल्याउँछ
- **डबली लिंक्ड लिष्ट**: प्रत्येक नोडले अर्को र अघिल्लो दुवैलाई औंल्याउँछ

## जटिलता:
- पहुँच: O(n)
- खोज: O(n)
- सुरुमा घुसाउनु/हटाउनु: O(1)
- अन्त्यमा घुसाउनु/हटाउनु: O(n) (टेल पोइन्टरसँग O(1))

## प्रमुख तकनीकहरू:
1. **फास्ट र स्लो पोइन्टर**: मध्य भाग पत्ता लगाउनु, चक्र पत्ता लगाउनु
2. **डमी नोड**: एज केसहरू सरल बनाउँछ
3. **रिभर्सल**: इन-प्लेस रिभर्सल तकनीक`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Reverse Linked List
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head):
    prev = None
    current = head
    
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    
    return prev`,
            explanation: { en: 'Use three pointers: prev, current, next. Reverse each link one by one.', ne: 'तीन पोइन्टर प्रयोग गर्नुहोस्: prev, current, next। प्रत्येक लिंक एक एक गरेर उल्टाउनुहोस्।' }
          },
          {
            language: 'javascript',
            code: `// Detect Cycle in Linked List
function hasCycle(head) {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) return true;
  }
  return false;
}`,
            explanation: { en: 'If there\'s a cycle, fast pointer will eventually meet slow pointer.', ne: 'यदि चक्र छ भने, फास्ट पोइन्टर अन्ततः स्लो पोइन्टरसँग भेटिनेछ।' }
          }
        ],
        quiz: [
          {
            id: 'dsa-ll-q1',
            question: { en: 'What is the time complexity of inserting at the beginning of a singly linked list?', ne: 'सिंगली लिंक्ड लिष्टको सुरुमा घुसाउने समय जटिलता के हो?' },
            options: { en: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], ne: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'] },
            correctAnswer: 0,
            explanation: { en: 'Inserting at the beginning is O(1) - just update the head pointer.', ne: 'सुरुमा घुसाउनु O(1) हो - केवल हेड पोइन्टर अपडेट गर्नुहोस्।' }
          },
          {
            id: 'dsa-ll-q2',
            question: { en: 'Which technique is used to find the middle of a linked list in one pass?', ne: 'एक पासमा लिंक्ड लिष्टको मध्य भाग पत्ता लगाउन कुन तकनीक प्रयोग हुन्छ?' },
            options: { en: ['Hash Table', 'Fast & Slow Pointers', 'Stack', 'Recursion'], ne: ['ह्यास टेबल', 'फास्ट र स्लो पोइन्टर', 'स्ट्याक', 'रिकर्सन'] },
            correctAnswer: 1,
            explanation: { en: 'Fast pointer moves 2 steps, slow moves 1 step. When fast reaches end, slow is at middle.', ne: 'फास्ट पोइन्टर 2 स्टेप सार्छ, स्लो 1 स्टेप। जब फास्ट अन्त्यमा पुग्छ, स्लो मध्यमा हुन्छ।' }
          }
        ]
      },
      {
        id: 'dsa-stacks',
        slug: 'stacks-queues',
        title: { en: 'Stacks & Queues', ne: 'स्ट्याक र क्यू' },
        content: {
          en: `# Stacks & Queues

## Stack (LIFO - Last In First Out)
- push(), pop(), peek()
- Time: O(1) for all operations
- Used in: DFS, expression evaluation, parentheses matching

## Queue (FIFO - First In First Out)
- enqueue(), dequeue(), peek()
- Time: O(1) for all operations
- Used in: BFS, level order traversal

## Monotonic Stack
Special pattern for problems like "next greater element".
Maintains elements in increasing or decreasing order.`,
          ne: `# स्ट्याक र क्यू

## स्ट्याक (LIFO - Last In First Out)
- push(), pop(), peek()
- समय: सबै सञ्चालनको लागि O(1)
- प्रयोग: DFS, expression evaluation, parentheses matching

## क्यू (FIFO - First In First Out)
- enqueue(), dequeue(), peek()
- समय: सबै सञ्चालनको लागि O(1)
- प्रयोग: BFS, level order traversal

## मोनोटोनिक स्ट्याक
"next greater element" जस्ता समस्याहरूको लागि विशेष प्याटर।
तत्वहरू बढ्दो वा घट्दो क्रममा राख्छ।`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Valid Parentheses
def isValid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    
    return len(stack) == 0`,
            explanation: { en: 'Use stack to track opening brackets. Close must match most recent open.', ne: 'खोल्ने ब्र्याकेट ट्र्याक गर्न स्ट्याक प्रयोग गर्नुहोस्। बन्द हाल्को खुला सँग मेल हुनुपर्छ।' }
          },
          {
            language: 'javascript',
            code: `// BFS using Queue
function bfs(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}`,
            explanation: { en: 'Process level by level using queue. Add children to queue for next level.', ne: 'क्यू प्रयोग गरेर लेभल द्वारा प्रक्रिया गर्नुहोस्। अर्को लेभलको लागि क्यूमा बच्चाहरू थप्नुहोस्।' }
          }
        ],
        quiz: [
          {
            id: 'dsa-stack-q1',
            question: { en: 'What data structure does BFS (Breadth-First Search) use?', ne: 'BFS (Breadth-First Search) ले कुन डेटा संरचना प्रयोग गर्छ?' },
            options: { en: ['Stack', 'Queue', 'Heap', 'Tree'], ne: ['स्ट्याक', 'क्यू', 'हिप', 'ट्री'] },
            correctAnswer: 1,
            explanation: { en: 'BFS uses Queue to process nodes level by level.', ne: 'BFS ले लेभल द्वारा नोडहरू प्रक्रिया गर्न Queue प्रयोग गर्छ।' }
          },
          {
            id: 'dsa-stack-q2',
            question: { en: 'Which data structure is ideal for checking balanced parentheses?', ne: 'संतुलित parentheses जाँच गर्न कुन डेटा संरचना उपयुक्त छ?' },
            options: { en: ['Queue', 'Stack', 'Array', 'Linked List'], ne: ['क्यू', 'स्ट्याक', 'एरे', 'लिंक्ड लिष्ट'] },
            correctAnswer: 1,
            explanation: { en: 'Stack is perfect - push opening brackets, pop and match when closing.', ne: 'स्ट्याक उपयुक्त छ - खुला ब्र्याकेट घुसाउनुहोस्, बन्द हुँदा मिलाएर हटाउनुहोस्।' }
          }
        ]
      },
      {
        id: 'dsa-trees',
        slug: 'trees',
        title: { en: 'Trees', ne: 'ट्री' },
        content: {
          en: `# Trees

A tree is a hierarchical structure with nodes connected by edges. Binary trees have at most 2 children.

## Traversals:
1. **Inorder**: Left → Root → Right
2. **Preorder**: Root → Left → Right
3. **Postorder**: Left → Right → Root
4. **Level Order**: BFS level by level

## Binary Search Tree (BST):
- Left subtree < Root < Right subtree
- Search: O(log n) average

## Common Problems:
- Invert binary tree
- Validate BST
- Lowest Common Ancestor
- Diameter of tree`,
          ne: `# ट्री

ट्री एउटा पदानुक्रमित संरचना हो जहाँ नोडहरू एजहरूद्वारा जोडिएका हुन्छन्। बाइनरी ट्रीहरूमा अधिकतम 2 बच्चाहरू हुन्छन्।

## ट्राभर्सल:
1. **इनअर्डर**: बायाँ → रूट → दायाँ
2. **प्रीअर्डर**: रूट → बायाँ → दायाँ
3. **पोस्टअर्डर**: बायाँ → दायाँ → रूट
4. **लेभल अर्डर**: BFS लेभल द्वारा

## बाइनरी सर्च ट्री (BST):
- बायाँ सबट्री < रूट < दायाँ सबट्री
- खोज: औसत O(log n)

## सामान्य समस्याहरू:
- बाइनरी ट्री उल्टाउनु
- BST मान्यता
- सबैभन्दा तलको सामान्य पूर्वज`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# Inorder Traversal (Recursive)
def inorder(root):
    return inorder(root.left) + [root.val] + inorder(root.right) if root else []

# Level Order Traversal
from collections import deque

def levelOrder(root):
    if not root: return []
    result = []
    queue = deque([root])
    
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    
    return result`,
            explanation: { en: 'Inorder gives sorted order for BST. Level order uses queue for BFS.', ne: 'इनअर्डर BST को लागि क्रमबद्ध क्रम दिन्छ। लेभल अर्डर BFS को लागि क्यू प्रयोग गर्छ।' }
          },
          {
            language: 'javascript',
            code: `// Validate BST
function isValidBST(root, min = null, max = null) {
  if (!root) return true;
  
  if (min !== null && root.val <= min) return false;
  if (max !== null && root.val >= max) return false;
  
  return isValidBST(root.left, min, root.val) &&
         isValidBST(root.right, root.val, max);
}`,
            explanation: { en: 'Track min/max bounds for each subtree. Left must be < current < right.', ne: 'प्रत्येक सबट्रीको लागि min/max सीमा ट्र्याक गर्नुहोस्। बायाँ < हालको < दायाँ हुनुपर्छ।' }
          }
        ],
        quiz: [
          {
            id: 'dsa-tree-q1',
            question: { en: 'Which traversal gives nodes in sorted order for a BST?', ne: 'कुन ट्राभर्सलले BST को लागि नोडहरू क्रमबद्ध क्रममा दिन्छ?' },
            options: { en: ['Preorder', 'Postorder', 'Inorder', 'Level Order'], ne: ['प्रीअर्डर', 'पोस्टअर्डर', 'इनअर्डर', 'लेभल अर्डर'] },
            correctAnswer: 2,
            explanation: { en: 'Inorder traversal visits left, then root, then right - giving sorted order in BST.', ne: 'इनअर्डर ट्राभर्सलले बायाँ, त्यसपछि रूट, त्यसपछि दायाँ भ्रमण गर्छ - BST मा क्रमबद्ध क्रम दिन्छ।' }
          },
          {
            id: 'dsa-tree-q2',
            question: { en: 'What is the time complexity of search in a balanced BST?', ne: 'संतुलित BST मा खोजको समय जटिलता के हो?' },
            options: { en: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'], ne: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'] },
            correctAnswer: 1,
            explanation: { en: 'Search in balanced BST is O(log n) as we eliminate half each step.', ne: 'संतुलित BST मा खोज O(log n) हो किनभने प्रत्येक चरणमा आधा हटाउँछौं।' }
          }
        ]
      },
      {
        id: 'dsa-graphs',
        slug: 'graphs',
        title: { en: 'Graphs', ne: 'ग्राफ' },
        content: {
          en: `# Graphs

Graphs consist of vertices (nodes) and edges connecting them.

## Representations:
1. **Adjacency List**: Map<Vertex, List<Vertex>>
2. **Adjacency Matrix**: 2D array

## Traversal:
- **DFS**: Stack or recursion - O(V + E)
- **BFS**: Queue - O(V + E)

## Key Algorithms:
1. **Dijkstra**: Shortest path with weights (non-negative)
2. **Union-Find**: Cycle detection, connected components
3. **Topological Sort**: DAG ordering`,
          ne: `# ग्राफ

ग्राफमा भर्टेक्स (नोड) र तिनीहरूलाई जोड्ने एजहरू हुन्छन्।

## प्रतिनिधित्व:
1. **एडजेसेंसी लिष्ट**: Map<Vertex, List<Vertex>>
2. **एडजेसेंसी म्याट्रिक्स**: 2D एरे

## ट्राभर्सल:
- **DFS**: स्ट्याक वा रिकर्सन - O(V + E)
- **BFS**: क्यू - O(V + E)

## प्रमुख एल्गोरिदम:
1. **डिज्क्स्ट्रा**: भारको साथ सबैभन्दा छोटो बाटो (गैर-नकारात्मक)
2. **यूनियन-फाइन्ड**: चक्र पत्ता लगाउनु, जोडिएका कम्पोनेन्ट्स
3. **टोपोलोजिकल सर्ट**: DAG क्रम`
        },
        codeExamples: [
          {
            language: 'python',
            code: `# DFS Traversal
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start, end=' ')
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

# Graph as adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

dfs(graph, 'A')`,
            explanation: { en: 'DFS uses recursion/stack to explore as far as possible before backtracking.', ne: 'DFS ले ब्याकट्र्याकिङ अघि जति सक्दो टाढा अन्वेषण गर्न रिकर्सन/स्ट्याक प्रयोग गर्छ।' }
          },
          {
            language: 'javascript',
            code: `// BFS Shortest Path
function bfsShortestPath(graph, start, end) {
  const queue = [[start]];
  const visited = new Set([start]);
  
  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];
    
    if (node === end) return path;
    
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }
  return -1;
}`,
            explanation: { en: 'BFS finds shortest path in unweighted graph by exploring level by level.', ne: 'BFS ले लेभल द्वारा अन्वेषण गरेर अनवेटेड ग्राफमा सबैभन्दा छोटो बाटो पत्ता लगाउँछ।' }
          }
        ],
        quiz: [
          {
            id: 'dsa-graph-q1',
            question: { en: 'What data structure is used in BFS traversal?', ne: 'BFS ट्राभर्सलमा कुन डेटा संरचना प्रयोग हुन्छ?' },
            options: { en: ['Stack', 'Queue', 'Heap', 'Tree'], ne: ['स्ट्याक', 'क्यू', 'हिप', 'ट्री'] },
            correctAnswer: 1,
            explanation: { en: 'BFS uses Queue to explore level by level.', ne: 'BFS ले लेभल द्वारा अन्वेषण गर्न Queue प्रयोग गर्छ।' }
          },
          {
            id: 'dsa-graph-q2',
            question: { en: 'Which algorithm finds shortest path with non-negative weights?', ne: 'गैर-नकारात्मक भारको साथ सबैभन्दा छोटो बाटो कुन एल्गोरिदमले पत्ता लगाउछ?' },
            options: { en: ['DFS', 'BFS', 'Dijkstra', 'Bellman-Ford'], ne: ['DFS', 'BFS', 'डिज्क्स्ट्रा', 'बेलमन-फोर्ड'] },
            correctAnswer: 2,
            explanation: { en: 'Dijkstra finds shortest path with non-negative weights in O((V+E)logV).', ne: 'डिज्क्स्ट्रा O((V+E)logV) मा गैर-नकारात्मक भारको साथ सबैभन्दा छोटो बाटो पत्ता लगाउँछ।' }
          }
        ]
      },
      {
        id: 'dsa-hashing',
        slug: 'hash-tables',
        title: { en: 'Hash Tables', ne: 'ह्यास टेबल' },
        content: {
          en: `# Hash Tables

Hash tables store key-value pairs with O(1) average access.

## Complexity:
- Insert: O(1) average
- Delete: O(1) average
- Search: O(1) average

## Collision Handling:
1. **Chaining**: Linked list at each bucket
2. **Open Addressing**: Linear/Quadratic probing

## Common Patterns:
- Two Sum
- Subarray sum equals k
- Longest substring without repeat`,
          ne: `# ह्यास टेबल

ह्यास टेबलले O(1) औसत पहुँचसहित कि-भ्याल्यू जोडीहरू भण्डारण गर्छ।

## जटिलता:
- घुसाउनु: O(1) औसत
- हटाउनु: O(1) औसत
- खोज: O(1) औसत

## टक्कर ह्यान्डलिंग:
1. **चेनिंग**: प्रत्येक बकेटमा लिंक्ड लिष्ट
2. **ओपन एड्रेसिंग**: लिनियर/क्वाड्रेटिक प्रोबिंग`

        },
        codeExamples: [
          {
            language: 'python',
            code: `# Longest Substring Without Repeating
def lengthOfLongestSubstring(s):
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length

print(lengthOfLongestSubstring("abcabcbb"))  # 3`,
            explanation: { en: 'Use sliding window with set. Expand right, shrink left when duplicate found.', ne: 'सेटसँग स्लाइडिङ विंडो प्रयोग गर्नुहोस्। डुप्लिकेट भएमा दायाँ विस्तार गर्नुहोस्, बायाँ साँगोल्नुहोस्।' }
          }
        ],
        quiz: [
          {
            id: 'dsa-hash-q1',
            question: { en: 'What is the average time complexity for hash table search?', ne: 'ह्यास टेबल खोजको औसत समय जटिलता के हो?' },
            options: { en: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'], ne: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'] },
            correctAnswer: 2,
            explanation: { en: 'Hash tables provide O(1) average search using hash function.', ne: 'ह्यास टेबलले ह्यास फंक्शन प्रयोग गरेर O(1) औसत खोज प्रदान गर्छ।' }
          },
          {
            id: 'dsa-hash-q2',
            question: { en: 'What technique handles collisions in hash tables by using linked lists?', ne: 'ह्यास टेबलमा कुन तकनीकले लिंक्ड लिष्ट प्रयोग गरेर टक्कर ह्यान्डल गर्छ?' },
            options: { en: ['Probing', 'Chaining', 'Resizing', 'Bucketing'], ne: ['प्रोबिंग', 'चेनिंग', 'रिसाइजिंग', 'बकेटिंग'] },
            correctAnswer: 1,
            explanation: { en: 'Chaining handles collisions by storing multiple items in a linked list at each bucket.', ne: 'चेनिंगले प्रत्येक बकेटमा लिंक्ड लिष्टमा धेरै आइटम भण्डारण गरेर टक्कर ह्यान्डल गर्छ।' }
          }
        ]
      },
      {
        id: 'dsa-sorting',
        slug: 'sorting-algorithms',
        title: { en: 'Sorting Algorithms', ne: 'सर्टिंग एल्गोरिदम' },
        content: {
          en: `# Sorting Algorithms

## Comparison Sorting:
- **Merge Sort**: O(n log n), stable, divide & conquer
- **Quick Sort**: O(n log n) avg, unstable, in-place
- **Heap Sort**: O(n log n), unstable, uses heap

## Non-comparison:
- **Counting Sort**: O(n + k), for integers
- **Radix Sort**: O(nk), digit by digit

## When to Use:
- General: Quick Sort or Merge Sort
- Nearly sorted: Insertion Sort
- Integers with limited range: Counting Sort`,
          ne: `# सर्टिंग एल्गोरिदम

## तुलना सर्टिंग:
- **मर्ज सर्ट**: O(n log n), स्थिर, divide & conquer
- **क्विक सर्ट**: O(n log n) औसत, अस्थिर, इन-प्लेस
- **हिप सर्ट**: O(n log n), अस्थिर, हिप प्रयोग गरेर

## गैर-तुलना:
- **काउंटिंग सर्ट**: O(n + k), इन्टिजरको लागि
- **रेडिक्स सर्ट**: O(nk), अंक दर अंक`

        },
        codeExamples: [
          {
            language: 'python',
            code: `# Merge Sort
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result`,
            explanation: { en: 'Divide array in half, sort recursively, then merge sorted halves.', ne: 'एरेलाई आधामा विभाजन गर्नुहोस्, रिकर्सिभली सर्ट गर्नुहोस्, त्यसपछि सर्टेड आधाहरू मर्ज गर्नुहोस्।' }
          }
        ],
        quiz: [
          {
            id: 'dsa-sort-q1',
            question: { en: 'What is the time complexity of Merge Sort?', ne: 'मर्ज सर्टको समय जटिलता के हो?' },
            options: { en: ['O(n)', 'O(n log n)', 'O(log n)', 'O(n²)'], ne: ['O(n)', 'O(n log n)', 'O(log n)', 'O(n²)'] },
            correctAnswer: 1,
            explanation: { en: 'Merge Sort is O(n log n) - divides in log n levels, merges at each level.', ne: 'मर्ज सर्ट O(n log n) हो - log n स्तरहरूमा विभाजन गर्छ, प्रत्येक स्तरमा मर्ज गर्छ।' }
          },
          {
            id: 'dsa-sort-q2',
            question: { en: 'Which sorting algorithm is stable?', ne: 'कुन सर्टिंग एल्गोरिदम स्थिर (stable) हो?' },
            options: { en: ['Quick Sort', 'Heap Sort', 'Merge Sort', 'Selection Sort'], ne: ['क्विक सर्ट', 'हिप सर्ट', 'मर्ज सर्ट', 'सेलेक्शन सर्ट'] },
            correctAnswer: 2,
            explanation: { en: 'Merge Sort maintains relative order of equal elements - it is stable.', ne: 'मर्ज सर्टले बराबर तत्वहरूको सापेक्ष क्रम कायम राख्छ - यो स्थिर हो।' }
          }
        ]
      },
      {
        id: 'dsa-binary-search',
        slug: 'binary-search',
        title: { en: 'Binary Search', ne: 'बाइनरी सर्च' },
        content: {
          en: `# Binary Search

Binary search finds element in O(log n) time on sorted arrays.

## Standard Binary Search:
\`\`\`
while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target: return mid
    elif arr[mid] < target: left = mid + 1
    else: right = mid - 1
\`\`\`

## Variants:
1. **Left Boundary**: Find first occurrence
2. **Right Boundary**: Find last occurrence
3. **Search in rotated array

## Common Problems:
- Search in rotated sorted array
- Find peak element
- Search insert position`,
          ne: `# बाइनरी सर्च

बाइनरी सर्चले क्रमबद्ध एरेमा O(log n) समयमा तत्व पत्ता लगाउँछ।

## मानक बाइनरी सर्च:
\`\`\`
while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target: return mid
    elif arr[mid] < target: left = mid + 1
    else: right = mid - 1
\`\`\`

## भेरियन्ट:
1. **बायाँ बाउन्ड्री**: पहिलो घटना पत्ता लगाउनु
2. **दायाँ बाउन्ड्री**: अन्तिम घटना पत्ता लगाउनु
3. **रोटेटेड एरेमा खोज`

        },
        codeExamples: [
          {
            language: 'javascript',
            code: `// Search in Rotated Sorted Array
function search(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    
    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } 
    // Right half is sorted
    else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}`,
            explanation: { en: 'Determine which half is sorted, then check if target lies in that range.', ne: 'कुन आधा सर्टेड छ निर्धारण गर्नुहोस्, त्यसपछि तार्केट त्यस दायरामा छ कि छैन जाँच्नुहोस्।' }
          }
        ],
        quiz: [
          {
            id: 'dsa-bs-q1',
            question: { en: 'What is the time complexity of binary search?', ne: 'बाइनरी सर्चको समय जटिलता के हो?' },
            options: { en: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'], ne: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'] },
            correctAnswer: 1,
            explanation: { en: 'Binary search halves the search space each iteration - O(log n).', ne: 'बाइनरी सर्चले प्रत्येक इटरेशनमा खोज स्पेस आधा घटाउँछ - O(log n)।' }
          },
          {
            id: 'dsa-bs-q2',
            question: { en: 'What prerequisite must be met for binary search to work?', ne: 'बाइनरी सर्च काम गर्नको लागि कुन पूर्व-शर्त पूरा हुनुपर्छ?' },
            options: { en: ['Array must be unsorted', 'Array must be sorted', 'Array must have unique elements', 'Array must be empty'], ne: ['एरे अनसर्टेड हुनुपर्छ', 'एरे सर्टेड हुनुपर्छ', 'एरेमा अद्वितीय तत्वहरू हुनुपर्छ', 'एरे खाली हुनुपर्छ'] },
            correctAnswer: 1,
            explanation: { en: 'Binary search requires a sorted array to work correctly.', ne: 'बाइनरी सर्चले सही काम गर्नको लागि सर्टेड एरे चाहिन्छ।' }
          }
        ]
      },
      {
        id: 'dsa-recursion',
        slug: 'recursion-backtracking',
        title: { en: 'Recursion & Backtracking', ne: 'रिकर्सन र ब्याकट्र्याकिंग' },
        content: {
          en: `# Recursion & Backtracking

## Recursion
Function that calls itself. Must have:
- Base case (stop condition)
- Recursive case (call itself)

## Backtracking
DFS + undo changes. Used for:
- Generate all permutations/subsets
- Solve puzzles (N-Queens, Sudoku)
- Path finding

## Common Patterns:
1. **Subsets**: Include/exclude each element
2. **Permutations**: Swap and recurse
3. **Combinations**: Choose k from n`,
          ne: `# रिकर्सन र ब्याकट्र्याकिंग

## रिकर्सन
आफैंले कल गर्ने फंकशन। हुनुपर्छ:
- बेस केस (रोक्ने सर्त)
- रिकर्सिभ केस (आफैंले कल गर्ने)

## ब्याकट्र्याकिंग
DFS + परिवर्तन undo गर्नु। प्रयोग:
- सबै permutations/subsets उत्पन्न गर्नु
- पजल समाधान (N-Queens, Sudoku)
- बाटो खोज्नु`

        },
        codeExamples: [
          {
            language: 'python',
            code: `# Generate all subsets (Power Set)
def subsets(nums):
    result = []
    
    def backtrack(index, current):
        result.append(current[:])
        
        for i in range(index, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
    
    backtrack(0, [])
    return result

# Or using iteration
def subsets_iter(nums):
    result = [[]]
    for num in nums:
        result += [subset + [num] for subset in result]
    return result`,
            explanation: { en: 'At each element, choose to include or exclude. Build all combinations.', ne: 'प्रत्येक तत्वमा, समावेश गर्ने वा नगर्ने छान्नुहोस्। सबै संयोजनहरू बनाउनुहोस्।' }
          }
        ],
        quiz: [
          {
            id: 'dsa-rec-q1',
            question: { en: 'What are the two essential parts of any recursive function?', ne: 'कुनै पनि रिकर्सिभ फंकशनका दुई आवश्यक भागहरू के हुन्?' },
            options: { en: ['Loop and condition', 'Base case and recursive case', 'Input and output', 'Variable and function'], ne: ['लूप र कन्डिसन', 'बेस केस र रिकर्सिभ केस', 'इनपुट र आउटपुट', 'भेरिएबल र फंकशन'] },
            correctAnswer: 1,
            explanation: { en: 'Every recursive function needs base case (stop) and recursive case (call itself).', ne: 'प्रत्येक रिकर्सिभ फंकशनलाई बेस केस (रोक्ने) र रिकर्सिभ केस (आफैंले कल गर्ने) चाहिन्छ।' }
          },
          {
            id: 'dsa-rec-q2',
            question: { en: 'Which technique is used to explore all possibilities and undo choices?', ne: 'सबै सम्भावनाहरू अन्वेषण गर्न र छनोट undo गर्न कुन तकनीक प्रयोग हुन्छ?' },
            options: { en: ['Iteration', 'Backtracking', 'Memoization', 'Dynamic Programming'], ne: ['इटरेशन', 'ब्याकट्र्याकिंग', 'मेमोइजेशन', 'डायनामिक प्रोग्रामिंग'] },
            correctAnswer: 1,
            explanation: { en: 'Backtracking explores all paths and undoes changes to try other possibilities.', ne: 'ब्याकट्र्याकिंगले सबै बाटोहरू अन्वेषण गर्छ र अरू सम्भावनाहरू प्रयास गर्न परिवर्तनहरू undo गर्छ।' }
          }
        ]
      },
      {
        id: 'dsa-dp',
        slug: 'dynamic-programming',
        title: { en: 'Dynamic Programming', ne: 'डायनामिक प्रोग्रामिंग' },
        content: {
          en: `# Dynamic Programming

DP optimizes recursion by storing computed results.

## Approaches:
1. **Top-Down (Memoization)**: Recursion + cache
2. **Bottom-Up (Tabulation)**: Build table iteratively

## When to Use:
- Optimal substructure
- Overlapping subproblems

## Classic Problems:
1. **Fibonacci**: Can be O(n) with DP
2. **Knapsack**: 0/1 or unbounded
3. **LCS**: Longest Common Subsequence
4. **LIS**: Longest Increasing Subsequence
5. **Edit Distance**
6. **Coin Change**`,
          ne: `# डायनामिक प्रोग्रामिंग

DP ले कम्प्युटेड परिणामहरू भण्डारण गरेर रिकर्सन अप्टिमाइज गर्छ।

## अप्रोच:
1. **टप-डाउन (मेमोइजेशन)**: रिकर्सन + क्यास
2. **बटम-अप (ट्याबुलेशन)**: टेबल इटरेशनली बनाउनु

## कहिले प्रयोग गर्ने:
- अप्टिमल सबस्ट्रक्चर
- ओभरल्यापिंग सबप्रोब्लम्स`

        },
        codeExamples: [
          {
            language: 'python',
            code: `# Fibonacci - Three Ways
# 1. Naive Recursion - O(2^n)
def fib_rec(n):
    if n <= 1: return n
    return fib_rec(n-1) + fib_rec(n-2)

# 2. Top-Down (Memoization) - O(n)
def fib_memo(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib_memo(n-1) + fib_memo(n-2)
    return memo[n]

# 3. Bottom-Up (Tabulation) - O(n)
def fib_tab(n):
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# 4. Space Optimized - O(1)
def fib_optimized(n):
    if n <= 1: return n
    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr`,
            explanation: { en: 'DP eliminates redundant calculations. Use memo or tabulation.', ne: 'DP ले अनावश्यक गणनाहरू हटाउछ। मेमो वा ट्याबुलेशन प्रयोग गर्नुहोस्।' }
          },
          {
            language: 'javascript',
            code: `// Coin Change - Minimum coins
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
}`,
            explanation: { en: 'Build solution bottom-up. For each amount, try all coins.', ne: 'समाधान बटम-अप बनाउनुहोस्। प्रत्येक राशिको लागि, सबै सिक्के प्रयास गर्नुहोस्।' }
          }
        ],
        quiz: [
          {
            id: 'dsa-dp-q1',
            question: { en: 'What are the two key properties for a problem to be solvable by DP?', ne: 'DP द्वारा समाधान योग्य समस्याको लागि दुई प्रमुख गुणहरू के हुन्?' },
            options: { en: ['Linear and sorted', 'Optimal substructure and overlapping subproblems', 'Sequential and random', 'Static and dynamic'], ne: ['रैखिक र क्रमबद्ध', 'अप्टिमल सबस्ट्रक्चर र ओभरल्यापिंग सबप्रोब्लम्स', 'क्रमिक र यादृच्छिक', 'स्टेटिक र डायनामिक'] },
            correctAnswer: 1,
            explanation: { en: 'DP works when problem has optimal substructure and overlapping subproblems.', ne: 'DP तब काम गर्छ जब समस्यामा अप्टिमल सबस्ट्रक्चर र ओभरल्यापिंग सबप्रोब्लम्स हुन्छ।' }
          },
          {
            id: 'dsa-dp-q2',
            question: { en: 'Which approach builds DP table iteratively from smallest subproblems?', ne: 'कुन अप्रोचले सबैभन्दा सानो सबप्रोब्लम्सबाट इटरेशनली DP टेबल बनाउछ?' },
            options: { en: ['Memoization', 'Tabulation', 'Recursion', 'Brute Force'], ne: ['मेमोइजेशन', 'ट्याबुलेशन', 'रिकर्सन', 'ब्रुट फोर्स'] },
            correctAnswer: 1,
            explanation: { en: 'Tabulation (bottom-up) builds table iteratively from base cases up.', ne: 'ट्याबुलेशन (बटम-अप) ले बेस केसबाट माथि टेबल इटरेशनली बनाउँछ।' }
          }
        ]
      },
      {
        id: 'dsa-two-pointers',
        slug: 'two-pointers',
        title: { en: 'Two Pointers', ne: 'टू पोइन्टर्स' },
        content: {
          en: `# Two Pointers

Two pointers technique uses O(1) extra space by processing array from both ends.

## Patterns:
1. **Opposite Direction**: Start from both ends, move towards center
2. **Same Direction**: Sliding window, maintain window

## Classic Problems:
- **Container With Most Water**: Opposite pointers
- **3Sum**: Sort + two pointers
- **Trapping Rain Water**: Two pointers from ends
- **Remove Duplicates**: In-place`,
          ne: `# टू पोइन्टर्स

टू पोइन्टर्स तकनीकले दुवै छेउबाट प्रक्रिया गरेर O(1) अतिरिक्त स्पेस प्रयोग गर्छ।

## प्याटर्न:
1. **उपलब्ध दिशा**: दुवै छेउबाट सुरु, केंद्रतर्फ सार्नुहोस्
2. **एकै दिशा**: स्लाइडिङ विंडो, विंडो कायम राख्नुहोस्`

        },
        codeExamples: [
          {
            language: 'python',
            code: `# Container With Most Water
def maxArea(height):
    left = 0
    right = len(height) - 1
    max_area = 0
    
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        max_area = max(max_area, width * h)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_area

# 3Sum - Find all unique triplets
def threeSum(nums):
    nums.sort()
    result = []
    
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]:
            continue
        
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left+1]:
                    left += 1
                while left < right and nums[right] == nums[right-1]:
                    right -= 1
                left += 1
                right -= 1
    
    return result`,
            explanation: { en: 'For container: move pointer with smaller height. For 3Sum: fix one, use two pointers for rest.', ne: 'कन्टेनरको लागि: सानो height को पोइन्टर सार्नुहोस्। 3Sum को लागि: एउटा फिक्स गर्नुहोस्, बाँकीको लागि टू पोइन्टर्स।' }
          }
        ],
        quiz: [
          {
            id: 'dsa-tp-q1',
            question: { en: 'What is the time complexity of two-pointer technique?', ne: 'टू पोइन्टर्स तकनीकको समय जटिलता के हो?' },
            options: { en: ['O(n²)', 'O(n log n)', 'O(n)', 'O(1)'], ne: ['O(n²)', 'O(n log n)', 'O(n)', 'O(1)'] },
            correctAnswer: 2,
            explanation: { en: 'Two pointers typically give O(n) as each pointer moves at most n times.', ne: 'टू पोइन्टर्स सामान्यतः O(n) दिन्छ किनभने प्रत्येक पोइन्टर अधिकतम n पटक सार्छ।' }
          },
          {
            id: 'dsa-tp-q2',
            question: { en: 'Which problem uses opposite-direction two pointers?', ne: 'कुन समस्याले उपलब्ध-दिशा टू पोइन्टर्स प्रयोग गर्छ?' },
            options: { en: ['Maximum subarray', 'Container with most water', '3Sum', 'Remove duplicates from sorted array'], ne: ['अधिकतम सबअरे', 'धेरै पानी भएको कन्टेनर', '3Sum', 'क्रमबद्ध एरेबाट डुप्लिकेट हटाउनु'] },
            correctAnswer: 1,
            explanation: { en: 'Container with most water uses pointers from opposite ends moving toward center.', ne: 'धेरै पानी भएको कन्टेनरले विपरीत छेउबाट पोइन्टर्स प्रयोग गर्छ।' }
          }
        ]
      },
      {
        id: 'dsa-sliding-window',
        slug: 'sliding-window',
        title: { en: 'Sliding Window', ne: 'स्लाइडिङ विंडो' },
        content: {
          en: `# Sliding Window

Sliding window reduces nested loops to single pass.

## Types:
1. **Fixed Window**: Same size k
2. **Dynamic Window**: Variable size

## When to Use:
- Subarray/substring problems
- Longest/shortest something
- Count something

## Common Problems:
- Maximum sum of k consecutive elements
- Longest substring without k repeating
- Minimum window substring`,
          ne: `# स्लाइडिङ विंडो

स्लाइडिङ विंडोले नेस्टेड लूपलाई एकल पासमा घटाउँछ।

## प्रकार:
1. **फिक्स्ड विंडो**: Same size k
2. **डायनामिक विंडो**: Variable size

## कहिले प्रयोग गर्ने:
- सबअरे/सबस्ट्रिंग समस्याहरू
- सबैभन्दा लामो/छोटो कुनै कुरा
- कुनै कुरा गन्ने`

        },
        codeExamples: [
          {
            language: 'python',
            code: `# Maximum sum of k consecutive elements
def maxSumSubarray(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i-k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum

# Longest substring without repeating
def lengthOfLongestSubstring(s):
    char_index = {}
    max_length = 0
    left = 0
    
    for right in range(len(s)):
        if s[right] in char_index and char_index[s[right]] >= left:
            left = char_index[s[right]] + 1
        
        char_index[s[right]] = right
        max_length = max(max_length, right - left + 1)
    
    return max_length`,
            explanation: { en: 'Slide window by adding new element and removing old. Track max.', ne: 'नयाँ थपेर र पुरानो हटाएर विंडो सार्नुहोस्। अधिकतम ट्र्याक गर्नुहोस्।' }
          }
        ],
        quiz: [
          {
            id: 'dsa-sw-q1',
            question: { en: 'What is the time complexity of sliding window technique?', ne: 'स्लाइडिङ विंडो तकनीकको समय जटिलता के हो?' },
            options: { en: ['O(n²)', 'O(n log n)', 'O(n)', 'O(k)'], ne: ['O(n²)', 'O(n log n)', 'O(n)', 'O(k)'] },
            correctAnswer: 2,
            explanation: { en: 'Sliding window processes each element at most twice - O(n).', ne: 'स्लाइडिङ विंडोले प्रत्येक तत्व अधिकतम दुई पटक प्रक्रिया गर्छ - O(n)।' }
          },
          {
            id: 'dsa-sw-q2',
            question: { en: 'Which technique is best for "minimum window substring" problem?', ne: '"minimum window substring" समस्याको लागि कुन तकनीक उत्तम छ?' },
            options: { en: ['Two Pointers', 'Sliding Window', 'Hash Table only', 'Binary Search'], ne: ['टू पोइन्टर्स', 'स्लाइडिङ विंडो', 'ह्यास टेबल मात्र', 'बाइनरी सर्च'] },
            correctAnswer: 1,
            explanation: { en: 'Sliding window is perfect for finding minimum window containing all characters.', ne: 'स्लाइडिङ विंडो सबै क्यारेक्टरहरू समावेश गर्ने न्यूनतम विंडो खोज्नको लागि उपयुक्त छ।' }
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
