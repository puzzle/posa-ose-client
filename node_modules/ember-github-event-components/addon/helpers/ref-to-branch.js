/* eslint-disable no-magic-numbers */
import { helper } from 'ember-helper'

export function refToBranch([ ref ]) {
  return ref.split('/').slice(2).join('/')
}

export default helper(refToBranch)
