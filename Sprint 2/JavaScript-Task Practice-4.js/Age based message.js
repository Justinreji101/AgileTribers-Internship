function ageMessage(age) {
    if (age < 16) {
        return "You're still a kid, enjoy your youth!";
    } else if (age >= 16 && age <= 17) {
        return "You're on the verge of adulthood, enjoy your freedom!";
    } else if (age >= 18 && age <= 24) {
        return "Welcome to adulthood! Make wise choices.";
    } else if (age >= 25) {
        return "You're in the prime of your life, seize the day!";
    } else {
        return "Invalid age. Please enter a valid age.";
    }
}
const personAge = 20;
const result = ageMessage(personAge);
console.log(result);