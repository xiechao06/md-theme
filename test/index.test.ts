import { theming } from '../src/index'

it('primary', () => {
  let theme = theming().palette(p => {
    p.primary(primary => {
      primary.main = 'blue'
      primary.light = 'lightblue'
      primary.dark = 'darkblue'
      primary.text = 'white'
    })
  }).accessor

  expect(theme.palette.primary.main).toBe('blue')
  expect(theme.palette.primary.light).toBe('lightblue')
  expect(theme.palette.primary.dark).toBe('darkblue')
  expect(theme.palette.primary.text).toBe('white')
})

it('spacing', () => {
  let theme = theming()
  expect(theme.accessor.spacing.unit).toBe(8)
  theme.spacing(s => (s.unit = 16))
  expect(theme.accessor.spacing.unit).toBe(16)
})
