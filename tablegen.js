const tableGen = () => {
    let rCount = document.getElementById('rowCount').value
    let cCount = document.getElementById('colCount').value
    
    // Row Html
    let rowHtml = ''
    for (let index1 = 0; index1 < rCount; index1++) {
        rowHtml += `<tr class="row"></tr>`
    }

    // Column Html
    let colHtml = ''
    for (let index2 = 0; index2 < cCount; index2++) {
        colHtml += `<td class="px-3 col">Maria Anders</td>`
    }

    // Add row html in document
    document.getElementsByTagName('table')[0].innerHTML = rowHtml
    
    // Adding collumn html in rows
    let rows = document.querySelectorAll('.row')
    rows.forEach((element,index) => {
    element.innerHTML = colHtml
    });

        // Add table options when table is created
        let tableOptHtml = `<h2>Table Options</h2><div class="custom-control custom-checkbox my-3">
        <input type="checkbox" class="custom-control-input" id="headerCheck">
        <label class="custom-control-label" for="headerCheck">Add Header To Table</label>
      </div>`
      
    
        let tableoptions = document.querySelector('.table-opt')
        tableoptions.innerHTML = tableOptHtml
    
        // Changing values of table body values
        let cols = document.querySelectorAll('.col')
        Array.from(cols).forEach((element,index) => {
            element.addEventListener('click', function(){
              let value = prompt('Enter a value')
              cols[index].innerHTML = value
            })
         });

        //  Copy and pastes html into hidden input
         let htmlCode = document.getElementsByClassName('table')[0].innerHTML
         document.getElementById('htmlInput').value = htmlCode
        
}
export { tableGen }