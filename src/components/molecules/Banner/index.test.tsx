import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Banner from "."

test("Test - Banner", () => {
    render(<Banner />)
    const title = screen.getByText(/Explore/i);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "test-file-stub");
    expect(title).toBeInTheDocument();
})