// 获取当前页面出现次数最多的标签
// 实现一个 maxBy 方便找出出现次数最多的 HTML 标签

const maxBy = (list, keyBy) => list.reduce((x, y) => keyBy(x) > keyBy(y) ? x : y)

function getFrequentTag () {
  const tags = [...document.querySelectorAll('*')].map(x => x.tagName).reduce((o, tag) => {
    o[tag] = o[tag] ? o[tag] + 1 : 1;
    return o
  }, {})
  return maxBy(Object.entries(tags), tag => tag[1])
}

function getAllTags(el = document) {
    const children = Array.from(el.children).reduce((x, y) => [...x, ...getAllTags(y)], [])
    return children
  }
  
  // 或者通过 flatMap 实现
  function getAllTags(el = document) {
    const children = Array.prototype.flatMap.call(el.children, x => getAllTags(x))
    return [el, ...children]
  }