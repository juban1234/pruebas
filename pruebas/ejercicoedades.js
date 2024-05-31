
let eligibleVoters = [
    { name: 'Joe Done', birthdate: '2010-01-25' },
    { name: 'Alice Smith', birthdate: '1998-03-15' },
    { name: 'John Doe', birthdate: '2015-11-05' },
    { name: 'Emma Johnson', birthdate: '1985-07-20' },
    { name: 'Michael Brown', birthdate: '2000-09-10' },
    { name: 'Sophia Garcia', birthdate: '2006-04-29' },
    { name: 'William Wilson', birthdate: '1983-06-08' },
    { name: 'Olivia Martinez', birthdate: '1997-12-18' },
    { name: 'James Taylor', birthdate: '1970-08-03' },
    { name: 'Isabella Lopez', birthdate: '1995-02-14' }
  ];

  eligibleVoters.forEach(element => console.log(element.birthdate))

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

