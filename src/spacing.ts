export interface ISpacingAccessor {
  unit: number
}

export default class Spacing implements ISpacingAccessor {
  unit: number = 8
}
