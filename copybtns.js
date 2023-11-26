        //  Copy Html
        function copyHtml() {
            let htmlCode = document.getElementsByClassName('table')[0].innerHTML
            htmlInput.value = htmlCode
            htmlInput.select();
            navigator.clipboard.writeText(htmlInput.value);
            let copied = document.querySelector('.copied')
            copied.innerHTML = `<span><i class="fas fa-clipboard"></i>&nbsp; Code Copied</span>`
            copied.classList.add('bg-success')
            animateBlock()
            setTimeout(() => {
                copied.innerHTML = ''
                copied.classList.remove('bg-success')
                copied.style.transform = 'translateY(0px)'
            }, 3000);
        }

        //  Copy Css
        function copyCss() {
            //   Get Css Style
            let tbody = document.getElementsByTagName('tbody')[0]
            let header = tbody.firstChild
            const cssObj = window.getComputedStyle(header, null);
            let bgColor = cssObj.getPropertyValue("background-color");
            console.log(bgColor)
            let cssStyle = `

        .header{
        background: ${bgColor};
        }
        `
            // Add css styles into hidden input
            let cssInput = document.getElementById('cssInput')
            cssStyle += staticCss
            cssInput.value = cssStyle
            cssInput.select();
            navigator.clipboard.writeText(cssInput.value);
            let copied = document.querySelector('.copied')
            copied.innerHTML = `<span><i class="fas fa-clipboard"></i>&nbsp; Code Copied</span>`
            copied.classList.add('bg-success')
            animateBlock()
            setTimeout(() => {
                copied.innerHTML = ''
                copied.classList.remove('bg-success')
                copied.style.transform = 'translateY(0px)'
            }, 3000);
        }

        // Copy Bootstrap
        function copyBoot() {
            let bootCode = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">`
            bootInput.value = bootCode
            bootInput.select();
            navigator.clipboard.writeText(bootInput.value);
            let copied = document.querySelector('.copied')
            copied.innerHTML = `<span><i class="fas fa-clipboard"></i>&nbsp; Code Copied</span>`
            copied.classList.add('bg-success')
            animateBlock()
            setTimeout(() => {
                copied.innerHTML = ''
                copied.classList.remove('bg-success')
                copied.style.transform = 'translateY(0px)'
            }, 3000);
        }

        // Copy Full Code
        function copyFull(){
            let bootCode = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">`
            let htmlCode = document.getElementsByClassName('table')[0].innerHTML
            htmlInput.value = htmlCode
            let tbody = document.getElementsByTagName('tbody')[0]
            let header = tbody.firstChild
            const cssObj = window.getComputedStyle(header, null);
            let bgColor = cssObj.getPropertyValue("background-color");
            console.log(bgColor)
            let cssStyle = `<style>
                ${staticCss}

        .header{
        background: ${bgColor};
        }

        </style>
        `
            let fullCode = bootCode + htmlInput.value + cssStyle
            fullInput.value = fullCode
            fullInput.select();
            navigator.clipboard.writeText(fullInput.value);
            let copied = document.querySelector('.copied')
            copied.innerHTML = `<span><i class="fas fa-clipboard"></i>&nbsp; Code Copied</span>`
            copied.classList.add('bg-success')
            animateBlock()
            setTimeout(() => {
                copied.innerHTML = ''
                copied.classList.remove('bg-success')
                copied.style.transform = 'translateY(0px)'
            }, 3000);
        }
