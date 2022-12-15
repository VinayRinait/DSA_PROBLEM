//Enter code here
function runProgram(input){
    let n= input.trim()
    console.log(greatPerm(n))
    
}

function greatPerm(n){
 	if (n < 3) return n;
    const visited = Array(n+1).fill(false);
	let ans = 0;

	const dfs = (i) => {
		if (i > n) {
            ans++;
            return;
        }

		for (let idx=1;idx<=n;idx++) {
           
            if (!visited[idx] && (idx % i === 0 || i % idx === 0)) {
                visited[idx] = true;
                dfs(i+1);
                visited[idx] = false;
            }
		}
        return;
	};

	dfs(1);
	return ans;
}

if (process.env.USER === "sanagm") {
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