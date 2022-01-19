import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import book1 from "../../../assets/images/cover1.png"
import book4 from "../../../assets/images/cover4.png"
import BookCard from ".";

test("Test - BookCard1", () => {
  render(
    <BookCard
        cover={book4}
        title="The Fate of Food"
        author="Amanda Little"
        time={12}
        people={16}
        button="add"
        onClicked={() => null}
    />
  );
  const title = screen.getByText(/The Fate of Food/i);
  const author = screen.getByText(/Amanda Little/);
  const readTime = screen.getByText("12-minute read")
  const people = screen.getByText("16k reads");
  const cover = screen.getByAltText("Book Cover");
  const btn = screen.getByRole("button");
  expect(title).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(readTime).toBeInTheDocument();
  expect(people).toBeInTheDocument();
  expect(cover).toHaveAttribute("src", "test-file-stub");
  expect(btn).toHaveTextContent("Add to library");
});

test("Test - BookCard2", () => {
  render(
    <BookCard
        cover={book1}
        title="Bring Your Human To Work"
        author="Erica Keswin"
        time={13}
        button="Finished"
        onClicked={() => null}
    />
  );
  const title = screen.getByText(/Bring Your Human To Work/i);
  const author = screen.getByText(/Erica Keswin/);
  const readTime = screen.getByText("13-minute read")
  const cover = screen.getByAltText("Book Cover");
  const btn = screen.getByRole("button");
  expect(title).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(readTime).toBeInTheDocument();
  expect(cover).toHaveAttribute("src", "test-file-stub");
  expect(btn).toHaveTextContent("Finished");
});