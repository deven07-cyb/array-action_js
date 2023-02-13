    function Evalue(val) {
      document.getElementById("expression").value +=val;
    }

    function clear() {
      document.getElementById("expression").value = "";
    }

    function calculate() {
      let expression = document.getElementById("expression").value;
      let result = eval(expression);
      document.getElementById("expression").value = result;
    }

