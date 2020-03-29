const langIndexGen = (phonetics, ruleset) => {

    const { vowsList, consList, vowelFirst, consonantFirst, defSounds, syllables } = phonetics
    // console.log(phonetics)
    const verbModStorage= {
        vowel: vowsList.random(),
        consonant: consList.random(),
        vowelFirst: vowelFirst.random(),
        consonantFirst: consonantFirst.random(),
        defSound: defSounds.random()
    }

    console.log('VERB MOD STORAGE',verbModStorage)

    const rootManipulator = {
        prefix:(root)=>{
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
        suffix:(root)=>{
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
        verbify:(root)=>{
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
            self: rootManipulator.prefix(pronounRoot),
            you: rootManipulator.prefix(pronounRoot),
            him: rootManipulator.prefix(pronounRoot),
            her: rootManipulator.prefix(pronounRoot),
            we: rootManipulator.prefix(pronounRoot),
            they: rootManipulator.prefix(pronounRoot),
            it: rootManipulator.prefix(pronounRoot),
        },
        verbs:{
            toDo: rootManipulator.verbify(defSounds.random()),
            toEat: rootManipulator.verbify(defSounds.random()),
            toSleep: rootManipulator.verbify(defSounds.random()),
            toSee: rootManipulator.verbify(defSounds.random()),
            toHear: rootManipulator.verbify(defSounds.random()),
            toSmell: rootManipulator.verbify(defSounds.random()),
            toTaste: rootManipulator.verbify(defSounds.random()),
            toTouch: rootManipulator.verbify(defSounds.random()),
            toFight: rootManipulator.verbify(defSounds.random()),
            toMagic: rootManipulator.verbify(defSounds.random()),
            toGo: rootManipulator.verbify(defSounds.random()),
            toWalk: rootManipulator.verbify(defSounds.random()),
            toRun: rootManipulator.verbify(defSounds.random()) ,
            toJump: rootManipulator.verbify(defSounds.random()),
            toDodge: rootManipulator.verbify(defSounds.random()),
            toDuck: rootManipulator.verbify(defSounds.random()),
            toHide: rootManipulator.verbify(defSounds.random()),
            toFear: rootManipulator.verbify(defSounds.random()),
            toFeel: rootManipulator.verbify(defSounds.random()),
            toWant: rootManipulator.verbify(defSounds.random()),
            toNeed: rootManipulator.verbify(defSounds.random()),
            toLike: rootManipulator.verbify(defSounds.random()),
            toDislike: rootManipulator.verbify(defSounds.random()),
            toLove: rootManipulator.verbify(defSounds.random()),
            toHate: rootManipulator.verbify(defSounds.random()),
            toKill: rootManipulator.verbify(defSounds.random()),
            toDie: rootManipulator.verbify(defSounds.random()),
            toLive: rootManipulator.verbify(defSounds.random()),
            toWorship: rootManipulator.verbify(defSounds.random()),
            toThink: rootManipulator.verbify(defSounds.random()),
        },
        adjectives:{
            size:{
                large: rootManipulator.prefix(defSounds.random()),
                small: rootManipulator.prefix(defSounds.random()),
                heavy: rootManipulator.prefix(defSounds.random()),
                light: rootManipulator.prefix(defSounds.random()),
                thin: rootManipulator.prefix(defSounds.random()),
                fat: rootManipulator.prefix(defSounds.random()),
            },
            spatial:{
                above: rootManipulator.prefix(defSounds.random()),
                below: rootManipulator.prefix(defSounds.random()),
                inFront: rootManipulator.prefix(defSounds.random()),
                behind: rootManipulator.prefix(defSounds.random()),
                left: rootManipulator.prefix(defSounds.random()),
                right: rootManipulator.prefix(defSounds.random()),
                inside: rootManipulator.prefix(defSounds.random()),
                outside: rootManipulator.prefix(defSounds.random()),
                far: rootManipulator.prefix(defSounds.random()),
                near: rootManipulator.prefix(defSounds.random()),
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
                right: rootManipulator.prefix(defSounds.random()),
                wrong: rootManipulator.prefix(defSounds.random()),
                best: rootManipulator.prefix(defSounds.random()),
                worst: rootManipulator.prefix(defSounds.random()),
                important: rootManipulator.prefix(defSounds.random()),
                unimportant: rootManipulator.prefix(defSounds.random()),
                better: rootManipulator.prefix(defSounds.random()),
                worse: rootManipulator.prefix(defSounds.random()),
                positive: rootManipulator.prefix(defSounds.random()),
                negative: rootManipulator.prefix(defSounds.random()),
                good: rootManipulator.prefix(defSounds.random()),
                evil: rootManipulator.prefix(defSounds.random()),
                bad: rootManipulator.prefix(defSounds.random()),
                welcome: rootManipulator.prefix(defSounds.random()),
                unwelcome: rootManipulator.prefix(defSounds.random())
            },
            genDesc:{
                strong: rootManipulator.suffix(defSounds.random()),
                weak: rootManipulator.suffix(defSounds.random()),
                skilled: rootManipulator.suffix(defSounds.random()),
                unskilled: rootManipulator.suffix(defSounds.random()),
                wise: rootManipulator.suffix(defSounds.random()),
                foolish: rootManipulator.suffix(defSounds.random()),
                brave: rootManipulator.suffix(defSounds.random()),
                cowardly: rootManipulator.suffix(defSounds.random()),
                likable: rootManipulator.suffix(defSounds.random()),
                unlikable: rootManipulator.suffix(defSounds.random()),
                dextrous: rootManipulator.suffix(defSounds.random()),
                clumsy: rootManipulator.suffix(defSounds.random()),
                intelligent: rootManipulator.suffix(defSounds.random()),
                stupid: rootManipulator.suffix(defSounds.random()),
                tough: rootManipulator.suffix(defSounds.random()),
                frail: rootManipulator.suffix(defSounds.random()),
            }
        },
        nouns:{
            defArticle:{
                // this:,
                // that:
            }
        }
    }
}

export {langIndexGen}