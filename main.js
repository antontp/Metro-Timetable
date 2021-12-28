const query = `{
    stopPlace(id: "NSR:StopPlace:58249") {
      id
      name
      estimatedCalls(timeRange: 72100, numberOfDepartures: 10) {     
        realtime
        aimedArrivalTime
        aimedDepartureTime
        expectedArrivalTime
        expectedDepartureTime
        actualArrivalTime
        actualDepartureTime
        date
        forBoarding
        destinationDisplay {
          frontText
        }
        serviceJourney {
          journeyPattern {
            line {
              id
              name
              transportMode
            }
          }
        }
      }
    }
  }`;


// fetching data
async function getData() {
    return fetch('https://api.entur.io/journey-planner/v2/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'ET-Client-Name': 'Anton-ManglerudTavle',
        },
        body: JSON.stringify({
            query: query,
        })
    })
}

async function promiseToData(promise) {
    var data = await promise.json();
    return data.data.stopPlace.estimatedCalls;
}

async function filterMetro(metros) {
    var cityBound = [];
    var homeBound = [];
    for (let i = 0; i < metros.length; i++) {
        if (metros[i].serviceJourney.journeyPattern.line.transportMode == "metro") {
            if (metros[i].destinationDisplay.frontText == "Bergkrystallen") {
                console.log(metros[i].destinationDisplay.frontText);
                homeBound.push(metros[i]);
            }
            else {
                console.log(metros[i].destinationDisplay.frontText);
                cityBound.push(metros[i]);
            }
        }
    }
    return [cityBound, homeBound];
}

function displayMetros(filteredMetros) {
    var cityBound = filteredMetros[0];
    var homeBound = filteredMetros[1];
    
    displayCity(cityBound);
    displayHome(homeBound);
}

function update() {
    getData()
        .then(promiseToData)
        .then(filterMetro)
        .then(displayMetros)
        .catch(error => {
            console.error(error)
        });
}

update();
