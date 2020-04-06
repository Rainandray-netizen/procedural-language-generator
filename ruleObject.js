const rulesetObj = {
    prefix:{
        vowelStart: {
            //only one can be true
            //mypreset vowelSylRoot
            vowelRoot:false,
            consonantRoot:false,
            vowelSylRoot:true,
            consonantSylRoot:false,
            defSoundRoot:false,
        },
        consonantStart: {
            //only one can be true
            vowelRoot:false,
            consonantRoot:false,
            vowelSylRoot:false,
            consonantSylRoot:true,
            defSoundRoot:false,
        }
    },
    suffix:{
        vowelEnd:{
            rootVowel:false,
            rootConsonant:false,
            rootVowelSyl:true,
            rootConsonantSyl:false,
            rootDefSound:false
        },
        consonantEnd:{
            rootVowel:false,
            rootConsonant:false,
            rootVowelSyl:false,
            rootConsonantSyl:true,
            rootDefSound:false
        }
    },
    sandwich:{
        vowelStart: 'vowelSylRoot'
            //only one can be true
            
            // vowelRoot:false,
            // consonantRoot:false,
            // vowelSylRoot:true,
            // consonantSylRoot:false,
            // defSoundRoot:false,
        ,
        consonantStart: 'consonantSylRoot'
            //only one can be true
            // vowelRoot:false,
            // consonantRoot:false,
            // vowelSylRoot:false,
            // consonantSylRoot:true,
            // defSoundRoot:false,
        ,
        vowelEnd: 'rootVowelSyl'
            // rootVowel:false,
            // rootConsonant:false,
            // rootVowelSyl:true,
            // rootConsonantSyl:false,
            // rootDefSound:false
        ,
        consonantEnd: 'rootVowel'
            // rootVowel:false,
            // rootConsonant:false,
            // rootVowelSyl:false,
            // rootConsonantSyl:true,
            // rootDefSound:false
        
    },
    verb:{
        conjugatableSuffix:true,
        conjugatablePrefix:false,
        noConj:false,
        verbConfig:'consonantFirst'
    }
}

export {rulesetObj}