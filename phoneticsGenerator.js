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
        while (defSoundsResult.length<200){
            defSoundsResult.push(
                phoneticPool[Math.floor(Math.random()*poolLength)]+
                phoneticPool[Math.floor(Math.random()*poolLength)]
            )
        }

        while (defSoundsResult.length<300){
            defSoundsResult.push(
                consList[Math.floor(Math.random()*consListLength)]+
                vowelFirst[Math.floor(Math.random()*vowelFirstPoolLength)]
            )
        }

        while (defSoundsResult.length<400){
            defSoundsResult.push(
                consonantFirst[Math.floor(Math.random()*consonantFirstPoolLength)]+
                consList[Math.floor(Math.random()*consListLength)]
            )
        }

        return defSoundsResult
    }

    const defSounds = defSoundsGen()

    return {
        vowsList:{
            all:vowsList,
            random:()=>vowsList[Math.floor(Math.random()*vowsListLength)]
        },
        consList:{
            all:consList,
            random:()=>consList[Math.floor(Math.random()*consListLength)]
        },
        vowelFirst:{
            all:vowelFirst,
            random:()=>vowelFirst[Math.floor(Math.random()*vowelFirstPoolLength)]
        },
        consonantFirst:{
            all:consonantFirst,
            random:()=>consonantFirst[Math.floor(Math.random()*consonantFirstPoolLength)]

        },
        defSounds:{
            all:defSounds,
            random:()=>defSounds[Math.floor(Math.random()*defSounds.length)]
        },
        syllables:{
            all:[...consonantFirst,...vowelFirst],
            random:()=>[...consonantFirst,...vowelFirst][
                Math.floor(Math.random()*(consonantFirstPoolLength+vowelFirstPoolLength))
            ]
        }
    }
}

// morphObj.past(langIndex.pronoun.self,langIndex.verb.sleep)

export { phoneticsGen }