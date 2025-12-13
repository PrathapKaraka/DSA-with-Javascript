import { cn } from '@/lib/utils';
import { Topic } from '@/content/topics';

interface TopicNavProps {
  topics: Topic[];
  selectedTopic: Topic;
  onSelectTopic: (topic: Topic) => void;
}

export function TopicNav({ topics, selectedTopic, onSelectTopic }: TopicNavProps) {
  return (
    <nav className="flex items-center gap-1 p-1 bg-muted/50 rounded-lg">
      {topics.map((topic) => (
        <button
          key={topic.id}
          onClick={() => onSelectTopic(topic)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all",
            selectedTopic.id === topic.id
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-background"
          )}
        >
          <span>{topic.icon}</span>
          <span className="hidden sm:inline">{topic.title}</span>
        </button>
      ))}
    </nav>
  );
}
