import React from "react"

export default function SearchBox({searchTerm,setSearchTerm}){
return(

<div className="my-3">
      <input
      type="text"
      className="form-control"
      placeholder="検索..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSearchTerm("")}>検索クリア</button>
   </div>
  )
}