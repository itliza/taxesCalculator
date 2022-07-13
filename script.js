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

        // if(selectGroup.selectedIndex > 0) {
        //     btnConfirm.style.display = 'block';
        // }

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
    document.querySelector('.results').style.display = 'flex';
    let moneyGet = monthlySalary.value;

    if(selectGroup.selectedIndex === 0) {
        alert('Оберіть групу')
    }
    
    if(selectGroup.selectedIndex === 1) {
        let singleTax = 2600 * 0.1 / 3;
        let singleSocialContribution = 6500 * 0.22 / 3;
        let sumTax = singleTax + singleSocialContribution;
        let salaryCalc = moneyGet - sumTax;
        sumTax = sumTax.toFixed(2);
        salaryCalc = salaryCalc.toFixed(2);
        document.querySelector('#taxesCalc').textContent = sumTax;
        document.querySelector('#salaryCalc').textContent = salaryCalc;
    }
    else if(selectGroup.selectedIndex === 2) {
        let singleTax = 6500 * 0.20 / 3;
        let sumTax = singleTax;
        let salaryCalc = moneyGet - sumTax;
        sumTax = sumTax.toFixed(2);
        salaryCalc = salaryCalc.toFixed(2);
        document.querySelector('#taxesCalc').textContent = sumTax;
        document.querySelector('#salaryCalc').textContent = salaryCalc;
    } 
    else if(selectGroup.selectedIndex === 3) {
        let singleTax = moneyGet * 0.05;
        let singleSocialContribution = 6500 * 0.22;
        let sumTax = singleTax + singleSocialContribution;
        let salaryCalc = moneyGet - sumTax;
        sumTax = sumTax.toFixed(2);
        salaryCalc = salaryCalc.toFixed(2);
        document.querySelector('#taxesCalc').textContent = sumTax;
        document.querySelector('#salaryCalc').textContent = salaryCalc;
    } 

    
}


