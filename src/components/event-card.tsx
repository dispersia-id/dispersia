import { cn } from '@/lib/utils';
import Image from 'next/image';

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  src?: string;
  variant?: 'default' | 'primary';
}

export default function EventCard({
  className,
  src,
  variant = 'primary',
  ...props
}: EventCardProps) {
  return (
    <div
      className={cn(
        'bg-card  col-span-2 flex justify-center items-center',
        className,
        variant === 'primary' ? 'w-80 h-44' : 'w-72 h-36',
      )}
      {...props}
    >
      <Image
        src='/images/events/sch.svg'
        alt='Event'
        width={200}
        height={200}
      />
    </div>
  );
}
