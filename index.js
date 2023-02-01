let basic = document.getElementById('basic');
let advanced = document.getElementById('advanced');
let pro = document.getElementById('pro');


basic.addEventListener("click", (event) => {
    if (basic.innerText.includes('Our')) {
        basic.innerHTML = `<div class="nameAndPrice">
                <h1>Basic</h1>
                <h2>$15</h2>
            </div>`
    } else {
        basic.innerHTML += `
        <ul>
            <li>Our beginner subscription for your basic needs.</li>
        </ul>
    </div>`
    }


    if (advanced.innerText.includes('Our')) {
        advanced.innerHTML = `<div class="nameAndPrice">
                <h1>Advanced</h1>
                <h2>$25</h2>
            </div>`

    }
    if (pro.innerHTML.includes('Our')) {
        pro.innerHTML = `<div class="nameAndPrice">
                <h1>Professional</h1>
                <h2>$50</h2>
            </div>`
    }
})

advanced.addEventListener("click", (event) => {

    if (advanced.innerText.includes('Our')) {
        advanced.innerHTML = `<div class="nameAndPrice">
                <h1>Advanced</h1>
                <h2>$25</h2>
            </div>`
    } else {
        advanced.innerHTML += `
        <ul>
            <li>Our advanced subscription for your basic needs plus some.</li>
        </ul>
    </div>`
        if (basic.innerText.includes('Our')) {
            basic.innerHTML = `<div class="nameAndPrice">
                <h1>Basic</h1>
                <h2>$15</h2>
            </div>`
        }
        if (pro.innerHTML.includes('Our')) {
            pro.innerHTML = `<div class="nameAndPrice">
                <h1>Professional</h1>
                <h2>$50</h2>
            </div>`
        }
    }
})

pro.addEventListener("click", (event) => {
    if (pro.innerText.includes('Our')) {
        pro.innerHTML = `<div class="nameAndPrice">
                <h1>Professional</h1>
                <h2>$50</h2>
            </div>`
    } else {
        pro.innerHTML += `
        <ul>
            <li>Our professional subscription for everything you will ever need.</li>
        </ul>
    </div>`
        if (basic.innerText.includes('Our')) {
            basic.innerHTML = `<div class="nameAndPrice">
                <h1>Basic</h1>
                <h2>$15</h2>
            </div>`
        }
        if (advanced.innerHTML.includes('Our')) {
            advanced.innerHTML = `<div class="nameAndPrice">
                <h1>Advanced</h1>
                <h2>$25</h2>
            </div>`
        }
    }
})