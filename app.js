const minus = document.querySelectorAll(".minusBtn")
const plus = document.querySelectorAll(".plusBtn")
const remove = document.querySelectorAll(".btnrmv")
const total = document.querySelectorAll(".pro")
sum = 160.98;



plus.forEach(item => {
    item.addEventListener("click", () => {
        //* artı ile miktarı arttırma
        ++item.previousElementSibling.textContent

        //*Product Total hesaplama
        let price = +item.parentElement.previousElementSibling.children[1].children[0].textContent

        proTotal = item.previousElementSibling.textContent * price

        item.parentElement.nextElementSibling.nextElementSibling.children[0].innerHTML = proTotal
        
        //*Subtotal hesaplama
        sum=sum+price
       

            document.querySelector(".subtotal").innerHTML = "$" + sum.toFixed(2)
        
        //*Tax hesaplama
        tax = (sum * 0.18).toFixed(2)
        document.querySelector(".tax").innerHTML = "$" + tax
        //* ALLtotal hesaplama
        allTotal = sum + +tax + 19//shipping//
        document.querySelector(".alltotal").innerHTML = "$" + allTotal.toFixed(2)




    })
})

minus.forEach(item => {

    item.addEventListener("click", () => {
        if (item.nextElementSibling.textContent > 1) {
            --item.nextElementSibling.textContent;
            console.log(item.nextElementSibling)


            let price = +item.parentElement.previousElementSibling.children[1].children[0].textContent

            proTotal = item.nextElementSibling.textContent * price

            console.log(price);
            item.parentElement.nextElementSibling.nextElementSibling.children[0].innerHTML = ` ${proTotal}`
            //*Subtotal hesaplama
           
              sum=sum - price

                document.querySelector(".subtotal").innerHTML = ("$" + sum.toFixed(2))
          
            //*Tax hesaplama
            tax = (sum * 0.18).toFixed(2)
            document.querySelector(".tax").innerHTML = "$" + tax
            //* ALLtotal hesaplama
            allTotal = sum + +tax + 19//shipping//
            document.querySelector(".alltotal").innerHTML = "$" + allTotal.toFixed(2)

        }


    })

})

remove.forEach(item => {
    item.addEventListener("click", () => {
        item.parentElement.parentElement.parentElement.remove()
       
        sum=sum -  +item.parentElement.nextElementSibling.children[0].textContent
        
        console.log(sum)
        document.querySelector(".subtotal").innerHTML = "$" + sum.toFixed(2)
        tax = +(sum * 0.18).toFixed(2)
        document.querySelector(".tax").innerHTML = "$" + tax
        if(tax==0){
            allTotal = sum + tax
            document.querySelector(".alltotal").innerHTML = "$" + allTotal.toFixed(1)
            document.querySelector(".ship").textContent="0"
        }
        else {
        allTotal = sum + +tax + 19
        document.querySelector(".alltotal").innerHTML = "$" + allTotal.toFixed(2)
         }
       


        

    })
})