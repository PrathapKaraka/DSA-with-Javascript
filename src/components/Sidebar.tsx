import { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { dsaModules, Module, SubModule } from '@/content';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  selectedSubModule: SubModule | null;
  onSelectSubModule: (subModule: SubModule | null) => void;
}

export function Sidebar({ selectedSubModule, onSelectSubModule }: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set(['arrays']));
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-1">DSA with JavaScript</h2>
          <p className="text-sm text-muted-foreground">Master Data Structures & Algorithms</p>
        </div>

        {/* Home Button */}
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
        
        <nav className="space-y-1">
          {dsaModules.map((module) => (
            <ModuleItem
              key={module.id}
              module={module}
              isExpanded={expandedModules.has(module.id)}
              selectedSubModuleId={selectedSubModule?.id}
              onToggle={() => toggleModule(module.id)}
              onSelectSubModule={handleSelectSubModule}
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
          "fixed lg:sticky top-0 left-0 z-40 h-screen w-72 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out",
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
}

function ModuleItem({ module, isExpanded, selectedSubModuleId, onToggle, onSelectSubModule }: ModuleItemProps) {
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
