const loadCountries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
        .then(res => res.json())
        .then(jData => displayCountries(jData))
}
const displayCountries = countries => {
    console.log(countries[0]);
    const CountriesHtml = countries.map(country => getCountryHtml(country));
    //console.log(CountriesHtml[0])
    const display = document.getElementById('country');
    display.innerHTML = CountriesHtml.join('');
}


const getCountryHtml = ({ name, flags, area, capital }) => {

    return `
    <div class='country'>
        <h2>${name.common}</h2>
        <h2>Area :${area}</h2>
        <h2>Capital :${capital}</h2>
        <img src="${flags.png}">
    </div>
    
    
    
    `


}

//step 2  desructring
/* const getCountryHtml = country => {
    const { name, flags } = country;
    return `
    <div class='country'>
        <h2>${name.common}</h2>
        <img src="${flags.png}">
    </div>
    
    
    
    `


} */


// orginal 
/* const getCountryHtml = country => {
    return `
    <div class='country'>
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
    </div>
    
    
    
    `


} */



loadCountries();