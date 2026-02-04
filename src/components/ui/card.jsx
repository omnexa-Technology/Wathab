import * as React from "react";

/**
 * Card Component (shadcn/ui)
 * Base card container with support for glass-morphism effects
 */
const Card = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
));
Card.displayName = "Card";

/**
 * CardContent Component
 * Content wrapper for Card with default padding
 */
const CardContent = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardContent };
