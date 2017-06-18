export const copy = (text) => {
  let succeeded = false
  try {
    succeeded = document.execCommand('copy')
  } catch (err) {
    console.warn('Error occur executing document.copy command. :', err)
    // safari
    succeeded = false
  }
  try {
    if (succeeded) {
      let target = document.createElement('textarea')
      target.style.position = 'absolute'
      target.style.left = '-9999px'
      target.style.top = '0'
      target.id = '_hiddenCopyText_'
      document.body.appendChild(target)
      target.textContent = text

      target.select()
      document.execCommand('copy')
      // IE 에서 remove error.
      target.remove()

      return true
    } else {
      // 사파리의 경우 execCommand를 호환하지 않아 프롬프트 창을 띄워줌
      window.prompt('복사하기: Ctrl+C, Enter', text)
      return false
    }
  } catch (error) {
    console.error('copy to clipboard failed.')
    throw new Error('copy to clipboard failed.', error)
  }
}
