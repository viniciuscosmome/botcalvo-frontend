import type { iLengthLimit } from './types';

export const errors: Array<string> = [];
export const nameLimit: iLengthLimit = { min: 3, max: 42 };
export const passwordLimit: iLengthLimit = { min: 8, max: 42 };

export const messages = {
  empty: (field: string) => `"${field}" não pode estar em branco`,
  onlyNumbers: (field: string) => `"${field}" precisa conter somente números`,
  onlyAlpha: (field: string) => `"${field}" precisa conter somente letras`,
  length: (field: string, options: iLengthLimit) => `"${field}" está fora do limite de tamanho. (min: ${options.min}, max: ${options.max})`,
  format: (field: string) => `"${field}" tem um formato inválido.`,
  equals: (field: string, compare: string) => `"${field}" precisa ser igual a "${compare}"`,
  requiredChars: (field: string) => `Sua "${field}" deve conter no mínimo 1 letra minúscula, 1 letra maiúscula, 1 número e 1 símbolo`,
  acceptTerms: () => 'Você concorda com nossos termos de uso e políticas de privacidade?'
};
