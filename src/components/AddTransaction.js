import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = ({t}) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>{t("Add new transaction")}</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">{t("Details")}</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder={t("Enter text...")} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >{t("Amount")}<br />
            {t("Amount Illustration")}</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={t("Enter amount...")} />
        </div>
        <button className="btn">{t("Add transaction")}</button>
      </form>
    </>
  )
}
