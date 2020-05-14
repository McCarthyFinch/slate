/** @jsx jsx */

import { Editor } from '@mccarthyfinch/slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      one
      <inline void>
        <text />
      </inline>
      three
    </block>
  </editor>
)

export const test = editor => {
  const inline = editor.children[0].children[1]
  return Editor.isEmpty(editor, inline)
}

export const output = false
