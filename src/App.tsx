import { Routes, Route, Link } from "react-router-dom";
import TextBox from "./TextBox";
import WeatherBox from "./components/WeatherBox";

export default function App() {
  console.log('uuu');
  return (
    <div className="container">
      <h1>ポートフォリオ</h1>
      <nav className="mb-3">
        <Link to="/" className="me-2">Todoリスト</Link>
        <Link to="/weather">天気</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TextBox/>} />
        <Route path="/weather" element={<WeatherBox/>} />
      </Routes>
    </div>
  );
}
