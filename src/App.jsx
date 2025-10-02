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
         
        <Card
        img = {{
          src : "",
          alt: ""
        }}
        title = "NFC East"
        subtitle = "Teams:"
        content = {
          [
            "Dallas Cowboys", "New York Giants", "Philadelphia Eagles", "Washington Commanders"
          ]
        } 
        />
        <Card
        img = {{
          src : "",
          alt: ""
        }}
        title = "NFC North"
        subtitle = "Teams:"
        content = {
          [
            "Chicago Bears", "Detroit Lions", "Green Bay Packers", "Minnesota Vikings"
          ]
        } 
        />
         />
        <Card
        img = {{
          src : "",
          alt: ""
        }}
        title = "NFC South"
        subtitle = "Teams:"
        content = {
          [
            "Atlanta Falcons", "Carolina Panthers", "New Orleans Saints", "Tampa Bay Buccaneers"
          ]
        } 
        />
          <Card
        img = {{
          src : "",
          alt: ""
        }}
        title = "NFC West"
        subtitle = "Teams:"
        content = {
          [
            "Arizona Cardinals", "Los Angeles Rams", "San Francisco 49ers", "Seattle Seahawks"
          ]
        } 
        />
        

    </>
  )
}

export default App
