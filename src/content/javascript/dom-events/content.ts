import { ContentSection } from '@/types/module';

export const domSections: ContentSection[] = [
  {
    content: `
# DOM Manipulation

The Document Object Model (DOM) is a programming interface for HTML documents.

## DOM Tree Structure

- Document → Root node
- Element → HTML tags
- Text → Text content
- Attribute → Element attributes
`
  },
  {
    heading: 'Selecting Elements',
    content: `Different ways to select DOM elements.`,
    codeExample: `// By ID
const element = document.getElementById("myId");

// By class name (returns HTMLCollection)
const elements = document.getElementsByClassName("myClass");

// By tag name (returns HTMLCollection)
const divs = document.getElementsByTagName("div");

// Query selector (returns first match)
const first = document.querySelector(".myClass");
const nested = document.querySelector("div.container > p.text");

// Query selector all (returns NodeList)
const all = document.querySelectorAll(".myClass");

// Converting to array
const elementsArray = Array.from(document.querySelectorAll("div"));
const elementsSpread = [...document.querySelectorAll("div")];

// Traversing
const parent = element.parentElement;
const children = element.children; // HTMLCollection
const childNodes = element.childNodes; // NodeList (includes text nodes)
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;

// Closest ancestor matching selector
const container = element.closest(".container");

// Check if element matches selector
const matches = element.matches(".active");`
  },
  {
    heading: 'Creating and Modifying Elements',
    content: `DOM creation and manipulation.`,
    codeExample: `// Create element
const div = document.createElement("div");
div.id = "newDiv";
div.className = "container active";
div.textContent = "Hello World";

// Set attributes
div.setAttribute("data-id", "123");
div.dataset.userId = "456"; // data-user-id="456"

// Get attributes
const id = div.getAttribute("data-id");
const userId = div.dataset.userId;

// Modify content
div.textContent = "Plain text"; // Escapes HTML
div.innerHTML = "<span>HTML content</span>"; // Parses HTML
div.innerText = "Visible text"; // Respects CSS

// Modify styles
div.style.backgroundColor = "blue";
div.style.cssText = "color: white; padding: 10px;";

// Classes
div.classList.add("new-class");
div.classList.remove("old-class");
div.classList.toggle("active");
div.classList.replace("old", "new");
const hasClass = div.classList.contains("active");

// Append to DOM
document.body.appendChild(div);

// Insert at specific position
const parent = document.getElementById("parent");
parent.insertBefore(div, parent.firstChild);

// Modern insertion methods
parent.append(div1, div2, "text"); // Append multiple
parent.prepend(div); // Insert at beginning
element.before(newElement); // Insert before
element.after(newElement); // Insert after
element.replaceWith(newElement); // Replace

// Remove element
element.remove();
// or: parent.removeChild(element);

// Clone element
const clone = element.cloneNode(true); // true = deep clone`
  },
  {
    heading: 'Working with Forms',
    content: `Form handling in JavaScript.`,
    codeExample: `// Accessing form elements
const form = document.getElementById("myForm");
const input = form.elements.username; // by name attribute
const allInputs = form.elements;

// Getting values
const textValue = document.getElementById("textInput").value;
const checkboxChecked = document.getElementById("checkbox").checked;
const selectedOption = document.getElementById("select").value;

// Radio buttons
const radios = document.getElementsByName("gender");
let selectedRadio;
for (const radio of radios) {
  if (radio.checked) {
    selectedRadio = radio.value;
    break;
  }
}

// Multiple select
const multiSelect = document.getElementById("multiSelect");
const selectedValues = [...multiSelect.selectedOptions].map(opt => opt.value);

// Form validation
const input = document.getElementById("email");
console.log(input.validity.valid);
console.log(input.validity.valueMissing);
console.log(input.validity.typeMismatch);
console.log(input.validationMessage);

// Custom validation
input.setCustomValidity("Please enter a valid email");
input.reportValidity();

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default submission
  
  const formData = new FormData(form);
  console.log(Object.fromEntries(formData));
  
  // Submit via fetch
  fetch("/api/submit", {
    method: "POST",
    body: formData
  });
});

// Reset form
form.reset();`
  }
];

