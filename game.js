// Game logic functions

function getRandomWord(excludeWords = null) {
    let word = RU_WORDS[Math.floor(Math.random() * RU_WORDS.length)];
    if (excludeWords) {
        const excludeArray = Array.isArray(excludeWords)
            ? excludeWords
            : [excludeWords];
        while (
            excludeArray.includes(word) &&
            RU_WORDS.length > excludeArray.length
        ) {
            word = RU_WORDS[Math.floor(Math.random() * RU_WORDS.length)];
        }
    }
    return word;
}

function getRandomEnWord(excludeEn = null) {
    let word = EN_WORDS[Math.floor(Math.random() * EN_WORDS.length)];
    if (excludeEn) {
        const excludeArray = Array.isArray(excludeEn) ? excludeEn : [excludeEn];
        while (
            excludeArray.includes(word) &&
            EN_WORDS.length > excludeArray.length
        ) {
            word = EN_WORDS[Math.floor(Math.random() * EN_WORDS.length)];
        }
    }
    return word;
}
