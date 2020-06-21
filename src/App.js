import React from 'react'
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { withNamespaces } from 'react-i18next';

import i18n from './i18n';


import './App.css';

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

console.log(i18n.dir());

function App({ t }) {

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }


  return (
    <ThemeProvider theme={theme}>
    <div dir="rtl">
    <GlobalProvider>
      <button onClick={() => {changeLanguage('ur')}}>اردو</button>
      <button onClick={() => {changeLanguage('en')}}>en</button>
      <Header t={t} />
      <div className="container">
        <Balance t={t} />
        <IncomeExpenses t={t} />
        <TransactionList t={t} />
        <AddTransaction t={t} />
      </div>
    </GlobalProvider>
    </div>
    </ThemeProvider>
  );
}

export default withNamespaces()(App);