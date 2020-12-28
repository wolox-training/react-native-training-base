const BLANK_SPACE = ' ';
const EMPTY_STRING = '';

export const getInitials = (str?: string) =>
  str
    ?.split(BLANK_SPACE)
    .map(word => word[0])
    .join(BLANK_SPACE);

export const keepNumbers = (str?: string | number) =>
  (str || EMPTY_STRING).toString().replace(/\D/g, EMPTY_STRING);
