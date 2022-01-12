let numberPlan = 3
let isAnnual = false
let planPrice = 16.00
let pageViews = '100K'

document.addEventListener('DOMContentLoaded',e=>{
    changeDataPlan()
    const rangeInput = document.getElementById('ran')

    rangeInput.addEventListener('input',handleRange)

    const isAnnual = document.getElementById('isAnnual')
    isAnnual.addEventListener('input',handleAnnual)

})

const handleRange = e=>{

    const target = e.target
    numberPlan = target.value
    const min = target.min
    const max = target.max
    const val = numberPlan

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    changeDataPlan()
}

const handleAnnual = e=>{
    isAnnual = e.target.checked
    changeDataPlan()
}

const changeDataPlan = ()=>{
    
    if(numberPlan == 1){
        planPrice = 8.00
        pageViews = '10K'
    }else if(numberPlan == 2){
        planPrice = 12.00
        pageViews = '50K'
    }else if(numberPlan == 3){
        planPrice = 16.00
        pageViews = '100K'
    }else if(numberPlan == 4){
        planPrice = 24.00
        pageViews = '500K'
    }else if(numberPlan == 5){
        planPrice = 36.00
        pageViews = '1M'
    }

    const h1price = document.getElementById('planPrice')
    const h3pages = document.getElementById('pageViews')
    
    isAnnual 
    ? h1price.textContent = '$'+parseFloat(planPrice-(planPrice*0.25)).toFixed(2) 
    : h1price.textContent = '$'+parseFloat(planPrice).toFixed(2) 

    h3pages.textContent = pageViews + ' Pageviews'

}
