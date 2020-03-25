//const vowelpool = []
//const consonantpool = []
// select 5 random vowels and 8 random consonants

// const vowels = ['i','u','e','æ','ɛ']
// const consonants = ['l','v','s','th','n','m','f','w']

const phoneticsGen = (vowsList, consList) => {
    const consListLength = consList.length

    const vowelFirst = vowsList.map((vowel)=>{
        return consList.map((consonant)=>{
            return vowel + consonant
        })
    }).flat()

    const consonantFirst = consList.map((consonant)=>{
        return vowsList.map((vowel)=>{
            return consonant + vowel
        })
    }).flat()

    const defSoundsGen = () => {
        const phoneticPool = [...vowelFirst,...consonantFirst]

        const poolLength = phoneticPool.length
        const defSoundsResult = []
        while (defSoundsResult.length<50){
            defSoundsResult.push(
                phoneticPool[Math.floor(Math.random()*poolLength)]+
                phoneticPool[Math.floor(Math.random()*poolLength)]
            )
        }

        const vowelFirstPoolLength = vowelFirst.length
        while (defSoundsResult.length<75){
            defSoundsResult.push(
                consList[Math.floor(Math.random()*consListLength)]+
                vowelFirst[Math.floor(Math.random()*vowelFirstPoolLength)]
            )
        }

        const consonantFirstPoolLength = consonantFirst.length
        while (defSoundsResult.length<100){
            defSoundsResult.push(
                consonantFirst[Math.floor(Math.random()*consonantFirstPoolLength)]+
                consList[Math.floor(Math.random()*consListLength)]
            )
        }

        return defSoundsResult
    }

    const defSounds = defSoundsGen()

    // console.log(phoneticPool)

    return defSounds
}

// morphObj.past(langIndex.pronoun.self,langIndex.verb.sleep)

export { phoneticsGen }