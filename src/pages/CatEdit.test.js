import { render, screen } from "@testing-library/react"
import CatEdit from "./CatEdit"
import mockCats from '../mockCats'
import { MemoryRouter, Routes, Route } from 'react-router-dom'



const renderComponent = () => {
    render(
    <MemoryRouter initialEntries={["/catedit/1"]}>
      <Routes>
          <Route path="catedit/:id" element={<CatEdit cats={mockCats} />}/>
      </Routes>
    </MemoryRouter>
    )
  }


    describe("<CatEdit />", () => {
    it("has a form to input name, age, enjoys, and image", () => {
        renderComponent()
        const formName = screen.getByText("Name")
        expect(formName.getAttribute("For")).toEqual("name")

        const formAge = screen.getByText("Age")
        expect(formAge.getAttribute("For")).toEqual("age")
    
        const formEnjoys = screen.getByText("Enjoys")
        expect(formEnjoys.getAttribute("For")).toEqual("enjoys")
    
        const formImage = screen.getByText("Image URL")
        expect(formImage.getAttribute("For")).toEqual("image")
    })
})