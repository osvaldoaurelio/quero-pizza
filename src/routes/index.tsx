import { Switch, Route } from 'react-router-dom';

import { Welcome } from '~pages/welcome';
import { Pedido } from '~pages/pedido';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/pedido" component={Pedido} />
    </Switch>
  );
}
