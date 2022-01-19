import { render, screen } from "@testing-library/react"
import ExploreList from "."
import entrepreneurshipIcon from "../../../../assets/icons/EntrepreneurshipIcon.png"

test("Test - ExploreList", () => {
    render(<ExploreList open="1" />)
    const button = screen.getByRole("button");
    const image = screen.getByRole("img");
    expect(button).toHaveTextContent("Entrepreneurship");
    expect(image).toHaveAttribute("src", "EntrepreneurshipIcon.png");
})