const inputA = document.getElementById('input-value-a')
const inputB = document.getElementById('input-value-b')
const formNumber = document.getElementById('formulario-numero')
const msgSuccess = document.querySelector('.message')

formNumber.addEventListener('submit', (event) => {
  event.preventDefault()
  const valueInputA = inputA.value
  const valueInputB = inputB.value

  const BMaiorQueA = valueInputA < valueInputB

  if (BMaiorQueA) {
    msgSuccess.classList.remove('msg-error')
    msgSuccess.classList.add('msg-success')
    msgSuccess.innerHTML = ''
    msgSuccess.innerHTML = `Números <strong>${valueInputA}</strong> e <strong>${valueInputB}</strong> enviados com sucesso`

    inputA.value = ''
    inputB.value = ''
  } else {
    msgSuccess.classList.add('msg-error')
    msgSuccess.innerHTML = ''
    msgSuccess.innerHTML = `Campo <strong>A</strong> deve ser menor que Campo <strong>B</strong>`

    inputA.value = ''
    inputB.value = ''
  }
})

inputA.addEventListener('click', () => {
  msgSuccess.innerHTML = ''
  msgSuccess.classList.remove('msg-success')
  msgSuccess.classList.remove('msg-error')
})

inputB.addEventListener('click', () => {
  msgSuccess.innerHTML = ''
  msgSuccess.classList.remove('msg-success')
  msgSuccess.classList.remove('msg-error')
})
