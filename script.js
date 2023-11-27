import {tableGen} from "./tablegen.js";
import { addHeaderColor } from "./headergen.js";

let generateBtn = document.querySelector('#tableGen');
let isTable = false
let isHeader = false


// When Generate Btn is clicked 
generateBtn.addEventListener('click', generateTable)

function generateTable() {
    isTable = true;

    // Generate Table 
    tableGen()

    //  Add heading in the table
     if(isTable == true){

        let cols = document.querySelectorAll('.col')
        let addHeader = document.querySelector('#Theader');
        let headerTr = document.createElement('tr')
        headerTr.classList.add('row')
        headerTr.classList.add('header')
    
        // No. of top columns
        let rows = document.querySelectorAll('.row')
        let topCols =  cols.length / rows.length
    
        // Generating header html w.r.t columns
        for (let index = 0; index < topCols; index++) {
            headerTr.innerHTML += `<th id=${index} class="col px-3" onclick="changeHeaderVal(this.id)">Header</th>`   
        }

        // When add header is clicked
        let headerCheck = document.querySelector('#headerCheck')
        headerCheck.addEventListener('click', function() {
            if(this.checked){
                headerAdd()
                let headerWhite = document.querySelector('#headerWhite')
                headerWhite.addEventListener('click', function() {
                    if(headerWhite.checked == true){
                        let header = document.querySelector('.header')
                        header.style.color = '#fff'
                    }
                    else{
                        let header = document.querySelector('.header')
                        header.style.color = '#212529'
                    }
                })
            }

            if(headerCheck.checked == false){
                isHeader = false
                let tbody = document.getElementsByTagName('tbody')[0]
                tbody.removeChild(tbody.querySelectorAll('.row')[0])
                let tableOpt = document.querySelector('.table-opt')
                tableOpt.removeChild(tableOpt.querySelector('.headingColor'))
            }
        })


        function headerAdd(){
            // Insert header before 1st child of tbody
            let tbody = document.getElementsByTagName('tbody')[0]
            tbody.insertBefore(headerTr, tbody.firstChild)
            // Insert Heading color options
            addHeaderColor()     
        }
    }
}