import { Provider } from 'react-redux'

import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import ReduxCounter from "../../Counters/ReduxCounter"
import {getStore} from "../../store"

const customRender = (ui, { preloadedState, store = getStore(preloadedState), ...renderOptions } = {}) => {

  const Wrapper = ({ children }) => (
    <Provider store={getStore({counter : {value: 9}})}>
      {children}
    </Provider>
  )

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

describe("ReduxCounter", () => {
  it("renders a classic counter with the initial count set to 9", () => {
    const { getByTestId } = customRender(<ReduxCounter />)
    const currentCount = getByTestId("redux-counter-value")
    expect(currentCount.textContent).to.equal("9")
  })

  it("allows you to change the count by clicking the plus and minus buttons", async () => {
    const { getByTestId, getByText } = customRender(<ReduxCounter />)
    const currentCount = getByTestId("redux-counter-value")
    expect(currentCount.textContent).to.equal("9")
    const plusButton = getByText("+")
    const minusButton = getByText("-")

    const user = userEvent.setup()
    await user.click(plusButton)
    expect(currentCount.textContent).to.equal("10")
    await user.click(minusButton)
    expect(currentCount.textContent).to.equal("9")
    await user.click(minusButton)
    expect(currentCount.textContent).to.equal("8")
  })
})
