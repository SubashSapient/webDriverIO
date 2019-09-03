const faker = require('faker');
faker.locale = "pt_BR";

function fakeFirstName() {
    return faker.name.firstName();
}

function fakeLastName() {
    return faker.name.lastName();
}

function fakeJobDescription() {
    return faker.name.jobDescriptor();
}

function fakeJobTitle() {
    return faker.name.jobTitle();
}

function fakeJobType() {
    return faker.name.jobType();
}

function fakeTitle() {

    return faker.name.title();
}

function fakeSuffix() {
    return faker.name.suffix();
}

function fakePrefix() {
    return faker.name.prefix();
}

function fakejobArea() {
    return faker.name.jobArea();
}

function fakeCity() {
    return faker.address.city();
}

function fakeCityPrefix() {
    faker.address.cityPrefix();
}

function fakeCitySuffix() {
    return faker.address.citySuffix();
}

function fakeCountry() {
    return faker.address.country();
}

function fakeCountryCode() {
    return faker.address.countryCode();
}

function fakeCounty() {
    return faker.address.county();
}

function fakeLatitude() {
    return faker.address.latitude();
}

function fakeLongitude() {
    return faker.address.longitude();
}

function fakeSecondaryAddress() {
    return faker.address.secondaryAddress();
}

function fakeState() {
    return faker.address.state();
}

function fakeAbbrevation() {
    return faker.address.stateAbbr();
}

function fakeSteetAddress() {
    return faker.address.streetAddress();
}

function fakeStreetName() {
    return faker.address.streetName();
}

function fakeStreetPrefix(){
    faker.address.streetPrefix();
}

function fakeStreetSuffix(){
    return faker.address.streetSuffix();
}

function fakeZipCode() {
    return faker.address.zipCode();
}

function fakeDateDuration (fromDate,toDate) {
    return faker.date.between(fromDate,toDate);
}

function fakeFutureDate(years,currentDate) {
    return faker.date.future(years,currentDate);
}

function fakePastDate() {
    return faker.date.past(years,pastDate);
}

function randomizeArray(arr) {
    return faker.helpers.randomize(arr)
}

function replaceSymNum(sym,num){
    return faker.helpers.replaceSymbolWithNumber(sym,num);
}

function replaceSymbols() {
    return faker.helpers.replaceSymbols(sym);
}

function fakealphaNumeric(numChars) {
    return faker.random.alphaNumeric(numChars)
}

function fakeNumber(maxRange) {
    return faker.random.number(maxRange)
}

function fakeRandomWords(wordsCount) {
    return faker.random.words(wordsCount);
}


module.exports = {
    fakeAbbrevation,
    fakeCity,
    fakeCityPrefix,
    fakeCitySuffix,
    fakeCountry,
    fakeCountryCode,
    fakeCounty,
    fakeDateDuration,
    fakeFirstName,
    fakeFutureDate,
    fakeJobDescription,
    fakeJobTitle,
    fakeJobType,
    fakeLastName,
    fakeLatitude,
    fakeLongitude,
    fakeNumber,
    fakePastDate,
    fakePrefix,
    fakeRandomWords,
    fakeSecondaryAddress,
    fakeState,
    fakeSteetAddress,
    fakeStreetName,
    fakeStreetPrefix,
    fakeStreetSuffix,
    fakeSuffix,
    fakeTitle,
    fakeZipCode,
    fakealphaNumeric,
    fakejobArea,
    randomizeArray,
    replaceSymNum,
    replaceSymbols
}