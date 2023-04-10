// document.getElementById("tab1").classList.add("active");
// document.querySelector(".tab button").classList.add("active");

// function openTab(evt, tabName) {
//   var i, tabcontent, tablinks;

//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].classList.remove("active");
//   }

//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].classList.remove("active");
//   }

//   document.getElementById(tabName).classList.add("active");
//   evt.currentTarget.classList.add("active");
// }

// const consignees = new Array('Select Consignee', 'Option1', 'Option2', 'Option3', 'Option4', 'Option5',);
// const suppliers = new Array('Select supplier', 'Option1', 'Option2', 'Option3', 'Option4', 'Option5',);

// selectConsignee = document.getElementById("select-consignee");
// selectConsignee.options.length = 0;
// for (i = 0; i < consignees.length; i++) {
//   selectConsignee.options[selectConsignee.length] = new Option(consignees[i], consignees[i]);
// }

// selectSuplier = document.getElementById("select-supplier");
// selectSuplier.options.length = 0;
// for (i = 0; i < suppliers.length; i++) {
//   selectSuplier.options[selectSuplier.length] = new Option(suppliers[i], suppliers[i]);
// }

// var picker = $('#daterangepicker1').daterangepicker({
//   "parentEl": "#daterangepicker1-container",
//   "autoApply": true,
// });
// picker.on('apply.daterangepicker', function (ev, picker) {
//   $("#daterangepicker-result").html('Selected date range: ' + picker.startDate.format('YYYY-MM-DD') + ' to ' + picker.endDate.format('YYYY-MM-DD'));
// });
// picker.data('daterangepicker').hide = function () { };
// picker.data('daterangepicker').show();

// document.getElementById("booking-form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   var bookingName = document.getElementById("booking-name").value;
//   var consignee = document.getElementById("select-consignee").value;
//   var supplier = document.getElementById("select-supplier").value;
//   var incoterm = document.querySelector('input[name="incoterm"]:checked')?.value;
//   var lessThanContainer = document.getElementById("lessThanContainer").style.display;
//   var lessThanContainerTotalWeight = document.getElementById("lessThanContainerTotalWeight").value;
//   var lessThanContainerPackageType = document.getElementById("lessThanContainerPackageType").value;
//   var lessThanContainerTotalVolume = document.getElementById("lessThanContainerTotalVolume").value;
//   var lessThanContainerTotalQuantity = document.getElementById("lessThanContainerTotalQuantity").value;
//   var fullContainer = document.getElementById("fullContainer").style.display;
//   var numberOfContainer = document.getElementById("numContainers").value;
//   var containerType = document.getElementById("containerType").value;
//   var totalWeight = document.getElementById("totalWeight").value;
//   var packageType = document.getElementById("packageType").value;
//   var totalVolume = document.getElementById("totalVolume").value;
//   var totalQuantity = document.getElementById("totalQuantity").value;
//   var originAddress = document.getElementById("originAddress").value;
//   var port = document.getElementById("port-select").value;
//   var originTruckingService = document.querySelector('input[name="originTruckingService"]:checked')?.value;
//   var destinationAddress = document.getElementById("destinationAddress").value;
//   var products = document.querySelectorAll('input[name="products"]:checked');
//   var checkboxValues = Array.from(products).map(function (checkbox) {
//     return checkbox.value;
//   });
//   var originCutoffDate = document.getElementById("daterangepicker1").value;

