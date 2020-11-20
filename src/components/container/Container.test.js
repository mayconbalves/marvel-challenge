import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Container from './'

describe('<Container />', () => {
  const mockStore = configureStore([thunk])
  let store
  store = mockStore({
    charactersReducer: { characters: [] }
  })

  const children = document.body.innerHTML = `
  <div>
    <h1>children</h1>
  </div>
`

  let props = {
    children,
    color: '#fff'
  }

  it('should render correct title element', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Container {...props} />
        </Provider>
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { Name: 'children' })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
