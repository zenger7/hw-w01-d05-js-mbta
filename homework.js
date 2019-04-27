
// Create an array for each line
const subwayLines = {
    Red: [
      'South Station',
      'Park Street',
      'Kendall',
      'Central',
      'Harvard',
      'Porter',
      'Davis',
      'Alewife'
    ],
    Green: [
      'Government Center',
      'Park Street',
      'Boylston',
      'Arlington',
      'Copley',
      'Hynes',
      'Kenmore'
    ],
    Orange: [
      'North Station',
      'Haymarket',
      'Park Street',
      'State',
      'Downtown Crossing',
      'Chinatown',
      'Back Bay',
      'Forest Hills'
    ]
  }
  
  /*
    stopsBetweenStations function
    accepts 4 arguments a start line, a start station, an end line, and an end station
    it should return the total number of stops between two stations
    for stopsBetweenStations('Red', 'Park Street', 'Green', 'Kenmore')
    the result is 5
  */
  const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
    // get the index of the startLine startStation
    const startStationIndex = subwayLines[startLine].indexOf(startStation)
    // get the index of the end station
    const endStationIndex = subwayLines[endLine].indexOf(endStation)
  
    /*
      if both stops are on the same line then we don't need to bother with
      stopping at Park Street, we can simply figure out how far those stops are
      from each other and return that absolute value.
    */
    if (startLine === endLine) {
      return Math.abs(startStationIndex - endStationIndex)
    }
  
    // get the index of the startLine Park Street station
    const startLineParkStreetIndex = subwayLines[startLine].indexOf('Park Street')
  
    /*
      calculate the difference between the start station index and Park Street index
      take the absolute value of that difference to get the trip to Park Street length
    */
    const tripToParkStreet = Math.abs(startStationIndex - startLineParkStreetIndex)

    // get the index of the endLine Park Street station
    const endLineParkStreetIndex = subwayLines[endLine].indexOf('Park Street')
  
    /*
      calculate the difference between the end station index and end line Park Street index
      take the absolute value of that difference to get the trip to destination length
    */
    const tripToDestination = Math.abs(endStationIndex - endLineParkStreetIndex)
  
    // add the tripToParkStreet and tripToDestination to get the trip total
    const totalTrip = tripToParkStreet + tripToDestination
  
    // return the total trip
    return totalTrip
  }
  
// // shorter version, less readable
//   const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
//     const startStationIndex = subwayLines[startLine].indexOf(startStation)
//     const endStationIndex = subwayLines[endLine].indexOf(endStation)

//     if (startLine === endLine) {
//       return Math.abs(startStationIndex - endStationIndex)
//     }
  
//     return Math.abs(startStationIndex - subwayLines[startLine].indexOf('Park Street')) + Math.abs(endStationIndex - subwayLines[endLine].indexOf('Park Street'))
  
//   }
  
