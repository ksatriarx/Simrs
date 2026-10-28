// ============================================
// SIMRS Pro - Firebase Config (Centralized)
// ============================================
// File ini di-load via <script src="firebase-config.js"></script>
// Sebelum script module Firebase di setiap halaman.
// Jika ganti project Firebase, cukup edit file ini saja.
// ============================================

window.FIREBASE_CONFIG = {
    apiKey: "AIzaSyB5u4UAw9JAmXA6vsuSwuexO5ASR-0Kjn0",
    authDomain: "simrs-pro.firebaseapp.com",
    projectId: "simrs-pro",
    storageBucket: "simrs-pro.firebasestorage.app",
    messagingSenderId: "745412639051",
    appId: "1:745412639051:web:e434bc2a118ca2c67750ce"
};

// Optional: helper untuk deteksi halaman aktif di sidebar
window.getCurrentPage = function () {
    const path = window.location.pathname.split('/').pop();
    return path || 'index.html';
};
