let database = {
    tehran : ['tehran' , 'rey' , 'alborz' ] ,
    isfahan : ['isfahan' , 'shahinshahr' , 'natanz'] ,
    fars : ['shiraz' , 'takhtjamshid' , 'pasargod'] ,
}
let cities = document.getElementById('cities')
let provides = document.getElementById('provides')

function chooseprovide() {
    // گرفتن مقدار استان انتخاب‌شده
    let selectedProvince = provides.value;

    // پاک کردن لیست قبلی شهرها
    cities.innerHTML = '';

    // بررسی انتخاب کاربر
    if (selectedProvince === 'empty') {
        cities.innerHTML = '<option value="">Please select a province first</option>';
        return;
    }


    database[selectedProvince].forEach(function(city){
        let option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cities.appendChild(option);
    })
}


