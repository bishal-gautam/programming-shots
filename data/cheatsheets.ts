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
  }
];
