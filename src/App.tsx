import { Routes, Route, Link } from "react-router-dom";
import TextBox from "./TextBox";
import WeatherBox from "./components/WeatherBox";
import React, { useState } from "react";

export default function App() {
  
  const [pages, setPages] = useState<{ path: string; name: string }[]>([
    { path: "/", name: "Todoリスト" },
    { path: "/weather", name: "天気" },
  ]);

  const [newPage, setNewPage] = useState("");

  const addPage = () => {
    if (!newPage) return;
    const path = "/" + newPage;
   
    if (pages.filter((p) => p.path === path).length>0) {
    alert("同じページ名が存在します");
    return; 
  }
    setPages([...pages, { path, name: newPage }]);
    setNewPage("");
  };

  return (
    <div className="container">
      <h1>ポートフォリオ</h1>

      <nav className="mb-3">
        {pages.map((page) => (
          <Link key={page.path} to={page.path} className="me-2">
            {page.name}
          </Link>
        ))}
      </nav>

     <div>
        <input
          type="text"
          value={newPage}
          onChange={(e) => setNewPage(e.target.value)}
          placeholder="新しいページ名"
          className="border border-dark me-2 "
        />
        <button className="btn btn-sm btn-primary" onClick={addPage}>
          ページ追加
        </button>
      </div>

      <Routes>
        {pages.map((page) =>
          page.path === "/weather" ? (
            <Route key={page.path} path={page.path} element={<WeatherBox />} />
          ) : (
            <Route key={page.path} path={page.path} element={<TextBox />} />
          )
        )}
      </Routes>
    </div>
  );
}
