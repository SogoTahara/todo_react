  import React from "react";

  type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

type TodoItemProps = {
  item: Todo;
  editId: number | null;
  editText: string;
  setEditText: (value: string) => void;
  ConfirmEdit: () => void;
  Switch: (id: number) => void;
  Edit: (id: number) => void;
  Delete: (id: number) => void;
};

  export default function TodoItem({item,editId,editText,setEditText,ConfirmEdit,Switch,Edit,Delete  }: TodoItemProps) {
  return (
  
      <div
            className={
              "col-12 col-md-6 d-flex align-items-center " +
              (item.isCompleted ? "text-decoration-line-through" : "")
            }
            key={item.id}
          >
            {editId === item.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="form-control me-2"
                />
                <button className="btn btn-sm btn-success" onClick={ConfirmEdit}>
                  保存
                </button>
              </>
            ) : (
              <>
                {item.text}
                {item.isCompleted ? (
                  <button
                    className="btn btn-success"
                    onClick={() => Switch(item.id)}
                  >
                    完了
                  </button>
                ) : (
                  <button
                    className="btn btn-danger"
                    onClick={() => Switch(item.id)}
                  >
                    未完了
                  </button>
                )}
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => Edit(item.id)}
                >
                  編集
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => Delete(item.id)}
                >
                  削除
                </button>
              </>
            )}
          </div>
        )
      }
     