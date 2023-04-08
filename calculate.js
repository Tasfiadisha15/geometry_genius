document.getElementById('triangleCalculate').addEventListener('click', function(){
    const triangleBase = document.getElementById('triBase');
    const baseNumberString = triangleBase.value;
    const newBaseNumber = parseFloat(baseNumberString);
    const container =document.getElementById('container');
    const para = document.createElement("p");
    para.innerText = "Triangle";
    container.appendChild(para);
    
    const triangleHeight = document.getElementById('triHeight');
    const heightNumberString = triangleHeight.value;
    const newHeightNumber = parseFloat(heightNumberString);

    // for check
    console.log(newBaseNumber, newHeightNumber);

    const area = 0.5 * newBaseNumber * newHeightNumber;

    const triangleArea = document.getElementById('triangle');
    const areaCount = triangleArea.innerText;
    triangleArea.innerText = area;

    // const value = document.getElementById('triBase').value;
    // const container =document.getElementById('container');
    // const para = document.createElement("p");
    // para.innerText = "Triangle";
    // container.appendChild(para);

    // const cm = document.createElement("p");
    // cm.innerText = "cm";
    // container.appendChild(cm);

    const ol = document.createElement('ol');
    ol.innerText = value;
    container.appendChild(ol);

    

    const btn = document.createElement("button");
    btn.innerHTML = "Convert to m2";
    container.appendChild(btn);

    // for check
    console.log(area);


    triangleBase.value = '';
    triangleHeight.value = '';
})


// function areaCalculate(triangle, rectangle){
//     const triangleBase = document.getElementById('triBase');
//     const baseNumberString = triangleBase.value;
//     const newBaseNumber = parseFloat(baseNumberString);
    
//     const triangleHeight = document.getElementById('triHeight');
//     const heightNumberString = triangleHeight.value;
//     const newHeightNumber = parseFloat(heightNumberString);

//     // for check
//     console.log(newBaseNumber, newHeightNumber);

//     const area = 0.5 * newBaseNumber * newHeightNumber;

//     const triangleArea = document.getElementById('triangle');
//     const areaCount = triangleArea.innerText;
//     triangleArea.innerText = area;

//     // for check
//     console.log(area);


//     triangleBase.value = '';
//     triangleHeight.value = '';
// }

// document.getElementById('rectangleCalculate').addEventListener('click', function(){
//     areaCalculate();
// })






// document.getElementById('triangleCalculate').addEventListener('click', function(){
//     const value = document.getElementById('triBase').value;
//     const container =document.getElementById('container');
//     const li = document.createElement('li');
//     li.innerText = value;
//     container.appendChild(li);
// })