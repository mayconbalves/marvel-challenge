import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Input from './'

describe('<Input />', () => {
  let props = {
    onKeyDown: () => {},
    onChange: () => {},
    placeholder: 'Procure seu heróis',
    value: 'hulk',
    width: '80%',
    type: 'text',
    name: 'hero'
  }

  it('should render correct name element', () => {
    const { container } = render(
      <MemoryRouter>
        <Input {...props} />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('textbox', { Name: 'hero' })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render correct input placeholder', () => {
    const container = render(
      <MemoryRouter>
        <Input {...props} />
      </MemoryRouter>
    )

    expect(
      container.getByPlaceholderText(/Procure seu heróis/i)
    ).toBeInTheDocument()
  })

  it('shoudl call onChange', () => {
    const setup = () => {
      const utils = render(
        <MemoryRouter>
          <Input {...props} />
        </MemoryRouter>
      )

    const input = utils.getByRole('textbox', { Name: 'hero' })
      return {
        input,
        ...utils
      }
    }

    const { input } = setup()
    fireEvent.change(input, { target: { value: '' } })
    expect(input.value).toBe('hulk')
  })
})
