function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let service = document.getElementById('service').value;
    let customers = document.getElementById('customers').value;

    if(bill == '' || service == 0){
        alert("Please, fill up the blank values")
        return;
    }

    if(customers == '' || customers <= 1){
        customers = 1;
        document.getElementById('each').style.display = "none";
    } else{
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * service)/customers;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";

}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('form').addEventListener('submit',calculateTip);