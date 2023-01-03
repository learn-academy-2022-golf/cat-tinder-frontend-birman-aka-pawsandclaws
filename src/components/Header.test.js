import {render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"
import userEvent from "@testing-library/user-event"

describe("<Header />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
    })
    it("has clickable links", () => {
        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        )
        userEvent.click(screen.getByText("My Profile"))
        expect(screen.getByText("My Profile")).toBeInTheDocument()
        userEvent.click(screen.getByText("Create New Profile"))
        expect(screen.getByText("Create New Profile")).toBeInTheDocument()
        userEvent.click(screen.getByText("View"))
        expect(screen.getByText("View")).toBeInTheDocument()
      })
  })