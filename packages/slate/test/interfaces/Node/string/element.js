/** @jsx jsx  */

import { Node } from '@mccarthyfinch/slate'
import { jsx } from '@mccarthyfinch/slate-hyperscript'

export const input = (
  <element>
    <text>one</text>
    <text>two</text>
  </element>
)

export const test = value => {
  return Node.string(value, [1])
}

export const output = `onetwo`
