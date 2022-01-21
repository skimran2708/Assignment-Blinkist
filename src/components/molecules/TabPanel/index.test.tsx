import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import TablePanel from "."

test("Test 1 - TablePanel", () => {
    render(<TablePanel value={0} />)
    const title = screen.getByText(/Bring Your Human To Work/i);
    const author = screen.getByText(/Erica Keswin/);
    const peopleRead = screen.getByText("16k reads")
    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(peopleRead).toBeInTheDocument();
})

test("Test 2 - TablePanel", () => {
    render(<TablePanel value={1} />)
})