const addHeaderColor = () => {
  let tbody = document.getElementsByTagName('tbody')[0]
  let tableoptions = document.querySelector('.table-opt')
  let headingColor = document.createElement('div')
  headingColor.classList.add('headingColor')
  headingColor.innerHTML = `<div class='colorbox py-2'><h2 class='fontsize-22 py-2'>Add Background Color To heading</h2>
  <input type="text" class="colorInp py-1 px-2" placeholder="#000000">
  <button class="btn btn-primary" id='addColor'>Add Color</button><div class="custom-control custom-checkbox my-3">
  <input type="checkbox" class="custom-control-input" id="headerWhite">
  <label class="custom-control-label" for="headerWhite">Make header Text White</label></div>`
  tableoptions.appendChild(headingColor)
  let addColor = document.getElementById('addColor')
  addColor.addEventListener('click', colorAdd)
  function colorAdd() {
      let colorCode = headingColor.querySelector('.colorInp').value
      let header = tbody.firstChild
      header.style.background = colorCode

//     //   Get Css Style
//       const cssObj = window.getComputedStyle(header, null);
//       let bgColor = cssObj.getPropertyValue("background-color");
//       let cssStyle = `
// th, td {
// border:1px solid black;
// }

// .header{
// background: ${bgColor};
// }
// `
//     // Add css styles into hidden input
//     let cssInput = document.getElementById('cssInput')
//     cssInput.value = cssStyle
//     console.log(cssInput.value)
  }
      }

export {addHeaderColor}