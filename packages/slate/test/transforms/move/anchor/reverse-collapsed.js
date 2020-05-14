/** @jsx jsx */

import { Transforms } from '@mccarthyfinch/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.move(editor, { edge: 'anchor', reverse: true })
}

export const input = (
  <editor>
    <block>
      one two t<cursor />
      hree
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      one two <anchor />t<focus />
      hree
    </block>
  </editor>
)
