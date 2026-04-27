import { SITE_URL, SITE_NAME } from './config';
import { CONTACT } from '../data/contact';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/nowa_favicon.png`,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.city,
    addressCountry: CONTACT.address.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT.phone,
    contactType: 'customer service',
    availableLanguage: ['Polish', 'English'],
  },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
