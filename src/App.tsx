import { Route, Switch, Redirect } from 'react-router-dom';
import { Fragment } from 'react';
import Login from './pages/Auth';
import Contact from './pages/Contact';
import About from './pages/About';
import Collections from './pages/Collections';
import Layout from './components/Layout/Layout';
import Items from './pages/Items';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/collections'></Redirect>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/collections' exact>
            <Collections />
          </Route>
          <Route path='/collections/:itemId'>
            <Items />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
