import { Operation } from '@mccarthyfinch/slate'

export const input = true

export const test = value => {
  return Operation.isOperation(value)
}

export const output = false
