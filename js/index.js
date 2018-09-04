const buttonsMethods=document.getElementsByClassName('buttonCheckMethod');

for (let i=0; i<=buttonsMethods.length-1; i++){
    buttonsMethods[i].addEventListener("click", getFibonachiNumber, false);
}

function fibonachiCykl(number) {
    let nextFibonachiNumber;
    let f1=1;
    let f2=1;
    for (let i=3; i<=number; i++) {
        nextFibonachiNumber=f1+f2;
        f1=f2; f2=nextFibonachiNumber;
    }
    return nextFibonachiNumber;
}

function fibonachiArray(number) {
    let fibonachiNumbers=[];
        fibonachiNumbers[0]=1; fibonachiNumbers[1]=1;
    for (let i=2; i<=number-1; i++) {
        fibonachiNumbers[i]=fibonachiNumbers[i-2]+fibonachiNumbers[i-1];
    }
    return fibonachiNumbers[number-1];
}

function fibonachiRecursion(number) {
    if (number==2 || number ==1) {
        return 1;
    } else {
        return (fibonachiRecursion(number-2)+fibonachiRecursion(number-1));
    }
}

function getFibonachiNumber() {
    const numberFibonachi=parseInt(document.querySelector('[name="fibonachiNumber"]').value);
    let serchingNumber;
    console.log(event.target);
    const button_method=event.target.getAttribute('name');
    if (numberFibonachi <=2 ) {
        serchingNumber=1;
    } else {
        switch (button_method) {
            case 'cykle_method':
                serchingNumber=fibonachiCykl(numberFibonachi);
            case 'array_method':
                serchingNumber=fibonachiArray(numberFibonachi);
            case 'recursion_method':
                serchingNumber=fibonachiRecursion(numberFibonachi);
        }
    }
    document.getElementsByClassName('resultArea')[0].innerHTML=`Fibonachi number ${numberFibonachi} is ${serchingNumber}`;
}

