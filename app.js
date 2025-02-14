let iranDatabase = {
    tehran: ['Tehran', 'Rey', 'Shemiranat', 'Varamin', 'Robat Karim', 'Pakdasht'],
    isfahan: ['Isfahan', 'Shahinshahr', 'Kashan', 'Natanz', 'Najafabad', 'Golpayegan'],
    fars: ['Shiraz', 'Marvdasht', 'Firoozabad', 'Pasargad', 'Jahrom', 'Lar'],
    khorasan_razavi: ['Mashhad', 'Neyshabur', 'Sabzevar', 'Torbat-e Jam', 'Quchan', 'Chenaran'],
    mazandaran: ['Sari', 'Amol', 'Babol', 'Ramsar', 'Qaemshahr', 'Noshahr'],
    gilan: ['Rasht', 'Anzali', 'Lahijan', 'Fuman', 'Talesh', 'Rudbar'],
    khuzestan: ['Ahvaz', 'Abadan', 'Dezful', 'Masjed Soleyman', 'Khorramshahr', 'Shushtar'],
    west_azerbaijan: ['Urmia', 'Khoy', 'Mahabad', 'Salmas', 'Miandoab', 'Piranshahr'],
    east_azerbaijan: ['Tabriz', 'Maragheh', 'Ahar', 'Marand', 'Bonab', 'Sarab'],
    hormozgan: ['Bandar Abbas', 'Qeshm', 'Minab', 'Bandar Lengeh', 'Jask', 'Haji Abad'],
    kerman: ['Kerman', 'Rafsanjan', 'Sirjan', 'Bam', 'Jiroft', 'Baft'],
    yazd: ['Yazd', 'Meybod', 'Ardakan', 'Taft', 'Bafq', 'Mehriz'],
    semnan: ['Semnan', 'Shahroud', 'Damghan', 'Garmsar', 'Mehdishahr', 'Sorkheh'],
    alborz: ['Karaj', 'Taleqan', 'Nazarabad', 'Eshtehard', 'Fardis', 'Hashtgerd'],
    kermanshah: ['Kermanshah', 'Eslamabad-e Gharb', 'Sarab-e Zahab', 'Paveh', 'Qasr-e Shirin', 'Sonqor'],
    lorestan: ['Khorramabad', 'Borujerd', 'Aligudarz', 'Kuhdasht', 'Dorud', 'Azna'],
    markazi: ['Arak', 'Saveh', 'Khomein', 'Mahallat', 'Delijan', 'Ashtian'],
    qazvin: ['Qazvin', 'Takestan', 'Abyek', 'Buin Zahra', 'Alvand', 'Tarom Sofla'],
    qom: ['Qom'],
    golestan: ['Gorgan', 'Gonbad-e Kavus', 'Aliabad-e Katul', 'Bandar-e Torkaman', 'Minudasht', 'Aqqala'],
    kurdistan: ['Sanandaj', 'Marivan', 'Baneh', 'Saqqez', 'Qorveh', 'Bijar'],
    ardabil: ['Ardabil', 'Meshginshahr', 'Parsabad', 'Germi', 'Khalkhal', 'Namin'],
    bushehr: ['Bushehr', 'Borazjan', 'Bandar Ganaveh', 'Khormuj', 'Ahram', 'Kangan'],
    chaharmahal_bakhtiari: ['Shahr-e Kord', 'Borujen', 'Lordegan', 'Farrokhshahr', 'Farsan'],
    zanjan: ['Zanjan', 'Abhar', 'Khorramdarreh', 'Soltaniyeh', 'Tarem', 'Mahneshan'],
    south_khorasan: ['Birjand', 'Qaen', 'Ferdows', 'Tabas', 'Nehbandan'],
    north_khorasan: ['Bojnurd', 'Shirvan', 'Esfarayen', 'Ashkhaneh', 'Garmeh', 'Maneh'],
    kerman: ['Kerman', 'Rafsanjan', 'Sirjan', 'Bam', 'Shahdad', 'Jiroft'],
    kohgiluyeh_boyerahmad: ['Yasuj', 'Dogonbadan', 'Dehdasht', 'Sisakht', 'Landeh'],
    ilam: ['Ilam', 'Dehloran', 'Mehran', 'Abdanan', 'Eyvan', 'Darreh Shahr'],
    sistan_baluchestan: ['Zahedan', 'Chabahar', 'Zabol', 'Saravan', 'Iranshahr', 'Khash'],
    hamedan: ['Hamedan', 'Malayer', 'Nahavand', 'Asadabad', 'Kabudarahang', 'Razan']
};
let image = Math.floor(Math.random() * 15); 
document.body.style.backgroundImage = `url('img/${image}.jpg')`; 

let cities = document.getElementById('cities')
let provides = document.getElementById('provides')
provides.addEventListener("change" , function() {
    provides_selcted = document.getElementById('provides').value
    if (provides_selcted === "empty" ) {
         cities.innerHTML = ''
         cities.innerHTML += "<option> select city</option>"
    }else{
        cities.innerHTML = ''
        iranDatabase[provides_selcted].forEach(function (city) {
            cities.innerHTML += "<option>"+city+"</option>"   
        });
    } 
})
document.getElementById("cities").addEventListener("change", function() {
    selectedCity = this.value;
    console.log("User selected city:", selectedCity);
});
document.getElementById('saveBtn').addEventListener('click', () => {
    // const cities = document.getElementById('cities').value;
    const provides_selcted = document.getElementById('provides').value;
    // Save the value to localStorage
    localStorage.setItem('sharedCities', selectedCity);
    localStorage.setItem('sharedprovides', provides_selcted);
    // Navigate to the second HTML page
    window.location.href = 'showinfo/showinfo.html';
});
