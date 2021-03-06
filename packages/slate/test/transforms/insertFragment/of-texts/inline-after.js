/** @jsx jsx */

import { Transforms } from '@mccarthyfinch/slate'
import { jsx } from '../../..'

export const run = editor => {
  Transforms.insertFragment(editor, <fragment>fragment</fragment>)
}

export const input = (
  <editor>
    <block>
      <text />
      <inline>word</inline>
      <cursor />
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      <text />
      <inline>word</inline>
      fragment
      <cursor />
    </block>
  </editor>
)
