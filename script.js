// mendapatkan namaPemain
const nama = prompt('masukkan nama?');
const tNama = document.getElementById('tempat')
if(nama == ''){
    tNama.innerHTML = `selamat bermain! null`
}else{
    tNama.innerHTML = `selamat bermain! ${nama}`
}
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
        alert(`selamat kamu menang`)
        const try1 = confirm('mau coba lagi?');
        if(try1){
            window.location.reload(false);
        }else{
            alert('terimakasih');
        }
    }else{
        alert(`jawaban yang benar adalah ${result}`)
        const try2 = confirm('mau coba lagi?');
        if(try2){
            window.location.reload(false);
        }else{
            alert('terimakasih');
        }
    }
});
// shortcut Enter
const short = document.getElementById("inResult").addEventListener('keyup',function(event){
    event.preventDefault();
    if(event.keyCode === 13){
        document.getElementById('btn').click();
    }
});



// for(i = 0; i < quest.length; i++){
//     quest[i].innerHTML = ;
// }

