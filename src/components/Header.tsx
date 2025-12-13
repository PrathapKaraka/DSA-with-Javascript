import { ThemeToggle } from './ThemeToggle';
import { Code2, Home, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 lg:px-8 py-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-3 pl-10 lg:pl-0">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Code2 className="h-4 w-4 text-primary" />
          </div>
          <h1 className="text-lg font-semibold text-foreground">
            {title || 'DSA with JavaScript'}
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="p-2 rounded-md hover:bg-accent transition-colors"
          title="Home"
        >
          <Home className="h-5 w-5 text-foreground" />
        </Link>
        <Link
          to="/about"
          className="p-2 rounded-md hover:bg-accent transition-colors"
          title="About"
        >
          <User className="h-5 w-5 text-foreground" />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
