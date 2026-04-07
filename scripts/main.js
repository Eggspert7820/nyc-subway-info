function main(){
    var newSection = document.getElementById('subway-times')
    var innerHTML = ""
    for(var x = 1; x<=10; x++) {
        innerHTML += `<h2>Section Title ${x}</h2><p>This section was created dynamically using JavaScript.</p>`;
    }
    newSection.innerHTML=innerHTML
}

main()