const documentHTML = document.querySelector('html');
export function enableDark() {
  documentHTML?.classList.add('dark');
  localStorage.theme = 'dark';
}

export function disableDark() {
  documentHTML?.classList.remove('dark');
  localStorage.removeItem('theme');
}

export function recognizeDark() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    enableDark();
  } else {
    disableDark();
  }
}
