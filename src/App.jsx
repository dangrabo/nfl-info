import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Card
        img = {{
          src : "./rules.jpg",
          alt: ""
        }}
        title = "AFC East:"
        subtitle = "Teams:"
        content = {
          [
            "Buffalo Bills", "Miami Dolphins", "New England Patriots", "New York Jets"
          ]
        } 
      />
      <Card
        img = {{
          src : "",
          alt: ""
        }}
        title = "AFC North"
        subtitle = "Teams:"
        content = {
          [
            "Baltimore Ravens", "Cincinnati Bengals", "Cleveland Browns", "Pittsburgh Steelers"
          ]
        }
        />
        <Card
        img = {{
          src : "",
          alt: ""
        }}
        title = "AFC South"
        subtitle = "Teams"
        content = {
          [
            "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Tennessee Titans"
          ]
        }
        />  
         <Card
        img = {{
          src : "",
          alt: ""
        }}
        title = "AFC West"
        subtitle = "Teams:"
        content = {
          [
            "Denver Broncos", "Kansas City Chiefs", "Las Vegas Raiders", "Los Angeles Chargers"
          ]
        }
        />  

    </>
  )
}

export default App
