import { Text } from '@mccarthyfinch/slate'

export const input = {
  text: 'string',
}

export const test = value => {
  return Text.isText(value)
}

export const output = true
