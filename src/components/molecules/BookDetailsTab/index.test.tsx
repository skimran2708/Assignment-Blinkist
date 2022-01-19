import { render, screen } from "@testing-library/react"
import BookDetailsTab from "."

test("Test - BookDetailsTab", () => {
    render(<BookDetailsTab />)
    const tab = screen.getByRole("tab",{name:/Synopsis/i});
    const tablist = screen.getByRole("tablist");
    expect(tab).toHaveTextContent("Synopsis");
    expect(tablist).toBeInTheDocument();
})