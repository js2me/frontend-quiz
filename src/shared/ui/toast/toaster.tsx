import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

export const Toaster = (props: ToasterProps) => {
  return (
    <Sonner
      className={'group container'}
      toastOptions={{
        classNames: {
          toast:
            'group item group-[.container]:border-border group-[.container]:shadow-lg',
          description: 'group-[.item]:text-muted-foreground',
          error:
            'group-[.container]:bg-background group-[.container]:text-destructive',
          success:
            'group-[.container]:bg-background group-[.container]:text-positive',
          info: 'group-[.container]:bg-background group-[.container]:text-foreground group-[.container]:[&>[data-icon]]:hidden',
          actionButton:
            'group-[.item]:bg-primary group-[.item]:text-primary-foreground',
          cancelButton:
            'group-[.item]:bg-muted group-[.item]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};
