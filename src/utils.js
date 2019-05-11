export const getPascalCase = string =>
  string
    .replace(/(-\w)/g, matches => matches[1].toUpperCase())
    .replace(/^./, matches => matches.toUpperCase());

export const getSentenceCase = string =>
  string.replace('-', ' ').replace(/^./, matches => matches.toUpperCase());

export const getPath = string => `/${string}`;
