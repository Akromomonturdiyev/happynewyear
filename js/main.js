setTimeout(function() {
    // O'chirib, yangi yilni ko'rsatish
    document.getElementById("year").innerHTML = "2024".replace("4", "5");
    setTimeout(function() {
        // Happy New Year 2025 deb chiqarish
        document.querySelector('.newYearMessage').innerHTML = 'Yangi 2025chi qil muborak bolsin';
    }, 1000); // 1 soniyadan keyin Happy New 2025 Year ni chiqarish
}, 3000); // 3 soniyadan keyin yilni o'zgartirish