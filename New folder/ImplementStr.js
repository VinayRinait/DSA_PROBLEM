let haystack = "hello",
  needle = "ll";

  function findit(haystack,needle){
      if(haystack.includes(needle)){
          let x = haystack.split(needle)
          return x[0].length;
      }
      if(needle == '')return 0;
      else return -1;
  }

  findit(haystack,needle)