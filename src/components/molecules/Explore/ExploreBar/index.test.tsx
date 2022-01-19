import { render, screen } from "@testing-library/react"
import ExploreBar from "."

test("Test - ExploreBar", () => {
    render(<ExploreBar list={(tab)=>{"Entrepreneur List"}} />)
    const button1 = screen.getByRole("button",{name:/Explore/i});
    const button2 = screen.getByRole("button",{name:/See recently/i});
    const button3 = screen.getByRole("button",{name:/See popular/i});
    expect(button1).toHaveTextContent("Explore by category");
    expect(button2).toHaveTextContent("See recently added titles");
    expect(button3).toHaveTextContent("See popular titles");
})