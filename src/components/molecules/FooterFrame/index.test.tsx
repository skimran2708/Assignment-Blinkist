import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import FooterFrame from "."

test("Test 1 - FooterFrame", () => {
    render(<FooterFrame />)
    const text = screen.getByText(/Big ideas in small packages/i);
    expect(text).toBeInTheDocument();
})

test("Test 2 - FooterFrame", () => {
    render(<FooterFrame />)
    const text1 = screen.getByText("Editorial");
    const text2 = screen.getByText("Book lists");
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
})