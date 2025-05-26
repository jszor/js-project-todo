import Header from "./components/header/Header"
import Main from "./components/main/Main"

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
    </div>
  )
}
