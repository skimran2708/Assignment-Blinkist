import React from "react";
import { render, screen } from "@testing-library/react"
import ExploreButton from "."
import "@testing-library/jest-dom"

test("Test - ExploreButton", () => {
    render(<ExploreButton />)
    const button = screen.getByRole("button")
    const icon = screen.getAllByTestId("KeyboardArrowDownIcon")
    expect(button).toHaveTextContent("Explore");
    expect(icon).toBeTruthy()
})