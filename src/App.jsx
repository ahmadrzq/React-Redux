import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, setName } from "./Redux/Reducers/TestReducer"

function App() {
  const storeTest = useSelector(state => state.TestReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(storeTest)
    console.log('Setelah diupdate')
    dispatch(increment())
    dispatch(setName('Coba cuy'))
  }, [])

  useEffect(() => {
    console.log(storeTest)
  }, [storeTest])

  return (
    <>
      <h1>Hallo</h1>
    </>
  )
}

export default App
