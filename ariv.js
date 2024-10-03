document.addEventListener("DOMContentLoaded", function() {
    const formContainer = document.getElementById('form-container');
    
    const form = document.createElement('form');
    form.id = 'formPeminjaman';

    const labelNama = document.createElement('label');
    labelNama.textContent = 'Nama Lengkap: ';
    form.appendChild(labelNama);

    const inputNama = document.createElement('input');
    inputNama.type = 'text';
    inputNama.id = 'nama';
    inputNama.required = true;
    form.appendChild(inputNama);

    form.appendChild(document.createElement('br'));

    const labelNIM = document.createElement('label');
    labelNIM.textContent = 'NIM: ';
    form.appendChild(labelNIM);

    const inputNIM = document.createElement('input');
    inputNIM.type = 'text';
    inputNIM.id = 'nim';
    inputNIM.required = true;
    form.appendChild(inputNIM);

    form.appendChild(document.createElement('br'));

    const labelAlat = document.createElement('label');
    labelAlat.textContent = 'Alat yang Dipinjam: ';
    form.appendChild(labelAlat);

    const selectAlat = document.createElement('select');
    selectAlat.id = 'alat';
    selectAlat.required = true;
    const alatOptions = ['Tabung Oksigen', 'bcd', 'Kacamata Selam', 'fins'];
    alatOptions.forEach(alat => {
        const option = document.createElement('option');
        option.value = alat;
        option.textContent = alat;
        selectAlat.appendChild(option);
    });
    form.appendChild(selectAlat);

    form.appendChild(document.createElement('br'));

    const labelTanggal = document.createElement('label');
    labelTanggal.textContent = 'Tanggal Peminjaman: ';
    form.appendChild(labelTanggal);

    const inputTanggal = document.createElement('input');
    inputTanggal.type = 'date';
    inputTanggal.id = 'tanggal';
    inputTanggal.required = true;
    form.appendChild(inputTanggal);

    form.appendChild(document.createElement('br'));

    const labelDurasi = document.createElement('label');
    labelDurasi.textContent = 'Durasi Peminjaman (Hari): ';
    form.appendChild(labelDurasi);

    const inputDurasi = document.createElement('input');
    inputDurasi.type = 'number';
    inputDurasi.id = 'durasi';
    inputDurasi.min = '1';
    inputDurasi.required = true;
    form.appendChild(inputDurasi);

    form.appendChild(document.createElement('br'));

    const labelTujuan = document.createElement('label');
    labelTujuan.textContent = 'Tujuan Penggunaan: ';
    form.appendChild(labelTujuan);

    const inputTujuan = document.createElement('textarea');
    inputTujuan.id = 'tujuan';
    inputTujuan.rows = 3;
    inputTujuan.required = true;
    form.appendChild(inputTujuan);

    form.appendChild(document.createElement('br'));

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    formContainer.appendChild(form);

    inputNIM.addEventListener('blur', function() {
        if (!inputNIM.value.match(/^\d+$/)) {
            inputNIM.style.borderColor = 'red';
            alert('NIM harus berupa angka!');
        } else {
            inputNIM.style.borderColor = 'green';
        }
    });

    inputNIM.addEventListener('focus', function() {
        inputNIM.style.borderColor = '';
    });

    selectAlat.addEventListener('change', function() {
        const alat = selectAlat.value;
        if (alat === 'Tabung Oksigen') {
            alert('Tabung oksigen hanya tersedia dalam jumlah terbatas!');
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nama = inputNama.value;
        const nim = inputNIM.value;
        const alat = selectAlat.value;
        const tanggal = inputTanggal.value;
        const durasi = inputDurasi.value;
        const tujuan = inputTujuan.value;
        
        if (nim === '' || nama === '' || alat === '' || tanggal === '' || durasi === '' || tujuan === '') {
            alert('Semua field harus diisi!');
        } else {
            displayResult(nama, nim, alat, tanggal, durasi, tujuan);
        }
    });
});

function displayResult(nama, nim, alat, tanggal, durasi, tujuan) {
    const resultContainer = document.getElementById('ariv1');
    resultContainer.innerHTML = `
        <div class="card">
            <h3>Data Peminjaman</h3>
            <p><strong>Nama Lengkap:</strong> ${nama}</p>
            <p><strong>NIM:</strong> ${nim}</p>
            <p><strong>Alat yang Dipinjam:</strong> ${alat}</p>
            <p><strong>Tanggal Peminjaman:</strong> ${tanggal}</p>
            <p><strong>Durasi Peminjaman:</strong> ${durasi} hari</p>
            <p><strong>Tujuan Penggunaan:</strong> ${tujuan}</p>
        </div>
    `;
}
