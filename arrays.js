function start() {


    /* Follow the directions in the comments to demonstrate the use of arrays */


    /* JavaScript Arrays:https://www.w3schools.com/js/js_arrays.asp */
    // write your name to the name h1
    document.getElementById("name").innerText = "Vincent Cubit";


    // Create an array called months that holds all the months of the year
    let months = ["September",
    "October",
    "November",
    "December",
    "January",
    "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August"];


    // use the index to print the month May from the months array the may paragraph
    document.getElementById("may").innerText = months[8];


    // print the length of the month array to the length paragraph
    document.getElementById("length").innerText = months.length;


    // Loop through all of the months array and print each month to the months paragraph
    monthsString = "";
    for ( let i = 0; i < months.length; i ++ ) {
        monthsString += months[i] + "\n\n";
    }
    document.getElementById("months").innerText = monthsString;


    //JS Array Methods:https://www.w3schools.com/js/js_array_methods.asp


    // convert the months array to a string and print to the string paragraph
    document.getElementById("string").innerText = months.join(", ");


    // create two new arrays - weekends and weekdays, add the appropriate days to each
    let weekends = ["Saturday", "Sunday"];
    let weekdays = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
    ];


    // join the two arrays into a new array - week
    let week = weekdays.concat(weekends);


    // print the contents of week to the week paragraph
    document.getElementById("week").innerText = week.join(", ");


    // use the pop method to remove the last element of the week array, then print
    // the week array to the pop paragraph
    week.pop();
    document.getElementById("pop").innerText = week.join(", ");


    // use the push function to add two fruits to the array fruits print to the fruits paragraph
    var fruits = ["Apple", "Kiwi", "Mango"];
    fruits.push("Banana", "Orange");
    document.getElementById("fruits").innerText = fruits.join(", ");


    // use the shift function to add a fruit to the front of the list and print to the fruits2 paragraph
    // Note added by student: I used unshift() for adding a new first element, rather than shift() to delete the first
    fruits.unshift("Pineapple");
    document.getElementById("fruits2").innerText = fruits.join(", ");


    // JS Array Sort  https://www.w3schools.com/js/js_array_sort.asp

    var languages = ["COBOL", "livescript", "C++", "Python", "JavaScript", "Lua", "Basic"];
        // sort the array languages and print to the paragraph sorted
        languages.sort();
        document.getElementById("sorted").innerText = languages.join(", ");


        // reverse the array languages and print to the paragraph reversed
        languages.reverse();
        document.getElementById("reversed").innerText = languages.join(", ");

        
    // use the compare function to sort the numbers  and print to the num-sorted paragraph
    numbers = [42, 23, 21, 50, 20, 6, 31, 9]
    numbers.sort(function(a, b){return a - b});
    document.getElementById("num-sorted").innerText = numbers.join(", ");


    // Read the Array Iteration page https://www.w3schools.com/js/js_array_iteration.asp 
    // read the Array Const page https://www.w3schools.com/js/js_array_const.asp
}

