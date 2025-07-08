console.log(`loading js-pytorch index.js\n${Date()}`);

// js-torch dependency

(async function(){
    let torch = (await import('./torch.mjs')).torch;
    try{
        this.torch=torch; //maybe not a good idea ?
    }   catch(err){console.error(err)};
})()
