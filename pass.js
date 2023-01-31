//CHANge the count-el in the html to reflect the new count 
//listen fo clicks on the icrement button
//increment the count variable when button is clicked
//change the count-el int the html to reflect the new count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

//console.log(countEl)

let count = 0
//console.log(save-el)
function increment() {
    count += 1
    countEl.textContent = count
    //console.log(count)
}
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
function save(){
    
let countStr =count + " - "
saveEl.textContent +=countStr
 //   console.log(count)
 countEl.textContent= 0
 count= 0
}
