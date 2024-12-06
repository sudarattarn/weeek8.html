function ClickButton(){
    let header =document.getElementById('header')
    console.log('Header:',header.textContent)//tectcon คือการแสดงข้อมูลที่ดึงมา
    console.log('Header:',header.innerText)//innertext คือดึงข้อมูลเฉพาะที่เลือก
    console.log('Header:',header.innerHTML)//innerHtmlคือการดึงคอนเทนต์ทั้งหมดในชั้น
    let content = document.getElementById('content')
    let firstName =document.querySelector('input[name=firstname]').value
    content.innerText =firstName
    content.innerHTML=`<b>${firstName}</b>`
}
function ClickButton2(event){
    let button =event.target
    console.log('Button Name:',button.innerText)

}
function color(event){
    let button =event.target
    console.log('Button color:',button.style.backgroundColor)
    button.style.backgroundColor ='#FF3366'
    
}
function Cal(){
    let price = parseFloat(document.querySelector('input[name=Price]').value)
    let vat = parseFloat (document.querySelector('input[name=Vat]').value)
    let result =document.getElementById('Result')
    let b_totalprice =(price *100/(100+vat)).toFixed(2)
    let b_totalvat = (price-b_totalprice).toFixed(2)
    console.log(b_totalprice,b_totalvat)
    let htmlResult=`
    Before Vat : ${b_totalprice} <br>
    VAT ${vat} % : ${b_totalprice}  <br>
    <hr>
    TOTAL : ${price.toFixed(2)}<br>
    `
    result.innerHTML = htmlResult
}