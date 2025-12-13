import { ThemeToggle } from './ThemeToggle';
import { TopicNav } from './TopicNav';
import { Code2, Home, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Topic, topics } from '@/content/topics';

interface HeaderProps {
  title?: string;
  selectedTopic?: Topic;
  onSelectTopic?: (topic: Topic) => void;
  showTopicNav?: boolean;
}

export function Header({ title, selectedTopic, onSelectTopic, showTopicNav = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 lg:px-8 py-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-4 pl-10 lg:pl-0">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Code2 className="h-4 w-4 text-primary" />
          </div>
          <h1 className="text-lg font-semibold text-foreground hidden md:block">
            {title || 'Learn & Code'}
          </h1>
        </Link>
        
        {showTopicNav && selectedTopic && onSelectTopic && (
          <TopicNav 
            topics={topics} 
            selectedTopic={selectedTopic} 
            onSelectTopic={onSelectTopic} 
          />
        )}
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
