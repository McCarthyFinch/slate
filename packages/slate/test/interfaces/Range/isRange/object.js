import { Range } from '@mccarthyfinch/slate'

export const input = {}

export const test = value => {
  return Range.isRange(value)
}

export const output = false
