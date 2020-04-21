import { Point } from '@mccarthyfinch/slate'

export const input = {
  point: {
    path: [0, 1],
    offset: 7,
  },
  another: {
    path: [0, 1],
    offset: 7,
  },
}

export const test = ({ point, another }) => {
  return Point.equals(point, another)
}

export const output = true
