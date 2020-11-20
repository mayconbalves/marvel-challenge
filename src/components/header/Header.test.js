import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Header from './'

describe('<Header />', () => {
  const mockStore = configureStore([thunk])
  let store
  store = mockStore({
    charactersReducer: { characters: [] }
  })

  it('should render correct name of StyledInput', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </MemoryRouter>
    )

    expect(
      screen.getByRole('textbox', { Name: 'hero' })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
