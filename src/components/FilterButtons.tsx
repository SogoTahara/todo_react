import React from "react"

type FilterButtonsProps = {
  filter: "all" | "completed" | "incomplete";
  setFilter: (filter: "all" | "completed" | "incomplete")=> void;
}

export default function FilterButtons({filter ,setFilter}: FilterButtonsProps){
  return(
  
  <div className="mb-3">
        <button
          className={`btn me-2 ${filter === "all" ? "btn-primary" : "btn-outline-secondary"}`}
          onClick={() => setFilter("all")}
        >
          全て
        </button>
        <button
          className={`btn me-2 ${filter === "completed" ? "btn-primary" : "btn-outline-secondary"}`}
          onClick={() => setFilter("completed")}
        >
          完了のみ
        </button>
        <button
          className={`btn ${filter === "incomplete" ? "btn-primary" : "btn-outline-secondary"}`}
          onClick={() => setFilter("incomplete")}
        >
          未完了のみ
        </button>
      </div>
  );
}