/** @jsx jsx */

import { jsx } from '@mccarthyfinch/slate-hyperscript'

export const input = (
  <element>
    <element>word</element>
  </element>
)

export const output = {
  children: [
    {
      children: [
        {
          text: 'word',
        },
      ],
    },
  ],
}
