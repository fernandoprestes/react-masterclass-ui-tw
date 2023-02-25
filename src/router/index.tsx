import { Route, Routes } from 'react-router-dom';

import { Default } from '~/layouts/Default/index';
import { Home } from '~/pages/Home';

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
      </Route>
    </Routes>
  );
}
