function fibonachchi(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonachchi(n - 1) + fibonachchi(n - 2);
    }
  }
  let son = 8; 
  let natija = fibonachchi(son);
  document.writeln(`Fibonachchi soni ${son}: ${natija}`);