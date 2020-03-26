const langIndexGen = (phonetics) => {
    const { vowsList, consList, vowelFirst, consonantFirst, defSounds } = phonetics
    console.log(phonetics)

    const rulesetObj = {
        vowelStart:(root)=>{
            return consList[Math.floor(Math.random()*consList.length)] + root
        }
    }

    const rootManipulator = {
        prefix:(root,ruleset)=>{
            const isVowelStart = vowsList.includes(root.charAt(0))
            if(isVowelStart){
                return ruleset.vowelStart(root)
            }
        }
    }

    return {
        pronouns:{
            self: rootManipulator.prefix('evoweltest',rulesetObj)
        }
    }
}

export {langIndexGen}