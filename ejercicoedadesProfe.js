
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

function isAdult(birthdate) {
  let myBirthday = birthdate.split('-')
  let day = parseInt(myBirthday[2])
  let month = parseInt(myBirthday[1])
  let year = parseInt(myBirthday[0])

  let currentDate = new Date()
  let currentDay = currentDate.getDate()
  let currentMonth = currentDate.getMonth() + 1
  let currentYear = currentDate.getFullYear()

  if ((currentYear - year) > 18) {
    return 'Mayor de Edad'
  } else if ((currentYear - year) === 18) {
    if ((currentMonth - month) > 0) {
      return 'Mayor de Edad'
    } else if ((currentMonth - month) === 0) {
      if ((currentDay - day) >= 0) {
        return 'Mayor de Edad'
      } else {
        return 'No es mayor de edad por el día'
      }
    } else {
      return 'No es mayor de edad por el mes'
    }
  } else {
    return 'No es mayor de edad por el año'
  }
}

console.log(isAdult('2006-06-01'))
console.log(isAdult('2006-5-02'))
console.log(isAdult('2007-10-02'))
console.log(isAdult('2020-01-19'))