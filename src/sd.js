
const ADUANA = [2, 15, 0, 55, 3, 33, 3, 46, 1, 15, 1, 25, 2, 33, 2, 55, 0, 55, 3, 21, 2, 46, 3, 15, 3, 15, 4, 33, 3, 15, 4, 33, 1, 33, 2, 33, 1, 30, 1, 50, 4, 35, 4, 35, 3, 12, 0, 32, 4, 35, 2, 35, 1, 24, 2, 44, 3, 15, 3, 44, 3, 12, 0, 35, 4, 38, 4, 37, 5, 21, 2, 55, 4, 35, 2, 35, 3, 35, 3, 16, 4, 36, 4, 36, 7, 55, 3, 58, 1, 15, 3, 35, 3, 15, 0, 45, 0, 20,]
const NU = [1, 55, 5, 33, 7, 33, 3, 38, 4, 15, 4, 55, 2, 15, 4, 38, 2, 33, 1, 55,]

const horas = ADUANA


let totalH = 0;
let totalM = 0;

for (let index = 0; index < horas.length; index++) {
    const element = horas[index];
    if (index % 2 === 0) {
        // console.log(element, index);
        totalH += element
    } else {
        totalM += element
    }
}


const addTimes = (timeMap) => {
    // First simply adding all of it together, total hours and total minutes
    for (var x in timeMap) {
        totalH += parseInt(timeMap[x].hour, 10);
        totalM += parseInt(timeMap[x].minutes, 10);
    }
    // If the minutes exceed 60
    if (totalM >= 60) {
        // Divide minutes by 60 and add result to hours
        totalH += Math.floor(totalM / 60);
        // Add remainder of totalM / 60 to minutes
        totalM = totalM % 60;
    }
    return totalH + "hrs " + totalM + "min ";
}

console.log(addTimes());