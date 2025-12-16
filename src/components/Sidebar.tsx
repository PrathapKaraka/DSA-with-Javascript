import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Menu, X, Home, PanelLeftClose, PanelLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Module, SubModule } from '@/types/module';
import { Topic } from '@/content/topics';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface SidebarProps {
  selectedSubModule: SubModule | null;
  onSelectSubModule: (subModule: SubModule | null) => void;
  topic: Topic;
}

export function Sidebar({ selectedSubModule, onSelectSubModule, topic }: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Auto-expand first module when topic changes
  useEffect(() => {
    if (topic.modules.length > 0) {
      setExpandedModules(new Set([topic.modules[0].id]));
    }
  }, [topic.id]);

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => {
      const newSet = new Set(prev);
      if (newSet.has(moduleId)) {
        newSet.delete(moduleId);
      } else {
        newSet.add(moduleId);
      }
      return newSet;
    });
  };

  const handleSelectSubModule = (subModule: SubModule) => {
    onSelectSubModule(subModule);
    setIsMobileOpen(false);
  };

  const handleGoHome = () => {
    onSelectSubModule(null);
    setIsMobileOpen(false);
  };

  const SidebarContent = () => (
    <ScrollArea className="h-full">
      <div className={cn("p-4", isCollapsed && "px-2")}>
        {/* Header with collapse toggle */}
        <div className={cn("mb-6 flex items-center", isCollapsed ? "justify-center" : "justify-between")}>
          {!isCollapsed && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                <span>{topic.icon}</span>
                {topic.title}
              </h2>
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="hidden lg:flex h-8 w-8 shrink-0"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <PanelLeft className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Home Button */}
        {isCollapsed ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleGoHome}
                className={cn(
                  "flex items-center justify-center w-full p-2 mb-3 rounded-lg transition-colors",
                  selectedSubModule === null
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <Home className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">Home</TooltipContent>
          </Tooltip>
        ) : (
          <button
            onClick={handleGoHome}
            className={cn(
              "flex items-center w-full px-3 py-2 mb-3 text-sm font-medium rounded-lg transition-colors",
              selectedSubModule === null
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <Home className="h-4 w-4 mr-2" />
            <span>Home</span>
          </button>
        )}
        
        <nav className="space-y-1">
          {topic.modules.map((module) => (
            <ModuleItem
              key={module.id}
              module={module}
              isExpanded={expandedModules.has(module.id)}
              selectedSubModuleId={selectedSubModule?.id}
              onToggle={() => toggleModule(module.id)}
              onSelectSubModule={handleSelectSubModule}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
      </div>
    </ScrollArea>
  );

  return (
    <>
      {/* Mobile toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
          isCollapsed ? "w-14" : "w-72",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <SidebarContent />
      </aside>
    </>
  );
}

interface ModuleItemProps {
  module: Module;
  isExpanded: boolean;
  selectedSubModuleId?: string;
  onToggle: () => void;
  onSelectSubModule: (subModule: SubModule) => void;
  isCollapsed: boolean;
}

function ModuleItem({ module, isExpanded, selectedSubModuleId, onToggle, onSelectSubModule, isCollapsed }: ModuleItemProps) {
  const isActive = module.subModules.some(sub => sub.id === selectedSubModuleId);

  if (isCollapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onToggle}
            className={cn(
              "flex items-center justify-center w-full p-2 mb-1 rounded-lg transition-colors",
              isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <span className="text-sm">{module.icon}</span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="right" className="flex flex-col gap-1">
          <span className="font-medium">{module.title}</span>
          <div className="text-xs text-muted-foreground space-y-1">
            {module.subModules.map(sub => (
              <button
                key={sub.id}
                onClick={() => onSelectSubModule(sub)}
                className={cn(
                  "block w-full text-left px-2 py-1 rounded hover:bg-accent",
                  selectedSubModuleId === sub.id && "bg-accent font-medium"
                )}
              >
                {sub.title}
              </button>
            ))}
          </div>
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <div className="mb-1">
      <button
        onClick={onToggle}
        className="flex items-center w-full px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-lg transition-colors"
      >
        <span className="mr-2">{module.icon}</span>
        <span className="flex-1 text-left">{module.title}</span>
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      
      {isExpanded && (
        <div className="ml-4 mt-1 space-y-1 border-l border-sidebar-border pl-3">
          {module.subModules.map((subModule) => (
            <button
              key={subModule.id}
              onClick={() => onSelectSubModule(subModule)}
              className={cn(
                "w-full px-3 py-1.5 text-sm text-left rounded-md transition-colors",
                selectedSubModuleId === subModule.id
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
              )}
            >
              {subModule.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
