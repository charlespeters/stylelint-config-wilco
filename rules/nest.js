const nested = {
  'rule-nested-empty-line-before': [ 'always-multi-line', {
    except: ['first-nested'],
    ignore: ['after-comment']
  }],
  'rule-non-nested-empty-line-before': [ 'always-multi-line', {
    ignore: ['after-comment']
  }]
}

module.exports = nested
