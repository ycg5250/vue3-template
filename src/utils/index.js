/** 设置显示模式 */
export function setMode(mode) {
  if (mode) {
    document.documentElement.setAttribute('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('theme');
  }
}