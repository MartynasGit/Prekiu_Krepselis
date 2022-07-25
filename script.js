const prekiuKrepselis = [];

const form = document.querySelector('form')
const mygtukas = document.querySelector('button');
const input = document.querySelector('input[type="text"]')
const inputKiekis = document.querySelector('input[type="number"]')
const tp = document.querySelector('.lenta').parentElement
const lentele = document.querySelector('.lenta');

const tuscias = () => { 
    document.querySelector('.parag').style.display = "block"
    lentele.innerHTML = [];
}
const istrinti = (i) => {
    prekiuKrepselis.splice(i, 1)
    duomenuAtvaizdavimas()

}

const duomenuAtvaizdavimas = () => {
        lentele.innerHTML = "";
        const tr = document.createElement('tr')
        const th = document.createElement('th')
        const th2 = document.createElement('th')
        const th3 = document.createElement('th')
        th.textContent = "Prekė";
        th2.textContent = "Kiekis";
        th3.textContent = "";
        tr.append(th)
        tr.append(th2)
        tr.append(th3)
        lentele.append(tr)

        for(let i in prekiuKrepselis){
            const tr2 = document.createElement('tr');
            const td1 = document.createElement('td')
            const td2 = document.createElement('td')
            const td3 = document.createElement('td')
            const button = document.createElement('button')

            tr2.classList.add(`tr${i}`)
            button.classList.add('btn')
            button.textContent = "Ištrinti"
            button.addEventListener('click', () => istrinti(i))

            td1.innerHTML = `${prekiuKrepselis[i].preke}`
            td2.innerHTML = `${prekiuKrepselis[i].kiekis}`
            td3.append(button)
            tr2.append(td1)
            tr2.append(td2)
            tr2.append(td3)

            lentele.append(tr2)
        }

}
form.addEventListener('submit', (event) =>{  //Formos iprastu funkciju nunulinimas
    event.preventDefault()
    input.value !== "" && prekiuKrepselis.push({preke: input.value, kiekis: inputKiekis.value}) // Pushinam vertes i objekta ir objekta i array
    document.querySelector('.parag').style.display = "none"
    duomenuAtvaizdavimas()
    // console.log(input.value)
    // console.log(inputKiekis.value)
    // console.log(prekiuKrepselis)
    prekiuKrepselis.forEach((value) => console.log(value))
    input.value = "";
    inputKiekis.value = 1;
    prekiuKrepselis.length == 0 && tuscias()
 })

