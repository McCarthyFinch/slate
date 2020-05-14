import { Operation } from '@mccarthyfinch/slate'

export const input = {
  path: [0],
  properties: {},
  newProperties: {},
}

export const test = value => {
  return Operation.isOperation(value)
}

export const output = false
