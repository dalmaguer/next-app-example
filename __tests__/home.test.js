import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe("Testing Home render", () => {
  it("render a heading", () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: 'Home Page'
    })
    expect(heading).toBeInTheDocument()
  })
})

