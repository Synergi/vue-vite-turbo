import { createI18n } from 'vue-i18n';
import { NestedKeyOf } from '@packages/typescript-config/utils.d';
import de from './locales/de.json';
import en from './locales/en.json';

const messages = {
  de: de,
  'en-US': en,
};

const i18n = createI18n({
  legacy: false,
  locale: navigator.language,
  fallbackLocale: 'en-US',
  globalInjection: true,
  messages,
  silentFallbackWarn: true,
  silentTranslationWarn: true,
});

// Type Validation
export type I18NMessageSchema = typeof messages;
// Extract all possible keys
export type I18NMessageSchemaKeys = NestedKeyOf<I18NMessageSchema['en-US']>;

const $t = (key: I18NMessageSchemaKeys) => i18n.global.t(key);

export { i18n, $t };
