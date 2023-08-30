function fruties() {
    const fruties= ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    list = list.sort(() => Math.random() - 0.5);
     alert(`Запомни слова: ${fruties}`);
     const fruties1 = prompt("Какое было 1е слово?");
     const fruties2 = prompt("Какое было последнее слово?");

    
    if (fruties1 === list[0] && fruties2 === list[list.length-1] ) {
        alert ('Угадал!');
    } 
    else if (fruties1 === list[0]) {
        alert ('Вы были близки к победе!');
    } 
    else if (fruties2 === list[list.length-1]) {
        alert ('Вы были близки к победе!');
    } 
    
    else {
        alert('Не угадал!');
    }
}