import { render, screen } from "@testing-library/react"
import CatShow from "./CatShow"
import mockCats from '../mockCats'
import { MemoryRouter, Routes, Route } from 'react-router-dom'



const renderComponent = () => {
    render(
    <MemoryRouter initialEntries={["/catshow/1"]}>
      <Routes>
          <Route path="catshow/:id" element={<CatShow cats={mockCats} />}/>
      </Routes>
    </MemoryRouter>
    )
  }


describe("<CatShow />", () => {
  it("renders without crashing", () => {
    renderComponent()
     expect(screen.getByText(mockCats[0].enjoys)).toBeInTheDocument() 
     })
  })