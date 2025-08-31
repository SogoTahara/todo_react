import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SearchBox({ searchTerm, setSearchTerm }) {
    return (_jsxs("div", { className: "my-3", children: [_jsx("input", { type: "text", className: "form-control", placeholder: "\u691C\u7D22...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }), _jsx("button", { onClick: () => setSearchTerm(""), children: "\u691C\u7D22\u30AF\u30EA\u30A2" })] }));
}
//# sourceMappingURL=SearchBox.js.map