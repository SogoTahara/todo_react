import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import axios from "axios";
import TodoItem from './components/TodoItem.js';
import FilterButtons from './components/FilterButtons.js';
import SearchBox from './components/SearchBox.js';
import WeatherBox from './components/WeatherBox.js';
export default function TextBox() {
    const [texts, setTexts] = useState('');
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');
    const [filter, setFilter] = useState("all");
    const [weather, setWeather] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [list, setList] = useState(() => {
        const stored = localStorage.getItem('toStoreList');
        return stored ? JSON.parse(stored) : [];
    });
    useEffect(() => {
        localStorage.setItem('toStoreList', JSON.stringify(list));
    }, [list]);
    useEffect(() => {
        async function fetchWeather() {
            try {
                const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric&lang=ja`);
                setWeather(res.data);
            }
            catch (err) {
                console.error("天気取得失敗", err);
            }
        }
        fetchWeather();
    }, []);
    const showList = list
        .filter((item) => {
        if (filter === "completed")
            return item.isCompleted;
        if (filter === "incomplete")
            return !item.isCompleted;
        return true;
    })
        .filter((item) => item.text.toLowerCase().includes(searchTerm.toLowerCase()));
    function Typing(e) {
        setTexts(e.target.value);
    }
    function Add() {
        if (texts === '') {
            alert('空欄です');
        }
        else {
            setList([...list, { id: Date.now(), text: texts, isCompleted: false }]);
            setTexts('');
        }
    }
    function Delete(id) {
        setList(list.filter(item => item.id !== id));
    }
    function Switch(id) {
        setList(list.map((item) => item.id === id ? { ...item, isCompleted: !item.isCompleted } : item));
    }
    function Edit(id) {
        const target = list.find((item) => item.id === id);
        if (target) {
            setEditId(id);
            setEditText(target.text);
        }
    }
    function ConfirmEdit() {
        setList(list.map((item) => item.id === editId ? { ...item, text: editText } : item));
        setEditId(null);
        setEditText('');
    }
    return (_jsxs("div", { className: "container py-4", children: [_jsxs("div", { className: "row", children: [_jsx(FilterButtons, { filter: filter, setFilter: setFilter }), showList.map(item => (_jsx(TodoItem, { item: item, editId: editId, editText: editText, setEditText: setEditText, Edit: Edit, ConfirmEdit: ConfirmEdit, Switch: Switch, Delete: Delete }, item.id)))] }), _jsxs("p", { className: "text-secondary", children: ["\u5165\u529B\u4E2D, ", texts] }), _jsx("input", { type: "text", value: texts, onChange: Typing, className: "border border-dark" }), _jsx("button", { className: "btn btn-primary", onClick: Add, children: "\u8FFD\u52A0" }), _jsx(SearchBox, { searchTerm: searchTerm, setSearchTerm: setSearchTerm }), _jsx(WeatherBox, { weather: weather })] }));
}
//# sourceMappingURL=TextBox.js.map