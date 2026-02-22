import { cn } from '../../lib/utils';
import { Label } from './label';

export function FieldGroup({ className, children, ...props }) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      {children}
    </div>
  );
}

export function Field({ className, children, ...props }) {
  return (
    <div className={cn('flex flex-col gap-2', className)} {...props}>
      {children}
    </div>
  );
}

export function FieldLabel({ className, ...props }) {
  return <Label className={cn('', className)} {...props} />;
}

export function FieldSeparator({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'relative flex items-center gap-3 text-sm text-muted-foreground',
        className
      )}
      {...props}
    >
      <div className="h-px flex-1 bg-border" />
      <span>{children}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

export function FieldDescription({ className, children, ...props }) {
  return (
    <p
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </p>
  );
}
