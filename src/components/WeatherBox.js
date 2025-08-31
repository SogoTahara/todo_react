import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function WeatherBox({ weather }) {
    return (_jsxs("div", { className: "mb-3 p-3 border rounded bg-light", children: [_jsx("h5", { children: "\u4ECA\u65E5\u306E\u5929\u6C17\uFF08\u6771\u4EAC\uFF09" }), weather ? (_jsxs("p", { children: [weather.weather[0].description, " / \u6C17\u6E29: ", weather.main.temp, "\u2103"] })) : (_jsx("p", { children: "\u5929\u6C17\u3092\u53D6\u5F97\u4E2D..." }))] }));
}
//# sourceMappingURL=WeatherBox.js.map