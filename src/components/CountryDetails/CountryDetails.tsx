import React, { useState, useEffect, FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './CountryDetails.module.css'
import { Container, Row, Col } from 'react-bootstrap'

interface ICountryDetails {
  name: {
    common: string
  }
  capital: string
  region: string
  population: number
  area: number
  languages: { [key: string]: string }
  flags: {
    png: string
  }
}

const CountryDetails: FC = () => {
  const { countryName } = useParams<{ countryName: string }>()
  const [countryDetails, setCountryDetails] = useState<ICountryDetails | null>(null)

  useEffect(() => {
    axios
      .get<ICountryDetails[]>(`https://restcountries.com/v3.1/name/${countryName}`)
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
    <>
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
              <img
                src={countryDetails.flags.png}
                alt={countryDetails.name.common}
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
        <Link to="/">
          <button className={styles.button}>На главную</button>
        </Link>
      </Container>
    </>
  )
}

export default CountryDetails
