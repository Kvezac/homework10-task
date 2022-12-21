// task-1 Инициалы пользователя
console.log("task-1 Инициалы пользователя");
// Завершите функцию getInitials, чтобы она возвращала инициалы пользователя.
console.log("----------------------------");
const user1 = {
  firstName: "Sam",
  lastName: "Doe",
  age: 20,
};

const user2 = {
  firstName: "Charlie",
  lastName: "Fort",
  age: 31,
};

/**
 * @param {Object[]} user
 * @param {string} user[].firstName
 * @param {string} user[].lastName
 * @param {number} user[].age
 */
function getIntials(user) {
  const firstLetterOfName = user.firstName[0].toUpperCase();
  const firstLetterOfLastName = user.lastName[0].toUpperCase();
  return firstLetterOfName + firstLetterOfLastName;
}

// Sample usage - do not modify
console.log(getIntials(user1)); // "SD"
console.log(getIntials(user2)); // "CF"
console.log("----------------------------");
// task-2 Добавление чисел
console.log("task-2 Добавление чисел");
// Завершите функцию addNumberOfChapters, чтобы она добавила ключ numberOfChapters в объект course.
console.log("----------------------------");
const course1 = {
  name: "Learn English",
  isCompleted: true,
};

const course2 = {
  name: "Learn JavaScript",
  isCompleted: false,
};

/**
 * @param {Object[]} course
 * @param {number} count
 */
function addNumberOfChapters(course, count) {
  course.numberOfChapters = count;
  return course;
}

// Sample usage - do not modify
console.log(addNumberOfChapters(course1, 80)); // { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
console.log(addNumberOfChapters(course2, 60)); // { name: 'Learn JavaScript', isCompleted: false, numberOfChapters: 60 }
console.log("----------------------------");

// task-3 Сумма оценок
console.log("task-3 Сумма оценок");
/* Завершите функцию `getSumOfGrades`, чтобы она возвращала сумму всех оценок.
Вы можете использовать любой метод (reduce, forEach). */
console.log("----------------------------");
const student = {
  name: "Sam Doe",
  age: 24,
  grades: [13, 15, 15, 14, 18],
};

/**
 * @param {Object} student
 * @param {string} student.name
 * @param {number} student.age
 * @param {number[]} student.grades
 */
function getSumOfGrades(student) {
  const totalGrades = student.grades.reduce((sum, current) => sum + current, 0);
  return totalGrades;
}

// Sample usage - do not modify
console.log(getSumOfGrades(student)); // 75
console.log("----------------------------");
// task-4 Имя пользователя
console.log("task-4 Имя пользователя");
// Завершите функцию getLastUserFullName, чтобы она возвращала полное имя последнего пользователя.
console.log("----------------------------");
const users = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  },
];

/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */
function getLastUserFullName(users) {
  const lastUser = users.at(-1);
  return `"${lastUser.firstName} ${lastUser.lastName}"`;
}

// Sample usage - do not modify
console.log(getLastUserFullName(users)); // "Charlie Bon"
console.log("----------------------------");

// task-5 Первая оценка студента
console.log("task-5 Первая оценка студента");
// Завершите функцию getFirstStudentGrade, чтобы она вернула оценку первого студента из курса обучения английскому.
console.log("----------------------------");
const students = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18,
    },
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19,
    },
  },
];

/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
function getFirstStudentGrade(students) {
  const firstStudent = students.at(0).learnEnglish.grade;
  return firstStudent;
}

// Sample usage - do not modify
console.log(getFirstStudentGrade(students)); // 18
console.log("----------------------------");
// task-6 Сумма вложенных оценок
console.log("task-6 Сумма вложенных оценок");
// Завершите функцию getSumGrades, чтобы она суммировала все оценки за курс learnEnglish в массиве.
console.log("----------------------------");

const pupils = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18,
    },
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19,
    },
  },
];

/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Pupil
 *
 * @param {Pupil[]} pupils
 */
function getSumGrades(pupils) {
  const grades = pupils.map((element) => element.learnEnglish.grade);
  const totalGrade = grades.reduce((sum, current) => sum + current, 0);
  return totalGrade;
}
// Sample usage - do not modify
console.log(getSumGrades(pupils)); // 37
console.log("----------------------------");

// task-7 Имена пользователей
console.log("task-7 Имена пользователей");
/* Завершите функцию getFullNames, чтобы она возвращала массив содержащий 
полное имя каждого пользователя. Можно ли решить задачу с помощью метода push()? */
console.log("----------------------------");
const consumers = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  },
];

/**
 * @param {{firstName: String, lastName: String, age: Number}[]} consumers
 */
