let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = () => {
    cats.push('Ralph')
}
const destructivelyPrependCat = () => {
    cats.unshift('Bob')
}
const destructivelyRemoveLastCat = () => {
    cats.pop()
}
const destructivelyRemoveFirstCat = () => {
    cats.shift()
}

const appendCat = () => {
    let newCats = [...cats,'Broom']
    return newCats
} 
const prependCat = () => {
    let newCats = ['Arnold', ...cats]
    return newCats
}

const removeLastCat = () => {
    let newCats = [...cats];
    newCats.pop()
    return newCats
}
const removeFirstCat = () => {
    let newCats = [...cats];
    newCats.shift()
    return newCats
    
}