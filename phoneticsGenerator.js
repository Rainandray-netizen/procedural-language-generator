//const vowelpool = []
//const consonantpool = []
// select 5 random vowels and 8 random consonants

// const vowels = ['i','u','e','æ','ɛ']
// const consonants = ['l','v','s','th','n','m','f','w']

const phoneticsGen = (vowsList, consList) => {
    const consListLength = consList.length
    const vowsListLength = vowsList.length

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

    const phoneticPool = [...vowelFirst,...consonantFirst]
    const defSoundsResult = []
    const poolLength = phoneticPool.length
    const vowelFirstPoolLength = vowelFirst.length
    const consonantFirstPoolLength = consonantFirst.length

    // const defSoundsGenNTC = () => {
    //     while(defSoundsResult.length<50){
    //         defSoundsResult.push(
    //             consonantFirst[Math.floor(Math.random()*consonantFirstPoolLength)]+
    //             consonantFirst[Math.floor(Math.random()*consonantFirstPoolLength)]
    //         )
    //     }
        
    //     while(defSoundsResult.length<75){
    //         defSoundsResult.push(
    //             vowelFirst[Math.floor(Math.random()*vowelFirstPoolLength)]+
    //             vowsList[Math.floor(Math.random()*vowsListLength)]
    //         )
    //     }

    //     return defSoundsResult
    // }

    const defSoundsGen = () => {
        while (defSoundsResult.length<50){
            defSoundsResult.push(
                phoneticPool[Math.floor(Math.random()*poolLength)]+
                phoneticPool[Math.floor(Math.random()*poolLength)]
            )
        }

        while (defSoundsResult.length<75){
            defSoundsResult.push(
                consList[Math.floor(Math.random()*consListLength)]+
                vowelFirst[Math.floor(Math.random()*vowelFirstPoolLength)]
            )
        }

        while (defSoundsResult.length<100){
            defSoundsResult.push(
                consonantFirst[Math.floor(Math.random()*consonantFirstPoolLength)]+
                consList[Math.floor(Math.random()*consListLength)]
            )
        }

        return defSoundsResult
    }

    const defSounds = defSoundsGen()

    return {
        vowsList,
        consList,
        vowelFirst,
        consonantFirst,
        defSounds
    }
}

// morphObj.past(langIndex.pronoun.self,langIndex.verb.sleep)

export { phoneticsGen }