import './App.css';
import React, { Component, Suspense } from 'react'
import { Spinner } from 'react-bootstrap';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import SlidercontextProvider from "./Contexts/Slidercontext"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { routers } from "./routers/routers"
import PublicRouter from "./routers/PublicRouter"
import PrivateRouter from "./routers/PrivateRouter"


export default class App extends Component {

  render() {

    AOS.init();
    return (
      <>
        <Router>
          <SlidercontextProvider>
            <Suspense fallback={<div className="center"><Spinner animation="border" variant="primary" /></div>}>
              <Switch>
                {
                  routers.length !== 0 ? routers.map((router, index) => (
                    router.isprivate === false ? <PublicRouter exact key={index} path={router.path} component={router.component} /> : <PrivateRouter exact role={router.roles} key={index} path={router.path} component={router.component} />
                  )) : null
                }
              </Switch>
            </Suspense>
          </SlidercontextProvider>
        </Router>
      </>
    )
  }
}