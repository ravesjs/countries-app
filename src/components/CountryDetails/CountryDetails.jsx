import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './CountryDetails.module.css'
import { Container, Row, Col, Image } from 'react-bootstrap'

const CountryDetails = () => {
  const { countryName } = useParams()
  const [countryDetails, setCountryDetails] = useState(null)

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => {
        setCountryDetails(response.data[0])
      })
      .catch((error) => {
        console.error('There was a problem fetching the country details:', error)
      })
  }, [countryName])

  if (!countryDetails) {
    return <div className={styles.loading}>Loading...</div>
  }

  return (
    <Container className={styles.container}>
      <h2>{countryDetails.name.common}</h2>
      <Row>
        <Col sm={6}>
          <p>Capital: {countryDetails.capital}</p>
          <p>Region: {countryDetails.region}</p>
          <p>Population: {countryDetails.population}</p>
          <p>Area: {countryDetails.area} km²</p>
          <p>Language(s): {Object.values(countryDetails.languages).join(', ')}</p>
        </Col>
        <Col sm={6} className="d-flex justify-content-center align-items-center">
          <div className="image-wrapper">
					<img src={countryDetails.flags.png} alt={countryDetails.name.common} className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CountryDetails
