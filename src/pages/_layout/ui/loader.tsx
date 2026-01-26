import { Skeleton } from '@/shared/ui/skeleton';

export const Loader = () => {
  return (
    <div
      className={
        'fade-out-100 flex animate-out flex-col space-y-3 fill-mode-forwards opacity-0 delay-200 duration-[3s] ease-in-out'
      }
    >
      <Skeleton className={'h-[125px] w-full rounded-xl'} />
      <div className={'space-y-2'}>
        <Skeleton className={'h-4 w-[250px]'} />
        <Skeleton className={'h-4 w-[200px]'} />
      </div>
      <Skeleton className={'h-[55px] w-1/2 rounded-xl'} />
    </div>
  );
};
