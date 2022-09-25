import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { Default } from './ui/Default'

import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
