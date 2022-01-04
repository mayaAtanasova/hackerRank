function bonAppetit(bill, k, b) {
    bill.splice(k, 1);
    let annasBill = bill.reduce((acc, c) => acc + c) / 2;
    if (annasBill == b) {
        console.log('Bon Appetit');
    } else {
        console.log(b - annasBill);
    }
}

bonAppetit([3, 10, 2, 9], 1, 12);