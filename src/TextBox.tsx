import React,{useEffect,useReducer} from 'react'
import axios from "axios";
import TodoItem from './components/TodoItem';
import FilterButtons from './components/FilterButtons';
import SearchBox from './components/SearchBox';



interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

const initialState = {
  texts: '',
  list:  [] as Todo[],
  filter: 'all' as 'all' | 'completed' | 'incomplete',
  searchTerm: '',
  editId: null as number | null,
  editText: '',
};

function reducer(state: typeof initialState, action: any): typeof initialState {
  switch (action.type) {
    case 'SET_TEXTS':
      return { ...state, texts: action.payload };
    case 'ADD_TODO':
      if (state.texts === '') {
        alert('空欄です');
        return state;
      }

       console.log('新しい list:', [...state.list, { id: Date.now(), text: state.texts, isCompleted: false }] );

      return {
        ...state,
        list: [...state.list, { id: Date.now(), text: state.texts, isCompleted: false }],
        texts: '',
      };
    case 'DELETE_TODO':
      return { ...state, list: state.list.filter((item) => item.id !== action.payload) };
    case 'SWITCH_TODO':
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload ? { ...item, isCompleted: !item.isCompleted } : item
        ),
      };
    case 'EDIT':
      const target = state.list.find((item) => item.id === action.payload);
      return target ? { ...state, editId: target.id, editText: target.text } : state;
    case 'SET_EDIT_TEXT':
      return { ...state, editText: action.payload };
    case 'CONFIRM_EDIT':
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === state.editId ? { ...item, text: state.editText } : item
        ),
        editId: null,
        editText: '',
      };
    case 'SET_LIST':
    return { ...state, list: action.payload };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}


export default function TextBox() {
  const [state, dispatch] = useReducer(reducer, initialState);


  
const [isInitialized, setIsInitialized] = React.useState(false);

useEffect(() => {
  const stored = localStorage.getItem('toStoreList');
  if (stored) {
    try {
      dispatch({ type: 'SET_LIST', payload: JSON.parse(stored) });
    } catch (error) {
      console.error("localStorageの読み込みに失敗:", error);
    }
  }
  setIsInitialized(true);
}, []);

useEffect(() => {
  if (isInitialized) {
    localStorage.setItem('toStoreList', JSON.stringify(state.list));
  }
}, [state.list, isInitialized]);


  const showList = state.list
    .filter((item) => {
      if (state.filter === "completed") return item.isCompleted;
      if (state.filter === "incomplete") return !item.isCompleted;
      return true;
    })
    .filter((item) =>
      item.text.toLowerCase().includes(state.searchTerm.toLowerCase())
    );

   return (
 <div className="container py-4">
      <div className="row">
        <FilterButtons
          filter={state.filter}
          setFilter={(f) => dispatch({ type: 'SET_FILTER', payload: f })}
        />
        {showList.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            editId={state.editId}
            editText={state.editText}
            setEditText={(val) => dispatch({ type: 'SET_EDIT_TEXT', payload: val })}
            Edit={(id) => dispatch({ type: 'EDIT', payload: id })}
            ConfirmEdit={() => dispatch({ type: 'CONFIRM_EDIT' })}
            Switch={(id) => dispatch({ type: 'SWITCH_TODO', payload: id })}
            Delete={(id) => dispatch({ type: 'DELETE_TODO', payload: id })}
          />
        ))}
      </div>

      <p className="text-secondary">入力中: {state.texts}</p>
      <input
        type="text"
        value={state.texts}
        onChange={(e) => dispatch({ type: 'SET_TEXTS', payload: e.target.value })}
        className="border border-dark"
      />
      <button className="btn btn-primary" onClick={() => dispatch({ type: 'ADD_TODO' })}>
        追加
      </button>
      
      <SearchBox
        searchTerm={state.searchTerm}
        setSearchTerm={(val) => dispatch({ type: 'SET_SEARCH', payload: val })}
      />

     
    </div>
  );
}
