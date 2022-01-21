import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import BookDetailsPage from "."
import React from "react"
import "@testing-library/jest-dom"

test("Test - BookDetailsPage", () => {
    render(<MemoryRouter><BookDetailsPage /></MemoryRouter>)

    const text1 = screen.getByText(/Get the key ideas from/i);
    const text2 = screen.getByText(/15-minute read/i);
    const image = screen.getByAltText("Book")
    expect(text1).toBeInTheDocument();
    expect(image).toHaveAttribute('src',"test-file-stub")
    expect(text2).toBeInTheDocument();
})