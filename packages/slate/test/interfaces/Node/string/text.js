/** @jsx jsx  */

import { Node } from '@mccarthyfinch/slate'
import { jsx } from '@mccarthyfinch/slate-hyperscript'

export const input = <text>one</text>

export const test = value => {
  return Node.string(value)
}

export const output = `one`
