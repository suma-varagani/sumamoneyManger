import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'INCOME',
    balance: 0,
    expenses: 0,
    income: 0,
    TransactionItemList: '',
  }

  deleteTransactionItem = (id, type, amount) => {
    const {TransactionItemList} = this.state
    const updatedList = TransactionItemList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({TransactionItemList: updatedList})
    if (type === 'Income') {
      this.setState(prevState => ({
        income: prevState.income - parseInt(amount),
        balance: prevState.balance - amount,
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses - parseInt(amount),
        balance: prevState.balance + parseInt(amount),
      }))
    }
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  AddTransaction = event => {
    event.preventDefault()

    const {amount, type, title} = this.state

    if (type === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: parseInt(prevState.expenses) + parseInt(prevState.amount),
      }))

      this.setState(prevState => ({
        balance: parseInt(prevState.income) - parseInt(prevState.expenses),
      }))
    } else {
      this.setState(prevState => ({
        income: parseInt(prevState.income) + parseInt(prevState.amount),
      }))

      this.setState(prevState => ({
        balance: parseInt(prevState.income) - parseInt(prevState.expenses),
      }))
    }
    let typeVal
    if (type === 'Expenses') {
      typeVal = transactionTypeOptions[1].displayText
    } else {
      typeVal = transactionTypeOptions[0].displayText
    }
    const transactionItem = {id: uuidv4(), title, amount, type: typeVal}
    this.setState(prevState => ({
      TransactionItemList: [...prevState.TransactionItemList, transactionItem],
    }))
    this.setState({title: '', amount: ''})
  }

  render() {
    const {
      income,
      balance,
      expenses,
      TransactionItemList,
      title,
      amount,
    } = this.state
    let TransItem
    if (TransactionItemList !== '') {
      TransItem = (
        <ul>
          {TransactionItemList.map(eachTransaction => (
            <TransactionItem
              TransactionDetails={eachTransaction}
              key={eachTransaction.id}
              deleteTransactionItem={this.deleteTransactionItem}
            />
          ))}
        </ul>
      )
    }

    return (
      <div className="container">
        <div className="welcome-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="welcome-para">
            Welcome back to your{' '}
            <span className="money-manager">Money Manager</span>
          </p>
        </div>
        <MoneyDetails Balance={balance} Income={income} Expenses={expenses} />
        <div className="transaction-container">
          <div className="add-transaction-con">
            <h1>Add Transaction</h1>
            <form onSubmit={this.AddTransaction}>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                id="title"
                placeholder="TITLE"
                value={title}
                onChange={this.onChangeTitle}
              />
              <br />
              <label htmlFor="amount">AMOUNT</label>
              <br />
              <input
                id="amount"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <br />
              <label htmlFor="transaction-type">TYPE</label>
              <br />
              <select id="transaction-type" onChange={this.onChangeType}>
                <option value={transactionTypeOptions[0].optionId} selected>
                  Income
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  Expenses
                </option>
              </select>
              <br />
              <button type="submit"> Add</button>
            </form>
          </div>
          <div className="history-con">
            <h1>History</h1>
            <div className="history-item">
              <p className="item-heading">Title</p>
              <p className="item-heading">Amount</p>
              <p className="item-heading">Type</p>
            </div>
            {TransItem}
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
