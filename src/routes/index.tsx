import { Switch, Route, Redirect } from 'react-router-dom';

import { Welcome } from '~pages/welcome';
import { Pedido } from '~pages/pedido';
import { Perfil } from '~pages/perfil';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/pedido" component={Pedido} />
      <Route path="/perfil" component={Perfil} />

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}
