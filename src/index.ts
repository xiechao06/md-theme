import Palette, { IPaletteAccessor } from './palette'
import Spacing, { ISpacingAccessor } from './spacing'

interface IAccessor {
  palette: IPaletteAccessor
  spacing: ISpacingAccessor
}

class ThemeBuilder {
  private _palette: Palette = new Palette()
  private _spacing: Spacing = new Spacing()

  palette(fn: (_: Palette) => any) {
    fn(this._palette)
    return this
  }

  spacing(fn: (_: Spacing) => any) {
    fn(this._spacing)
    return this
  }

  get accessor(): IAccessor {
    return {
      palette: this._palette.accessor,
      spacing: this._spacing
    }
  }
}

export function theming(): ThemeBuilder {
  return new ThemeBuilder()
}
