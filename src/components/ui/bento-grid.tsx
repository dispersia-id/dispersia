import { cn } from '@/lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-3 md:grid-cols-6 gap-4 max-w-7xl mx-auto ',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  title,
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  description,
  header,
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl w-full group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-white/[0.2] bg-background border justify-between flex flex-col space-y-4',
        className,
      )}
    >
      {header}
    </div>
  );
};
