import {render, screen } from "@testing-library/react"
import { BrowserRouter, Routes } from "react-router-dom"
import Home from "./Home"

describe("<Home />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
    render(
        <Home />, div
    )
    })
    it("renders a logo with a src and alt", () => {
        const div = document.createElement("div")
        render(
            <Home />, div
        )
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "https://marketplace.canva.com/EAE1bgLSi2M/1/0/1245w/canva-white-free-cute-funny-cat-t-shirt-vf3P1-P68aQ.jpg")
        expect(logo).toHaveAttribute("alt", "a cute picture of a cat")
      })
  })