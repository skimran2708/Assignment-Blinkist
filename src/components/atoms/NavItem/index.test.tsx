import React from "react";
import { render, screen } from "@testing-library/react"
import NavItem from "."
import "@testing-library/jest-dom"

test("Test - NavItem 1", () => {
    render(<NavItem text="My Library" type="bold" />)
    const element = screen.getByText(/My/i)
    expect(element).toBeInTheDocument()
})

test("Test - NavItem 2", () => {
    render(<NavItem text="Pricing" type="normal" />)
    const element = screen.getByText(/Pricing/i)
    expect(element).toBeInTheDocument()
})