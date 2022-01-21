import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import TimeRead from "."

test("Test - TimeRead", () => {
    render(<TimeRead time={13} width="120px" height="20px" />)
    const element = screen.getByText(/13-minute read/i)
    expect(element).toBeInTheDocument()
})