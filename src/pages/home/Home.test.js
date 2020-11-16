import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Home from './'

describe('<Home />', () => {
  const mockStore = configureStore([thunk])
  let store
  store = mockStore({
    charactersReducer: { characters: [] }
  })

  it('should render correct title element', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { name: /Explore o universo/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render correct input element', () => {
    const container = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    )

    expect(
      container.getByPlaceholderText(/Procure por heróis/i)
    ).toBeInTheDocument()
  })
})
