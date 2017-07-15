// Variables
  var list = document.getElementsByClassName('list');
  var dropMenu = document.getElementById('drop-menu');
  var dropItems = document.getElementsByClassName('dropItems');
  var is_touch_device = 'ontouchstart' in document.documentElement;

// Events
  // Touchscreen Devices will be able to use the drop down animation and menu
    if(is_touch_device) {
      list[0].addEventListener('click', function() {
          for (var i = 0; i < dropItems.length; i++) {
            if (dropItems[i].style.display === "none") {
              dropItems[i].style.display = "block";
              list[0].style.backgroundColor = "rgba(0, 199, 71, 0.7)";
            } else {
              dropItems[i].style.display = "none";
              list[0].style.backgroundColor = "rgba(0, 143, 0, 0.7)";
          }
        }
      })
    }

// Functions

  console.log(list);
//DOM Minipulation
