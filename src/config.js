module.exports = {
  siteTitle: 'Abhi Venkata Sri Krishna Devarayalu Anumanchi | Software Developer',
  siteDescription:
    ' Abhi Venkata Sri Krishna Devarayalu Anumanchi pursuing a Masters degree in Computer Science from George Mason University',
  siteKeywords:
    'Abhi Venkata Sri Krishna Devarayalu, Software Developer, Software Engineer, Competitive Programmer, Java Developer, Applicatoin Developer, George Mason University, GMU, 1Stop.ai',
  siteUrl: 'http://abhi-742.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Abhi Venkata Sri Krishna Devarayalu Anumanchi',
  location: 'George Mason University, Fairfax',
  email: 'aanumanc@gmu.edu',
  github: 'https://github.com/ABHI-742',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ABHI-742',
    },

    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/a-v-s-k-devarayalu-anumanchi-559323129/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact ',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
