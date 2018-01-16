

    function buildClock(e){
      var clockForm = document.getElementById("clock-inputs");
      var clockInputs = getFormData(clockForm);

      var test = {
        button:"",
        fontSize : "50",
        hoursX: "100",
        hoursY: "150",
        minutesX: "300",
        minutesY: "150",
        secondsX: "500",
        secondsY: "150",
      }
      if(window.theClock){
        window.theClock.stopClock();
        window.theClock = new RadialClock(clockInputs);
        window.theClock.startClock();
      }else{
        window.theClock = new RadialClock(clockInputs);
        window.theClock.startClock();
      }

    }

    function getFormData(form){
      var elements = form.elements;
      var obj = {};
      for(var i = 0; i < elements.length; i++){
        var float = parseFloat(elements[i].value);
        obj[elements[i].name] = isNaN(float) ? elements[i].value : float;
      }
      console.log();
      return obj;
    };