//   if (isNaN(bookingName) || bookingName === "") {
//     alert("Booking name should be a number! It is compulsory field");
//     return false;
//   }
//   else if (consignee === "Select Consignee") {
//     alert("Please select the consignee.");
//     return false
//   }
//   else if (typeof incoterm === 'undefined') {
//     alert("Please select incoterm.");
//     return false;
//   }
//   // else if()
//   // {
//   else if (fullContainer === 'block' && numberOfContainer === "") {
//     alert("Please enter number of containers");
//     return false;
//   }
//   else if (fullContainer === 'block' && containerType === 'Select Container Type') {
//     alert("Please select container type");
//     return false;
//   }
//   else if (fullContainer === 'block' && totalWeight === '') {
//     alert("Please enter total weight");
//     return false;
//   }
//   else if (fullContainer === 'block' && packageType === 'Select Package Type') {
//     alert("Please select package type");
//     return false;
//   }
//   else if (fullContainer === 'block' && totalVolume === '') {
//     alert("Please enter total volume");
//     return false;
//   }
//   else if (fullContainer === 'block' && totalQuantity === '') {
//     alert("Please enter total quantity");
//     return false;
//   }
//   // }
//   // else if(lessThanContainer === 'block')
//   // {
//   if (lessThanContainer === 'block' && lessThanContainerTotalWeight === '') {
//     alert("Please enter total weight");
//     return false;
//   }
//   else if (lessThanContainer === 'block' && lessThanContainerPackageType === 'Select Package Type') {
//     alert("Please select package type");
//     return false;
//   }
//   else if (lessThanContainer === 'block' && lessThanContainerTotalVolume === '') {
//     alert("Please enter total volume");
//     return false;
//   }
//   else if (lessThanContainer === 'block' && lessThanContainerTotalQuantity === '') {
//     alert("Please enter total quantity");
//     return false;
//   }
//   // }
//   else if (originAddress === '') {
//     alert("Please select origin address");
//     return false;
//   }
//   else if (port === 'Select Port') {
//     alert("Please select port");
//     return false;
//   }
//   else if (destinationAddress === '') {
//     alert("Please select destination address");
//     return false;
//   }
//   else if (checkboxValues.length >= 2 && checkboxValues.includes('None of the above')) {
//     alert("Please select options correctly");
//     return false;
//   }
//   else if (checkboxValues.length == 0) {
//     alert("Please select hazardous products");
//     return false;
//   }
//   else {
//     alert("Booking request submitted successfully...");
//     console.log("------------------------------");
//     console.log("\t-- Booking Details --");
//     console.log("------------------------------");
//     console.log("Booking Name: " + bookingName);
//     console.log("Consignee: " + consignee);
//     if (!(supplier === "Select supplier")) {
//       console.log("Supplier: " + supplier);
//     }
//     else {
//       console.log("Supplier: Not available");
//     }
//     console.log("Incoterm: " + incoterm);
//     if (lessThanContainer === "block") {
//       console.log("Container: Less Than Container:");
//       console.log("\tTotal Weight: " + lessThanContainerTotalWeight);
//       console.log("\tTotal Volume: " + lessThanContainerTotalVolume);
//       console.log("\tPackage Type: " + lessThanContainerPackageType);
//       console.log("\tTotal Quantity: " + lessThanContainerTotalQuantity);
//     }
//     else {
//       console.log("Container: Full Container:");
//       console.log("\tNumber of Containers: " + numberOfContainer);
//       console.log("\tContainer Type: " + containerType);
//       console.log("\tTotal Weight: " + totalWeight);
//       console.log("\tTotal Volume: " + totalVolume);
//       console.log("\tPackage Type: " + packageType);
//       console.log("\tTotal Quantity: " + totalQuantity);
//     }
//     console.log("Origin Address: " + originAddress);
//     console.log("Origin Port: " + port);
//     if (typeof originTruckingService === 'undefined') {
//       console.log("Need Origin Trucking Services: No");
//     }
//     else {
//       console.log("Need Origin Trucking Services: " + originTruckingService);
//     }
//     console.log("Destination Address: " + destinationAddress);
//     console.log("Hazardous Materials: ");
//     if (checkboxValues.includes('None of the above')) {
//       console.log("Products do not contain any hazardous material");
//     }
//     else {
//       for (var i = 0; i < checkboxValues.length; i++) {
//         console.log("\t" + checkboxValues[i]);
//       }
//     }
//     console.log("Origin Cutoff Date: " + originCutoffDate);
//     return true;
//   }
// });

// function autocomplete(inp, arr) {
//   var currentFocus;
//   inp.addEventListener("input", function (e) {
//     var a, b, i, val = this.value;
//     closeAllLists();
//     if (!val) { return false; }
//     currentFocus = -1;
//     a = document.createElement("DIV");
//     a.setAttribute("id", this.id + "autocomplete-list");
//     a.setAttribute("class", "autocomplete-items");
//     this.parentNode.appendChild(a);
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//         b = document.createElement("DIV");
//         b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//         b.innerHTML += arr[i].substr(val.length);
//         b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//         b.addEventListener("click", function (e) {
//           inp.value = this.getElementsByTagName("input")[0].value;
//           closeAllLists();
//         });
//         a.appendChild(b);
//       }
//     }
//   });
//   inp.addEventListener("keydown", function (e) {
//     var x = document.getElementById(this.id + "autocomplete-list");
//     if (x) x = x.getElementsByTagName("div");
//     if (e.keyCode == 40) {
//       currentFocus++;
//       addActive(x);
//     } else if (e.keyCode == 38) { //up
//       currentFocus--;
//       addActive(x);
//     } else if (e.keyCode == 13) {
//       e.preventDefault();
//       if (currentFocus > -1) {
//         if (x) x[currentFocus].click();
//       }
//     }
//   });
//   function addActive(x) {
//     if (!x) return false;
//     removeActive(x);
//     if (currentFocus >= x.length) currentFocus = 0;
//     if (currentFocus < 0) currentFocus = (x.length - 1);
//     x[currentFocus].classList.add("autocomplete-active");
//   }
//   function removeActive(x) {
//     for (var i = 0; i < x.length; i++) {
//       x[i].classList.remove("autocomplete-active");
//     }
//   }
//   function closeAllLists(elmnt) {
//     var x = document.getElementsByClassName("autocomplete-items");
//     for (var i = 0; i < x.length; i++) {
//       if (elmnt != x[i] && elmnt != inp) {
//         x[i].parentNode.removeChild(x[i]);
//       }
//     }
//   }
//   document.addEventListener("click", function (e) {
//     closeAllLists(e.target);
//   });
// }

