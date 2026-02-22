export interface Lesson {
  id: string;
  title: string;
  slug: string;
  content: string;
  codeExamples: CodeExample[];
  quiz: QuizQuestion[];
}

export interface CodeExample {
  language: string;
  code: string;
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  phase: number;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export const courses: Course[] = [
  // Phase 1: Absolute Beginner (Python)
  {
    id: 'python-basics',
    title: 'Python Basics',
    slug: 'python-basics',
    description: 'Learn Python programming from scratch. Perfect for absolute beginners.',
    phase: 1,
    icon: '🐍',
    color: '#3776ab',
    lessons: [
      {
        id: 'python-intro',
        slug: 'introduction-to-python',
        title: 'Introduction to Python',
        content: `
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
        codeExamples: [
          {
            language: 'python',
            code: `print("Hello, World!")`,
            explanation: 'The print() function outputs text to the console. This is typically the first program you write in any language.'
          },
          {
            language: 'python',
            code: `# This is a comment
name = "Student"
print(f"Welcome, {name}!")`,
            explanation: 'Variables store data. In Python, we don\'t need to declare the type - Python figures it out automatically.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Who created Python?',
            options: ['James Gosling', 'Guido van Rossum', 'Bjarne Stroustrup', 'Dennis Ritchie'],
            correctAnswer: 1,
            explanation: 'Guido van Rossum created Python in 1991.'
          },
          {
            id: 'q2',
            question: 'What function is used to output text in Python?',
            options: ['echo()', 'console.log()', 'print()', 'output()'],
            correctAnswer: 2,
            explanation: 'The print() function is used to output text in Python.'
          }
        ]
      },
      {
        id: 'python-variables',
        slug: 'variables-and-data-types',
        title: 'Variables and Data Types',
        content: `
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
            explanation: 'Python automatically determines the data type. You can check the type using type().'
          },
          {
            language: 'python',
            code: `# Multiple assignment
x, y, z = 1, 2, 3

# Same value to multiple variables
a = b = c = 0

print(x, y, z, a, b, c)`,
            explanation: 'Python allows multiple assignment in a single line, making code concise.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the data type of x = 3.14?',
            options: ['int', 'str', 'float', 'bool'],
            correctAnswer: 2,
            explanation: '3.14 is a floating-point number, so its type is float.'
          },
          {
            id: 'q2',
            question: 'Which is NOT a valid variable name in Python?',
            options: ['my_var', '_private', '2fast', 'count'],
            correctAnswer: 2,
            explanation: 'Variable names cannot start with a number.'
          }
        ]
      },
      {
        id: 'python-operators',
        slug: 'operators-and-expressions',
        title: 'Operators and Expressions',
        content: `
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
            explanation: 'Python supports all standard arithmetic operators. Note that / returns float, // returns integer.'
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
            comparison: 'Comparison operators always return a boolean value (True or False).'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the result of 17 // 5?',
            options: ['3.4', '3', '2', '4'],
            correctAnswer: 1,
            explanation: '// is floor division, which rounds down to the nearest integer.'
          },
          {
            id: 'q2',
            question: 'What does % operator return?',
            options: ['Quotient', 'Remainder', 'Product', 'Difference'],
            correctAnswer: 1,
            explanation: 'The % (modulus) operator returns the remainder of division.'
          }
        ]
      }
    ]
  },
  // Phase 2: C/C++
  {
    id: 'c-basics',
    title: 'C Programming Basics',
    slug: 'c-basics',
    description: 'Master C programming fundamentals - the language that influenced many others.',
    phase: 2,
    icon: '⚡',
    color: '#a8b9cc',
    lessons: [
      {
        id: 'c-intro',
        slug: 'introduction-to-c',
        title: 'Introduction to C',
        content: `
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
        codeExamples: [
          {
            language: 'c',
            code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
            explanation: 'Every C program needs main() as the entry point. printf() prints text. return 0 indicates successful execution.'
          },
          {
            language: 'c',
            code: `#include <stdio.h>

int main() {
    int age = 25;
    printf("I am %d years old\\n", age);
    return 0;
}`,
            explanation: 'Variables in C must have a declared type. %d is used to print integers.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Who created C programming language?',
            options: ['Bjarne Stroustrup', 'Dennis Ritchie', 'Ken Thompson', 'James Gosling'],
            correctAnswer: 1,
            explanation: 'Dennis Ritchie created C at Bell Labs in 1972.'
          },
          {
            id: 'q2',
            question: 'What is the entry point of a C program?',
            options: ['start()', 'main()', 'entry()', 'run()'],
            correctAnswer: 1,
            explanation: 'The main() function is the entry point of every C program.'
          }
        ]
      },
      {
        id: 'c-variables',
        slug: 'variables-and-data-types-in-c',
        title: 'Variables and Data Types in C',
        content: `
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
            explanation: 'C requires explicit type declarations. Each type has specific format specifiers: %d (int), %f (float), %c (char), %lf (double).'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which data type is used for a single character in C?',
            options: ['string', 'char', 'text', 'character'],
            correctAnswer: 1,
            explanation: 'char is the data type for single characters in C.'
          },
          {
            id: 'q2',
            question: 'What is the format specifier for float in printf?',
            options: ['%f', '%float', '%fl', '%d'],
            correctAnswer: 0,
            explanation: '%f is the format specifier for float in C.'
          }
        ]
      },
      {
        id: 'c-control',
        slug: 'control-flow-statements',
        title: 'Control Flow Statements',
        content: `
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
            explanation: 'if-else statements allow conditional execution of code blocks.'
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
            explanation: 'for loops are ideal when you know iterations. while loops work when conditions may change.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which loop is best when you know the exact number of iterations?',
            options: ['while', 'do-while', 'for', 'switch'],
            correctAnswer: 2,
            explanation: 'The for loop is ideal when you know the number of iterations beforehand.'
          }
        ]
      }
    ]
  },
  // Phase 3: Java
  {
    id: 'java-basics',
    title: 'Java Programming',
    slug: 'java-basics',
    description: 'Learn Java - the language behind Android apps and enterprise software.',
    phase: 3,
    icon: '☕',
    color: '#f89820',
    lessons: [
      {
        id: 'java-intro',
        slug: 'introduction-to-java',
        title: 'Introduction to Java',
        content: `
# Introduction to Java

Java is a high-level, object-oriented programming language developed by Sun Microsystems in 1995. It's designed to be platform-independent.

## Key Features

- **Write Once, Run Anywhere**: Java programs run on any device with JVM
- **Object-Oriented**: Everything is organized around objects and classes
- **Automatic Memory Management**: Garbage collection handles memory
- **Strong Typing**: Variables must be declared with types
- **Multi-threaded**: Built-in support for concurrent programming
        `,
        codeExamples: [
          {
            language: 'java',
            code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
            explanation: 'Every Java program needs a main() method. System.out.println() prints to console.'
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
            explanation: 'Java is strongly typed. String is capitalized - it\'s an object, not a primitive.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What does "Write Once, Run Anywhere" mean about Java?',
            options: ['Java code runs on all operating systems', 'Java is only for Windows', 'Java code is always free', 'Java never has bugs'],
            correctAnswer: 0,
            explanation: 'Java runs on any device with Java Virtual Machine (JVM), making it platform-independent.'
          },
          {
            id: 'q2',
            question: 'What is the entry point of a Java program?',
            options: ['start()', 'main()', 'run()', 'init()'],
            correctAnswer: 1,
            explanation: 'The main() method is the entry point of any Java application.'
          }
        ]
      },
      {
        id: 'java-oop',
        slug: 'object-oriented-programming',
        title: 'Object-Oriented Programming',
        content: `
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
            explanation: 'Classes encapsulate data (properties) and behavior (methods).'
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
            explanation: 'ElectricCar extends (inherits from) Car, gaining all its properties and methods.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What keyword is used to inherit a class in Java?',
            options: ['inherits', 'extends', 'implements', 'derives'],
            correctAnswer: 1,
            explanation: 'The extends keyword is used for class inheritance in Java.'
          }
        ]
      },
      {
        id: 'java-collections',
        slug: 'java-collections-framework',
        title: 'Java Collections Framework',
        content: `
# Java Collections Framework

The Collections Framework provides a set of interfaces and classes for storing and manipulating groups of objects.

## Main Interfaces

- **List**: Ordered collection, allows duplicates (ArrayList, LinkedList)
- **Set**: Unordered, no duplicates (HashSet, TreeSet)
- **Map**: Key-value pairs (HashMap, TreeMap)
- **Queue**: FIFO (First In First Out)
        `,
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
            explanation: 'ArrayList is dynamic, HashMap provides key-value storage.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which collection does not allow duplicates?',
            options: ['ArrayList', 'List', 'Set', 'Queue'],
            correctAnswer: 2,
            explanation: 'Set is a collection that does not allow duplicate elements.'
          }
        ]
      }
    ]
  },
  // Phase 4: Web (HTML/CSS/JS)
  {
    id: 'html-css',
    title: 'HTML & CSS',
    slug: 'html-css',
    description: 'Build beautiful websites with HTML for structure and CSS for styling.',
    phase: 4,
    icon: '🌐',
    color: '#e34f26',
    lessons: [
      {
        id: 'html-intro',
        slug: 'introduction-to-html',
        title: 'Introduction to HTML',
        content: `
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
            explanation: 'The DOCTYPE declares this is HTML5. The <html> element wraps everything.'
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
            explanation: 'HTML provides many elements for different types of content.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What does HTML stand for?',
            options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyper Transfer Markup Language'],
            correctAnswer: 0,
            explanation: 'HTML stands for HyperText Markup Language.'
          },
          {
            id: 'q2',
            question: 'Which tag is used for the largest heading?',
            options: ['<heading>', '<h6>', '<h1>', '<head>'],
            correctAnswer: 2,
            explanation: '<h1> is the largest heading. Headings go from h1 (largest) to h6 (smallest).'
          }
        ]
      },
      {
        id: 'css-intro',
        slug: 'introduction-to-css',
        title: 'Introduction to CSS',
        content: `
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
            explanation: 'Internal CSS goes in the <head> section. Good for single-page styles.'
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
            explanation: 'External CSS is best for multi-page websites. Link it with <link rel="stylesheet" href="styles.css">'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What is the best way to add CSS for a multi-page website?',
            options: ['Inline CSS', 'Internal CSS', 'External CSS', 'JavaScript'],
            correctAnswer: 2,
            explanation: 'External CSS allows you to style all pages from one file.'
          }
        ]
      },
      {
        id: 'js-intro',
        slug: 'javascript-basics',
        title: 'JavaScript Basics',
        content: `
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
            explanation: 'let and const are modern ways to declare variables. var is older.'
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
            explanation: 'JavaScript can interact with HTML elements through the DOM.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which keyword declares a variable that cannot be reassigned?',
            options: ['var', 'let', 'const', 'static'],
            correctAnswer: 2,
            explanation: 'const declares a constant - its value cannot be changed after initialization.'
          }
        ]
      }
    ]
  },
  // Phase 5: Git
  {
    id: 'git-basics',
    title: 'Git Version Control',
    slug: 'git-basics',
    description: 'Master Git - the essential tool for tracking changes in your code.',
    phase: 5,
    icon: '📦',
    color: '#f05032',
    lessons: [
      {
        id: 'git-intro',
        slug: 'introduction-to-version-control',
        title: 'Introduction to Version Control',
        content: `
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
            explanation: 'Always configure your identity before starting. git init creates a new repository.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What type of version control system is Git?',
            options: ['Local', 'Centralized', 'Distributed', 'Hybrid'],
            correctAnswer: 2,
            explanation: 'Git is a distributed version control system - every user has a full copy of the repository.'
          }
        ]
      },
      {
        id: 'git-basic-commands',
        slug: 'basic-git-commands',
        title: 'Basic Git Commands',
        content: `
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
            explanation: 'git add stages changes, git commit saves them. Always write clear commit messages!'
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
            explanation: 'git diff shows what\'s changed. git reset unstages files.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'Which command stages all changes for commit?',
            options: ['git commit -a', 'git add .', 'git push', 'git status'],
            correctAnswer: 1,
            explanation: 'git add . stages all changes in the current directory.'
          }
        ]
      },
      {
        id: 'git-branching',
        slug: 'git-branching-and-merging',
        title: 'Branching and Merging',
        content: `
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
            explanation: 'Branches allow parallel development. Always create a new branch for new features.'
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
            explanation: 'Merge combines branch history. Delete branches after merging to keep repo clean.'
          }
        ],
        quiz: [
          {
            id: 'q1',
            question: 'What command creates and switches to a new branch?',
            options: ['git branch new-branch', 'git checkout new-branch', 'git checkout -b new-branch', 'git merge new-branch'],
            correctAnswer: 2,
            explanation: 'git checkout -b creates a new branch and switches to it in one command.'
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
