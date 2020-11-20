import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Card from './'

describe('<Card />', () => {
  const mockStore = configureStore([thunk])
  let store
  store = mockStore({
    charactersReducer: { characters: [] }
  })

  let props = {
    character: {
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/30/4c7c64437b5a1',
        extension: 'jpg'
      }
    },
    likes: [],
    handleFavorite: () => {},
    handleDesfavor: () => {}
  }

  it('should render correct empty img', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Card {...props} />
        </Provider>
      </MemoryRouter>
    )

    expect(
      screen.getByTestId(/favoritar/i)
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
