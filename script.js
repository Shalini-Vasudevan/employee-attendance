// Normal Login
document.getElementById("loginBtn").onclick = () => {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  if (user && pass) {
    alert("Login successful ✅");
    window.location.href = "dashboard.html";
  } else {
    alert("Enter valid credentials!");
  }
};
function recordAttendance(method) {
    // Get existing logs or start a new array
    let logs = JSON.parse(localStorage.getItem("attendanceLogs")) || [];
    
    const entry = {
        name: document.getElementById("username").value || "Biometric User",
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
        method: method // "Face", "Fingerprint", or "Password"
    };
    
    logs.push(entry);
    localStorage.setItem("attendanceLogs", JSON.stringify(logs));
    localStorage.setItem("currentUser", entry.name); // Store who is logged in
}

// Example usage in your existing Fingerprint code:
// recordAttendance("Fingerprint");
// window.location.href = "dashboard.html";

// Fingerprint Simulation
const modal = document.getElementById("fingerModal");
document.getElementById("fingerLogin").onclick = () => {
  modal.style.display = "flex";
  setTimeout(() => {
    modal.style.display = "none";
    alert("Fingerprint verified ✅");
    window.location.href = "dashboard.html";
  }, 3000);
};

// Real Face Login using webcam
const faceBtn = document.getElementById("faceLogin");
const cameraContainer = document.getElementById("cameraContainer");
const video = document.getElementById("camera");

faceBtn.onclick = async () => {
  alert("Initializing face recognition...");
  cameraContainer.style.display = "block";

  // Start webcam
  const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
  video.srcObject = stream;

  // Load face-api models
  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("https://cdn.jsdelivr.net/npm/face-api.js/weights"),
  ]);

  // Detect face
  const detectFace = async () => {
    const detection = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions());
    if (detection) {
      stream.getTracks().forEach(t => t.stop());
      cameraContainer.style.display = "none";
      alert("Face verified ✅");
      window.location.href = "dashboard.html";
    } else {
      requestAnimationFrame(detectFace);
    }
  };
  detectFace();
};
