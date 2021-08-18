"use sctrict";

// let number = 5;
// number = 10;
// console.log(number);
// const leftBorderWidth = 1;



// {
//     let number = 5;
//     console.log(number);
// }

// let obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };
// console.log(obj.name);

// const answer = ['one', 'two'];
// console.log(answer[0]);

// const answers = [];
// answers [0] = prompt('Скільки вам років?', '');
// answers [1] = prompt('Як вас звати?', '');
// // console.log(answers[0]);
// document.write(answers);

// ОПЕРАТОРИ

    // 1. Інкримент та Декримент

        let incr = 10,
            decr = 10;
        incr++;
        decr--;
        console.log(incr);
        console.log(decr);

    // 2. Остача від ділення 2-ох чисел (%)
        console.log(9%4);
        
        let one = 20,
            two = 3;
        console.log(one%two);

    // 3. Оператор порівняння (==)
        console.log(2*4 == 8); // true
        console.log(2*3 == 8); // false
        console.log(2*4 == '8'); // true (порівнюємо по значенню а не по типу даних)

        // 3.1 Строге порівняння (===)
        console.log(2*3 === 6); // true (порівнює по значенню та типу даних)
        console.log(2*3 === '6'); // false

    // 4. Оператор і (&&) Працює лише тоді, коли два або більше підопитних є правдивими виразами
        // та або (||)
        let nam = true,
            bam = true;
        console.log(nam && bam); // true

        
        let nam = true,
            bam = false;
        console.log(nam && bam); // false
        
        let nam = true,
            bam = false;
        console.log(nam || bam); //true 

    // 5. Оператор заперечення (!). Обертає значення в протилежне. Якщо було true то стає false
        let nam = true,
            bam = false;
        console.log(nam && !bam); // true

    // 6. Порядок виконання операцій

