import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css';
import HomePage from './components/Home.page';
import RQSuperHeroesPage from './components/RQSuperHeroes.page';
import SuperheroesPage from './components/Superheroes.page';
import RQSuperHeroPage from './components/RQSuperHero.page';
import RQParallelQueriesPage from './components/ParallelQueries.page'
import DynamicParallelQueriesPage from './components/DynamicParallelQueries.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-parallel'>Parallel Query</Link>
              </li>
              <li>
                <Link to='/rq-dynamic-parallel'>Dynamic Parallel Query</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path ='/rq-super-heroes/:heroId'>
              <RQSuperHeroPage />
            </Route>
            <Route path ='/rq-parallel'>
              <RQParallelQueriesPage />
            </Route>
            <Route path ='/rq-dynamic-parallel'>
              <DynamicParallelQueriesPage heroIds={[1, 3]} />
            </Route>
            <Route path='/super-heroes'>
              <SuperheroesPage />
            </Route>
            <Route path='/rq-super-heroes'>
              <RQSuperHeroesPage />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
