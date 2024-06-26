import { Routing } from 'routes';
import './index.scss'

import { withProviders } from "./providers";

function App() {

  return (
    <div className="app">
      <Routing/>
    </div>
  )
}

export default withProviders(App);