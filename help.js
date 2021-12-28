// Calculating ETA for metro
function getETA(metro) {
    const current = new Date();
    const arrival = new Date(metro.expectedArrivalTime);
    var diff = Math.abs(arrival - current);
    return Math.floor((diff/1000)/60);
}

function displayCity(cityBound) {
    var cityEl = document.getElementById("cityBound");

    cityBound.forEach(metro => {
        // Get required info
        var destination = metro.destinationDisplay.frontText;
        var line = metro.serviceJourney.journeyPattern.line.id.split(":")[2];
        var eta = getETA(metro);
        var etaString = "";
        if (eta == 0) {
            etaString = "Nå";
        }
        else {
            etaString = eta + " min";
        }

        // Body-div
        var metroDiv = document.createElement("div");
        metroDiv.classList.add("metro");

        // Line-number circle
        var numberDiv = document.createElement("div");
        numberDiv.classList.add("circle");
        var lineEl = document.createElement("span");
        lineEl.textContent = line;
        lineEl.classList.add("lineNr");
        numberDiv.appendChild(lineEl);
        if (destination == "Frognerseteren") {
            numberDiv.classList.add("frognerseteren");
        }
        else {
            numberDiv.classList.add("bergkrystallen");
        }
        metroDiv.appendChild(numberDiv);
        
        // Destination
        var destinationEtaDiv = document.createElement("div");
        destinationEtaDiv.classList.add("destinationText");
        destinationEtaDiv.innerHTML = destination;
        metroDiv.appendChild(destinationEtaDiv);

        // ETA
        var etaDiv = document.createElement("div");
        etaDiv.id = "etaDiv";
        var etaNr = document.createElement("span");
        etaNr.textContent = etaString;
        etaDiv.appendChild(etaNr);
        
        //Indication:
        var etaIndicationDiv = document.createElement("div");
        etaIndicationDiv.id = "etaIndication";
        if (eta >= 10) {
            etaIndicationDiv.className = "etaIndicateGood";
        }
        else if (eta >= 5) {
            etaIndicationDiv.className = "etaIndicateMedium";
        }
        else {
            etaIndicationDiv.className = "etaIndicateRush";
        }
        etaDiv.appendChild(etaIndicationDiv);
        metroDiv.appendChild(etaDiv);
        
        cityEl.appendChild(metroDiv);
    })
}

function displayHome(homeBound) {
    var homeEl = document.getElementById("homeBound");
    homeBound.forEach(metro => {
        // Get required info
        var destination = metro.destinationDisplay.frontText;
        var line = metro.serviceJourney.journeyPattern.line.id.split(":")[2];
        var eta = getETA(metro);
        var etaString = "";
        if (eta == 0) {
            etaString = "Nå";
        }
        else {
            etaString = eta + " min";
        }

        // Body-div
        var metroDiv = document.createElement("div");
        metroDiv.classList.add("metro");

        // Line-number circle
        var numberDiv = document.createElement("div");
        numberDiv.classList.add("circle");
        var lineEl = document.createElement("span");
        lineEl.textContent = line;
        lineEl.classList.add("lineNr");
        numberDiv.appendChild(lineEl);
        if (destination == "Frognerseteren") {
            numberDiv.classList.add("frognerseteren");
        }
        else {
            numberDiv.classList.add("bergkrystallen");
        }
        metroDiv.appendChild(numberDiv);
        
        // Destination
        var destinationEtaDiv = document.createElement("div");
        destinationEtaDiv.classList.add("destinationText");
        destinationEtaDiv.innerHTML = destination;
        metroDiv.appendChild(destinationEtaDiv);

        // ETA
        var etaDiv = document.createElement("div");
        etaDiv.id = "etaDiv";
        var etaNr = document.createElement("span");
        etaNr.textContent = etaString;
        etaDiv.appendChild(etaNr);
        
        //Indication:
        var etaIndicationDiv = document.createElement("div");
        etaIndicationDiv.id = "etaIndication";
        if (eta >= 10) {
            etaIndicationDiv.className = "etaIndicateGood";
        }
        else if (eta >= 5) {
            etaIndicationDiv.className = "etaIndicateMedium";
        }
        else {
            etaIndicationDiv.className = "etaIndicateRush";
        }
        etaDiv.appendChild(etaIndicationDiv);
        metroDiv.appendChild(etaDiv);
        
        homeEl.appendChild(metroDiv);
    })
}

