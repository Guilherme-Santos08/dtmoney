import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import Switch from 'react-switch'

import { TransactionsProvider } from './hooks/useTransactions'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyle } from './styles/global'
Modal.setAppElement('#root')

export function App() {
  const getThemeLocalStorage = localStorage.getItem('theme')
  const theme = JSON.parse(getThemeLocalStorage || 'false')

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)
  const [checked, setChecked] = useState(theme)

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked)
  }

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  useEffect(() => {
    if (checked) {
      document.body.classList.add('dark-mode')
      localStorage.setItem('theme', JSON.stringify(true))
    } else {
      document.body.classList.remove('dark-mode')
      localStorage.removeItem('theme')
    }
  }, [checked])

  return (
    <TransactionsProvider>
      <Switch
        onChange={handleChange}
        checked={checked}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
      />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
