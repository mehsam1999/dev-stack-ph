## 💻 Project Name

**DevStack**

## 🔗 Live Website Link 

```bash
    https://devstack-ph.netlify.app/
```

## 📝 Description

DevStack is a simple and interactive website that helps developers explore different technologies and build their ideal development stack. Users can browse available technologies, view their details, add their preferred technologies to a personal stack, and easily manage their selections.

## 🚀 Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify

## ✨ Features

- **Technology Exploration and Selection:** Users can explore different technologies with details such as category, description, difficulty level, rating, icons, and badges. They can add their preferred technologies to build a personalized development stack.

- **Interactive Stack Management:** Users can view their selected technologies in the "Your Stack" section, remove individual technologies, or remove all selected technologies at once. Selected technologies are visually highlighted, and their Add to Stack buttons are automatically disabled to prevent duplicate selections.

- **Responsive UI with User Feedback:** The application provides a responsive interface across different screen sizes and uses toast notifications to give immediate feedback when technologies are added or removed. A loading state is also displayed while technology data is being fetched.

## 📚 React Concepts

### 1. What is JSX, and why is it used in React?

**JSX** is a JavaScript syntax extension that is mostly used in React to specify how the user interface (UI) should appear in a highly visual layout that resembles HTML. It is used in React to make UI components easier to create and understand.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child, while **state** stores and manages data that can change inside a component. Props are read only, but state can be updated using functions like `setState`.

### 3. What does the `useState` hook do, and where did you use it in this project?

The **`useState`** hook is used to create and manage changing data in a React component. In this project, I used it in **`App.tsx`** to manage the selected technologies with `addToStack`, and also used `setAddToStack` to add, remove, and remove all technologies from the stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**`useEffect`** is used to perform side effects such as fetching data or interacting with external systems after rendering. However, in this project, **I did not need `useEffect`** because the JSON data is loaded using `fetch()` with React's `use()` and `Suspense`.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique **`key`** helps React identify which list items have changed, been added, or removed. In this project, I used `key={item.id}` because every technology has a unique ID.

### 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means displaying different UI elements based on a condition. In `YourStack`, I used `addToStack.length === 0` to show **"Your stack is empty."** when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from a parent component to a child component using **props**. A child can send data back by calling a **callback function** received from the parent as a prop, such as `setAddToStack` in this project.  

