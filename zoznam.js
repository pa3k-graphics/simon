const scriptURL = 'https://script.google.com/macros/s/AKfycbz6x09SHIXpGtzdc8VKMRDL_qG1eZ_-R09zXUQbj0E4K3r7t86CbBisIuvse28gu69YyA/exec'

const form = document.forms['kontaktnyFormular']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Formulár bol úspešne odoslaný! Čoskoro Vás budem kontaktovať na zadanú e-mailovú adresu."))
    .then(() => { window.location.reload();})
    .catch(error => console.error('Chyba:', error.message))
})