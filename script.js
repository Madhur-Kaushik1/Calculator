const outputScreen = document.querySelector('.out-scr')
const button = document.querySelectorAll('.btn')
const numArr = ['0','1','2','3','4','5','6','7','8','9']
const operators = {
    'mod': '%',
    'mul': '*',
    'add': '+',
    'sub': '-'}

let val = ''
let curVal = ''
let operator = null

button.forEach( (elem) => {
    elem.addEventListener('click' , () => {
        let elemId = elem.id

        if (elemId === 'clear'){
            outputScreen.innerText = 0
            val = ''
            curVal = '' 
            operator = null
        }

        else if (elemId === 'equal'){
            const ans = operation()
            outputScreen.innerText = ans
            curVal = ans
            val = ''
            operator = null
        }

        else if (numArr.includes(elemId) && operator != null) {
            val += elemId
            outputScreen.innerText = val
        }

        else if (numArr.includes(elemId) && operator == null) {
            curVal += elemId
            outputScreen.innerText = curVal
        }

        else if (elemId === 'del' && operator != null){
            val = Math.floor(val / 10)
            outputScreen.innerText = val 
        }

        else if (elemId === 'div'){
            operator = '/'
            outputScreen.innerHTML = '<i class="fa-solid fa-divide" style="color: #ff9b71; font-size: 2rem"></i>'
        }

        else if (elemId === 'dot' && operator == null){
            if (!curVal.includes('.'))
                curVal = curVal + '.'
                outputScreen.innerText = curVal
        }

        else if (elemId === 'dot' && operator != null){
            if (!val.includes('.'))
                val = val + '.'
                outputScreen.innerText = val
        }

        else if (elemId === 'del' && operator == null){
            curVal = Math.floor(curVal / 10)
            outputScreen.innerText = curVal 
        }

        else if (elemId === 'sq'){
            if (operator == null){
                const num = parseInt(outputScreen.innerText)
                curVal = num * num
                outputScreen.innerText = curVal
            }
            else{
                const num = parseInt(outputScreen.innerText)
                val = num * num
                outputScreen.innerText = val
            }
        }

        else if (elemId in operators){
            outputScreen.textContent = operators[elemId]
            operator = operators[elemId]
        }

    })
})

const operation = () => {
    switch(operator){
        case '%':
            return curVal % val
        
        case '/':
            return curVal / val

        case '*':
            return curVal * val

        case '+':
            return curVal + val

        case '-':
            return curVal - val
    }
}