function checkAnagram(str1, str2) {
    if (str1.length === str2.length) {
        return true
    }
    else {
        return false
    }
}

const str1 = 'listen'
const str2 = 'silent'

const anagram = checkAnagram(str1,str2)
if (anagram) {
    console.log('Anagram')  ``
}else {
    console.log('Not a Anagram')
}