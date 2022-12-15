var climbStairs = function(n) {
    let dp = []
    for(let i = 0;i<=n;i++){
        dp.push(-1)
    }
    dp[0] = 1;
    for(let i = 1;i<= n;i++){
        if(i == 1){
            dp[i] = dp[i-1]
        }
        if(i > 1){
            dp[i] = dp[i-1] + dp[i-2]
        }
    }
    return dp[dp.length-1]
    };
climbStairs(4)    