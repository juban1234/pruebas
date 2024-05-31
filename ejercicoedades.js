
  function isAdult(birthdate) {
    let mybirthdate = birthdate.split('-');
    let day = parseInt(mybirthdate[2]);
    let month = parseInt(mybirthdate[1]);
    let year = parseInt(mybirthdate[0]);

    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentmonth = currentDate.getMonth() + 1;
    let currentyear = currentDate.getFullYear();

    if ((currentyear - year) > 18) {
        return 'eres mayor de edad';
    } else if ((currentyear - year) === 18) {
        if (currentmonth > month) {
            return 'eres mayor de edad';
        } else if (currentmonth === month) {
            if (currentDay >= day) {
                return 'eres mayor de edad';
            }
        }
    }
    return 'eres menor de edad';
}

console.log(isAdult('2005-12-02'));  
console.log(isAdult('2006-07-05'));  
console.log(isAdult('2007-10-02')); 
console.log(isAdult('2020-01-19')); 

