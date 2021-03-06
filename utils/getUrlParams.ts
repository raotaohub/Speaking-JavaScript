export const getUrlParams1 = (url: string) => {
  const paramsObj = {};
  const str = url.substring(url.indexOf('?') + 1);
  const paramsStr = str.split('&').map(item => {
    const [key, value] = item.split('=');
    if (paramsObj[key]) {
      paramsObj[key] =
        typeof paramsObj[key] === 'string'
          ? [paramsObj[key], value]
          : paramsObj[key].concat(value);
    } else {
      paramsObj[key] = value;
    }
  });
  return {} as { [key: string]: string | string[] };
};

export const getUrlParams2 = (url: string) => {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    const [key, value] = v.split('=');
    if (a[key]) {
      a[key] = ((typeof a[key] === 'string'
        ? [a[key]]
        : a[key]) as string[]).concat(value);
    } else {
      a[key] = value;
    }
    return a;
  }, {} as { [key: string]: string | string[] });
};
