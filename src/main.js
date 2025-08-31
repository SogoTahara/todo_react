import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import TextBox from './TextBox.js';
const root = document.getElementById('root');
if (root) {
    createRoot(root).render(_jsx(StrictMode, { children: _jsx(TextBox, {}) }));
}
//# sourceMappingURL=main.js.map