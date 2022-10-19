// var count = 1;
// var idNumber = 2;
// function insert_row_2() {
//   var table = document.getElementById("Round_Robin-Table");
//   var row = table.insertRow();
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   cell1.innerHTML = count + 1;
//   count = count + 1;
//   cell1.setAttribute("id", "s_no_2");
//   cell2.innerHTML = `<input  id="arrive_2_${idNumber}" type="number" value="arrival" />`;
//   cell3.innerHTML = `<input  id="execute_2_${idNumber}" type="number" value="execute" />`;
//   idNumber = idNumber + 1;
// }
// function Delete_row_2() {
//   if (count != 1) {
//     document.getElementById("Round_Robin-Table").deleteRow(-1);
//     count = count - 1;
//     idNumber = idNumber - 1;
//   }
// }


// function for_sort(array){
//     console.log(array);
//     var time_slice = document.getElementById("time_2").value;
//     time_slice = parseInt(time_slice);
//     console.log(time_slice);
//     array2 = [];
//     for(let i=0; i<array.length; i++){
//         var temp = [];
//         temp.push(array[i][1]);//arrival
//         temp.push(array[i][0]);//id
//         temp.push(array[i][2]);//burst
//         array2.push(temp);
//     }
//     array2.sort();
//     console.log(array2);
//     var ready = [];
//     var running = [];
//     var vis = [];
//     for(let i=0; i<=array2.length; i++){
//         vis.push(0);
//     }
//     var time = 0;
//     ready.push(array2[0][1]);
//     vis[array2[0][1]] = 1;

//     while(ready.length > 0){
//         var x = ready[0];
//         for(let i=0; i<ready.length-1; i++){
//             ready[i] = ready[i+1];
//         }
//         ready.pop();
//         running.push(x);
//         vis[x] = 1;

//         for(let i=0; i<array2.length; i++){
//             if(array2[i][1] == x && array2[i][2] != 0){
//                 if(array2[i][2] >= time_slice){
//                     array2[i][2] -= time_slice;
//                     time += time_slice;
//                 }
//                 else if(array2[i][2] > 0){
//                     time += array2[i][2];
//                     array2[i][2] = 0;
//                 }
//                 for(let j=0; j<array2.length; j++){
//                     if(array2[j][0]<=time && vis[array2[j][1]]==0){
//                         ready.push(array2[j][1]);
//                         vis[array2[j][1]] = 1;
//                     }
//                 }

//                 if(array2[i][2] > 0){
//                     ready.push(array2[i][1]);
//                 }
//             }
//         }
//     }
//     console.log(running.length);
//     var arr = [];
//     for(let i=0; i<running.length; i++){
//         for(let j=0; j<array.length; j++){
//             if(running[i] == array[j][0]){
//                 var temp1 = [];
//                 temp1.push(running[i]);
//                 if(array[j][2] >= time_slice){
//                     temp1.push(time_slice);
//                     array[j][2] -= time_slice;
//                 }
//                 else{
//                     temp1.push(array[j][2]);
//                     array[j][2] = 0;
//                 }
//                 arr.push(temp1);
//             }
//         }
//     }
//     // array = arr;
//     console.log(arr);
//     making_bars(arr);

// }

// function clearBox(elementID) {
//     document.getElementById(elementID).innerHTML = "";
//   }
  
//   function making_bars(array) {
//       var size_arr = array.length;
//       var total_length = 0;
//       for (i = 0; i < size_arr; i++) {
//         total_length = total_length + array[i][1];
//       }
//       for (i = 0; i < size_arr; i++) {
//         var block_to_insert;
//         var container_block;
//         block_to_insert = document.createElement("div");
//         var width_cal = (array[i][1] / total_length) * 100;
//         // console.log(width_cal);
//         block_to_insert.style.width = width_cal + "%";
//         var randomColor = Math.floor(Math.random() * 16777215).toString(16);
//         block_to_insert.style.backgroundColor = "#" + randomColor;
//         block_to_insert.style.height = "20px";
//         block_to_insert.innerHTML = array[i][0];
//         block_to_insert.style.margin = "35px 0px";
//         block_to_insert.style.borderRadius = "10px";
//         block_to_insert.style.textAlign = "center";
//         block_to_insert.style.opacity = "50%";
//         container_block = document.getElementById("progress-bar_2");
//         container_block.appendChild(block_to_insert);
//       }
//     }
  
//   function progress_show_2() {
//     clearBox("progress-bar_2");
//     var store_data = [];
//     var table = document.getElementById("Round_Robin-Table");
//     var n1 = document.getElementById("Round_Robin-Table").rows.length;
//     for (i = 1; i < n1; i++) {
//       var n2 = document.getElementById("Round_Robin-Table").rows[i].cells.length;
//       var temp = [];
//       var x = document
//         .getElementById("Round_Robin-Table")
//         .rows[i].cells.item(0).innerHTML;
//       var y = document.getElementById(`arrive_2_${i}`).value;
//       var z = document.getElementById(`execute_2_${i}`).value;
//       // console.log("x", x, y, z);
//       temp.push(parseInt(x));
//       temp.push(parseInt(y));
//       temp.push(parseInt(z));
//       store_data.push(temp);
//     }
//     console.log(store_data);
//     for_sort(store_data);
//     // console.log(store_data);
//     // making_bars(store_data);
//   }




