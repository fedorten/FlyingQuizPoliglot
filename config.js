// Настройки игры
const CONFIG = {
    gameDuration: 30000,      // 30 сек в мс  
    maxWordsOnScreen: 20,     // макс слов на экране
    wordSpeed: 4,             // скорость движения (пикселей за кадр)
    wordSpeedVar: 3,          // вариация скорости (+/-)
    spawnInterval: 500,       // появление нового слова каждые X мс
    spawnRate: 1,             // множитель скорости спавна (1 = как есть, 0.5 = вдвое медленнее, 2 = вдвое быстрее)
    pointsCorrect: 100,       // очки за правильное слово
    pointsWrong: -10,         // очки за неправильное слово
    timeBonus: 2000,          // бонус времени за угаданное слово (мс)
    targetWordChance: 0.15,   // 15% шанс появления целевого слова
    targetFromScreen: true,   // выбирать целевое слово с экрана
    targetFromScreenChance: 1, // шанс выбора целевого слова с экрана

    mobile: {
        maxWordsOnScreen: 10,
        wordSpeed: 2,
        wordSpeedVar: 1,
        spawnInterval: 400,
        spawnRate: 1,
        timeBonus: 2000
    },

    // Звания
    ranks: [
        { minScore: 0, title: "Исследователь" },
        { minScore: 300, title: "Студент" },
        { minScore: 500, title: "Ингишмэн" },
        { minScore: 800, title: "Мастер" },
        { minScore: 1000, title: "Титан" },
        { minScore: 1200, title: "Английский чай" }
    ]
};
