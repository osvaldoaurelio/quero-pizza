import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MainProps } from './types';
import * as S from './styles';

import perfilLogo from '~assets/images/perfil-logo.png';

export function Main({ name, useAddressStoraged, lastOrders }: MainProps) {
  const history = useHistory();

  const [address, setAddress] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValidAddress, setIsValidAddress] = useState(false);

  const [addressStoraged, setAddressStoraged] = useAddressStoraged;

  const validateAddress = (value: string) => {
    if (value.length < 10) return false;
    if ((value.match(/ /g) ?? []).length < 4) return false;
    if ((value.match(/\d/g) ?? []).length < 1) return false;
    if ((value.match(/qd?|lt?|nº?|(av)|(rua)|(km)/gi) ?? []).length < 1) return false

    return true;
  };

  const handleValidateAddress = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const result = validateAddress(value.trim());

    setIsValidAddress(() => {
      if (result) setAddress(value);

      return result;
    });
  };

  const handleAddAddress = (event: FormEvent<EventTarget>) => {
    event.preventDefault();

    setAddressStoraged(() => {
      setIsModalOpen(false);

      return address;
    });
  };

  return (
    <S.MainContainer>
      <S.ImageContent>
        <img src={perfilLogo} alt="perfil logo" />
      </S.ImageContent>

      <S.InfoContent>
        <h3>Hey! Este é o seu perfil, aqui guardo algumas informações importante sobre você 👩‍💻💾</h3>
      </S.InfoContent>

      <S.NameContent>
        <h4>É assim como você prefere ser chamado:</h4>
        <p>{name}</p>
      </S.NameContent>  

      <S.AddressContent>
        <h4>Este é o endereço onde enviamos seus pedidos:</h4>
        {addressStoraged ? (
          <S.WithAddress>
            <p>{addressStoraged}</p>
            <button onClick={() => setIsModalOpen(true)}>
              <p>Se quiser mudar😎, é só clicar aqui😉</p>
            </button>
          </S.WithAddress>
        ) : (
          <S.WithoutAddress>
            <p>Ainda não tenho um endereço válido🤔</p>
            <button onClick={() => setIsModalOpen(true)}>
              <p>Para Adicionar um😎, é só clicar aqui😉</p>
            </button>
          </S.WithoutAddress>
        )}
        <S.StyledModal
          isValidAddress={isValidAddress}
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <header>
            <h2>Adicione um endereço para entrega</h2>
          </header>
          <section>
            <form onSubmit={handleAddAddress}>
              <input
                autoFocus
                onChange={handleValidateAddress}
                defaultValue=""
                placeholder="Ex.: Av. Ímpares, Q. 1, L. 3, Nº. 5, Setor Sete"
              />
            </form>
            <aside>
              <p>Lembrado que um bom endereço precisa:</p>
              <ul>
                <li>Começar com tipo e nome de Logradouro</li>
                <li>Informar os Complementos (Q/L/Apt/Nº)</li>
                <li>E finalizar com Setor/Bairro e/ou CEP</li>
              </ul>
            </aside>
          </section>
          <footer>
            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
            <button onClick={handleAddAddress} disabled={!isValidAddress}>Adicionar</button>
          </footer>
        </S.StyledModal>
      </S.AddressContent>

      <S.LastOrdersContent>
        <h4>Aqui estão seus últimos 3 pedidos realizados:</h4>
        {lastOrders?.length ? (
          lastOrders.map(lastOrder => lastOrder)
        ) : (
          <S.WithoutLastOrder>
            <p>Você ainda não fez nenhum pedido 😱!!</p>
            <button onClick={() => history.push('/')}>
              <p>Rápido <span>👀</span>... toque aqui ...e peça djá 🤪</p>
            </button>
          </S.WithoutLastOrder>
        )}
      </S.LastOrdersContent>
    </S.MainContainer>
  );
}
