
 
      // JavaScript program to print
      // the given pattern
 
      function pattern(n) {
        var i, j;
 
        // This is upper half of pattern
        for (i = 1; i <= n; i++) {
          for (j = 1; j <= 2 * n; j++) {
            // Left part of pattern
            if (i > n - j + 1)
            document.write("  ");
            else
            document.write("*");
 
            // Right part of pattern
            if (i + n > j)
            document.write("  ");
            else
            document.write("*");
          }
          document.write("<br>");
        }
 
        // This is lower half of pattern
        for (i = 1; i <= n; i++) {
          for (j = 1; j <= 2 * n; j++) {
            // Right Part of pattern
            if (i < j)
            document.write("  ");
            else
            document.write("*");
 
            // Left Part of pattern
            if (i <= 2 * n - j)
            document.write("  ");
            else
            document.write("*");
          }
          document.write("<br>");
        }
      }
 
      // Driver Code
      pattern(7);
       


// * * * * *  * * * * *
// * * * *      * * * *
// * * *          * * *
// * *              * *
// *                  *
// *                  *
// * *              * *
// * * *          * * *
// * * * *      * * * *
// * * * * *  * * * * *