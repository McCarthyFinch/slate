/** @jsx jsx  */

import { Node } from '@mccarthyfinch/slate'
import { jsx } from '@mccarthyfinch/slate-hyperscript'

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
)

export const test = value => {
  return Node.has(value, [0])
}

export const output = true
