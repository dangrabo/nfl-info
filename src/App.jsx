import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Card
        img = {{
          src : "",
          alt: ""
        }}
        title = "Title"
        subtitle = "subtitle"
        content = {
          [
            "line 1", "line 2", "line 3"
          ]
        } 
      />

    </>
  )
}

export default App
