import { Route, Switch, Redirect } from 'react-router-dom';
import { Fragment } from 'react';
import Login from './pages/Auth';
import Contact from './pages/Contact';
import About from './pages/About';
import Collections from './pages/Collections';
import Layout from './components/Layout/Layout';

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
          <Route path='/collections'>
            <Collections />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
