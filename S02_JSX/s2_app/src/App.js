import React from "react"
import './Custom.css'

function App() {
  const styles = {
    innerDiv: {
      textAlign: "center",
      margin: "auto",
      width: "60%",
      border: "3px solid black",
      backgroundColor: "#73AD21",
      padding: "70px 0"
    },
    outerDiv: {
      backgroundColor: "red",
      padding: "70px 0"
    }
  }
  const sometext = "sometext"
  const somediv = <div style={{backgroundColor: 'white'}}>somediv</div>

  return (
    /*
    <div style={{backgroundColor: 'blue', padding: '70px 0'}}>
    <div className='innerdiv'>This is a green box</div>
    </div>*/
    /* <div style={styles.outerDiv}>
      <div style={styles.innerDiv}>This is a green box</div>
    </div> */
    <div style={styles.outerDiv}>
      <div style={styles.innerDiv}>{sometext}</div>
      <div style={styles.innerDiv}>{somediv}</div>
    </div>
  )
}

export default App;
