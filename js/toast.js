const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

const toastTriggerCard = document.getElementById('liveToastBtnCard')
const toastLiveExampleCard = document.getElementById('liveToastCard')

if (toastTriggerCard) {
  const toastBootstrapCard = bootstrap.Toast.getOrCreateInstance(toastLiveExampleCard)
  toastTriggerCard.addEventListener('click', () => {
    toastBootstrapCard.show()
  })
}
