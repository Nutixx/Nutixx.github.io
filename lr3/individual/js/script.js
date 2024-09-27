class Film {
    constructor(title, director, year, genre, isViewed) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.genre = genre;
        this.isViewed = isViewed;
    }
}

let library = [
    new Film('Interstellar', 'Cristopher Nolan',
        2014, 'science fiction', true),
    new Film('Kill Bill: Volume 1', 'Quentin Tarantino',
        2003, 'action', false),
    new Film('Shutter Island', 'Martin Scorsese',
        2010, 'film noir', true),
]

function displayLibrary() {
    library.forEach(item => {
        console.log(`Назва: ${item.title}, Режисер: ${item.director}, Рік видання: ${item.year}, Жанр: ${item.genre} Прочитана: ${item.isViewed ? "Так" : "Ні"}`);
    })
}

displayLibrary();

library.sort((a, b) => a.year - b.year);
console.log("Відсортовані фільми за роком видання: ", library);

let unviewedFilms = library.filter(film => !film.isViewed);
console.log("Не переглянуті фільми: ", unviewedFilms);;

let іnterstellar = library.find(item => item.title === "Interstellar");
console.log("Інтерстеллар: ", іnterstellar);

function addBookToLibrary() {
    let title = prompt('Введіть назву фільму:');
    let director = prompt("Введіть режисера фільму:");
    let year = +prompt("Введіть рік виходу фільму:");
    let genre = prompt("Введіть жанр фільму:");
    let isViewed = confirm("Чи прочитана книга?");

    library.push(new Film(title, director, year, genre, isViewed));
    displayLibrary();
}
// addBookToLibrary();

function markAsViewed(title, list) {
    list.forEach(item => {
        if (title == item.title) {
            if (item.isViewed == false) {
                item.isViewed = true;
                console.log("Фільм позначено як переглянутий.");
            }
            else {
                console.log("Ви вже дивились цей фільм!");
            }
        }
    })
}

markAsViewed("Kill Bill: Volume 1", library);

function calculateAverageYear(list) {
    let sum = 0;
    list.forEach(item => {
        sum += item.year
    })
    console.log(sum / list.length);
}

calculateAverageYear(library);