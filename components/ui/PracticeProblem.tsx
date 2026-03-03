'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface PracticeProblemProps {
  title: { en: string; ne: string };
  difficulty: 'easy' | 'medium' | 'hard';
  description: { en: string; ne: string };
  starterCode: { en: string; ne: string };
  solution: { en: string; ne: string };
  hints: { en: string[]; ne: string[] };
}

const difficultyColors = {
  easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

const difficultyLabels = {
  easy: { en: 'Easy', ne: 'सजिलो' },
  medium: { en: 'Medium', ne: 'मध्यम' },
  hard: { en: 'Hard', ne: 'गाह्रो' },
};

export default function PracticeProblem({
  title,
  difficulty,
  description,
  starterCode,
  solution,
  hints,
}: PracticeProblemProps) {
  const { locale } = useLanguage();
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [usedHints, setUsedHints] = useState(0);

  const currentTitle = title[locale] || title.en;
  const currentDesc = description[locale] || description.en;
  const currentStarter = starterCode[locale] || starterCode.en;
  const currentSolution = solution[locale] || solution.en;
  const currentHints = hints[locale] || hints.en;
  const diffLabel = difficultyLabels[difficulty][locale] || difficultyLabels[difficulty].en;

  const revealNextHint = () => {
    if (usedHints < currentHints.length) {
      setUsedHints(usedHints + 1);
      setShowHints(true);
    }
  };

  return (
    <div className="my-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            💪 Practice Problem
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
            {diffLabel}
          </span>
        </div>
        <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mt-2">
          {currentTitle}
        </h4>
      </div>

      {/* Description */}
      <div className="p-4">
        <div className="prose dark:prose-invert max-w-none text-sm mb-4">
          <div dangerouslySetInnerHTML={{ __html: currentDesc }} />
        </div>

        {/* Starter Code */}
        <div className="mb-4">
          <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            📝 Starter Code:
          </h5>
          <pre className="bg-gray-900 dark:bg-gray-950 p-3 rounded-lg overflow-x-auto text-sm">
            <code className="language-python text-gray-100">
              {currentStarter}
            </code>
          </pre>
        </div>

        {/* Hints Section */}
        {currentHints.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setShowHints(!showHints)}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              💡 {showHints ? 'Hide Hints' : 'Show Hints'}
            </button>
            
            {showHints && (
              <div className="mt-2 space-y-2">
                {currentHints.slice(0, usedHints).map((hint, i) => (
                  <div 
                    key={i} 
                    className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 text-sm"
                  >
                    <span className="font-medium text-yellow-800 dark:text-yellow-200">
                      Hint {i + 1}:
                    </span>{' '}
                    <span className="text-yellow-700 dark:text-yellow-300">{hint}</span>
                  </div>
                ))}
                {usedHints < currentHints.length && (
                  <button
                    onClick={revealNextHint}
                    className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition-colors"
                  >
                    Reveal Hint {usedHints + 1}
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Solution Toggle */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
              showSolution
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            {showSolution ? '🙈 Hide Solution' : '👁️ Show Solution'}
          </button>

          {showSolution && (
            <div className="mt-4">
              <pre className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg overflow-x-auto">
                <code className="language-python text-sm text-gray-100">
                  {currentSolution}
                </code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
