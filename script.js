const btnSelect = document.querySelector('.btn__choose');
const btnConfirm = document.querySelector('.btn__confirm');
// const selectGroup = document.querySelector('#selectGroup');


btnSelect.addEventListener('click', (e)=>{
    e.preventDefault();

    // const selectGroup = document.querySelector('#selectGroup');
    selectGroup.style.display = 'block';

    const btnConfirm = document.querySelector('.btn__confirm');

    // console.dir(btnConfirm);

    if(selectGroup.value === 1) {
        alert('1')
    } else if (selectGroup.value === 2) {
        alert('2')
    } else if (selectGroup.value === 3) {
        alert('3')
    }

    selectGroup.addEventListener('change', ()=>{

        if(selectGroup.selectedIndex === 1) {
            document.querySelector('.first__group').style.display = 'block';
            document.querySelector('.second__group').style.display = 'none';
            document.querySelector('.third__group').style.display = 'none';
        } else if (selectGroup.selectedIndex === 2) {
            document.querySelector('.second__group').style.display = 'block';
            document.querySelector('.first__group').style.display = 'none';
            document.querySelector('.third__group').style.display = 'none';
        } else if (selectGroup.selectedIndex === 3) {
            document.querySelector('.third__group').style.display = 'block';
            document.querySelector('.second__group').style.display = 'none';
            document.querySelector('.first__group').style.display = 'none';
            
        }
        let speed = 1500;
        setTimeout(showData, speed);

        function showData(){
            document.querySelector('.data').style.display = 'block';
        }
        
    })


    // btnConfirm.addEventListener('click', ()=>{

    //     if(selectGroup.selectedIndex === 1) {
    //         document.querySelector('.first__group').style.display = 'block';
    //         document.querySelector('.second__group').style.display = 'none';
    //         document.querySelector('.third__group').style.display = 'none';
    //     } else if (selectGroup.selectedIndex === 2) {
    //         document.querySelector('.second__group').style.display = 'block';
    //         document.querySelector('.first__group').style.display = 'none';
    //         document.querySelector('.third__group').style.display = 'none';
    //     } else if (selectGroup.selectedIndex === 3) {
    //         document.querySelector('.third__group').style.display = 'block';
    //         document.querySelector('.second__group').style.display = 'none';
    //         document.querySelector('.first__group').style.display = 'none';
            
    //     }
    // })

})

const monthlySalary = document.querySelector('#monthlySalary');
const btnCalc = document.querySelector('.btn__calc');


monthlySalary.addEventListener('input', ()=>{
    btnCalc.style.display = 'block';
})

btnCalc.addEventListener('click', calculateTaxes);

function calculateTaxes(e){
    e.preventDefault();
    // document.querySelector('.results').style.display = 'flex';
    let moneyGet = monthlySalary.value;
    // let singleTax;
    // let singleSocialContribution;
    // let sumTax;
    // let salaryCalc = moneyGet - sumTax;



    function addData(taxAmount, salaryAmount) {
        let singleTax;
        let singleSocialContribution;
        let sumTax;
        let salaryCalc = moneyGet - sumTax;
        taxAmount = taxAmount.toFixed(2);
        salaryAmount = salaryAmount.toFixed(2);
        document.querySelector('#taxesCalc').textContent = taxAmount;
        document.querySelector('#salaryCalc').textContent = salaryAmount;
        document.querySelector('.results').style.display = 'flex';
    }

    function checkResult(salaryAmount) {
        let yearlySalary = salaryAmount * 12;
        if(yearlySalary > 1000000) {
            document.querySelector('.warning').style.display = 'block';
        }
    }

    if(moneyGet === '') {
        alert('Введіть необхідну суму')
    } 
    else if (isNaN(moneyGet)) {
        alert('Введіть тільки цифри')
    }   
    else if(selectGroup.selectedIndex === 1) {
        singleTax = 2600 * 0.1 / 3;
        singleSocialContribution = 6500 * 0.22 / 3;
        sumTax = singleTax + singleSocialContribution;
        salaryCalc = moneyGet - sumTax;
        addData(sumTax, salaryCalc);
        // checkResult(salaryCalc);
    }
    else if(selectGroup.selectedIndex === 2) {
        singleTax = 6500 * 0.20 / 3;
        sumTax = singleTax;
        salaryCalc = moneyGet - sumTax;
        addData(sumTax, salaryCalc);
        // checkResult(salaryCalc);
        
    } 
    else if(selectGroup.selectedIndex === 3) {
        singleTax = moneyGet * 0.05;
        singleSocialContribution = 6500 * 0.22;
        sumTax = singleTax + singleSocialContribution;
        salaryCalc = moneyGet - sumTax;
        addData(sumTax, salaryCalc);
        // checkResult(salaryCalc);
        

    } 

    checkResult(salaryCalc);

}


