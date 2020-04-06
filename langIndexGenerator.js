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
        sandwich:(root)=>{
            const rule = ruleset.sandwich
            let sandwichPrefix
            let sandwichSuffix
            const isVowelStart = vowsList.all.includes(root.charAt(0))
            const isVowelEnd = vowsList.all.includes(root.charAt(root.length-1))
            if(isVowelStart){
                switch(rule.vowelStart){
                    case 'vowelRoot':
                        sandwichPrefix = vowsList.random()
                        break
                    case 'consonantRoot':
                        sandwichPrefix = consList.random()
                        break
                    case 'vowelSylRoot':
                        sandwichPrefix = vowelFirst.random()
                        break
                    case 'consonantSylRoot':
                        sandwichPrefix = consonantFirst.random()
                        break
                    case 'defSoundRoot':
                        sandwichPrefix = defSounds.random()
                        break
                }
            }else{
                switch(rule.consonantStart){
                    case 'vowelRoot':
                        sandwichPrefix = vowsList.random()
                        break
                    case 'consonantRoot':
                        sandwichPrefix = consList.random()
                        break
                    case 'vowelSylRoot':
                        sandwichPrefix = vowelFirst.random()
                        break
                    case 'consonantSylRoot':
                        sandwichPrefix = consonantFirst.random()
                        break
                    case 'defSoundRoot':
                        sandwichPrefix = defSounds.random()
                        break
                }
            }
           if(isVowelEnd){
               switch(rule.vowelEnd){
                   case 'rootVowel':
                        sandwichSuffix = vowsList.random()
                        break
                    case 'rootConsonant':
                        sandwichSuffix = consList.random()
                        break
                    case 'rootVowelSyl':
                        sandwichSuffix = vowelFirst.random()
                        break
                    case 'rootConsonantSyl':
                        sandwichSuffix = consonantFirst.random()
                        break
                    case 'rootDefSound':
                        sandwichSuffix = defSounds.random()
                        break
               }
           }else{
                switch(rule.consonantEnd){
                    case 'rootVowel':
                        sandwichSuffix = vowsList.random()
                        break
                    case 'rootConsonant':
                        sandwichSuffix = consList.random()
                        break
                    case 'rootVowelSyl':
                        sandwichSuffix = vowelFirst.random()
                        break
                    case 'rootConsonantSyl':
                        sandwichSuffix = consonantFirst.random()
                        break
                    case 'rootDefSound':
                        sandwichSuffix = defSounds.random()
                        break
                }
            }
            return sandwichPrefix + root + sandwichSuffix
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
            toDo: rootManipulator.verbify(vowsList.random()),
            toEat: rootManipulator.verbify(defSounds.random()),
            toSleep: rootManipulator.verbify(defSounds.random()),
            toSee: rootManipulator.verbify(defSounds.random()),
            toHear: rootManipulator.verbify(defSounds.random()),
            toSmell: rootManipulator.verbify(defSounds.random()),
            toTaste: rootManipulator.verbify(defSounds.random()),
            toTouch: rootManipulator.verbify(defSounds.random()),
            toFight: rootManipulator.verbify(defSounds.random()),
            toMagic: rootManipulator.verbify(defSounds.random()),
            toGo: rootManipulator.verbify(vowsList.random()),
            toCome: rootManipulator.verbify(vowsList.random()),
            toWalk: rootManipulator.verbify(defSounds.random()),
            toRun: rootManipulator.verbify(defSounds.random()),
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
                north: rootManipulator.suffix(defSounds.random()),
                south: rootManipulator.suffix(defSounds.random()),
                east: rootManipulator.suffix(defSounds.random()),
                west: rootManipulator.suffix(defSounds.random())
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
                this: rootManipulator.prefix(defSounds.random()),
                that: rootManipulator.prefix(defSounds.random()),
                the: defSounds.random(),
                a: syllables.random()
            },
            adventuring:{
                ally: rootManipulator.sandwich(defSounds.random()),
                enemy: rootManipulator.sandwich(defSounds.random()),
                leader: rootManipulator.sandwich(defSounds.random()),
                magic: rootManipulator.sandwich(defSounds.random()),
                arcane: rootManipulator.sandwich(defSounds.random()),
                divine: rootManipulator.sandwich(defSounds.random()),
                sword: rootManipulator.sandwich(defSounds.random()),
                spear: rootManipulator.sandwich(defSounds.random()),
                shield: rootManipulator.sandwich(defSounds.random()),
                artifact: rootManipulator.sandwich(defSounds.random()),
            },
            geographic:{
                mountain: rootManipulator.sandwich(defSounds.random()),
                ocean: rootManipulator.sandwich(defSounds.random()),
                hill: rootManipulator.sandwich(defSounds.random()),
                lake: rootManipulator.sandwich(defSounds.random()),
                continent: rootManipulator.sandwich(defSounds.random()),
                island: rootManipulator.sandwich(defSounds.random()),
                peninsula: rootManipulator.sandwich(defSounds.random()),
                forest: rootManipulator.sandwich(defSounds.random()),
                grassland: rootManipulator.sandwich(defSounds.random()),
                desert: rootManipulator.sandwich(defSounds.random()),
                jungle: rootManipulator.sandwich(defSounds.random()),
                river: rootManipulator.sandwich(defSounds.random()),
                cave: rootManipulator.sandwich(defSounds.random()),
            },
            manmade:{
                city: rootManipulator.sandwich(defSounds.random()),
                town: rootManipulator.sandwich(defSounds.random()),
                village: rootManipulator.sandwich(defSounds.random()),
                nation: rootManipulator.sandwich(defSounds.random()),
                capitol: rootManipulator.sandwich(defSounds.random()),
                building: rootManipulator.sandwich(defSounds.random()),
                home: rootManipulator.prefix(defSounds.random()),
                well: rootManipulator.prefix(defSounds.random()),
                wheel: rootManipulator.prefix(defSounds.random()),
                door: rootManipulator.prefix(defSounds.random()),
                table: rootManipulator.prefix(defSounds.random()),
                chair: rootManipulator.prefix(defSounds.random()),
                throne: rootManipulator.prefix(defSounds.random()),
                window: rootManipulator.prefix(defSounds.random()),
                bed: rootManipulator.prefix(defSounds.random()),
                chamberPot: rootManipulator.prefix(defSounds.random()),
                garbage: rootManipulator.prefix(defSounds.random()),    
            },
            elemental:{
                plant: rootManipulator.sandwich(defSounds.random()),
                animal: rootManipulator.sandwich(defSounds.random()),
                fire: rootManipulator.prefix(defSounds.random()),
                water: rootManipulator.prefix(defSounds.random()),
                earth: rootManipulator.prefix(defSounds.random()),
                air: rootManipulator.prefix(defSounds.random()),
                fae: rootManipulator.sandwich(defSounds.random()),
                shadow: rootManipulator.sandwich(defSounds.random()),
                demon: rootManipulator.sandwich(defSounds.random()),
                devil: rootManipulator.sandwich(defSounds.random()),
                angel:rootManipulator.sandwich(defSounds.random()),
                abberation: rootManipulator.sandwich(defSounds.random()),
            },
            familial:{
                ancestor: rootManipulator.sandwich(defSounds.random()),
                grandfather: rootManipulator.sandwich(defSounds.random()),
                grandmother: rootManipulator.sandwich(defSounds.random()),
                grandparent: rootManipulator.sandwich(defSounds.random()),
                father: rootManipulator.sandwich(defSounds.random()),
                mother: rootManipulator.sandwich(defSounds.random()),
                parent: rootManipulator.sandwich(defSounds.random()),
                son: rootManipulator.sandwich(defSounds.random()),
                daughter: rootManipulator.sandwich(defSounds.random()),
                child: rootManipulator.sandwich(defSounds.random()),
                brother: rootManipulator.sandwich(defSounds.random()),
                sister: rootManipulator.sandwich(defSounds.random()),
                sibling: rootManipulator.sandwich(defSounds.random()),
                grandson: rootManipulator.sandwich(defSounds.random()),
                granddaughter: rootManipulator.sandwich(defSounds.random()),
                grandchild: rootManipulator.sandwich(defSounds.random()),
                uncle: rootManipulator.sandwich(defSounds.random()),
                aunt: rootManipulator.sandwich(defSounds.random()),
                cousin: rootManipulator.sandwich(defSounds.random()),
            }
        }
    }
}

export {langIndexGen}