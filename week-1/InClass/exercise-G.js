const NumberOfStudents=15
const NumberOfMentors=8
const Sum=(NumberOfStudents+NumberOfMentors)


const PercentStudent=NumberOfStudents/Sum*100
console.log(PercentStudent)

const RoughPercent=Math.round(PercentStudent)
console.log(RoughPercent+"%")

const PercentMentors=NumberOfMentors/Sum*100
console.log(PercentMentors)

const RoughPercentMentors=Math.round(PercentMentors)
console.log("Mentors rough percentage is " + RoughPercentMentors+"%")