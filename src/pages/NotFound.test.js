import {render, screen } from "@testing-library/react"
import { BrowserRouter, Routes } from "react-router-dom"
import NotFound from "./NotFound"

describe("<NotFound />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
    render(
        <NotFound />, div
    )
    })
    it("renders a logo with a src and alt", () => {
        const div = document.createElement("div")
        render(
            <NotFound />, div
        )
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "https://ih1.redbubble.net/image.1127044218.4398/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg")
        expect(logo).toHaveAttribute("alt", "404 page with cat")
      })
  })