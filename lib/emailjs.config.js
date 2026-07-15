const PUBLIC_KEY = typeof process !== 'undefined' && process.env ? process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY : import.meta.env?.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = typeof process !== 'undefined' && process.env ? process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID : import.meta.env?.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = typeof process !== 'undefined' && process.env ? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID : import.meta.env?.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

const isPlaceholder = (value) => {
  if (!value) return true;
  return value.includes('your_') || value.includes('here') || value.trim() === '';
};

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: isPlaceholder(PUBLIC_KEY) ? '' : PUBLIC_KEY,
  SERVICE_ID: isPlaceholder(SERVICE_ID) ? '' : SERVICE_ID,
  TEMPLATE_ID: isPlaceholder(TEMPLATE_ID) ? '' : TEMPLATE_ID,
};
