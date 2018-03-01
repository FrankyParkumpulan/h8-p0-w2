var nama = prompt (`masukkan sebuah nama`);
var peran = prompt (`masukkan sebuah peran`);

if ((nama === ``) && (peran === ``)) {
console.log(`nama harus diisi!`);
}  else if ((nama == "Niko") &&( peran === "")) {
    console.log(nama +"  Pilih peranmu untuk memulai game!")
    }
  else if ((nama === "Nina" )&&( peran === "Fighter"))
  
  {
    console.log("Selamat datang di Dunia Proxytia", nama);
    console.log("Halo", nama + ` ` + peran);
    console.log("kamu dapat menyerang dengan senjatamu!");
    
  }
else if ((nama == "Zhask" )&& (peran === "Priestess")) {
    console.log("Selamat datang di Dunia Proxytia", nama);
    console.log("Halo", nama + ` ` + peran);
    console.log("kamu akan membantu temanmu yang terluka.");
} 


else if ((nama == "Yoyo" )&& (peran === "Miracle")) {
    console.log("Selamat datang di Dunia Proxytia", nama);
    console.log("Halo", nama + ` ` + peran);
    console.log("ciptakan keajaiban yang membantu kemenanganmu!");
} else {
  console.log(`Peran tidak ada`);
}