// This code demonstrates object destructuring with nested objects and arrays
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

// Destructuring the person object:
// - name: gets the name property
// - location: {country, city, coordinates: [lat, lng]}: 
//   - gets country and city from location object
//   - gets coordinates array and destructures it into lat and lng
const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// Expected output:
// "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
