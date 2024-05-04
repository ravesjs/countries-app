import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CountryList from './components/CountryList/CountryList'
import CountryDetails from './components/CountryDetails/CountryDetails'

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/country/:countryName" element={<CountryDetails />} />
      </Routes>
    </Router>
  )
}

export default Root
