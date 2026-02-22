'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizBlockProps {
  questions: Question[];
  title?: string;
  onComplete?: (score: number) => void;
}

export default function QuizBlock({ questions, title, onComplete }: QuizBlockProps) {
  const { t, locale } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
      if (onComplete) {
        onComplete(score);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {locale === 'ne' ? 'क्विज पूर्ण!' : 'Quiz Complete!'}
        </h2>
        <div className="text-center mb-6">
          <div className="text-5xl font-bold mb-2 text-blue-600">
            {percentage}%
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {locale === 'ne' 
              ? `तपाईंले ${questions.length} मध्ये ${score} प्रश्नहरू सही गर्नुभयो`
              : `You got ${score} out of ${questions.length} questions correct`}
          </p>
        </div>
        {percentage >= 70 ? (
          <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center mb-4">
            🎉 {locale === 'ne' ? 'शाबाश! तपाईं उत्तीर्ण हुनुभयो!' : 'Great job! You passed!'}
          </div>
        ) : (
          <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 p-4 rounded-lg text-center mb-4">
            📚 {locale === 'ne' ? 'सिक्न जारी राख्नुहोस्! सामग्री समीक्षा गर्नुहोस् र पुनः प्रयास गर्नुहोस्।' : 'Keep learning! Review the material and try again.'}
          </div>
        )}
        <div className="text-center">
          <button
            onClick={restartQuiz}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {locale === 'ne' ? 'पुनः प्रयास गर्नुहोस्' : 'Try Again'}
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {locale === 'ne' ? `प्रश्न ${currentQuestion + 1} / ${questions.length}` : `Question ${currentQuestion + 1} of ${questions.length}`}
        </span>
        {title && (
          <h2 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">
            {title}
          </h2>
        )}
      </div>

      <div className="mb-6">
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
          {question.question}
        </p>
        <div className="space-y-3">
          {question.options.map((option, index) => {
            let optionClass = 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700';
            
            if (showExplanation) {
              if (index === question.correctAnswer) {
                optionClass = 'border-green-500 bg-green-50 dark:bg-green-900/30';
              } else if (index === selectedAnswer && index !== question.correctAnswer) {
                optionClass = 'border-red-500 bg-red-50 dark:bg-red-900/30';
              }
            } else if (selectedAnswer === index) {
              optionClass = 'border-blue-500 bg-blue-50 dark:bg-blue-900/30';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full p-4 text-left border-2 rounded-lg transition-colors ${optionClass} ${
                  selectedAnswer === index && !showExplanation
                    ? 'border-blue-500'
                    : ''
                }`}
              >
                <span className="font-medium mr-2 text-gray-900 dark:text-white">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="text-gray-700 dark:text-gray-300">{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      {showExplanation && question.explanation && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
            {locale === 'ne' ? 'व्याख्या:' : 'Explanation:'}
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            {question.explanation}
          </p>
        </div>
      )}

      <div className="flex justify-end">
        {!showExplanation ? (
          <button
            onClick={handleCheckAnswer}
            disabled={selectedAnswer === null}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {locale === 'ne' ? 'उत्तर जाँच्नुहोस्' : 'Check Answer'}
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {currentQuestion < questions.length - 1 
              ? (locale === 'ne' ? 'अर्को प्रश्न' : 'Next Question') 
              : (locale === 'ne' ? 'क्विज समाप्त' : 'Finish Quiz')}
          </button>
        )}
      </div>
    </div>
  );
}
