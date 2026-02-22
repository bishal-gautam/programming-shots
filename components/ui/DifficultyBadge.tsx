'use client';

interface DifficultyBadgeProps {
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const difficultyConfig = {
  beginner: {
    label: 'Beginner',
    bgColor: 'bg-green-100 dark:bg-green-900',
    textColor: 'text-green-800 dark:text-green-200',
    borderColor: 'border-green-300 dark:border-green-700',
  },
  intermediate: {
    label: 'Intermediate',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900',
    textColor: 'text-yellow-800 dark:text-yellow-200',
    borderColor: 'border-yellow-300 dark:border-yellow-700',
  },
  advanced: {
    label: 'Advanced',
    bgColor: 'bg-red-100 dark:bg-red-900',
    textColor: 'text-red-800 dark:text-red-200',
    borderColor: 'border-red-300 dark:border-red-700',
  },
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export default function DifficultyBadge({ 
  difficulty, 
  showLabel = true,
  size = 'md',
}: DifficultyBadgeProps) {
  const config = difficultyConfig[difficulty];

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${config.bgColor} ${config.textColor} ${config.borderColor} ${sizeClasses[size]}`}
    >
      <span className="w-2 h-2 rounded-full mr-1.5 bg-current" />
      {showLabel && config.label}
    </span>
  );
}
