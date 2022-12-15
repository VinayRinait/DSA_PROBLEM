function runProgram(input) {
    input = input.trim().split(/[\r\n]+/)
    var array = []
    for (var i = 0; i < input.length; i++) {
        array.push(input[i].split(" ").map(Number))
    }
    var count = 0;
    //for rows
    for (var i = 1; i <= array[0][0]; i++) 
    {
        var product = 1;
        for (var j = 0; j < array[0][1]; j++) 
        {
            product = product * array[i][j]
          
        }
        if (product == array[0][2]&&j==array[0][1]-1) 
        {
            count++
            break;    
        }
       
    }

   //for coloums
    for (var i = 0; i < array[0][1]; i++) 
    {
        var product = 1;
        for (var j = 1; j <= array[0][0]; j++) 
        {
            product = product * array[j][i]
           
        }
        if (product == array[0][2]&&j==array[0][0]) 
        {
            count++
            break;
        }
       
    }

    // for diagonally left side 

    var product = 1;
    for (var i = 1; i <= array[0][0]; i++) {

        for (var j = 0; j < array[0][1]; j++) 
        {
            if (i - 1 == j) 
            {
                // console.log(array[i][j])
                product = product * array[i][j]

            }
           
        }
        if (product == array[0][2]) 
        {
            count++
        }
        
    }


    // for diagonally right side 
    var count1 = 0;
    var product = 1;
    for (var i = 1; i <= array[0][0]; i++) 
    {

        for (var j = array[0][1] - 1; j >= 0; j--) 
        {
            if (count1 == i - 1) 
            {
                // console.log(array[i][j])
                product = product * array[i][j]
                break;
            }
        }
        count1++
        if (product == array[0][2]) 
        {
            count++
        }
       
    }
    console.log(count)

}


if (process.env.USER === "sangam") {
    runProgram(``);
   } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
   }
   