// var의 간결한 사용을 도와주는 함수
export const toCSSVariables = (theme) => {
  let cssVariables = {};

  for (const [key, value] of Object.entries(theme)) {
    if (typeof value === 'object') {
      for (const [subKey, subValue] of Object.entries(value)) {
        cssVariables[`${key}-${subKey}`] = subValue;
      }
    } else {
      cssVariables[key] = value;
    }
  }

  return cssVariables;
};
