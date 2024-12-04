let budi = 1;
let randi = 1;
let budiNo = 20; 
let randiNo = 10; 

console.log("Status Angkot Budi:");

while (budi <= 13) {
    console.log('Angkot Budi no ' + budi + ' sedang beroperasi');
    budi++;
}

for (let angkotKe = 14; angkotKe <= budiNo; angkotKe++) {
    console.log('Angkot Budi no ' + angkotKe + ' dipinjam Randi');
}

console.log("\nStatus Angkot Randi:");

while (randi <= 7) {
    console.log('Angkot Randi no ' + randi + ' sedang rusak');
    randi++;
}

for (let jual = 8; jual <= randiNo; jual++) {
    console.log('Angkot Randi no ' + jual + ' sudah dijual');
}