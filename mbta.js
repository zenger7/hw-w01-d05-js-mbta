var MBTA = {
  Red: [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife'],

  Green: [
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore'],

  Orange: [
    'North Station',
    'Haymarket',
    'Park Street',
    'State',
    'Downtown Crossing',
    'Chinatown',
    'Back Bay',
    'Forest Hills']
};


//The function takes the line and stop that a rider is getting on at and the line and stop that a rider is getting off at and returns the total number of stops for the trip.

//All 3 subway lines intersect at Park Street, but there are no other intersection points.

//Start Line, Start Station, End Line, End Station
const stopsBetweenStations = function(StartLine, StartStation, EndLine, EndStation) {

  console.log('Start : ' + StartLine +' -> '+ StartStation + ' \n End : ' + EndLine +' -> '+ EndStation);
  const keys = Object.keys(MBTA);
  const values = Object.values(MBTA)

  if (StartLine == EndLine) {
    const obj = MBTA[StartLine];

    if (MBTA[StartLine].indexOf(StartStation) == MBTA[EndLine].indexOf(EndStation)) {
      console.log(StartStation);


    } else if (MBTA[StartLine].indexOf(StartStation) > MBTA[EndLine].indexOf(EndStation)) {

      let key12 = MBTA[StartLine].indexOf(StartStation);
      let key13 = MBTA[EndLine].indexOf(EndStation);

      for (let key1 = key12; key1 >= key13; key1--) {
        console.log(key1+'- '+ obj[key1]);

      }

    } else if (MBTA[StartLine].indexOf(StartStation) < MBTA[EndLine].indexOf(EndStation)) {

      let key12 = MBTA[EndLine].indexOf(EndStation);
      for (let key1 = 0; key1 < obj.length; key1++) {
        if (key1 <= key12) {
          console.log(key1+'- '+ obj[key1]);

        }
      }
    }
    //----------------------------------------------------------
  } else if (StartLine != EndLine) {
    for (let key11 = 0; key11 < MBTA[StartLine].length; key11++) {
      // console.log(key11);
      for (let key14 = 0; key14 < MBTA[StartLine].length; key14++) {
        // console.log('key14 ', key14);
        if (MBTA[StartLine][key14] === MBTA[EndLine][key11]) {
          console.log("Change the train: " + MBTA[StartLine][key14]);
          // console.log(key14);
          // console.log(key11);

        }
      }

    }

  } else {
    console.log('Error checking input')}



  console.log('---------------------');

  console.log('total number of stops for the trip = ');

  console.log(Math.abs((MBTA[StartLine].indexOf(StartStation)) - (MBTA[EndLine].indexOf(EndStation))));
  console.log('---------------------');
}

stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Red', 'Harvard') // 4 stops

stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops
//stopsBetweenStations('Red', 'South Station', 'Green', 'Copley')
