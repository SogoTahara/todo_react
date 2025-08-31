import React,{useState,useEffect} from 'react'
import axios from "axios";
import TodoItem from './components/TodoItem.js';
import FilterButtons from './components/FilterButtons.js';
import SearchBox from './components/SearchBox.js';
import WeatherBox from './components/WeatherBox.js';


type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export default function TextBox() {
  const [texts, setTexts] = useState<string>('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');  
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all"); 
  const [weather, setWeather] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [list, setList] = useState<Todo[]>(() => {
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
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric&lang=ja`
      );
      setWeather(res.data);
    } catch (err) {
      console.error("天気取得失敗", err);
    }
  }
  fetchWeather();
}, []);


  const showList = list
  .filter((item) => {
    if (filter === "completed") return item.isCompleted;
    if (filter === "incomplete") return !item.isCompleted;
    return true;
  })
   .filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );


  function Typing(e: React.ChangeEvent<HTMLInputElement>) {
    setTexts(e.target.value);
  }

  function Add () {
    if (texts === '') {
      alert('空欄です');
    } else {
      setList([...list, { id: Date.now(), text: texts, isCompleted: false }]);
      setTexts('');
    }
  }
  function Delete(id: number) {
    setList(list.filter(item => item.id !== id));
  }
 function Switch(id: number) {
  setList(list.map((item) =>
    item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
  ));
}

  function Edit(id: number) {
 const target = list.find((item) => item.id === id);
   if (target) {
    setEditId(id);
    setEditText(target.text);
   }
 }
  function ConfirmEdit() {
    setList(list.map((item) =>
      item.id === editId ? { ...item, text: editText } : item
    ))
    setEditId(null)
    setEditText('')
  }

  return (
  <div className="container py-4">
      <div className="row">
       <FilterButtons filter={filter} setFilter={setFilter}/>
        {showList.map(item => (
          <TodoItem
          key={item.id}
          item={item}
          editId={editId}
          editText={editText}
          setEditText={setEditText}
          Edit={Edit}
          ConfirmEdit={ConfirmEdit}
          Switch={Switch}
          Delete={Delete}
        />
        ))}
      </div>
      <p className="text-secondary">入力中, {texts}</p>
      <input type="text" value={texts} onChange={Typing} className="border border-dark"/>
      <button className="btn btn-primary" onClick={Add}>
        追加
      </button> 

   <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

  <WeatherBox weather={weather}/>

 </div>
  );
}

