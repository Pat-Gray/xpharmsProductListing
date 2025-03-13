import { cn } from '../../lib/utils';
import { Check } from 'lucide-react';

interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function ProgressSteps({ steps, currentStep, className }: ProgressStepsProps) {
  return (
    <nav className={cn('mx-auto w-full max-w-3xl', className)}>
      <ol className="flex items-center">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <li
              key={step}
              className={cn(
                'flex items-center',
                index !== steps.length - 1 ? 'flex-1' : ''
              )}
            >
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full',
                    'text-sm font-semibold',
                    {
                      'bg-green-600 text-white': isCompleted,
                      'bg-green-100 text-green-600 ring-2 ring-green-600':
                        isCurrent,
                      'bg-gray-100 text-gray-500': !isCompleted && !isCurrent,
                    }
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span
                  className={cn('mt-2 text-xs', {
                    'text-green-600': isCompleted || isCurrent,
                    'text-gray-500': !isCompleted && !isCurrent,
                  })}
                >
                  {step}
                </span>
              </div>
              {index !== steps.length - 1 && (
                <div
                  className={cn('h-0.5 w-full', {
                    'bg-green-600': isCompleted,
                    'bg-gray-200': !isCompleted,
                  })}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}