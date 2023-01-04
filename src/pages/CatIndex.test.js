import { render, screen } from "@testing-library/react"
import CatIndex from "./CatIndex"
import mockCats from '../mockCats'
import { BrowserRouter } from "react-router-dom"


describe("<CatIndex />", () => {
    const div = document.createElement("div")
    it("renders a card for each cat", () => {
      render(
      <BrowserRouter>
        <CatIndex cats={mockCats}/>, div
        </BrowserRouter>
      ); mockCats.forEach((cat)=> {
     const catName = screen.getByText(cat.name)
     expect(catName).toBeInTheDocument() 
     })
  })
})

