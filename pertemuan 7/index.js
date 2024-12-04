let budi = 1;
let randi = 1;
let budiNo = 20; // Total angkot Budi
let randiNo = 10; // Total angkot Randi

// Status Angkot Budi
console.log("Status Angkot Budi:");

// Angkot Budi 1-13 sedang beroperasi
while (budi <= 13) {
    console.log('Angkot Budi no ' + budi + ' sedang beroperasi');
    budi++;
}

// Angkot Budi 14-20 sedang dipinjam Randi
for (let angkotKe = 14; angkotKe <= budiNo; angkotKe++) {
    console.log('Angkot Budi no ' + angkotKe + ' dipinjam Randi');
}

// Status Angkot Randi
console.log("\nStatus Angkot Randi:");

// Angkot Randi 1-7 sedang rusak
while (randi <= 7) {
    console.log('Angkot Randi no ' + randi + ' sedang rusak');
    randi++;
}

// Angkot Randi 8-10 dijual
for (let jual = 8; jual <= randiNo; jual++) {
    console.log('Angkot Randi no ' + jual + ' sudah dijual');
}