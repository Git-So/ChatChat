export function timestamp(): number {
  return Math.ceil(new Date().getTime() / 1000);
}

export function timeAgo(time: number): string {
  const date = new Date(time);
  const curr = timestamp();
  const zero = new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000;
  const ago = curr - time;

  switch (true) {
    case ago < 60:
      return `刚刚`;
    case ago < 60 * 60:
      const min = Math.ceil(ago / 60);
      return `${min}分钟前`;
    case time > zero:
      const hour = Math.ceil(ago / 60 / 60);
      return `${hour}小时前`;
  }
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}
