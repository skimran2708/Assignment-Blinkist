import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Blinks from "."
import { MemoryRouter } from "react-router-dom"

test("Test - Blinks 1", () => {
    render(<MemoryRouter><Blinks /></MemoryRouter>)
    const title = screen.getByText(/Employee to Entrepreneur/i);
    const author = screen.getByText(/Steve Glaveski/);
    const people = screen.getByText("1.2k reads");
    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(people).toBeInTheDocument();
})

test("Test - Blinks 2", () => {
    render(<MemoryRouter><Blinks /></MemoryRouter>)
    const category1 = screen.getByText(/Trending Blinks/i);
    const category2 = screen.getByText(/Just added/i);
    const category3 = screen.getByText(/Featured audio blinks/i);
    expect(category1).toBeInTheDocument();
    expect(category2).toBeInTheDocument();
    expect(category3).toBeInTheDocument();
})