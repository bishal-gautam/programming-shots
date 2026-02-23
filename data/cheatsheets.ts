export interface Cheatsheet {
  id: string;
  title: string;
  titleNe: string;
  category: string;
  content: CheatsheetItem[];
}

export interface CheatsheetItem {
  title: string;
  titleNe: string;
  code: string;
  description: string;
  descriptionNe: string;
}

export const cheatsheets: Cheatsheet[] = [
  {
    id: 'python',
    title: 'Python Cheatsheet',
    titleNe: 'Python चिटशिट',
    category: 'Languages',
    content: [
      {
        title: 'Variables',
        titleNe: 'भेरिएबल',
        code: `x = 5              # int
y = 3.14            # float
name = "Python"    # str
is_active = True   # bool
items = [1, 2, 3]  # list`,
        description: 'Basic variable types in Python',
        descriptionNe: 'Python मा आधारभूत भेरिएबल प्रकारहरू'
      },
      {
        title: 'String Formatting',
        titleNe: 'स्ट्रिङ फरम्याटिङ',
        code: `name = "Python"
age = 30

# f-string (recommended)
print(f"I am {age}")

# format()
print("I like {}".format(name))

# concatenation
print("I like " + name)`,
        description: 'Different ways to format strings',
        descriptionNe: 'स्ट्रिङ फरम्याट गर्ने विभिन्न तरिकाहरू'
      },
      {
        title: 'Lists',
        titleNe: 'लिस्ट',
        code: `fruits = ["apple", "banana"]

# Add
fruits.append("orange")
fruits.insert(0, "mango")

# Remove
fruits.pop()
fruits.remove("apple")

# Loop
for fruit in fruits:
    print(fruit)`,
        description: 'Common list operations',
        descriptionNe: 'सामान्य लिस्ट सञ्चालनहरू'
      },
      {
        title: 'Conditionals',
        titleNe: 'कन्डिशनल',
        code: `x = 10

if x > 10:
    print("big")
elif x > 5:
    print("medium")
else:
    print("small")

# Ternary
result = "even" if x % 2 == 0 else "odd"`,
        description: 'If-else statements in Python',
        descriptionNe: 'Python मा if-else कथनहरू'
      },
      {
        title: 'Loops',
        titleNe: 'लुप',
        code: `# For loop
for i in range(5):
    print(i)  # 0,1,2,3,4

# While loop
count = 0
while count < 3:
    print(count)
    count += 1

# List comprehension
squares = [x**2 for x in range(5)]`,
        description: 'Different loop types in Python',
        descriptionNe: 'Python मा विभिन्न लुप प्रकारहरू'
      },
      {
        title: 'Functions',
        titleNe: 'फंक्सन',
        code: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# Lambda
square = lambda x: x ** 2

# Args/Kwargs
def func(*args, **kwargs):
    print(args)    # tuple
    print(kwargs)  # dict`,
        description: 'Defining and using functions',
        descriptionNe: 'फंक्सन परिभाषित र प्रयोग'
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript Cheatsheet',
    titleNe: 'JavaScript चिटशिट',
    category: 'Languages',
    content: [
      {
        title: 'Variables',
        titleNe: 'भेरिएबल',
        code: `let x = 5;           // can reassign
const y = 10;         // cannot reassign
var z = 15;           // old way

// Types
const num = 42;
const str = "hello";
const bool = true;
const arr = [1, 2, 3];
const obj = { key: "value" };`,
        description: 'Variable declarations and types',
        descriptionNe: 'भेरिएबल घोषणा र प्रकारहरू'
      },
      {
        title: 'Arrays',
        titleNe: 'एरे',
        code: `const arr = [1, 2, 3];

// Add/Remove
arr.push(4);        // end
arr.pop();          // end
arr.unshift(0);     // start
arr.shift();        // start

// Transform
const doubled = arr.map(x => x * 2);
const filtered = arr.filter(x => x > 2);
const found = arr.find(x => x === 2);`,
        description: 'Common array methods',
        descriptionNe: 'सामान्य एरे विधिहरू'
      },
      {
        title: 'Objects',
        titleNe: 'अब्जेक्ट',
        code: `const person = {
  name: "John",
  age: 30,
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};

// Destructuring
const { name, age } = person;

// Spread
const clone = { ...person, city: "NYC" };`,
        description: 'Object operations',
        descriptionNe: 'अब्जेक्ट सञ्चालन'
      },
      {
        title: 'Async/Await',
        titleNe: 'Async/Await',
        code: `// Promise
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await (cleaner)
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}`,
        description: 'Handling asynchronous operations',
        descriptionNe: 'असिंक्रोनस सञ्चालनहरू ह्यान्डल गर्नुहोस्'
      }
    ]
  },
  {
    id: 'git',
    title: 'Git Cheatsheet',
    titleNe: 'Git चिटशिट',
    category: 'Tools',
    content: [
      {
        title: 'Basic Commands',
        titleNe: 'आधारभूत कमान्डहरू',
        code: `# Initialize
git init
git clone url

# Status & History
git status
git log --oneline
git diff

# Staging & Committing
git add .
git add filename
git commit -m "message"`,
        description: 'Essential Git commands',
        descriptionNe: 'आवश्यक Git कमान्डहरू'
      },
      {
        title: 'Branching',
        titleNe: 'ब्रान्चिङ',
        code: `# Create & Switch
git branch name
git checkout name
git checkout -b name

# Merge
git checkout main
git merge branch

# Delete
git branch -d name   # local
git push origin --delete name  # remote`,
        description: 'Branch management commands',
        descriptionNe: 'ब्रान्च प्रबंधन कमान्डहरू'
      },
      {
        title: 'Remote Operations',
        titleNe: 'रिमोट सञ्चालन',
        code: `# Connect remote
git remote add origin url

# Push & Pull
git push origin main
git pull origin main

# Fetch
git fetch origin

# URL change
git remote set-url origin new-url`,
        description: 'Working with remote repositories',
        descriptionNe: 'रिमोट रिपोजिटरीसँग काम गर्नुहोस्'
      },
      {
        title: 'Undo Changes',
        titleNe: 'परिवर्तन पूर्ववत गर्नुहोस्',
        code: `# Unstage
git reset filename
git reset

# Undo commits
git revert hash     # creates new commit
git reset --hard hash  # dangerous!

# Discard changes
git checkout -- filename`,
        description: 'How to undo changes in Git',
        descriptionNe: 'Git मा परिवर्तन कसरी पूर्ववत गर्ने'
      }
    ]
  },
  {
    id: 'css',
    title: 'CSS Cheatsheet',
    titleNe: 'CSS चिटशिट',
    category: 'Web',
    content: [
      {
        title: 'Selectors',
        titleNe: 'सेलेक्टर',
        code: `/* Basic */
element { }
.class { }
#id { }

/* Combinators */
parent child { }    /* descendant */
parent > child { }  /* child */
prev + next { }     /* adjacent */
prev ~ siblings { } /* general */

/* Pseudo */
:hover { }
:first-child { }
:nth-child(2n) { }`,
        description: 'CSS selector types',
        descriptionNe: 'CSS सेलेक्टर प्रकारहरू'
      },
      {
        title: 'Flexbox',
        titleNe: 'Flexbox',
        code: `.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 auto;
  align-self: center;
}`,
        description: 'Flexbox layout properties',
        descriptionNe: 'Flexbox लेआउट गुणहरू'
      },
      {
        title: 'Grid',
        titleNe: 'Grid',
        code: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.item {
  grid-area: main;
}`,
        description: 'CSS Grid layout',
        descriptionNe: 'CSS Grid लेआउट'
      }
    ]
  },
  {
    id: 'sql',
    title: 'SQL Cheatsheet',
    titleNe: 'SQL चिटशिट',
    category: 'Database',
    content: [
      {
        title: 'Basic Queries',
        titleNe: 'आधारभूत क्वेरीहरू',
        code: `-- Select
SELECT * FROM users;
SELECT name, age FROM users;

-- Filter
WHERE age > 18
WHERE name LIKE 'J%'
WHERE id IN (1, 2, 3)

-- Sort
ORDER BY name ASC
ORDER BY age DESC`,
        description: 'Basic SQL SELECT statements',
        descriptionNe: 'आधारभूत SQL SELECT कथनहरू'
      },
      {
        title: 'Joins',
        titleNe: 'जोइन्स',
        code: `-- Inner Join
SELECT * FROM orders
INNER JOIN users ON orders.user_id = users.id;

-- Left Join
SELECT * FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- Multiple
SELECT * FROM a
JOIN b ON a.id = b.a_id
JOIN c ON b.id = c.b_id;`,
        description: 'Different types of SQL joins',
        descriptionNe: 'SQL जोइनका विभिन्न प्रकारहरू'
      },
      {
        title: 'Aggregations',
        titleNe: 'एग्रिगेसन',
        code: `-- Count, Sum, Avg
SELECT COUNT(*), SUM(price), AVG(age)
FROM users;

-- Group By
SELECT department, COUNT(*) as num
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;

-- Limit
SELECT * FROM users LIMIT 10 OFFSET 20;`,
        description: 'Aggregate functions and grouping',
        descriptionNe: 'एग्रिगेट फंक्सन र गुपिंग'
      }
    ]
  },
  // React Cheatsheet
  {
    id: 'react',
    title: 'React Cheatsheet',
    titleNe: 'React चिटशिट',
    category: 'Frameworks',
    content: [
      {
        title: 'Components',
        titleNe: 'कम्पोनेन्ट्स',
        code: `// Function Component
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

// Arrow Function
const Welcome = ({ name }) => (
  <h1>Hello, {name}</h1>
);

// With State
import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>
    Count: {count}
  </button>;
}`,
        description: 'React component types and state',
        descriptionNe: 'React कम्पोनेन्ट प्रकारहरू र state'
      },
      {
        title: 'Props',
        titleNe: 'प्रोप्स',
        code: `// Passing props
function Parent() {
  return <Child name="Ram" age={25} />;
}

// Receiving props
function Child({ name, age }) {
  return <p>{name} is {age}</p>;
}

// Default props
function Button({ text = "Click" }) {
  return <button>{text}</button>;
}`,
        description: 'Passing and using props',
        descriptionNe: 'प्रोप्स पास र प्रयोग'
      },
      {
        title: 'useEffect',
        titleNe: 'useEffect',
        code: `import { useEffect } from 'react';

// Run on every render
useEffect(() => {
  console.log('Rendered');
});

// Run once (mount)
useEffect(() => {
  fetchData();
}, []);

// Run when dependency changes
useEffect(() => {
  console.log('Count changed:', count);
}, [count]);

// Cleanup
useEffect(() => {
  const sub = subscribe(id);
  return () => sub.unsubscribe();
}, [id]);`,
        description: 'Side effects and lifecycle',
        descriptionNe: 'साइड इफेक्ट्स र लाइफसाइकल'
      },
      {
        title: 'Conditional Rendering',
        titleNe: 'कन्डिशनल रेन्डरिङ',
        code: `// Ternary operator
{isLoggedIn ? <Dashboard /> : <Login />}

// Logical AND
{showMessage && <Message />}

// Switch with else
{status === 'loading' ? <Spinner /> :
 status === 'error' ? <Error /> :
 <Content />}`,
        description: 'Different ways to conditionally render',
        descriptionNe: 'कन्डिशनल रेन्डर गर्ने विभिन्न तरिकाहरू'
      },
      {
        title: 'Lists and Keys',
        titleNe: 'लिस्ट र कीज',
        code: `// Rendering lists
const items = ['Apple', 'Banana', 'Cherry'];
{items.map(item => (
  <li key={item}>{item}</li>
))}

// With index
items.map((item, index) => (
  <li key={index}>{item}</li>
))`,
        description: 'Rendering arrays of components',
        descriptionNe: 'कम्पोनेन्टहरूको एरे रेन्डर गर्नुहोस्'
      }
    ]
  },
  // TypeScript Cheatsheet
  {
    id: 'typescript',
    title: 'TypeScript Cheatsheet',
    titleNe: 'TypeScript चिटशिट',
    category: 'Languages',
    content: [
      {
        title: 'Basic Types',
        titleNe: 'आधारभूत प्रकारहरू',
        code: `// Primitives
let name: string = "Ram";
let age: number = 25;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["a", "b"];

// Any and Unknown
let anything: any = "hello";
let uncertain: unknown = "hi";`,
        description: 'Basic TypeScript types',
        descriptionNe: 'आधारभूत TypeScript प्रकारहरू'
      },
      {
        title: 'Interfaces & Types',
        titleNe: 'इन्टरफेस र टाइप्स',
        code: `// Interface
interface Person {
  name: string;
  age: number;
}

// Type
type Point = {
  x: number;
  y: number;
};

// Optional and readonly
interface User {
  readonly id: number;
  name?: string;
}`,
        description: 'Defining object types',
        descriptionNe: 'अब्जेक्ट प्रकारहरू परिभाषित गर्नुहोस्'
      },
      {
        title: 'Functions',
        titleNe: 'फंक्सन',
        code: `// Parameter types
function greet(name: string): string {
  return \`Hello, \${name}\`;
}

// Arrow with types
const add = (a: number, b: number): number => a + b;

// Optional parameters
function greet(name?: string): string {
  return name ? \`Hello, \${name}\` : "Hello";
}`,
        description: 'Typing functions',
        descriptionNe: 'फंक्सनहरू टाइप गर्नुहोस्'
      },
      {
        title: 'Generics',
        titleNe: 'जेनेरिक्स',
        code: `// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface Container<T> {
  value: T;
  getValue(): T;
}

// Generic constraint
function logLength<T extends { length: number }>(item: T) {
  console.log(item.length);
}`,
        description: 'Creating reusable typed code',
        descriptionNe: 'पुन: प्रयोज्य टाइप्ड कोड सिर्जना'
      }
    ]
  },
  // Git Cheatsheet
  {
    id: 'git',
    title: 'Git Cheatsheet',
    titleNe: 'Git चिटशिट',
    category: 'Version Control',
    content: [
      {
        title: 'Basic Commands',
        titleNe: 'आधारभूत कमाण्डहरू',
        code: `git init              # Initialize repository
git clone <url>      # Clone repository
git status           # Check status
git add .            # Stage all changes
git commit -m "msg"  # Commit changes`,
        description: 'Getting started with Git',
        descriptionNe: 'Git सुरु गर्नुहोस्'
      },
      {
        title: 'Branching',
        titleNe: 'ब्रान्चिंग',
        code: `git branch            # List branches
git branch <name>   # Create branch
git checkout <name> # Switch branch
git checkout -b <n>  # Create & switch
git merge <branch>  # Merge branch`,
        description: 'Working with branches',
        descriptionNe: 'ब्रान्चहरूसँग काम गर्नुहोस्'
      },
      {
        title: 'Remote Operations',
        titleNe: 'रिमोट अपरेसनहरू',
        code: `git remote -v         # List remotes
git fetch            # Download changes
git pull             # Fetch & merge
git push             # Upload changes
git push -u origin main  # Push and set upstream`,
        description: 'Remote repository operations',
        descriptionNe: 'रिमोट रिपोजिटरी अपरेसनहरू'
      },
      {
        title: 'Undo Changes',
        titleNe: 'परिवर्तनहरू पूर्ववत गर्नुहोस्',
        code: `git checkout -- file  # Discard changes
git reset HEAD file   # Unstage file
git revert <commit>  # Create undo commit
git reset --hard HEAD # Reset to last commit`,
        description: 'Reverting and resetting',
        descriptionNe: 'पूर्ववत र रिसेट गर्नुहोस्'
      },
      {
        title: 'Viewing History',
        titleNe: 'इतिहास हेर्नुहोस्',
        code: `git log               # View commit history
git log --oneline    # Compact view
git diff             # Show changes
git diff --staged    # Staged changes
git show <commit>    # Show commit details`,
        description: 'Viewing commits and changes',
        descriptionNe: 'कमिट र परिवर्तनहरू हेर्नुहोस्'
      }
    ]
  },
  // SQL Cheatsheet
  {
    id: 'sql',
    title: 'SQL Cheatsheet',
    titleNe: 'SQL चिटशिट',
    category: 'Database',
    content: [
      {
        title: 'Basic Queries',
        titleNe: 'आधारभूत क्वेरीहरू',
        code: `SELECT * FROM users;
SELECT name, email FROM users;
SELECT DISTINCT city FROM users;
SELECT * FROM users LIMIT 10;`,
        description: 'Basic SELECT statements',
        descriptionNe: 'आधारभूत SELECT कथनहरू'
      },
      {
        title: 'Filtering',
        titleNe: 'फिल्टरिंग',
        code: `SELECT * FROM users WHERE age > 18;
SELECT * FROM users WHERE city = 'Kathmandu';
SELECT * FROM users WHERE age > 18 AND city = 'Pokhara';
SELECT * FROM users WHERE name LIKE 'R%';`,
        description: 'WHERE clause and conditions',
        descriptionNe: 'WHERE क्लज र सर्तहरू'
      },
      {
        title: 'Sorting & Grouping',
        titleNe: 'क्रमबद्ध र समूहबद्ध',
        code: `SELECT * FROM users ORDER BY name ASC;
SELECT COUNT(*), city FROM users GROUP BY city;
SELECT city, AVG(age) FROM users GROUP BY city
  HAVING AVG(age) > 25;`,
        description: 'ORDER BY and GROUP BY',
        descriptionNe: 'ORDER BY र GROUP BY'
      },
      {
        title: 'Joins',
        titleNe: 'जोइनहरू',
        code: `SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id;
SELECT * FROM users LEFT JOIN orders ON users.id = orders.user_id;
SELECT * FROM users RIGHT JOIN orders ON users.id = orders.user_id;`,
        description: 'Combining tables',
        descriptionNe: 'टेबलहरू संयोजन गर्नुहोस्'
      },
      {
        title: 'CRUD Operations',
        titleNe: 'CRUD अपरेसनहरू',
        code: `INSERT INTO users (name, email) VALUES ('Ram', 'ram@test.com');
UPDATE users SET age = 26 WHERE id = 1;
DELETE FROM users WHERE id = 1;
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50));`,
        description: 'Insert, Update, Delete, Create',
        descriptionNe: 'इन्सर्ट, अपडेट, डिलीट, क्रिएट'
      }
    ]
  },
  // Command Line Cheatsheet
  {
    id: 'cli',
    title: 'Command Line Cheatsheet',
    titleNe: 'कमाण्ड लाइन चिटशिट',
    category: 'Tools',
    content: [
      {
        title: 'Navigation',
        titleNe: 'नेभिगेसन',
        code: `pwd           # Print working directory
ls             # List files
ls -la         # List all with details
cd <dir>       # Change directory
cd ..          # Go to parent directory
cd ~           # Go to home`,
        description: 'Basic navigation commands',
        descriptionNe: 'आधारभूत नेभिगेसन कमाण्डहरू'
      },
      {
        title: 'File Operations',
        titleNe: 'फाइल अपरेसनहरू',
        code: `touch file.txt    # Create file
mkdir <dir>     # Create directory
cp file1 file2  # Copy file
mv old new      # Move/rename
rm file.txt     # Delete file
rm -r <dir>     # Delete directory`,
        description: 'File and directory operations',
        descriptionNe: 'फाइल र डिरेक्टरी अपरेसनहरू'
      },
      {
        title: 'Viewing Files',
        titleNe: 'फाइलहरू हेर्नुहोस्',
        code: `cat file.txt      # View entire file
head -n 10 file # First 10 lines
tail -n 10 file # Last 10 lines
less file.txt   # View with pagination
grep "text" file # Search in file`,
        description: 'Viewing file contents',
        descriptionNe: 'फाइल सामग्री हेर्नुहोस्'
      },
      {
        title: 'Permissions',
        titleNe: 'अनुमतिहरू',
        code: `ls -l file.txt    # View permissions
chmod 755 file   # Change permissions
chmod +x script  # Make executable
chown user:group file  # Change owner`,
        description: 'File permissions and ownership',
        descriptionNe: 'फाइल अनुमति र स्वामित्व'
      },
      {
        title: 'Process Management',
        titleNe: 'प्रक्रिया व्यवस्थापन',
        code: `ps             # List processes
top            # View running processes
kill <pid>     # Kill process
killall <name> # Kill by name
Ctrl+C         # Stop current process`,
        description: 'Managing running processes',
        descriptionNe: 'चलिरहेको प्रक्रियाहरू व्यवस्थापन'
      }
    ]
  }
];
