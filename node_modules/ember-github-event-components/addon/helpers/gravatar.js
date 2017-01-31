import { helper } from 'ember-helper'
import $ from 'jquery'
import md5 from '../utils/md5'

export function gravatar([ email ], { size, fallback = 'mm' }) {
  let emailHash = email.includes('@') ? md5(email) : email
  let params = $.param({
    s: size,
    d: fallback
  })

  if (params) {
    params = `?${params}`
  }

  return `https://www.gravatar.com/avatar/${emailHash}${params}`
}

export default helper(gravatar)
