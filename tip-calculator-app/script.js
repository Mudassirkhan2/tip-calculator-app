let bill=document.getElementById("bill")
const numberofpeople=document.getElementById("numberofpeople")
const reset =document.querySelector(".reset")
let value;
const perc5 =document.getElementById("5perc")
const perc10 =document.getElementById("10perc")
const perc15 =document.getElementById("15perc")
const perc25 =document.getElementById("25perc")
const perc50 =document.getElementById("50perc")
const tipamountperperson=document.querySelector(".tipamountperperson")
const amounttotal=document.querySelector(".amounttotal")
const zeroIn =document.querySelector(".zeroIn")
const Custom= document.querySelector("#custom")


async function valueasync(){
    let lastValue= await value;
    
    let billValue = Number(bill.value)
    let noofpeopleCheck=numberofpeople.value
    if(noofpeopleCheck){
        zeroIn.classList.remove("zeroInactive")
        zeroIn.classList.add("zeroIn")
    }
    else{
        zeroIn.classList.add("zeroInactive")
        zeroIn.classList.remove("zeroIn")
    }
    let tipamountperpersonValue=(billValue*value)/numberofpeople.value
    let amounttotalValue =((tipamountperpersonValue*numberofpeople.value))
    amounttotalValue+=(billValue)
    amounttotalValue=amounttotalValue/numberofpeople.value

    if(isFinite(tipamountperpersonValue)){
        
        tipamountperperson.textContent= parseFloat(tipamountperpersonValue).toFixed(2)

        amounttotal.textContent= parseFloat(amounttotalValue).toFixed(2)
    }
    else{
    }
}


perc5.addEventListener("click",perc5func)
function perc5func(){
    perc5.classList.toggle("active")
    value=0.05
    valueasync()
    return value
}
perc10.addEventListener("click",()=> {
    value=0.10
    perc10.classList.toggle("active")

    valueasync()
    return value
})
perc15.addEventListener("click",()=> {
    value=0.15
    perc15.classList.toggle("active")
    valueasync()
    return value
})
perc25.addEventListener("click",()=> {
    value=0.25
    perc25.classList.toggle("active")
    valueasync()
    return value
})
perc50.addEventListener("click",()=> {
    value=0.50
    perc50.classList.toggle("active")
    valueasync()
    return value
})



setInterval(()=>{
    let customValueCheck= Custom.value
    if(customValueCheck){
        value=Number(customValueCheck)/100
        valueasync()
        return  value
    }
    else{
        console.log("bye")
        
    }
},1300)
reset.addEventListener("click",resetclicked)


function resetclicked(){
    
    location.reload();
}