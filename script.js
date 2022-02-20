// mendapatkan namaPemain
const next = document.getElementById('next');
next.addEventListener('click', function(){
    const tNama = document.getElementById('tempat');
    const nama = document.querySelector('#nama'). value;
    const quiz = document.getElementById('quiz');
    if(nama == ''){
    tNama.innerHTML = `selamat bermain! null`
    }else{
        tNama.innerHTML = `selamat bermain! ${nama}`
    };
    quiz.classList.remove('questAnswer');
    next.parentElement.style.display = 'none';
})

// membuat soal
const q0 = Math.round(Math.random() * 99 )
const q1 = Math.round(Math.random() * 99 )
const result = q0 + q1;
// console.log(result)

// menampilkan soal
const quest = document.querySelectorAll('div.quest')
quest[0].innerHTML = q0;
quest[1].innerHTML = q1;

// peraturan
const btn = document.getElementById('btn')
btn.addEventListener('click',function() {
    const val = document. querySelector('#inResult').value;
    // console.log(val);
    if(result == val){
        const hresult = document.querySelector('.title');
        hresult.innerHTML = 'selamat kamu menang';

    }else{
        const hresult = document.querySelector('.title');
        hresult.innerHTML = `jawaban yang benar adalah ${result}`;
    }
});

// coba lagi
const coba = document.getElementById('coba');
coba.addEventListener('click', function(){
    window.location.reload(false);
})

// shortcut Enter
const short = document.getElementById("inResult").addEventListener('keyup',function(event){
    event.preventDefault();
    if(event.keyCode === 13){
        document.getElementById('btn').click();
    }
});
const short1 = document.getElementById('nama').addEventListener('keyup',function(event){
    event.preventDefault();
    if(event.keyCode === 13){
        document.getElementById('next').click();
    }
})

// lama
    // nama pemain
        // const nama = prompt('masukkan nama?');
        // const tNama = document.getElementById('tempat')
        // if(nama == ''){
        //     tNama.innerHTML = `selamat bermain! null`
        // }else{
        //     tNama.innerHTML = `selamat bermain! ${nama}`
        // }
    // peraturan
        // const try1 = confirm('mau coba lagi?');
        // if(try1){
        //     window.location.reload(false);
        // }else{
        //     alert('terimakasih');
        // }

        // alert(`jawaban yang benar adalah ${result}`)
            // const try2 = confirm('mau coba lagi?');
            // if(try2){
            //     window.location.reload(false);
            // }else{
            //     alert('terimakasih');
            // }
            // }



// for(i = 0; i < quest.length; i++){
//     quest[i].innerHTML = ;
// }