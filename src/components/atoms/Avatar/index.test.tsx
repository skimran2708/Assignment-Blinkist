import { render, screen } from "@testing-library/react"
import AvatarIcon from "."

test("avatarIconTest", () => {
    render(<AvatarIcon letter="A" />)
    const element = screen.getByText(/A/i)
    expect(element).toBeInTheDocument()
})