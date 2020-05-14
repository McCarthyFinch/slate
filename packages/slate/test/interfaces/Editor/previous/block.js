/** @jsx jsx */

import { Editor } from '@mccarthyfinch/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>one</block>
    <block>two</block>
  </editor>
)

export const test = editor => {
  return Editor.previous(editor, {
    at: [1],
    match: n => Editor.isBlock(editor, n),
  })
}

export const output = [<block>one</block>, [0]]
