import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Row from './Row'
import requests from '../requests'

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='TRENDING NOW' fetchUrl={requests.fetchTopRated} isLargeRow/>
      <Row title='ACTION MOVIES' fetchUrl={requests.fetchActionMovies} isLargeRow/>
      <Row title='COMEDY MOVIES' fetchUrl={requests.fetchComedyMovies} isLargeRow/>
      <Row title='HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
      <Row title='ROMANCE MOVIES' fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
      <Row title='DOCUMENTARIES' fetchUrl={requests.fetchDocumentaries} isLargeRow/>
    </div>
  )
}

export default Home
