import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Field,
  FieldGroup,
  FieldLabel,
} from './ui/field';

export function LoginForm({ className, onSubmit, ...props }) {
  return (
    <div className="w-full max-w-xs">

      <form
        className={cn('flex flex-col gap-6 w-full', className)}
        onSubmit={onSubmit}
        {...props}
      >
        <FieldGroup className="w-80">
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-2xl font-bold">Login to your account</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Enter your credentials below to access the studio
            </p>
          </div>

          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="admin"
              required
            />
          </Field>

          <Field>
            <div className="flex items-center">
              <FieldLabel htmlFor="password">Password</FieldLabel>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </Field>

          <Field>
            <Button type="submit" className="w-full cursor-pointer">
              Login
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
