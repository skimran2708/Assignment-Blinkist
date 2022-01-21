import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ExploreMenu from "."
import { MemoryRouter } from "react-router-dom"

test("Test - ExploreMenu open", () => {
    render(<MemoryRouter><ExploreMenu open={true} /></MemoryRouter>)
    const button1 = screen.getByRole("button",{name:/Nature/i});
    const button2 = screen.getByRole("button",{name:/Productivity/i});
    const button3 = screen.getByRole("button",{name:/Career/i});
    expect(button1).toHaveTextContent("Nature & Environment");
    expect(button2).toHaveTextContent("Productivity");
    expect(button3).toHaveTextContent("Career & Success");
})

test("Test - ExploreMenu close", () => {
    render(<MemoryRouter><ExploreMenu open={false} /></MemoryRouter>)
})