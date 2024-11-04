import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import About from "./page"

describe("About", () => {
  it("Find text", () => {
    render(<About />)

    const text = screen.getByText("About page")

    expect(text).toBeInTheDocument()
  })
})