function getFullNames(consumers) {
  const gradesFullName = consumers.map(
    (element) => `${element.firstName} ${element.lastName}`
  );

  return gradesFullName.join(", ");
}

// Sample usage - do not modify
console.log(getFullNames(consumers)); // [Sam Blue, Charlie Bon]
console.log("----------------------------");

// task-8 Разделение объектов
console.log("task-8 Разделение объектов");
/* Завершите функцию getLatLngElevation, чтобы она деструктурировала объект userLocation на три
переменные: lat, lng и elevation. По умолчанию elevation равен 0.*/
console.log("----------------------------");

/**
 * @param {object} userLocation
 * @param {number} userLocation.lat
 * @param {number} userLocation.lng
 * @param {number} [userLocation.elevation]
 */
const getLatLngElevation = (userLocation) => {
  const { lat, lng, elevation = 0 } = userLocation;
  return `The latitude is ${lat}, the longitude is ${lng} and the elevation is ${elevation} meters`;
};

// Sample usage - do not modify
const userLocation = {
  lat: 24.235235,
  lng: 2.5734,
};

console.log(getLatLngElevation(userLocation));
// The latitude is 24.235235, the longitude is 2.5734 and the elevation is 0 meters
console.log("----------------------------");

// task-9 Имя в нижнем регистре
console.log("task-9 Имя в нижнем регистре");
/* Завершите функцию getFullName, чтобы она возвращала полное имя в нижнем регистре, 
если данное поле существует. В противном случае функция должна вернуть undefined.*/
console.log("----------------------------");

/**
 * @param {object} user
 * @param {object} [user.info]
 * @param {last} [user.info.name]
 */
const getFullName = (user) => {
  return user?.info?.name?.toLowerCase();
};

// Sample usage - do not modify
console.log(getFullName({ info: { name: "ALEX" } })); // "alex"
console.log(getFullName({ info: null })); // undefined
console.log(getFullName({})); // undefined
console.log("----------------------------");
// task-10 Приветствие пользователя
console.log("task-10 Приветствие пользователя");
// Доработайте функцию приветствия с использованием оператора ??.
console.log("----------------------------");
/**
 * @param {object} user
 * @param {string} [user.fullName]
 */
const getWelcomeMessage = (user) => {
  return `Welcome ${user?.fullName ?? "user"}`;
};

// Sample usage - do not modify
console.log(getWelcomeMessage({ fullName: "Sam Green" })); // "Welcome Sam Green"
console.log(getWelcomeMessage({})); // "Welcome user"
console.log("----------------------------");
// task-11 Рефакторинг доступа к свойствам
console.log("task-11 Рефакторинг доступа к свойствам");
console.log("----------------------------");
/**
 * @param {object} user
 * @param {object} [user.payment]
 * @param {object} [user.payment.details]
 * @param {number} [user.payment.details.value]
 */
const getPaymentValue = (user) => {
  const value = user?.payment?.details?.value ?? 0;
  return value;
};

// Sample usage - do not modify
console.log(getPaymentValue({ id: 1, name: "Alex" })); // 0
console.log(
  getPaymentValue({ id: 2, name: "Sam", payment: { details: { value: 59 } } })
); // 59
console.log("----------------------------");

// task-12 Рефакторинг условий
console.log("task-12 Рефакторинг условий");
// Необходимо отрефакторить код (улучшить, оптимизировать) без использования условий.
console.log("----------------------------");
/**
 * @param {string} host
 * @param {string} user
 * @param {Object} booking
 * @param {string} booking[].status
 */
const getStatus = (host, user, booking) => {
  const statusЗrocessing = {
    pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
    confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
    canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
    done: `${host} hopes you had a great stay.`,
  };
  const status = booking?.status
  return statusЗrocessing[status] ?? "Unknown booking status."
};

// Sample usage - do not modify
const booking1 = { status: "pending" };

console.log(getStatus("Sam", "Alex", booking1));
// "Hey Alex, we're awaiting confirmation from Sam."

const booking2 = { status: "confirmed" };

console.log(getStatus("Charlie", "Blake", booking2));
// "Hey Blake, Charlie is excited to be hosting you."

const booking3 = { status: "canceled" };

console.log(getStatus("Ilia", "Filimonof", booking3));
// "Unfortunately Filimonof, Ilia has canceled your booking request."

const booking4 = { status: "done" };

console.log(getStatus("Andrey", "Tryapishko", booking4));
// "Andrey hopes you had a great stay."

console.log(getStatus("Jon", "Snow"));
// "Andrey hopes you had a great stay."

console.log("----------------------------");
