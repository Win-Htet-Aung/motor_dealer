import './App.css'
import DealerList from './DealerList'
import Dealer from './Dealer'
import SearchForm from './SearchForm'

function App() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      <SearchForm />
      <DealerList>
        <Dealer id="1" />
        <Dealer id="2" />
        <Dealer id="3" />
        <Dealer id="4" />
        <Dealer id="5" />
        <Dealer id="6" />
        <Dealer id="7" />
        <Dealer id="8" />
        <Dealer id="9" />
      </DealerList>
    </div>
  )
}

export default App
