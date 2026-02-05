import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Research', href: '/#research' },
    { text: 'Team', href: '/#team' },
    { text: 'Contact', href: 'mailto:anshumanswain@am.amrita.edu' },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'TexNano on LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/texnano/' },
  ],
  footNote: `
    <span class="text-gray-700">TexNano</span> · Medical AI Research
  `,
};
