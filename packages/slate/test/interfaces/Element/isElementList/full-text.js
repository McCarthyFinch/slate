import { Element } from '@mccarthyfinch/slate'

export const input = [
  {
    text: '',
  },
]

export const test = value => {
  return Element.isElementList(value)
}

export const output = false
