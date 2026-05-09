// Currency configurations with their respective locales
const currencyConfig = {
  USD: { locale: 'en-US', symbol: '$', name: 'US Dollar' },
  EUR: { locale: 'en-GB', symbol: '€', name: 'Euro' },
  GBP: { locale: 'en-GB', symbol: '£', name: 'British Pound' },
  INR: { locale: 'en-IN', symbol: '₹', name: 'Indian Rupee' },
  CAD: { locale: 'en-CA', symbol: 'C$', name: 'Canadian Dollar' },
  AUD: { locale: 'en-AU', symbol: 'A$', name: 'Australian Dollar' },
  JPY: { locale: 'ja-JP', symbol: '¥', name: 'Japanese Yen' },
  CNY: { locale: 'zh-CN', symbol: '¥', name: 'Chinese Yuan' },
  CHF: { locale: 'de-CH', symbol: 'CHF', name: 'Swiss Franc' },
  SEK: { locale: 'sv-SE', symbol: 'kr', name: 'Swedish Krona' },
  // African Currencies
  SOS: { locale: 'so-SO', symbol: 'Sh.So.', name: 'Somali Shilling' },
  GHS: { locale: 'en-GH', symbol: '₵', name: 'Ghanaian Cedi' },
  NGN: { locale: 'en-NG', symbol: '₦', name: 'Nigerian Naira' },
  ZAR: { locale: 'en-ZA', symbol: 'R', name: 'South African Rand' },
  KES: { locale: 'en-KE', symbol: 'KSh', name: 'Kenyan Shilling' },
  EGP: { locale: 'ar-EG', symbol: '£', name: 'Egyptian Pound' },
  MAD: { locale: 'ar-MA', symbol: 'DH', name: 'Moroccan Dirham' },
  TND: { locale: 'ar-TN', symbol: 'د.ت', name: 'Tunisian Dinar' },
  ETB: { locale: 'am-ET', symbol: 'Br', name: 'Ethiopian Birr' },
  UGX: { locale: 'en-UG', symbol: 'USh', name: 'Ugandan Shilling' },
  TZS: { locale: 'sw-TZ', symbol: 'TSh', name: 'Tanzanian Shilling' },
  RWF: { locale: 'rw-RW', symbol: 'FRw', name: 'Rwandan Franc' },
  BWP: { locale: 'en-BW', symbol: 'P', name: 'Botswana Pula' },
  ZMW: { locale: 'en-ZM', symbol: 'ZK', name: 'Zambian Kwacha' },
  MWK: { locale: 'en-MW', symbol: 'MK', name: 'Malawian Kwacha' },
  XOF: { locale: 'fr-SN', symbol: 'CFA', name: 'West African CFA Franc' },
  XAF: { locale: 'fr-CM', symbol: 'FCFA', name: 'Central African CFA Franc' },
};

export const formatCurrency = (amount, currencyCode = 'USD', minimumFractionDigits = 2) => {
  const config = currencyConfig[currencyCode] || currencyConfig.USD;
  return new Intl.NumberFormat(config.locale, { 
    style: 'currency', 
    currency: currencyCode, 
    minimumFractionDigits 
  }).format(amount);
};

export const getSupportedCurrencies = () => {
  return Object.entries(currencyConfig).map(([code, config]) => ({
    code,
    symbol: config.symbol,
    name: config.name,
    displayName: `${config.name} (${config.symbol})`
  }));
};

export const getCurrencySymbol = (currencyCode) => {
  return formatCurrency(0, currencyCode).replace(/[\d.,\s]/g, '');
};

/**
 * Simple currency conversion based on hardcoded rates relative to USD.
 * In a production app, these should be fetched from an API.
 */
export const convertAmount = (amount, fromCurrency, toCurrency) => {
  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    INR: 83.3,
    SOS: 24000,
    CAD: 1.35,
    AUD: 1.52,
    JPY: 150.5,
    CNY: 7.19,
    CHF: 0.88,
    ZAR: 19.1,
    AED: 3.67,
    SAR: 3.75,
    KES: 131.5,
    ETB: 56.5,
  };

  const fromRate = rates[fromCurrency] || 1;
  const toRate = rates[toCurrency] || 1;

  // Convert to USD (base) then to target currency
  return (amount / fromRate) * toRate;
};
