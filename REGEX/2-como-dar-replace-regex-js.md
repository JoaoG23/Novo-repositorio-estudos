### Como dar replace com regex em JS


```` js

let primeirosDigitoTel = "319999".replace(/^(\d{2})/gm, "($1) ")

// Resultado (31) 9999'

````