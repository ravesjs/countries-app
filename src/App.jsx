import React from 'react'
import Header from './components/Header/Header'
import CountryList from './components/CountryList/CountryList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CountryDetails from './components/CountryDetails/CountryDetails'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path=":countryName" element={<CountryDetails />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
