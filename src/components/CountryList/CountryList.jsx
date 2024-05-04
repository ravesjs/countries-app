import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './CountryList.module.css'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CountryList = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data)
      })
      .catch((error) => {
        console.error('Failed to get countries', error)
      })
  }, [])

  return (
    <Container className="mt-4">
      <h2>List of Countries</h2>
      <Row>
        {countries.map((country) => (
          <div key={country.name.common} className={styles.countryBlock}>
            <Link to={`/country/${country.name.common}`}>
              <p>{country.name.common}</p>
            </Link>
          </div>
        ))}
      </Row>
    </Container>
  )
}

export default CountryList
