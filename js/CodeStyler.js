(function () {
  changeCodeFontSize(0)
  codeView()
}
)()

function codeView () {
  var pre = document.getElementsByTagName('pre')
  for (var i = 0; i < pre.length; i++) {
    pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>'
    var num = pre[i].innerHTML.split(/\n/).length
    for (var j = 0; j < num; j++) {
      var lineNum = pre[i].getElementsByTagName('span')[0]
      lineNum.innerHTML += '<span>' + (j + 1) + '</span>'
    }
  }
}

function changeCodeFontSize (size) {
  if (size == 0) { return }
  var elements = document.getElementsByTagName('pre')
  for (var i = 0; i < elements.length; i++) {
    elements[i].style['font-size'] = size + 'px'
  }
}

function codeCopy (id) {
  var element = document.getElementById(id)
  var text = element.innerHTML
  text.select
  element.focus

  try {
    document.execCommand('copy')
    copyCodeToClipboard(text, id)
  } catch (err) {
    console.error('Something went wrong to copy to clipboard', err)
  }
}

function copyCodeToClipboard (text, id) {
  if (!navigator.clipboard) {
    console.warn('Re-try')
    codeCopy(id)
    return
  }
  navigator.clipboard.writeText(text).then(function () {
    // done
  }, function (err) {
    console.error('Could not copy text: ', err)
  })
}
