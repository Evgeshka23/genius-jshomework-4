// Task 1

// const student = {
//     name: 'Richard',
//     speciality: 'Engineering',
//     averegeGrade: 7.5,
//     missedClasses: 10,
//     info: function(speciality, averegeGrade, missedClasses) {
//         console.log(`Name: ${this.name}, Speciality: ${speciality || this.speciality}, Averege grade: ${averegeGrade || this.averegeGrade}, Missed classes: ${missedClasses || this.missedClasses}`);
//     }
// }

// const Ann = {
//     name: 'Ann',
//     speciality: 'Engineering',
//     averegeGrade: 8.5,
//     missedClasses: 5,
// }

// const John = {
//     name: 'John'
// }

// const Jane = {
//     name: 'Jane'
// }

// const annInfo = student.info.bind(Ann, "Engineering");
// annInfo();
// student.info.call(John, "Design", 9.5, 3);
// student.info.apply(Jane, ["Development", 10, 1]);

// Task 2

// const buttons = {
//     showItem: function(item) {
//         console.log(this.item);
//     }
// }
// const html = {
//     item: 'HTML is a murkcup language',
// }
// const css = {
//     item: 'CSS is a style language',
// }

// document.querySelector('#html').addEventListener('click', buttons.showItem.bind(html));
// document.querySelector('#css').addEventListener('click', buttons.showItem.bind(css));

// Task 3

// const infoMagazine = {
//     name: 'Magazine',
//     price: 500,
//     quantity: 150,
//     showInfo: function(price, quantity) {
//         console.log(`Name: ${this.name}, Price: ${price || this.price}, Quantity: ${quantity || this.quantity}`);
//     }
// }

// const banana = {
//     name: 'Banana',
//     price: 4.5,
//     quantity: 30
// }

// const cherry = {
//     name: 'Cherry',
//     price: 1.3,
//     quantity: 58
// }

// const orange = {
//     name: 'Orange'
// }

// infoMagazine.showInfo.bind(banana)();
// infoMagazine.showInfo.call(cherry);
// infoMagazine.showInfo.apply(orange, [3.4, 89]);