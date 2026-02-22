# Contributing to Programming Shots

Thank you for your interest in contributing to Programming Shots! This document will help you get started.

## 🌟 Ways to Contribute

There are many ways to contribute to Programming Shots:

1. **Add New Courses** - Create new programming courses
2. **Improve Existing Content** - Fix errors, add explanations
3. **Add Translations** - Translate content to Nepali/English
4. **Report Bugs** - Help us identify and fix issues
5. **Suggest Features** - Share your ideas for improvement
6. **Improve UI/UX** - Help make the site better

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button on the top right of this page.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/programming-shots.git
cd programming-shots
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-fix-description
```

### 4. Make Changes

Make your changes to the codebase. Be sure to:

- Follow the existing code style
- Add comments for complex logic
- Test your changes locally

### 5. Commit Your Changes

```bash
git add .
git commit -m "Add: Description of your changes"
```

### 6. Push to GitHub

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

Go to the original repository and click "New Pull Request".

## 📝 Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper types for interfaces and props
- Avoid using `any` type

### React Components

- Use functional components with hooks
- Follow the component structure:
  ```tsx
  interface ComponentProps {
    // Define props
  }

  export default function Component({ prop1, prop2 }: ComponentProps) {
    // Component logic
  }
  ```

### CSS/Tailwind

- Use Tailwind CSS for styling
- Follow the existing color scheme
- Use responsive design patterns

## 🧪 Testing

Before submitting a PR:

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Test your changes in the browser at `http://localhost:3000`

3. Check for any console errors

4. Verify that both English and Nepali locales work

## 📂 Adding New Content

### Adding a New Course

1. Edit `data/courses.ts`
2. Follow the existing course structure:
   ```typescript
   {
     id: 'course-slug',
     slug: 'course-slug',
     title: 'Course Title',
     description: 'Course description...',
     difficulty: 'beginner' | 'intermediate' | 'advanced',
     duration: 'X hours',
     lessons: [
       {
         slug: 'lesson-slug',
         title: 'Lesson Title',
         content: 'Lesson content...',
         // Optional fields
         code: '// code example',
         quiz: [...],
       },
     ],
   }
   ```

### Adding Glossary Terms

1. Edit `data/glossary.ts`
2. Follow the structure:
   ```typescript
   {
     term: 'Term Name',
     pronunciation: '/pronunciation/',
     definition: {
       en: 'English definition',
       ne: 'Nepali definition',
     },
     example: 'code example',
   }
   ```

### Adding Cheatsheets

1. Edit `data/cheatsheets.ts`
2. Follow the structure:
   ```typescript
   {
     id: 'language-id',
     language: 'Language Name',
     description: 'Description...',
     sections: [
       {
         title: 'Section Title',
         code: 'code content',
         filename: 'example.ext',
         explanation: 'Optional explanation',
       },
     ],
   }
   ```

## 🌍 Translation Guidelines

### English to Nepali

- Maintain the same meaning
- Use simple, clear Nepali
- Avoid direct translations of technical terms when Nepali equivalents exist
- Keep code and technical terms in English

### File Locations

- English: `locales/en/*.json`
- Nepali: `locales/ne/*.json`

## 💬 Getting Help

- Open an issue for bugs or feature requests
- Join our community discussions
- Check existing issues and PRs

## 📜 Code of Conduct

Be respectful and inclusive. We welcome contributors from all backgrounds.

## 🙏 Thank You

Your contributions make Programming Shots better for everyone. Thank you for your support!
