function checkVowelOrConsonant(char) {
    const lowerChar = char.toLowerCase();
    if (lowerChar >= 'a' && lowerChar <= 'z') {
        if ('aeiou'.includes(lowerChar)) {
            console.log(`${char} is a vowel.`);
        } else {
            console.log(`${char} is a consonant.`);
        }
    } else {
        console.log(`${char} is not a valid letter.`);
    }
}
const character = 'A';
checkVowelOrConsonant(character);