var count_rr = 1;
var idNumber_rr = 2;
function insert_row_rr() {
  var table_rr = document.getElementById("Round_Robin-Table");
  var row_rr = table_rr.insertRow();
  var cell1 = row_rr.insertCell(0);
  var cell2 = row_rr.insertCell(1);
  var cell3 = row_rr.insertCell(2);
  cell1.innerHTML = count_rr + 1;
  count_rr = count_rr + 1;
  cell1.setAttribute("id", "s_no_rr");
  cell2.innerHTML = `<input  id="arrive_${idNumber_rr}_rr" type="number" value="arrival" />`;
  cell3.innerHTML = `<input  id="execute_${idNumber_rr}_rr" type="number" value="execute" />`;
  idNumber_rr = idNumber_rr + 1;
}
function Delete_row_rr() {
  if (count_rr != 1) {
    document.getElementById("Round_Robin-Table").deleteRow(-1);
    count_rr = count_rr - 1;
    idNumber_rr = idNumber_rr - 1;
  }
}


function for_sort_rr(array){
    console.log(array);
    var time_slice = document.getElementById("time_rr").value;
    time_slice = parseInt(time_slice);
    console.log(time_slice);
    array2 = [];
    for(let i=0; i<array.length; i++){
        var temp = [];
        temp.push(array[i][1]);//arrival
        temp.push(array[i][0]);//id
        temp.push(array[i][2]);//burst
        array2.push(temp);
    }
    array2.sort();
    console.log(array2);
    var ready = [];
    var running = [];
    var vis = [];
    for(let i=0; i<=array2.length; i++){
        vis.push(0);
    }
    var time = 0;
    ready.push(array2[0][1]);
    vis[array2[0][1]] = 1;

    while(ready.length > 0){
        var x = ready[0];
        for(let i=0; i<ready.length-1; i++){
            ready[i] = ready[i+1];
        }
        ready.pop();
        running.push(x);
        vis[x] = 1;

        for(let i=0; i<array2.length; i++){
            if(array2[i][1] == x && array2[i][2] != 0){
                if(array2[i][2] >= time_slice){
                    array2[i][2] -= time_slice;
                    time += time_slice;
                }
                else if(array2[i][2] > 0){
                    time += array2[i][2];
                    array2[i][2] = 0;
                }
                for(let j=0; j<array2.length; j++){
                    if(array2[j][0]<=time && vis[array2[j][1]]==0){
                        ready.push(array2[j][1]);
                        vis[array2[j][1]] = 1;
                    }
                }

                if(array2[i][2] > 0){
                    ready.push(array2[i][1]);
                }
            }
        }
    }
    console.log(running.length);
    var arr = [];
    for(let i=0; i<running.length; i++){
        for(let j=0; j<array.length; j++){
            if(running[i] == array[j][0]){
                var temp1 = [];
                temp1.push(running[i]);
                if(array[j][2] >= time_slice){
                    temp1.push(time_slice);
                    array[j][2] -= time_slice;
                }
                else{
                    temp1.push(array[j][2]);
                    array[j][2] = 0;
                }
                arr.push(temp1);
            }
        }
    }
    // array = arr;
    console.log(arr);
    making_bars_rr(arr);

}

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
  }
  
  function making_bars_rr(array) {
      var size_arr = array.length;
      var total_length = 0;
      for (i = 0; i < size_arr; i++) {
        total_length = total_length + array[i][1];
      }
      for (i = 0; i < size_arr; i++) {
        var block_to_insert;
        var container_block;
        block_to_insert = document.createElement("div");
        var width_cal = (array[i][1] / total_length) * 100;
        // console.log(width_cal);
        block_to_insert.style.width = width_cal + "%";
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        block_to_insert.style.backgroundColor = "#" + randomColor;
        block_to_insert.style.height = "20px";
        block_to_insert.innerHTML = array[i][0];
        block_to_insert.style.margin = "35px 0px";
        block_to_insert.style.borderRadius = "10px";
        block_to_insert.style.textAlign = "center";
        block_to_insert.style.opacity = "50%";
        container_block = document.getElementById("progress-bar_rr");
        container_block.appendChild(block_to_insert);
      }
    }
  
  function progress_show_rr() {
    clearBox("progress-bar_rr");
    var store_data = [];
    var table = document.getElementById("Round_Robin-Table");
    var n1 = document.getElementById("Round_Robin-Table").rows.length;
    for (i = 1; i < n1; i++) {
      var n2 = document.getElementById("Round_Robin-Table").rows[i].cells.length;
      var temp = [];
      var x = document.getElementById("Round_Robin-Table").rows[i].cells.item(0).innerHTML;
      var y = document.getElementById(`arrive_${i}_rr`).value;
      var z = document.getElementById(`execute_${i}_rr`).value;
      // console.log("x", x, y, z);
      temp.push(parseInt(x));
      temp.push(parseInt(y));
      temp.push(parseInt(z));
      store_data.push(temp);
    }
    console.log(store_data);
    for_sort_rr(store_data);
    // console.log(store_data);
    // making_bars(store_data);
  }