export function getItem<T = object>(key: string): T | undefined {
  if (!window.localStorage || !key) return;

  const value = window.localStorage.getItem(key);
  if (!value) return;

  const result = JSON.parse(value);
  return result as T;
}

export function setItem<T = object>(key: string, data: T): boolean {
  if (!window.localStorage || !key || data === undefined || data === null) return false;

  try {
    const convertData = JSON.stringify(data);

    window.localStorage.setItem(key, convertData);

    return true;
  } catch (err) {
    console.warn('Erro ao atualizar localStorage', err);
    return false;
  }
}
