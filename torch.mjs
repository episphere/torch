console.log(`loaded torch.mjs library\n${Date()}`);

let url = 'https://esm.sh/js-pytorch'
let torch = (await import(url)).torch;

export{
    torch
}