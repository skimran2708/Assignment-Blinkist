import React from "react";
import { render, screen } from "@testing-library/react"
import AvatarIcon from "."
import "@testing-library/jest-dom"

test("avatarIconTest", () => {
    render(<AvatarIcon letter="A" />)
    const element = screen.getByText(/A/i)
    expect(element).toBeInTheDocument()
})