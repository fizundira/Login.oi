function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "NadilaPutri" && password === "Icacantik123") {
        alert("Login berhasil!");
        window.location.href = " https://fiznurwahid.github.io/Coding/"; // Ganti URL tujuan sesuai kebutuhan
        return false; // Untuk mencegah pengiriman formulir
    } else {
        alert("Login gagal. Cek kembali username dan password.");
        return false; // Untuk mencegah pengiriman formulir
    }
}