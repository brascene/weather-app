export const getImageId = (code) => {
  switch (code) {
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      return '11d';
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      return '09d';
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
      return '10d';
    case 511:
      return '13d';
    case 520:
    case 521:
    case 522:
    case 531:
      return '09d';
    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      return '13d';
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      return '50d';
    case 800:
      return '01d01n';
    case 801:
      return '02d02n';
    case 802:
      return '03d03n';
    case 803:
      return '04d04n';
    case 804:
      return '04d04n';
    default:
      return '';
  }
};

export const week = {
  0: 'Monday',
  1: 'Tuesday',
  2: 'Wendesday',
  3: 'Thursday',
  4: 'Friday',
  5: 'Saturday',
  6: 'Sunday',
};

export const month = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'Nobember',
  11: 'December',
};

export const round = (value, decimals) => Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
export const fahrenheitToCelsius = value => round((5 * ((value - 32) / 9)), 2);
export const celsiusToFahrenheit = value => round(((1.8 * value) + 32), 2);
export const kelvinToFahrenheit = value => round((((value * 9) / 5) - 459.67), 2);
export const kelvinToCelsius = value => round((value - 273.15), 2);

// round temps
// const rList = list.map(m => { 
  // return Object.assign({}, m, 
  //   { temp: 
  //     { day: parseInt(m.temp.day),
  //        min: parseInt(m.temp.min),
  //        max: parseInt(m.temp.max),
  //        night: parseInt(m.temp.night),
  //        eve: parseInt(m.temp.eve),
  //        morn: parseInt(m.temp.morn) } }) })