import { ThemeToggle } from './ThemeToggle';
import { Code2 } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 lg:px-8 py-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-3 pl-10 lg:pl-0">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Code2 className="h-4 w-4 text-primary" />
        </div>
        <h1 className="text-lg font-semibold text-foreground">
          {title || 'DSA with JavaScript'}
        </h1>
      </div>
      <ThemeToggle />
    </header>
  );
}
