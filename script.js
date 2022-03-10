const input = document.querySelector('input')

function stringGenerator() {
  var randomString = Math.random().toString(36).slice(-10)

  input.value = randomString
}

function copyToClipboard() {
  navigator.clipboard.writeText(input.value).then(() => {
    alert('Copied to Clipboard')
  })
}