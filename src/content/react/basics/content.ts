import { ContentSection } from '@/types/module';

export const reactIntroSections: ContentSection[] = [
  {
    heading: "What is React?",
    content: `React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It uses a component-based architecture and a virtual DOM for efficient updates.

## Core Concepts

- **Components**: Reusable UI building blocks
- **JSX**: JavaScript XML syntax extension
- **Virtual DOM**: Efficient rendering through diffing
- **Unidirectional Data Flow**: Props flow down, events flow up`,
    codeExample: `// A simple React component
import React from 'react';

function Welcome({ name }) {
  return (
    <div className="welcome">
      <h1>Hello, {name}!</h1>
      <p>Welcome to React</p>
    </div>
  );
}

// Usage
<Welcome name="Prathap" />`
  },
  {
    heading: "JSX Syntax",
    content: `JSX is a syntax extension that allows you to write HTML-like code in JavaScript. It gets compiled to regular JavaScript function calls.

## JSX Rules

1. Must return a single root element
2. Close all tags (including self-closing)
3. Use camelCase for attributes (className, onClick)
4. Use curly braces for JavaScript expressions`,
    codeExample: `// JSX examples
function Card({ title, children }) {
  const isLoggedIn = true;
  const items = ['React', 'Vue', 'Angular'];

  return (
    <div className="card">
      {/* Conditional rendering */}
      {isLoggedIn && <span>Logged In</span>}
      
      {/* Ternary operator */}
      {isLoggedIn ? <UserMenu /> : <LoginButton />}
      
      {/* Mapping arrays */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      {/* Children prop */}
      {children}
    </div>
  );
}`
  }
];

export const hooksSections: ContentSection[] = [
  {
    heading: "React Hooks",
    content: `Hooks are functions that let you use state and other React features in functional components.

## Common Hooks

| Hook | Purpose |
|------|---------|
| useState | Manage local state |
| useEffect | Side effects & lifecycle |
| useContext | Access context values |
| useRef | Mutable references |
| useMemo | Memoize expensive computations |
| useCallback | Memoize functions |`,
    codeExample: `import { useState, useEffect } from 'react';

function Counter() {
  // useState hook
  const [count, setCount] = useState(0);
  
  // useEffect hook
  useEffect(() => {
    document.title = \`Count: \${count}\`;
    
    // Cleanup function
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
  },
  {
    heading: "Custom Hooks",
    content: `Custom hooks let you extract component logic into reusable functions. They always start with "use" prefix.

## Benefits

- Code reusability
- Separation of concerns
- Cleaner components
- Easier testing`,
    codeExample: `// Custom hook for fetching data
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage in component
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(
    \`/api/users/\${userId}\`
  );

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  
  return <Profile user={data} />;
}`
  }
];

export const componentsSections: ContentSection[] = [
  {
    heading: "Component Patterns",
    content: `React components can be structured in various patterns to improve reusability and maintainability.

## Common Patterns

1. **Container/Presentational**: Separate logic from UI
2. **Compound Components**: Related components working together
3. **Render Props**: Share code via render function
4. **Higher-Order Components**: Enhance components with additional functionality`,
    codeExample: `// Container/Presentational Pattern
// Container - handles logic
function UserListContainer() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);
  
  return <UserList users={users} />;
}

// Presentational - handles UI
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Compound Component Pattern
function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

Tabs.Tab = function Tab({ id, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <button 
      className={activeTab === id ? 'active' : ''}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
};`
  }
];
