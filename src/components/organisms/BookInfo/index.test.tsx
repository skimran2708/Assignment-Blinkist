import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import BookInfo from "."
import React from "react"
import "@testing-library/jest-dom"

test("Test - BookInfo", () => {
    render(<MemoryRouter><BookInfo /></MemoryRouter>)

    const text = screen.getByText(/Beyond/i);
    const image = screen.getByAltText("Book")
    expect(text).toBeInTheDocument();
    expect(image).toHaveAttribute('src',"test-file-stub")
})