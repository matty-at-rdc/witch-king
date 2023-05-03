import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import ClassicCounter from "../../Counters/ClassicCounter"

describe("ClassicCounter", () => {
  it("renders a classic counter with the initial count set to 9", () => {
    const { getByTestId } = render(<ClassicCounter />)
    const currentCount = getByTestId("classic-counter-value")
    expect(currentCount.textContent).to.equal("9")
  })

  it("allows you to change the count by clicking the plus and minus buttons", async () => {
    const { getByTestId, getByText } = render(<ClassicCounter />)
    const currentCount = getByTestId("classic-counter-value")
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
