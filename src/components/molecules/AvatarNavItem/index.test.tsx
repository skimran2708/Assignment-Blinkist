import { render, screen } from "@testing-library/react"
import AvatarNavItem from "."

test("Test - AvatarNavItem", () => {
    render(<AvatarNavItem user="S" />)
    const element = screen.getByText(/S/i)
    expect(element).toBeInTheDocument()
})