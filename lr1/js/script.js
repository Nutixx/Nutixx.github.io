const referrals = [
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир1' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир2' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир3' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир4' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир5' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир1' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир2' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир3' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир4' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир5' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир11' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир12' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир13' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир14' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир15' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир16' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир17' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир18' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир19' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир20' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир21' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир22' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир23' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир24' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир25' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир26' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир27' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир28' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир29' },
    { date: '22.08.22', saldo: 20, kolo: 1, accrued: 3, referral: 'Володимиров Володимир30' },
];

let tbody = document.querySelector('tbody');
let n = 0;

renderItems(referrals, tbody, n);

function renderItems(list, wrap, n) {
    for (let i = n * 10; i < n * 10 + 10; i++) {
        const tr = createField(list[i], list);
        wrap.appendChild(tr);
    }
}

function clearItems() {
    tbody.innerHTML = '';
}

let paginationElem = document.querySelector('.pagination');
    paginationElem.onclick = function (event) {
    let target = event.target;
    if (target.className.includes('page-number') || target.className.includes('prev-page') || target.className.includes('next-page')) {
        loadMoreButton.style.visibility = 'visible';
        if (target.className.includes('page-number')) {
            n = +target.value;
        }
        else if (target.className.includes('prev-page')) {
            if (n > 0) {
                n -= 1;
            }
        }
        else if (target.className.includes('next-page')) {
            if (n < 2) {
                n += 1;
            }
        }
        clearItems();
        renderItems(referrals, tbody, n);

        const btnWrapper = document.querySelector('.pagination');
        for (let btn of btnWrapper.children) {
            if (btn.className.includes('page-number')) {
                if (+btn.value === n) {
                    btn.classList.add('active')
                }
                else {
                    btn.classList.remove('active')
                }
            }
        }
    }
}


let loadMoreButton = document.querySelector('.load-more-btn');
loadMoreButton.onclick = function (event) {
    let target = event.target;
    if (n < 2) {
        n++
        renderItems(referrals, tbody, n);
    }
    if (n == 2) {
        target.style.visibility = 'hidden'
    }
    activeGenerator('.pagination', 'page-number');
}

function activeGenerator(btnWrap, include) {
    const btnWrapper = document.querySelector(btnWrap);
    for (let btn of btnWrapper.children) {
        if (btn.className.includes(include)) {
            if (+btn.value === n) {
                btn.classList.add('active')
            }
        }
    }
}

function createField(inputValue, list) {
    let tr = document.createElement('tr');
    let td;
    for (let i = 0; i < list.length; i++) {
        if (list[i] == inputValue) {
            td = document.createElement('td');
            td.innerText = i + 1;
            tr.appendChild(td);
        }
    }

    for (let item in inputValue) {
        td = document.createElement('td');
        td.innerText = inputValue[item];
        tr.appendChild(td);
    }
    return tr;
}