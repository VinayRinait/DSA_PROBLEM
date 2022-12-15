let obj = [
    {
        grade: "V",
        students: [
            {name: "Nrupul", marks: [10, 20, 30]},
            {name: "Prateek", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VI",
        students: [
            {name: "Aman", marks: [10, 20, 30]},
            {name: "Albert", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VII",
        students: [
            {name: "Yogesh", marks: [10, 20, 30]},
            {name: "Sandhya", marks: [20, 30, 40]}
        ]
    }
  ]
obj.forEach((object)=>{
    let students = object.students;
    let max = [-Infinity,0];
    students.map((person , i)=>{
    let sum = person.marks.reduce((acc,curr)=>acc+= curr)
     if(sum > max[0])max = [sum,i]
    })
    console.log(object.grade+"-"+object.students[max[1]].name + "-" + max[0]);
})  