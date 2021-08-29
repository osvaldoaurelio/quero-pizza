import Switch from 'react-switch';
import { useTheme } from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { MainProps } from './types';
import * as S from './styles';

export function Main(mainProps: MainProps) {
  const { colors } = useTheme();
  const {
    stuffedEdgeText,
    hasStuffedEdge,
    stuffedEdgePrice,
    hasStuffedEdgeOptions,
    setHasStuffedEdge,
    psText,
    setPsText
  } = mainProps;

  const handleChange = () => {
    setHasStuffedEdge(!hasStuffedEdge);
  };
 
  return (
    <>
      {hasStuffedEdgeOptions && (
        <S.StuffedEdgeContainer withStuffedEdge={hasStuffedEdge}>
          <label htmlFor="borda">
            <span>
              {hasStuffedEdge ? 'Remover' : 'Adicionar'} {stuffedEdgeText}
            </span>
            <span>
              {'('}
              {hasStuffedEdge ? <FaMinus size={10} /> : <FaPlus size={10} />}
              {stuffedEdgePrice}
              {')'}
            </span>
          </label>
          <Switch
            id="borda"
            onChange={handleChange}
            checked={hasStuffedEdge}
            onColor={colors.secondary}
            onHandleColor={colors.primary}
            boxShadow="0 0 2px 1px #0004"
            activeBoxShadow="0 0 0 0 #0000"
            offColor={colors.secondary}
            offHandleColor={colors.gray_1}
            handleDiameter={18}
            height={8}
            width={24}
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </S.StuffedEdgeContainer>
      )}
      <S.PsTextContainer>
        <h3>Alguma observação?</h3>
        <span>😊</span>
      </S.PsTextContainer>
      <textarea
        defaultValue={psText}
        onChange={({ currentTarget: { value } }) => setPsText(value)}
        placeholder="Ex: Tirar a cebola, maionese à parte, molho mais ou menos picante etc"
      />
    </>
  );
}
