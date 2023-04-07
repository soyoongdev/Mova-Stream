import 'animate.css'
import styles from './App.scss'
import classNames from 'classnames/bind'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { pageRoutes } from './routes'
import { WrapperLayout } from './layouts'

const cx = classNames.bind(styles)

function App() {
  return (
    <Router>
      <Routes>
        {pageRoutes.map((route, index) => {
          const Page = route.page
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <WrapperLayout>
                  <Page />
                </WrapperLayout>
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export default App
