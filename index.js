let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name)   {
    cats.push(name)
}
function destructivelyPrependCat(name)  {
    cats.unshift(name)
}
function destructivelyRemoveLastCat()   {
    cats.pop()
}
function destructivelyRemoveFirstCat()  {
    cats.shift()
}
function appendCat(name)    {
   let temporaryCat = [...cats, name]
   return temporaryCat
}
function prependCat(name)   {
   let temporaryCats = [name, ...cats]
   return temporaryCats
}
function removeLastCat()        {
    let temporaryCat = [...cats]
    temporaryCat.pop()
    return temporaryCat
}
function removeFirstCat()   {
    let temporaryCat = [...cats]
    temporaryCat.shift()
    return temporaryCat
    }




