import Header from "./components/Header/Header";
import styles from './App.module.scss';
import Content from "./components/Content/Content";
import { useState } from 'react';
import Payment from "./components/Content/components/Payment/Payment";

function App() {

const [showPayment, setShowPayment] = useState(false);
const [numberOfBeers, setNumberOfBeers] = useState({});

console.log("numberOfBeers", numberOfBeers);

function showPaymentPage() {
  setShowPayment(!showPayment);
}

function addBeer(id) {
  setNumberOfBeers((beers) => {
    return {
      ...beers,
      [id] : beers[id] ? beers[id] + 1 : 1,
    }
  })
}


  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header show={showPaymentPage} />
        {
          showPayment ? (
            <Payment />
          ) : (
            <Content add={addBeer} count={numberOfBeers} />
          )
        }
    </div>
  );
}

export default App;
