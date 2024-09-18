const referrals = [
    { number: 1, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир1' },
    { number: 2, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир2' },
    { number: 3, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир3' },
    { number: 4, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир4' },
    { number: 5, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир5' },
    { number: 6, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир1' },
    { number: 7, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир2' },
    { number: 8, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир3' },
    { number: 9, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир4' },
    { number: 10, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир5' },
    { number: 11, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир1' },
    { number: 12, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир2' },
    { number: 13, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир3' },
    { number: 14, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир4' },
    { number: 15, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир5' },
    { number: 16, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир1' },
    { number: 17, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир2' },
    { number: 18, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир3' },
    { number: 19, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир4' },
    { number: 20, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир5' },
    { number: 21, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир1' },
    { number: 22, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир2' },
    { number: 23, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир3' },
    { number: 24, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир4' },
    { number: 25, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир5' },
    { number: 26, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир1' },
    { number: 27, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир2' },
    { number: 28, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир3' },
    { number: 29, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир4' },
    { number: 30, date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир5' },
];

let tbody = document.querySelector('tbody');
let n = 0;

renderItems(referrals, tbody, n);

function renderItems(list, wrap, n) {
    for (let i = n * 10; i < n * 10 + 10; i++) {
        const tr = createField(list[i]);
        wrap.appendChild(tr);
    }
    // list.forEach(item => {
    //     const tr = createTaskInstance(item);
    //     wrap.appendChild(tr);
    // })
}

function clearItems() {
    tbody.innerHTML = '';
}

let paginationElem = document.querySelector('.pagination');
paginationElem.onclick = function (event) {
    let target = event.target;
    if (target.className == 'page-number' || target.className == 'prev-page' || target.className == 'next-page') {
        loadMoreButton.style.visibility = 'visible';

        if (target.className == 'page-number') {
            n = target.value;

        }
        else if (target.className == 'prev-page') {
            console.log('<')
            if (n > 0) {
                n -= 1;
            }
        }
        else if (target.className == 'next-page') {
            console.log('>')
            if (n < 2) {
                n += 1;
            }
        }
        console.log(n);
        clearItems();
        renderItems(referrals, tbody, n);
        let previousElem = this.querySelector('.active');
        previousElem.classList.remove('active');
        target.classList.add('active');
    }
}

let loadMoreButton = document.querySelector('.load-more-btn');
loadMoreButton.onclick = function(event) {
    let target = event.target;
    if(n < 2){
        n++
        renderItems(referrals, tbody, n);
    }
    if(n == 2){
        target.style.visibility = 'hidden'
    }
}



function createField(inputValue) {
    let tr = document.createElement('tr');
    let td;
    for (let item in inputValue) {
        td = document.createElement('td');
        td.innerText = inputValue[item];
        tr.appendChild(td);
    }
    return tr;
}

