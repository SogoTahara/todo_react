import { render, screen, fireEvent } from "@testing-library/react";
import FilterButtons from "../src/components/FilterButtons";

describe("FilterButtons", () => {
  it("renders all three filter buttons", () => {
    render(<FilterButtons filter="all" setFilter={() => {}} />);
    
    expect(screen.getByText("全て")).toBeInTheDocument();
    expect(screen.getByText("完了のみ")).toBeInTheDocument();
    expect(screen.getByText("未完了のみ")).toBeInTheDocument();
  });

  it("calls setFilter when buttons are clicked", () => {
    const mockSetFilter = vi.fn()
    render(<FilterButtons filter="all" setFilter={mockSetFilter} />);

    fireEvent.click(screen.getByText("完了のみ"));
    expect(mockSetFilter).toHaveBeenCalledWith("completed");

    fireEvent.click(screen.getByText("未完了のみ"));
    expect(mockSetFilter).toHaveBeenCalledWith("incomplete");
  });
});
