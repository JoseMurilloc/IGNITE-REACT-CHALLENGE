import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';
import { Default } from './ui/Default';

const Routes = () => {
  return (
    <BrowserRouter>
     <Switch>
        <Route path="/" element={<Default />} >
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
     </Switch>
    </BrowserRouter>
  );
};

export default Routes;
