export const getLocalTime = () => {
  const currentTime = new Date();
  const Y = currentTime.getFullYear();
  const M = currentTime.getMonth() + 1;
  const D = currentTime.getDate();
  const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const dayString = days[currentTime.getDay()];
  const timeString = currentTime.toLocaleTimeString();
  const dateString = Y + '年' + M + '月' + D + '日';
  return [dateString, dayString, timeString];
};