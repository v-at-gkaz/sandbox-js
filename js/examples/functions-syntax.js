console.log('Functions Sytax');

// Напишите стрелочную функцию которая будет выводить переданную строку в
// консоль n раз.
const consoleRepeat = (str, count) => {
    let cnt=1;
    while (count > 0){
        console.log(cnt + ' ' + str);
        count--;
        cnt++;
    }
}

// consoleRepeat('Some string', 5);

// 10 гласных букв: а,у,о,ы,э,я,ю,ё,и,е. 21 согласная буква: б, в, г, д, ж,з,й,к,л,м,н,п,р,с,т,ф,х,ц,ч,ш,щ.

// Напишите стрелочную функцию, которая будет принимать в качестве параметра
// букву и если она гласная, функция будет возвращать true, в противном случае
// false .

const isLetterVowel = letter => {
    const vowelLetters= 'ауоыэяюёиеaeiouy';
    return vowelLetters.includes(letter.toLowerCase());
}

const testLetters = 'абвгд'; // еёжзийклмнопрстуфхцчшщьыъэюя

// for (let i=0; i<testLetters.length; i++){
//     const testLetter = testLetters[i];
//     console.log(`isLetter ${testLetter} Vowel?`, 
//     isLetterVowel(testLetter) ? 'Yes' : 'No');
// }


// Напишите стрелочную функцию, которая будет возвращать true если строка
// является палиндромом и false в противном случае.


const isPalindrom = str => {
    let strReverse = '';
    for(let i=str.length-1; i >= 0; i--){
        strReverse += str[i];
    }
    return strReverse === str;
}

console.log(isPalindrom('1233321'));