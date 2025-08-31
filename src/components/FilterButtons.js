import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function FilterButtons({ filter, setFilter }) {
    return (_jsxs("div", { className: "mb-3", children: [_jsx("button", { className: `btn me-2 ${filter === "all" ? "btn-primary" : "btn-outline-secondary"}`, onClick: () => setFilter("all"), children: "\u5168\u3066" }), _jsx("button", { className: `btn me-2 ${filter === "completed" ? "btn-primary" : "btn-outline-secondary"}`, onClick: () => setFilter("completed"), children: "\u5B8C\u4E86\u306E\u307F" }), _jsx("button", { className: `btn ${filter === "incomplete" ? "btn-primary" : "btn-outline-secondary"}`, onClick: () => setFilter("incomplete"), children: "\u672A\u5B8C\u4E86\u306E\u307F" })] }));
}
//# sourceMappingURL=FilterButtons.js.map