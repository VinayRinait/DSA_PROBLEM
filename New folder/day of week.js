function dayOfTheWeek(day, N) {
   //write code here
     N = N%7
     var obj = {
         "Monday": 1,
         "Tuesday": 2,
         "Wednesday": 3,
         "Thursday": 4,
         "Friday": 5,
         "Saturday": 6,
         "Sunday": 7}
     // console.log(N)
     var arr =  ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
     
     var key = obj[day]
     // console.log(key)
     console.log(arr[key+N-1])
 }