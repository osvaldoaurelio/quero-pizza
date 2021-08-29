export const keyMaker = (key: string) => `qU&r0-þiZz@:${key}`; 

export const size = (target?: string | any[]) => target?.length ?? 0;

export const shuffle = (array: string[]) => array.sort(() => Math.random() - 0.5);

export const pluralize = (quantity: number, singularWord: string, pluralWord: string) => {
  return quantity === 1 ? singularWord : pluralWord;
};

export const validateAddress = (value: string) => {
  if (value.length < 10) return false;
  if ((value.match(/ /g) ?? []).length < 4) return false;
  if ((value.match(/\d/g) ?? []).length < 1) return false;
  if ((value.match(/qd?|lt?|nº?|(av)|(rua)|(km)/gi) ?? []).length < 1) return false

  return true;
};

export const numberFormat = {
  toMoney(value?: number) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value ?? 0);
  },
};
