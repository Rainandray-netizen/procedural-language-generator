const vowels = ['i','u','e','æ','ɛ']
const consonants = ['l','v','s','th','n','m','f','w']

const phoneticsGen = (vowsList, consList) => {
    const vowelFirst = vowsList.map((vowel)=>{
        return consList.map((consonant)=>{
            return vowel + consonant
        })
    })

    const constFirst = consList.map((consonant)=>{
        return vowsList.map((vowel)=>{
            return consonant + vowel
        })
    })

    const phoneticPoolUnflat = [...vowelFirst,...constFirst]
    const phoneticPool = phoneticPoolUnflat.flat()

    const defSoundsGen = (pool) => {
        const poolLength = pool.length
        const defSoundsResult = []
        while (defSoundsResult.length<100){
            defSoundsResult.push(
                pool[Math.floor(Math.random()*poolLength)]+
                pool[Math.floor(Math.random()*poolLength)]
            )
        }
        return defSoundsResult
    }

    const defSounds = defSoundsGen(phoneticPool)

    console.log(phoneticPool)

    return defSounds

}

console.log(phoneticsGen(vowels,consonants))