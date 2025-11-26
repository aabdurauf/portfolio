export const saveLang = (lang: string) => {
  localStorage.setItem("lang", lang);
}

export const getLang = () => {
  const lang = localStorage.getItem("lang")
  return lang ? lang : "en";
}

export const saveTheme = (theme: string) => {
  localStorage.setItem("theme", theme);
}

export const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "dark";
}