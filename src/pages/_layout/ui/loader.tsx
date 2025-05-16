import { Skeleton } from '@/shared/ui/skeleton';

export const Loader = () => {
  return (
    <div
      className={
        'flex flex-col space-y-3 opacity-0 fill-mode-forwards animate-out ease-in-out fade-out-100 delay-200 duration-[3s]'
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
