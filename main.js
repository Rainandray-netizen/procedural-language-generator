import { phoneticsGen } from './phoneticsGenerator'
import { langIndexGen } from './langIndexGenerator'

const vowels = ['i','u','e','æ','ɛɪ']
const consonants = ['ll','v','s','th','n','m','f','w']

// const vowels = [ 'æ', 'aɪ' ,'e' ,'ɪ' ,'ɐ' ]
// const consonants = ['c','h', 'r', 's', 't', 'n','ʒ']

const phonetics = phoneticsGen(vowels,consonants)

const langIndex = langIndexGen(phonetics)

console.log(langIndex)