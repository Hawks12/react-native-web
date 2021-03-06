/* eslint-env mocha */

import assert from 'assert'
import getStyleObjects from '../getStyleObjects'

const fixture = {
  rule: {
    margin: 0,
    padding: 0
  },
  nested: {
    auto: {
      backgroundSize: 'auto'
    },
    contain: {
      backgroundSize: 'contain'
    }
  },
  ignored: {
    pading: 0
  }
}

suite('modules/StyleSheet/getStyleObjects', () => {
  test('returns only style objects', () => {
    const actual = getStyleObjects(fixture)
    assert.deepEqual(actual, [
      { margin: 0, padding: 0 },
      { backgroundSize: 'auto' },
      { backgroundSize: 'contain' }
    ])
  })
})
