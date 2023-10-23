import { useEffect } from "react"
import { useSelector } from "react-redux"

function App() {
  const storeTest = useSelector(state => state.TestReducer)

  useEffect(() => {
    console.log(storeTest)
  }, [])


  return (
    <>
      <h1>Hallo</h1>
    </>
  )
}

export default App
