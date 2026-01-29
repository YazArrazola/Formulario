import { useEffect, useState } from "react";
import "./Formulario2.css";

interface Sesion {
  usuario: string;
  email: string;
  fecha: string;
}

export default function App() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [sesion, setSesion] = useState<Sesion | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("sesion");
    if (data) {
      setSesion(JSON.parse(data));
    }
  }, []);

  const guardarSesion = () => {
    if (!usuario || !email) return;

    const nuevaSesion: Sesion = {
      usuario,
      email,
      fecha: new Date().toLocaleString(),
    };

    localStorage.setItem("sesion", JSON.stringify(nuevaSesion));
    setSesion(nuevaSesion);
  };

  const cerrarSesion = () => {
    localStorage.removeItem("sesion");
    setSesion(null);
    setUsuario("");
    setEmail("");
  };

  if (sesion) {
    return (
      <div className="card">
        <h1>👋 Sesión Activa</h1>
        <p><strong>Usuario:</strong> {sesion.usuario}</p>
        <p><strong>Email:</strong> {sesion.email}</p>
        <p><strong>Fecha:</strong> {sesion.fecha}</p>

        <button onClick={cerrarSesion}>Cerrar sesión</button>
      </div>
    );
  }

  return (
    <div className="card">
      <h1>🔐 Iniciar Sesión</h1>

      <input
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={guardarSesion}>Guardar sesión</button>
    </div>
  );
}
