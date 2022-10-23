const a = setTimeout(() => {
    console.log('A' + new Date());
}, 3000);

const b = setTimeout(() => {
    console.log('A' + new Date());
}, 3000);

clearTimeout(a); // Cancela timeout