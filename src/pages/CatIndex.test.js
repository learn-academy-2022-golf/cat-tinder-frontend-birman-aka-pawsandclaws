import { render, screen } from "@testing-library/react"
import CatIndex from "./CatIndex"
import mockCats from '.../mockCats'

describe("<CatIndex />", () => {
    const div = document.createElement("div")
    it("renders a card for each cat", () => 
        render(<CatIndex cats={mockCats}/>, div))
     mockCats.forEach((cat)=> {
     const nameElement = screen.getByText(cat.name)
  })
})