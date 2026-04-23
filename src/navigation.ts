export const headerData = {
  links: [
    { text: 'Research', href: '/#research' },
    { text: 'Team', href: '/#team' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: 'mailto:gilad.gressel@am.amrita.edu' },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Research', href: '/#research' },
    { text: 'Team', href: '/#team' },
    { text: 'Blog', href: '/blog' },
  ],
  socialLinks: [
    {
      ariaLabel: 'TexNano on LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/texnano/',
    },
  ],
  footNote: `
    <span class="text-gray-700">TexNano</span> · Medical AI Research · &copy; ${new Date().getFullYear()}
  `,
};