// var addresses = ["Pune", "Mumbai", "Delhi", "Chennai", "Kolkata"]
// autocomplete(document.getElementById("destinationAddress"), addresses);
// autocomplete(document.getElementById("originAddress"), addresses);

// function valid()
// {
//     var bookingName = document.getElementById("booking-name").value;
//     var consignee = document.getElementById("select-consignee").value;
//     var supplier = document.getElementById("select-supplier").value;
//     var incoterm =  document.querySelector('input[name="incoterm"]:checked')?.value;
//     var lessThanContainer = document.getElementById("lessThanContainer").style.display;
//     var fullContainer = document.getElementById("fullContainer").style.display;
//     var numberOfContainer = document.getElementById("numContainers").value;
//     var containerType = document.getElementById("containerType").value; 
//     var totalWeight = document.getElementById("totalWeight").value;
//     var packageType = document.getElementById("packageType").value; 
//     var totalVolume = document.getElementById("totalVolume").value;
//     var totalQuantity = document.getElementById("totalQuantity").value;
//     var originAddress = document.getElementById("originAddress").value;
//     var port = document.getElementById("port-select").value;
//     var originTruckingService = document.querySelector('input[name="originTruckingService"]:checked')?.value;
//     var destinationAddress = document.getElementById("destinationAddress").value;
//     var products = document.querySelectorAll('input[name="products"]:checked');
//     var checkboxValues = Array.from(products).map(function (checkbox) {
//         return checkbox.value;
//     });
//     var originCutoffDate = document.getElementById("daterangepicker1").value;

//     if(isNaN(bookingName) || bookingName === "")
//     {
//         alert("Booking name should be a number! It is compulsory field");
//         return false;
//     }
//     else if(consignee === "Select Consignee")
//     {
//         alert("Please select the consignee.");
//         return false
//     }
//     else if(typeof incoterm === 'undefined')
//     {
//         alert("Please select incoterm.");
//         return false;
//     }
//     else if(fullContainer === 'block')
//     {
//         if(numberOfContainer === "")
//         {
//         alert("Please enter number of containers");
//         return false;
//         }
//         else if(containerType === 'Select Container Type')
//         {
//         alert("Please select container type");
//         return false;
//         }
//     }
//     else if(totalWeight === '')
//     {
//         alert("Please enter total weight");
//         return false;
//     }
//     else if(packageType === 'Select Package Type')
//     {
//         alert("Please select package type");
//         return false;
//     }
//     else if(totalVolume === '')
//     {
//         alert("Please enter total volume");
//         return false;
//     }
//     else if(totalQuantity === '')
//     {
//         alert("Please enter total quantity");
//         return false;
//     }
//     else if(originAddress === '')
//     {
//         alert("Please select origin address");
//         return false;
//     }
//     else if(port === 'Select Port')
//     {
//         alert("Please select port");
//         return false;
//     }
//     else if(destinationAddress === '')
//     {
//         alert("Please select destination address");
//         return false;
//     }
//     else if(checkboxValues.length > 2 && checkboxValues.includes('None of the above'))
//     {
//         alert("Please select options correctly");
//         return false;
//     }
//     else if(checkboxValues.length == 0)
//     {
//         alert("Please select hazardous products");
//         return false;
//     }
//     else
//     {
//         console.log("------------------------------");
//         console.log("\t-- Booking Details --");
//         console.log("------------------------------");
//         console.log("Booking Name: " + bookingName);
//         console.log("Consignee: " + consignee);
//         if (!(supplier === "Select supplier")){
//         console.log("Supplier: " + supplier);
//         }
//         else{
//         console.log("Supplier: Not available");
//         }
//         console.log("Incoterm: " + incoterm);
//         if (lessThanContainer === "block")
//         {
//         console.log("Container: Less Than Container:");
//         }
//         else
//         {
//         console.log("Container: Full Container:");
//         console.log("\tNumber of Containers: " + numberOfContainer);
//         console.log("\tContainer Type: " + containerType);
//         }
//         console.log("\tTotal Weight: " + totalWeight);
//         console.log("\tTotal Volume: " + totalVolume);
//         console.log("\tPackage Type: " + packageType);
//         console.log("\tTotal Quantity: " + totalQuantity);
//         console.log("Origin Address: " + originAddress);
//         console.log("Origin Port: " + port);
//         console.log("Need Origin Trucking Services: " + originTruckingService);
//         console.log("Destination Address: " + destinationAddress);
//         console.log("Hazardous Materials: ");
//         if (checkboxValues.includes('None of the above'))
//         {
//         console.log("Products not from list");
//         }
//         else
//         {
//         for (var i = 0; i < checkboxValues.length; i++)
//         {
//             console.log("\t" + checkboxValues[i]);
//         }
//         }
//         console.log("Origin Cutoff Date: " + originCutoffDate);
//         return true;
//     }
// }
