import React from "react"

type SearchBoxProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export default function SearchBox({searchTerm,setSearchTerm}: SearchBoxProps){
return(

<div className="mb-3">
      <input
      type="text"
      placeholder="検索...🔎"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSearchTerm("")}>検索クリア</button>
   </div>
  )
}