import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ExploreList from "."
import entrepreneurshipIcon from "../../../../assets/icons/EntrepreneurshipIcon.png"
import React from "react"
import "@testing-library/jest-dom"

test("Test - ExploreList", () => {
    render(<MemoryRouter><ExploreList open="1" /></MemoryRouter>)

    const button1 = screen.getByRole("button",{name:/Nature/i});
    const button2 = screen.getByRole("button",{name:/Productivity/i});
    const button3 = screen.getByRole("button",{name:/Career/i});
    expect(button1).toHaveTextContent("Nature & Environment");
    expect(button2).toHaveTextContent("Productivity");
    expect(button3).toHaveTextContent("Career & Success");
})