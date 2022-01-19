import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import BookDetailsTab from "."

test("Test - BookDetailsTab", () => {
    render(<BookDetailsTab />)
    const tab1 = screen.getByRole("tab",{name:/Synopsis/i});
    const tab2 = screen.getByRole("tab",{name:/Who/i});
    const tab3 = screen.getByRole("tab",{name:/About/i});
    const tablist = screen.getByRole("tablist");
    expect(tab1).toHaveTextContent("Synopsis");
    expect(tab2).toHaveTextContent("Who is it for?");
    expect(tab3).toHaveTextContent("About the author");
    expect(tablist).toBeInTheDocument();
})