console.log(`loading js-torch index.js\n${Date()}`);

(async function(){
    let url = 'https://esm.sh/js-pytorch'
    let torch = (await import(url)).torch;
})()
