import { useRef, useState } from 'react';
import { useHistory } from 'react-router';

import { AddressModal } from '~pages/perfil/address-modal';
import { extratFromBag } from '~utils';

import { MainProps } from './types';
import * as S from './styles';

export function Main({ bag, addressStoraged, setAddressStoraged }: MainProps) {
  const history = useHistory();

  const selectRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <S.Section>
      <S.AddressContent>
        <h4>Entregar em:</h4>
        {addressStoraged ? (
          <S.WithAddress>
            <p>{addressStoraged}</p>
            <button onClick={openModal}>
              <p>Se quiser mudar😎, é só clicar aqui😉</p>
            </button>
          </S.WithAddress>
        ) : (
          <S.WithoutAddress>
            <p>Ainda não tenho um endereço válido🤔</p>
            <button onClick={openModal}>
              <p>Para Adicionar um😎, é só clicar aqui😉</p>
            </button>
          </S.WithoutAddress>
        )}
        <AddressModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          setAddressStoraged={setAddressStoraged}
        />
      </S.AddressContent>

      <S.PaymentContent>
        <h4>Forma de pagamento:</h4>
        <select name="payment" defaultValue="CREDIT" ref={selectRef}>
          <option value="CREDIT">cartão de crédito</option>
          <option value="DEBIT">cartão de débito</option>
          <option value="CASH">em dinheiro</option>
          <option value="PIX">via pix</option>
        </select>
      </S.PaymentContent>

      <S.ButtonContent>
        <button onClick={() => history.push('/')}>
          <p>Adicionar mais itens</p>
        </button>
      </S.ButtonContent>

      <S.SumaryContent>
        <h4>Resumo dos valores:</h4>
        <table>
          <thead>
            <th>Qtd</th>
            <th>Nome</th>
            <th>Valor</th>
          </thead>
          <tbody>
            {bag?.map(({ itemQuantity, name, itemTotalPrice }) => (
              <tr>
                <td>{itemQuantity}</td>
                <td>{name}</td>
                <td>{itemTotalPrice}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <td colSpan={2}>Total</td>
            <td>{extratFromBag.totalPrice(bag)}</td>
          </tfoot>
        </table>
      </S.SumaryContent>
    </S.Section>
  );
}
