function main(){
    var generate = document.getElementById("generate")
    generate.addEventListener("mouseup", generateTrains)
}

function generateTrains() {
    var stationsofinterest = document.getElementById("stationsofinterest")
    var crossstreets = document.getElementById("crossstreets")
    var address = document.getElementById("address")
    var trainInfo = ""
    if (stationsofinterest.value) {
        trainInfo += `<p>Interested stations: ${stationsofinterest.value}</p>`
    }
    if (crossstreets.value) {
        trainInfo += `<p>Interested cross streets: ${crossstreets.value}</p>`
    }
    if (address.value) {
        trainInfo += `<p>Address: ${address.value}</p>`
    }

    var subwayTimes = document.getElementById('subway-times')
    genSecCount++
    subwayTimes.innerHTML += `<h2>Subway Section Title ${genSecCount}</h2>${trainInfo}`
}

var genSecCount=0
main()