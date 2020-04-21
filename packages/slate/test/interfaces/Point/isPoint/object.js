import { Point } from '@mccarthyfinch/slate'

export const input = {}

export const test = value => {
  return Point.isPoint(value)
}

export const output = false
