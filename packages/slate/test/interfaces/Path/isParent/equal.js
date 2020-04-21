import { Path } from '@mccarthyfinch/slate'

export const input = {
  path: [0, 1, 2],
  another: [0, 1, 2],
}

export const test = ({ path, another }) => {
  return Path.isParent(path, another)
}

export const output = false
