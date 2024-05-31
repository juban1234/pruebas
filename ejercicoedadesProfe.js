
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
    return true
  } else if ((currentYear - year) === 18) {
    if ((currentMonth - month) > 0) {
      return true
    } else if ((currentMonth - month) === 0) {
      if ((currentDay - day) >= 0) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}


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

let mayores = eligibleVoters.filter(person => isAdult(person.birthdate));


