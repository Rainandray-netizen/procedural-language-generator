import { phoneticsGen } from './phoneticsGenerator'

const vowels = ['i','u','e','æ','ɛ']
const consonants = ['ll','v','s','th','n','m','f','w']

const phonetics = phoneticsGen(vowels,consonants)

console.log(phonetics)