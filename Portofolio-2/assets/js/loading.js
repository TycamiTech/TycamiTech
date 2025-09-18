document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('main');

    // Sembunyikan konten utama saat loading
    if (mainContent) {
        mainContent.style.opacity = '0';
    }

    // Tunggu animasi loading selesai
    setTimeout(() => {
        // Fade out loading screen
        loadingScreen.classList.add('fade-out');
        
        // Tampilkan konten utama
        if (mainContent) {
            mainContent.style.transition = 'opacity 1s ease';
            mainContent.style.opacity = '1';
        }

        // Hapus loading screen setelah fade out
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2500); // Waktu total loading (2.5 detik)
});
