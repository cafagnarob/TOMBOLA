const numeriEstratti = []

const numberOfCells = 90
// facciamo una funzione che crea le celle

const createCells = function () {
  const tabellone = document.getElementById("tabellone")
  for (let i = 1; i <= numberOfCells; i++) {
    const cell = document.createElement("div")

    cell.classList.add("numCell")

    const h3 = document.createElement("h3")

    h3.innerText = i

    cell.appendChild(h3)

    tabellone.appendChild(cell)
  }
}
createCells()

let cellPool = Array.from(document.querySelectorAll(".numCell"))

const estraiNumero = function () {
  if (cellPool.length === 0) {
    alert("Tutti i numeri sono già stati estratti!")
    return
  }

  const randomIndex = Math.floor(Math.random() * cellPool.length)
  const pickedCell = cellPool[randomIndex]

  cellPool.splice(randomIndex, 1)

  const num = parseInt(pickedCell.querySelector("h3").innerText)
  numeriEstratti.push(num)

  document.getElementById("numeriEstratti").innerText = num

  pickedCell.classList.add("estratto")
}
document.getElementById("estraiBtn").addEventListener("click", estraiNumero)
