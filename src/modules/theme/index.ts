import { getItem, setItem } from '../localStorage';

const KEY = 'prefers-color-scheme';

export type iThemeProp = {
  data: string;
  icon: string;
  content: string;
};

export const themes: Array<iThemeProp> = [
  {
    data: '',
    icon: 'bi bi-cloud-sun-fill',
    content: 'padrão'
  },
  {
    data: 'light',
    icon: 'bi bi-brightness-high-fill',
    content: 'claro'
  },
  {
    data: 'dark',
    icon: 'bi bi-moon-fill',
    content: 'escuro'
  }
];

function get(): number {
  const currentTheme = getItem<number>(KEY);
  return currentTheme ?? 0;
}

function set(data: number): void {
  setItem<number>(KEY, data);
}

function updateTheme(): void {
  const index = get();
  document.body.dataset.userTheme = themes[index].data;
}

function change(): void {
  let newThemeValue = get();

  (++newThemeValue >= themes.length) && (newThemeValue = 0);

  set(newThemeValue);
  updateTheme();
}

export default {
  change,
  get,
  updateTheme,
};
