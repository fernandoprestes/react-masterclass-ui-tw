import { Route, Routes } from 'react-router-dom';

import { Default } from '~/layouts/Default/index';
import { Home } from '~/pages/Home';
import { Status } from '~/pages/Status';

export function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Default />}
      >
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/status'
          element={<Status />}
        />
      </Route>
    </Routes>
  );
}
