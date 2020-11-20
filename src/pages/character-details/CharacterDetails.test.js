import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import CharacterDetails from './'

describe('<CharacterDetails />', () => {
  const mockStore = configureStore([thunk])
  let store
  store = mockStore({
    charactersReducer: { characters: [] }
  })

  it('should render link logo', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <CharacterDetails />
        </Provider>
      </MemoryRouter>
    )

    expect(
      screen.getByRole('link', { name: /logo/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render logo image', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <CharacterDetails />
        </Provider>
      </MemoryRouter>
    )

    expect(
      screen.getByRole('img', { name: /marvel/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render title when have comics', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <CharacterDetails />
        </Provider>
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { name: /Últimos lançamentos/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render title without comics', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <CharacterDetails />
        </Provider>
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { name: /Not found comics:/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
