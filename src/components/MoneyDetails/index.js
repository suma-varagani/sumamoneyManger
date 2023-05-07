import './index.css'

const MoneyDetails = props => {
  const {Income, Expenses, Balance} = props
  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />

        <div>
          <p className="title">Your Balance</p>
          <p className="money" data-testid="balanceAmount">
            Rs {Balance}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />

        <div>
          <p className="title">Your Income</p>
          <p className="money" data-testid="incomeAmount">
            Rs {Income}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />

        <div>
          <p className="title">Your Expenses</p>
          <p className="money" data-testid="expensesAmount">
            Rs {Expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