export const eventsSections: ContentSection[] = [
  {
    content: `
# Events in JavaScript

Events are actions that happen in the browser that you can respond to.

## Event Flow

1. **Capturing Phase**: Event travels down from window to target
2. **Target Phase**: Event reaches the target element
3. **Bubbling Phase**: Event bubbles up from target to window
`
  },
  {
    heading: 'Adding Event Listeners',
    content: `Different ways to handle events.`,
    codeExample: `// addEventListener (recommended)
const button = document.getElementById("myButton");

button.addEventListener("click", function(event) {
  console.log("Clicked!", event);
});

// Arrow function (no 'this' binding)
button.addEventListener("click", (e) => {
  console.log(e.target);
});

// Named function (can be removed)
function handleClick(e) {
  console.log("Clicked");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

// Options
button.addEventListener("click", handler, {
  once: true,      // Remove after first trigger
  passive: true,   // Never calls preventDefault
  capture: true    // Listen during capture phase
});

// Event object properties
button.addEventListener("click", (e) => {
  console.log(e.type);           // "click"
  console.log(e.target);         // Element that triggered event
  console.log(e.currentTarget);  // Element listener is attached to
  console.log(e.timeStamp);      // When event occurred
  console.log(e.clientX, e.clientY); // Mouse position
});

// Prevent default behavior
const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault(); // Don't navigate
});

// Stop propagation
button.addEventListener("click", (e) => {
  e.stopPropagation(); // Don't bubble up
});

// Stop immediate propagation
button.addEventListener("click", (e) => {
  e.stopImmediatePropagation(); // Don't run other listeners on same element
});`
  },
  {
    heading: 'Event Delegation',
    content: `Efficient event handling for multiple elements.`,
    codeExample: `// Without delegation (inefficient)
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
  btn.addEventListener("click", handleClick);
});

// With delegation (efficient)
const container = document.getElementById("container");
container.addEventListener("click", (e) => {
  // Check if clicked element matches selector
  if (e.target.matches(".btn")) {
    handleClick(e);
  }
  
  // Or check for specific element type
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.textContent);
  }
  
  // Handle different elements
  const button = e.target.closest(".btn");
  if (button) {
    const action = button.dataset.action;
    switch (action) {
      case "edit":
        handleEdit(button);
        break;
      case "delete":
        handleDelete(button);
        break;
    }
  }
});

// Benefits:
// 1. Works for dynamically added elements
// 2. Less memory usage
// 3. Less code to manage

// Todo list example
const todoList = document.getElementById("todoList");

todoList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  
  if (e.target.matches(".delete-btn")) {
    li.remove();
  } else if (e.target.matches(".toggle-btn")) {
    li.classList.toggle("completed");
  }
});

// Add new todo (delegation handles it automatically)
function addTodo(text) {
  const li = document.createElement("li");
  li.innerHTML = \`
    <span>\${text}</span>
    <button class="toggle-btn">Toggle</button>
    <button class="delete-btn">Delete</button>
  \`;
  todoList.appendChild(li);
}`
  },
  {
    heading: 'Common Events',
    content: `Frequently used DOM events.`,
    codeExample: `// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mousedown", handler);
element.addEventListener("mouseup", handler);
element.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY); // Viewport coordinates
  console.log(e.pageX, e.pageY);     // Page coordinates
});
element.addEventListener("mouseenter", handler); // No bubble
element.addEventListener("mouseleave", handler); // No bubble
element.addEventListener("mouseover", handler);  // Bubbles
element.addEventListener("mouseout", handler);   // Bubbles

// Keyboard events
document.addEventListener("keydown", (e) => {
  console.log(e.key);      // "Enter", "a", "ArrowUp"
  console.log(e.code);     // "Enter", "KeyA", "ArrowUp"
  console.log(e.ctrlKey);  // true if Ctrl pressed
  console.log(e.shiftKey);
  console.log(e.altKey);
  console.log(e.metaKey);  // Cmd on Mac
  
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    saveDocument();
  }
});
document.addEventListener("keyup", handler);
document.addEventListener("keypress", handler); // Deprecated

// Focus events
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);
input.addEventListener("focusin", handler);  // Bubbles
input.addEventListener("focusout", handler); // Bubbles

// Input events
input.addEventListener("input", (e) => {
  console.log(e.target.value); // Real-time value
});
input.addEventListener("change", (e) => {
  console.log(e.target.value); // On blur/enter
});

// Scroll event
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});

// Resize event
window.addEventListener("resize", () => {
  console.log(window.innerWidth, window.innerHeight);
});

// Load events
window.addEventListener("load", () => {
  console.log("Page fully loaded");
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");
});`
  },
  {
    heading: 'Custom Events',
    content: `Creating and dispatching custom events.`,
    codeExample: `// Create custom event
const customEvent = new CustomEvent("userLogin", {
  detail: {
    username: "john",
    timestamp: Date.now()
  },
  bubbles: true,
  cancelable: true
});

// Listen for custom event
document.addEventListener("userLogin", (e) => {
  console.log("User logged in:", e.detail.username);
});

// Dispatch custom event
document.dispatchEvent(customEvent);

// Practical example: Custom component
class Counter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
  }
  
  connectedCallback() {
    this.innerHTML = \`
      <button id="decrement">-</button>
      <span id="count">\${this.count}</span>
      <button id="increment">+</button>
    \`;
    
    this.querySelector("#increment").addEventListener("click", () => {
      this.count++;
      this.update();
    });
    
    this.querySelector("#decrement").addEventListener("click", () => {
      this.count--;
      this.update();
    });
  }
  
  update() {
    this.querySelector("#count").textContent = this.count;
    
    // Dispatch custom event
    this.dispatchEvent(new CustomEvent("countChanged", {
      detail: { count: this.count },
      bubbles: true
    }));
  }
}

customElements.define("my-counter", Counter);

// Listen for counter changes
document.addEventListener("countChanged", (e) => {
  console.log("Counter changed to:", e.detail.count);
});`
  }
];
