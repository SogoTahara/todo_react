import { render, screen } from "@testing-library/react";
import TodoItem from "../src/components/TodoItem";

describe("TodoItem", () => {
  const baseItem = { id: 1, text: "テストタスク", isCompleted: false };

  it("通常時はテキストが表示される", () => {
    render(
      <TodoItem
        item={baseItem}
        editId={null}
        editText=""
        setEditText={() => {}}
        ConfirmEdit={() => {}}
        Switch={() => {}}
        Edit={() => {}}
        Delete={() => {}}
      />
    );
    expect(screen.getByText("テストタスク")).toBeInTheDocument();
    expect(screen.getByText("未完了")).toBeInTheDocument();
  });

  it("編集中は入力欄が表示される", () => {
    render(
      <TodoItem
        item={baseItem}
        editId={1}
        editText="編集中"
        setEditText={() => {}}
        ConfirmEdit={() => {}}
        Switch={() => {}}
        Edit={() => {}}
        Delete={() => {}}
      />
    );
    expect(screen.getByDisplayValue("編集中")).toBeInTheDocument();
    expect(screen.getByText("保存")).toBeInTheDocument();
  });
});
