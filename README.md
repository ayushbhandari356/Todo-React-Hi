# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh









1.  {...prevTodo}: This copies all properties of the prevTodo object into a new object. It's a way to create a shallow copy of prevTodo.
    completed: !prevTodo.completed: This overrides the completed property of the copied object with its negation. If prevTodo.completed is true, it will become false, and vice versa.

The purpose of using ...prevTodo followed by overriding completed is to update the completed property of the prevTodo object without mutating (modifying) the original prevTodo object. In React state management, it's generally a good practice to avoid mutating state directly, so using the spread syntax allows you to create a new object with the updated properties while keeping the original object intact.
