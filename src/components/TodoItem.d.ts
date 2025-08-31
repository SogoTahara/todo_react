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
export default function TodoItem({ item, editId, editText, setEditText, ConfirmEdit, Switch, Edit, Delete }: TodoItemProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TodoItem.d.ts.map