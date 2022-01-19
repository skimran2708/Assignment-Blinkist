import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ExploreItem from "."
import entrepreneurshipIcon from "../../../../assets/icons/EntrepreneurshipIcon.png"

test("Test - ExploreItem", () => {
    render(<ExploreItem 
        iconName= {entrepreneurshipIcon}
        categoryName="Entrepreneurship" 
        onClick={()=>{}} />)
    const button = screen.getByRole("button");
    const image = screen.getByRole("img");
    expect(button).toHaveTextContent("Entrepreneurship");
    expect(image).toHaveAttribute("src", "test-file-stub");
})