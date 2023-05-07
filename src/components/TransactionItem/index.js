// Write your code here
import './index.css'

const TransactionItem = props => {
  const {TransactionDetails, deleteTransactionItem} = props
  const {title, type, amount, id} = TransactionDetails
  const onClickDelete = () => {
    deleteTransactionItem(id, type, amount)
  }
  return (
    <li className="ListItem">
      <div className="TransactionItem">
        <p>{title}</p>
        <p>{type}</p>
        <p>{amount}</p>
        <button data-testid="delete" onClick={onClickDelete} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
