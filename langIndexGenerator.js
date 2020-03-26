const langIndexGen = (phonetics) => {
    const { vowsList, consList, vowelFirst, consonantFirst, defSounds, syllables } = phonetics
    console.log(phonetics)

    const verbModStorage= {
        vowel: vowsList.random(),
        consonant: consList.random(),
        vowelFirst: vowelFirst.random(),
        consonantFirst: consonantFirst.random(),
        defSound: defSounds.random()
    }

    console.log('VERB MOD STORAGE',verbModStorage)

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
        verb:{
            conjugatableSuffix:true,
            conjugatablePrefix:false,
            noConj:false,
            verbConfig:'consonantFirst'
        }
    }

    const rootManipulator = {
        prefix:(root,ruleset)=>{
            //determines which subset of prefix rules to use
            const isVowelStart = vowsList.all.includes(root.charAt(0))
            const rule = isVowelStart ? ruleset.prefix.vowelStart: ruleset.prefix.consonantStart
            
            if(rule.vowelRoot){
                return vowsList.random()+root
            }else if(rule.consonantRoot){
                return consList.random()+root
            }else if(rule.vowelSylRoot){
                return vowelFirst.random()+root
            }else if(rule.consonantSylRoot){
                return consonantFirst.random()+root
            }else if(rule.defSoundRoot){
                return defSounds.random()+root
            }else{
                return root
            }  
        },
        suffix:(root,ruleset)=>{
            //determines which subset of prefix rules to use
            const isVowelEnd = vowsList.all.includes(root.charAt(root.length-1))
            const rule = isVowelEnd ? ruleset.suffix.vowelEnd: ruleset.suffix.consonantEnd

            if(rule.rootVowel){
                return root+vowsList.random()
            }else if(rule.rootConsonant){
                return root+consList.random()
            }else if(rule.rootVowelSyl){
                return root+vowelFirst.random()
            }else if(rule.rootConsonantSyl){
                return root+consonantFirst.random()
            }else if(rule.rootDefSound){
                return root+defSounds.random()
            }else{
                return root
            }
        },
        verbify:(root,ruleset)=>{
            const rule = ruleset.verb
            let verbMod
            switch(rule.verbConfig){
                case 'vowel': 
                    verbMod = verbModStorage.vowel
                    break
                case 'consonant':
                    verbMod = verbModStorage.consonant
                    break
                case 'vowelFirst':
                    verbMod = verbModStorage.vowelFirst
                    break
                case 'consonantFirst':
                    verbMod = verbModStorage.consonantFirst
                    break
                case 'defSound':
                    verbMod = verbModStorage.defSound
                    break
            }
            if(rule.conjugatableSuffix){
                return root+verbMod
            }else if(rule.conjugatablePrefix){
                return verbMod+root
            }else if(noConj){
                return root
            }else{
                return 'ERROR IN VERB RULES'
            }
        }
    }

    const pronounRoot = defSounds.random()

    return {
        pronouns:{
            self: rootManipulator.prefix(pronounRoot,rulesetObj),
            you: rootManipulator.prefix(pronounRoot,rulesetObj),
            him: rootManipulator.prefix(pronounRoot,rulesetObj),
            her: rootManipulator.prefix(pronounRoot,rulesetObj),
            we: rootManipulator.prefix(pronounRoot,rulesetObj),
            they: rootManipulator.prefix(pronounRoot,rulesetObj),
            it: rootManipulator.prefix(pronounRoot,rulesetObj),
        },
        verbs:{
            toDo: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toEat: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toSleep: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toSee: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toHear: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toSmell: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toTaste: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toTouch: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toFight: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toMagic: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toGo: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toWalk: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toRun: rootManipulator.verbify(defSounds.random(),rulesetObj) ,
            toJump: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toDodge: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toDuck: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toHide: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toFear: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toFeel: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toWant: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toNeed: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toLike: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toDislike: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toLove: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toHate: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toKill: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toDie: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toLive: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toWorship: rootManipulator.verbify(defSounds.random(),rulesetObj),
            toThink: rootManipulator.verbify(defSounds.random(),rulesetObj),
        },
        adjectives:{
            size:{
                large: rootManipulator.prefix(defSounds.random(),rulesetObj),
                small: rootManipulator.prefix(defSounds.random(),rulesetObj),
                heavy: rootManipulator.prefix(defSounds.random(),rulesetObj),
                light: rootManipulator.prefix(defSounds.random(),rulesetObj),
                thin: rootManipulator.prefix(defSounds.random(),rulesetObj),
                fat: rootManipulator.prefix(defSounds.random(),rulesetObj),
            },
            spatial:{
                above: rootManipulator.prefix(defSounds.random(),rulesetObj),
                below: rootManipulator.prefix(defSounds.random(),rulesetObj),
                inFront: rootManipulator.prefix(defSounds.random(),rulesetObj),
                behind: rootManipulator.prefix(defSounds.random(),rulesetObj),
                left: rootManipulator.prefix(defSounds.random(),rulesetObj),
                right: rootManipulator.prefix(defSounds.random(),rulesetObj),
                inside: rootManipulator.prefix(defSounds.random(),rulesetObj),
                outside: rootManipulator.prefix(defSounds.random(),rulesetObj),
                far: rootManipulator.prefix(defSounds.random(),rulesetObj),
                near: rootManipulator.prefix(defSounds.random(),rulesetObj),
            },
            color:{
                red: syllables.random()+syllables.random(),
                orange: syllables.random()+syllables.random(),
                yellow: syllables.random()+syllables.random(),
                green: syllables.random()+syllables.random(),
                blue: syllables.random()+syllables.random(),
                indigo: syllables.random()+syllables.random(),
                violet: syllables.random()+syllables.random(),
                black: syllables.random()+syllables.random(),
                white: syllables.random()+syllables.random(),
                grey: syllables.random()+syllables.random(),
                rainbow: syllables.random()+syllables.random()
            },
            subjDesc:{
                right: rootManipulator.prefix(defSounds.random(),rulesetObj),
                wrong: rootManipulator.prefix(defSounds.random(),rulesetObj),
                best: rootManipulator.prefix(defSounds.random(),rulesetObj),
                worst: rootManipulator.prefix(defSounds.random(),rulesetObj),
                important: rootManipulator.prefix(defSounds.random(),rulesetObj),
                unimportant: rootManipulator.prefix(defSounds.random(),rulesetObj),
                better: rootManipulator.prefix(defSounds.random(),rulesetObj),
                worse: rootManipulator.prefix(defSounds.random(),rulesetObj),
                positive: rootManipulator.prefix(defSounds.random(),rulesetObj),
                negative: rootManipulator.prefix(defSounds.random(),rulesetObj),
                good: rootManipulator.prefix(defSounds.random(),rulesetObj),
                evil: rootManipulator.prefix(defSounds.random(),rulesetObj),
                bad: rootManipulator.prefix(defSounds.random(),rulesetObj),
                welcome: rootManipulator.prefix(defSounds.random(),rulesetObj),
                unwelcome: rootManipulator.prefix(defSounds.random(),rulesetObj)
            },
            genDesc:{
                strong: rootManipulator.suffix(defSounds.random(),rulesetObj),
                weak: rootManipulator.suffix(defSounds.random(),rulesetObj),
                skilled: rootManipulator.suffix(defSounds.random(),rulesetObj),
                unskilled: rootManipulator.suffix(defSounds.random(),rulesetObj),
                wise: rootManipulator.suffix(defSounds.random(),rulesetObj),
                stupid: rootManipulator.suffix(defSounds.random(),rulesetObj),
                brave: rootManipulator.suffix(defSounds.random(),rulesetObj),
                cowardly: rootManipulator.suffix(defSounds.random(),rulesetObj),
                likable: rootManipulator.suffix(defSounds.random(),rulesetObj),
                unlikable: rootManipulator.suffix(defSounds.random(),rulesetObj)
            }
        }
    }
}

export {langIndexGen}