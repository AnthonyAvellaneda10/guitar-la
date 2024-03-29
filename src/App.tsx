import { useEffect, useReducer } from "react"
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import Footer from "./components/Footer"
import Scroll from "./components/Scroll"
import { cartReducer, initialState } from "./reducers/cart-reducer"
import useScrollUp from "./hooks/useScrollUp"

function App() {

  const [state, dispatch] = useReducer( cartReducer, initialState )
  const { showScrollButton } = useScrollUp();

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <>

      <Header
        cart={state.cart}
        dispatch={dispatch}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {state.data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              dispatch={dispatch}
            />
          ))}
        </div>
      </main>

      <Footer currentYear={currentYear}/>

      <Scroll showScrollButton={showScrollButton}/>

    </>
  )
}


export default App
