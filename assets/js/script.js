$('#search-button').on('click', function () {
    var courier = $('#courier_input').val();
    var awb = $('#awb_input').val();

    // Mencetak nilai kurir dan nomor resi ke konsol browser
    console.log("Courier: ", courier);
    console.log("AWB: ", awb);

    $.ajax({
        url: 'https://api.binderbyte.com/v1/track?api_key=f6ef89b8fddac60109e34bc4e8704cc716847bb614aefa1d2a60b5f21c391d98',
        type: 'get',
        dataType: 'json',
        data: {
            'courier': $('#courier_input').val(),
            'awb': $('#awb_input').val()
        },
        success: function (result) {
            if (result.status === 200) {
                let resi = result.data;
                $('#resi-status').html(`
                    <div class="col-md-8">
                        <div>STATUS PENGIRIMAN</div>
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <th scope="row">STATUS</th>
                                    <td>${resi.summary.status}</td>
                                </tr>
                                <tr>
                                    <th scope="row">LAYANAN</th>
                                    <td>${resi.summary.service}</td>
                                </tr>
                                <tr>
                                    <th scope="row">PENGIRIM</th>
                                    <td>${resi.summary.courier}</td>
                                </tr>
                                <tr>
                                    <th scope="row">ASAL</th>
                                    <td>${resi.detail.origin}</td>
                                </tr>
                                <tr>
                                    <th scope="row">PENERIMA</th>
                                    <td>${resi.detail.receiver}</td>
                                </tr>
                                <tr>
                                    <th scope="row">TUJUAN</th>
                                    <td>${resi.detail.destination}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `);
            } else {
                $('#resi-result').html(`
                    <div class="col">
                        <h1 class="text-center">${result.message}</h1>
                    </div>
                `);
            }
        },
        error: function (xhr, status, error) {
            // Menampilkan pesan kesalahan jika permintaan gagal
            console.error("Error: ", error);
        }
    });
});
