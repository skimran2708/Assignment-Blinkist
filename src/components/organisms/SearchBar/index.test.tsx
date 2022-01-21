import { render, screen } from "@testing-library/react"
import SearchBar from "."
import React from "react"
import "@testing-library/jest-dom"

test("Test - SearchBar", () => {
    render(<SearchBar />)

    const textfield = screen.getByPlaceholderText("Search by title or author");
    const image = screen.getByRole("img")
    expect(textfield).toBeInTheDocument();
    expect(image).toHaveAttribute('src',"test-file-stub")
})