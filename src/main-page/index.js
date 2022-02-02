import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import './main-page.css';
import Header from "./header";
import FeaturedHouse from './featured-house'
import SearchResults from '../search-results/index';
import HouseFilter from './house-filter'
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse'
import HousesContext from '../context/housesContext'

function App() {
  const allHouses = useHouses()
  const featuredHouse = useFeaturedHouse(allHouses)

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div className="container">
            <Header subtitle="Providing houses over the world" />
            <HouseFilter />
            <Switch>
              <Route path="/searchresults/:country" element={<SearchResults allHouses={allHouses} />} />
              <Route path="/house/:id" element={<HouseFromQuery allHouses={allHouses}/>} />
              <Route exact path="/" element={<FeaturedHouse house={ featuredHouse}/>} />
            </Switch>
        </div>
    </HousesContext.Provider>
    </Router>
  );
}

export default App;
