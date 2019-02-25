interface IPrimaryAccessor {
  main: string
  light: string
  dark: string
  text: string
}

class Primary implements IPrimaryAccessor {
  main: string = '#3f51b5'
  light: string = '#7986cb'
  dark: string = '#303f9f'
  text: string = '#fff'
}

export interface IPaletteAccessor {
  primary: IPrimaryAccessor
}

export default class Palette {
  private _primary: Primary | undefined

  primary(fn: (_: Primary) => any) {
    fn((this._primary = new Primary()))
    return this
  }

  get accessor(): IPaletteAccessor {
    return {
      primary: this._primary!
    }
  }
}
