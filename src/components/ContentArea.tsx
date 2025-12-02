import { SubModule } from '@/data/dsaModules';
import { CodeBlock } from './CodeBlock';
import { ThemeToggle } from './ThemeToggle';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookOpen } from 'lucide-react';

interface ContentAreaProps {
  subModule: SubModule | null;
}

export function ContentArea({ subModule }: ContentAreaProps) {
  if (!subModule) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center max-w-md px-4">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Welcome to DSA with JavaScript
          </h2>
          <p className="text-muted-foreground">
            Select a topic from the sidebar to start learning. Each module contains explanations, 
            time complexity analysis, and practical code examples.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-background min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-6 lg:px-8 py-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h1 className="text-lg font-semibold text-foreground pl-10 lg:pl-0">
          {subModule.title}
        </h1>
        <ThemeToggle />
      </header>

      {/* Content */}
      <ScrollArea className="flex-1">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8 animate-fade-in">
          {/* Markdown content */}
          <article className="prose prose-slate dark:prose-invert max-w-none mb-8">
            <MarkdownContent content={subModule.content} />
          </article>

          {/* Code example */}
          {subModule.codeExample && (
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">{'</>'}</span>
                Code Example
              </h2>
              <CodeBlock code={subModule.codeExample} />
            </section>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.trim().split('\n');
  const elements: JSX.Element[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Headers
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="text-3xl font-bold text-foreground mb-4 mt-8 first:mt-0">
          {line.slice(2)}
        </h1>
      );
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-semibold text-foreground mb-3 mt-6">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-semibold text-foreground mb-2 mt-4">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Tables
    if (line.includes('|') && lines[i + 1]?.includes('---')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].includes('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      elements.push(<TableComponent key={`table-${i}`} lines={tableLines} />);
      continue;
    }

    // Lists
    if (line.startsWith('- ') || line.match(/^\d+\./)) {
      const listItems: string[] = [];
      const isOrdered = line.match(/^\d+\./);
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].match(/^\d+\./) || lines[i].startsWith('  '))) {
        listItems.push(lines[i]);
        i++;
      }
      elements.push(
        <ListComponent key={`list-${i}`} items={listItems} ordered={!!isOrdered} />
      );
      continue;
    }

    // Paragraphs
    if (line.trim()) {
      elements.push(
        <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
          <InlineMarkdown text={line} />
        </p>
      );
    }
    i++;
  }

  return <>{elements}</>;
}

function InlineMarkdown({ text }: { text: string }) {
  // Bold
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={idx} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          );
        }
        // Inline code
        const codeParts = part.split(/(`[^`]+`)/g);
        return codeParts.map((codePart, codeIdx) => {
          if (codePart.startsWith('`') && codePart.endsWith('`')) {
            return (
              <code
                key={`${idx}-${codeIdx}`}
                className="px-1.5 py-0.5 rounded bg-code-bg text-code-text font-mono text-sm"
              >
                {codePart.slice(1, -1)}
              </code>
            );
          }
          return <span key={`${idx}-${codeIdx}`}>{codePart}</span>;
        });
      })}
    </>
  );
}

function TableComponent({ lines }: { lines: string[] }) {
  const headers = lines[0].split('|').filter(h => h.trim());
  const rows = lines.slice(2).map(row => row.split('|').filter(c => c.trim()));

  return (
    <div className="overflow-x-auto my-6 rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left font-semibold text-foreground border-b border-border"
              >
                {header.trim()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-border last:border-0">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 text-muted-foreground">
                  <InlineMarkdown text={cell.trim()} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ListComponent({ items, ordered }: { items: string[]; ordered: boolean }) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={`my-4 space-y-2 ${ordered ? 'list-decimal' : 'list-disc'} list-inside`}>
      {items.map((item, idx) => {
        const text = item.replace(/^[-\d.]+\s*/, '').trim();
        return (
          <li key={idx} className="text-muted-foreground">
            <InlineMarkdown text={text} />
          </li>
        );
      })}
    </Tag>
  );
}
