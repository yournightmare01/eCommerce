import { Route, Switch, Redirect } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import Collections from './pages/Collections';
import Layout from './components/Layout/Layout';
import Items from './pages/Items';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import { setInitialShopItems } from './features/setShiopItems/setShopItems';
import { useAppDispatch } from './store/hooks';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('arg');
    dispatch(setInitialShopItems());
  }, []);

  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/collections' />
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
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
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
