import React from "react";
import { render, screen } from "@testing-library/react"
import Text from "."
import "@testing-library/jest-dom"

test("Test 1 - Typography", () => {
    render(<Text variant="h1" text="H1"/>)
    const text = screen.getByText(/H1/i)
    expect(text).toBeInTheDocument()
})

test("Test 2 - Typography", () => {
    render(<Text variant="h2" text="H2"/>)
    const text = screen.getByText(/H2/i)
    expect(text).toBeInTheDocument()
})

test("Test 3 - Typography", () => {
    render(<Text variant="h3" text="H3"/>)
    const text = screen.getByText(/H3/i)
    expect(text).toBeInTheDocument()
})

test("Test 4 - Typography", () => {
    render(<Text variant="h4" text="H4"/>)
    const text = screen.getByText(/H4/i)
    expect(text).toBeInTheDocument()
})