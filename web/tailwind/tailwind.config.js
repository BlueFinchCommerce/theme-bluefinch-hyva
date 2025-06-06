const {
  spacing
} = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');

const hyvaModules = require('@hyva-themes/hyva-modules');

module.exports = hyvaModules.mergeTailwindConfig({
  theme: {
      extend: {
          typography: {
              DEFAULT: { // this is for prose class
                  css: {
                      color: 'var(--tertiary-color, text-grey-700)', // change global color scheme
                      a: {
                          color: 'var(--tertiary-color, text-grey-700)'
                      },
                      ul: {
                          '> li': {
                              '&::before': { // more complex example - add before to an li element.
                                  content: '1'
                              },
                          },
                      },
                  },
              }
          },
          screens: {
              'sm': '640px',
              // => @media (min-width: 640px) { ... }
              'md': '768px',
              // => @media (min-width: 768px) { ... }
              'lg': '1024px',
              // => @media (min-width: 1024px) { ... }
              'xl': '1280px',
              // => @media (min-width: 1280px) { ... }
              '2xl': '1536px' // => @media (min-width: 1536px) { ... }

          },
          fontFamily: {
              sans: ["var(--font-family)", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
          },
          colors: {
              primary: {
                  lighter: "var(--primary-color, " + colors.blue['300'] + ")",
                  "DEFAULT": "var(--primary-color, " + colors.blue['800'] + ")",
                  darker: "var(--primary-color, " + colors.blue['900'] + ")"
              },
              secondary: {
                  lighter: colors.blue['100'],
                  "DEFAULT": colors.blue['200'],
                  darker: colors.blue['300']
              },
              background: {
                  lighter: "var(--tertiary-color, " + colors.blue['100'] + ")",
                  "DEFAULT":"var(--tertiary-color, " + colors.blue['200'] + ")",
                  darker: "var(--tertiary-color, " + colors.blue['300'] + ")"
              },
              green: colors.emerald,
              yellow: colors.amber,
              purple: colors.violet,
              gray: {
                  '700': 'var(--tertiary-color, ' + colors.gray['800'] + ')',
                  '800': 'var(--tertiary-color, ' + colors.gray['800'] + ')',
                  '900': 'var(--tertiary-color, ' + colors.gray['800'] + ')',
              }
          },
          textColor: {
              orange: colors.orange,
              red: { ...colors.red,
                  "DEFAULT": colors.red['500']
              },
              primary: {
                  lighter: 'var(--tertiary-color, ' + colors.gray['700'] + ')',
                  "DEFAULT": 'var(--tertiary-color, ' + colors.gray['800'] + ')',
                  darker: 'var(--tertiary-color, ' + colors.gray['900'] + ')'
              },
              secondary: {
                  lighter: 'var(--tertiary-color, ' + colors.gray['400'] + ')',
                  "DEFAULT": 'var(--tertiary-color, ' + colors.gray['600'] + ')',
                  darker: 'var(--tertiary-color, ' + colors.gray['800'] + ')'
              },
              theme: {
                  lighter: "var(--tertiary-color, " + colors.blue['100'] + ")",
                  "DEFAULT":"var(--tertiary-color, " + colors.blue['200'] + ")",
                  darker: "var(--tertiary-color, " + colors.blue['300'] + ")"
              },
          },
          backgroundColor: {
              primary: {
                  lighter: "var(--primary-color, " + colors.blue['600'] + ")",
                  "DEFAULT": "var(--primary-color, " + colors.blue['700'] + ")",
                  darker: "var(--primary-color, " + colors.blue['800'] + ")"
              },
              secondary: {
                  lighter: colors.blue['100'],
                  "DEFAULT": colors.blue['200'],
                  darker: colors.blue['300']
              },
              container: {
                  lighter: '#ffffff',
                  "DEFAULT": '#fafafa',
                  darker: '#f5f5f5'
              },
              header: 'var(--secondary-color, #ffffff)',
              footer: 'var(--secondary-color, #ffffff)'
          },
          borderColor: {
              primary: {
                  lighter: colors.blue['600'],
                  "DEFAULT": colors.blue['700'],
                  darker: colors.blue['800']
              },
              secondary: {
                  lighter: colors.blue['100'],
                  "DEFAULT": colors.blue['200'],
                  darker: colors.blue['300']
              },
              container: {
                  lighter: '#f5f5f5',
                  "DEFAULT": '#e7e7e7',
                  darker: '#b6b6b6'
              }
          },
          minWidth: {
              8: spacing["8"],
              20: spacing["20"],
              40: spacing["40"],
              48: spacing["48"]
          },
          minHeight: {
              14: spacing["14"],
              a11y: '44px',
              'screen-25': '25vh',
              'screen-50': '50vh',
              'screen-75': '75vh'
          },
          maxHeight: {
              '0': '0',
              'screen-25': '25vh',
              'screen-50': '50vh',
              'screen-75': '75vh'
          },
          container: {
              center: true,
              padding: '1.5rem'
          }
      }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  // Examples for excluding patterns from purge
  content: [
    // this theme's phtml and layout XML files
    '../../**/*.phtml',
    '../../*/layout/*.xml',
    '../../*/page_layout/override/base/*.xml',
    // parent theme in Vendor (if this is a child-theme)
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml',
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/*/layout/*.xml',
    '../../../../../../../vendor/hyva-themes/magento2-default-theme/*/page_layout/override/base/*.xml',
    // app/code phtml files (if need tailwind classes from app/code modules)
    //'../../../../../../../app/code/**/*.phtml',
  ]
});
