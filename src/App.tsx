import React, { useEffect, useState } from "react";

import {
  Calendar,
  Clock3,
  GraduationCap,
  MapPin,
  Sparkles,
  Users,
  
  PartyPopper,
  Heart,
  Music2,
} from "lucide-react";

export default function InvitacionGraduacion() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_35%),radial-gradient(circle_at_bottom,rgba(6,182,212,0.30),transparent_35%)]"></div>

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

      {/* Partículas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(70)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 py-10 flex flex-col items-center">

        {/* HERO */}
        <div className="w-full max-w-6xl rounded-[45px] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl overflow-hidden">

          <div className="relative h-[600px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover opacity-40 scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

              <div className="flex items-center gap-2 bg-cyan-500/10 border-cyan-400/20 px-5 py-2 rounded-full mb-8 backdrop-blur-md">
                <Sparkles className="text-fuchsia-300" size={18} />

                <span className="text-sm tracking-[0.3em] uppercase text-cyan-200">
                  Invitación Especial
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-pink-300 to-cyan-300 text-transparent bg-clip-text drop-shadow-2xl">
                
                  MI  GRADUACIÓN
              </h1>

              <h2 className="mt-5 text-2xl md:text-4xl font-semibold text-white">
                ISAI REYES PEÑA
              </h2>

             <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-5xl">

  {/* Texto 1 */}
  <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-7 shadow-2xl text-left">

    <div className="flex items-center gap-3 mb-5">
      <div className="w-3 h-3 rounded-full bg-cyan-400"></div>

      <span className="uppercase tracking-[0.25em] text-sm text-cyan-200">
        Un gran logro
      </span>
    </div>

    <p className="text-gray-200 text-lg leading-relaxed">
      Después de años de esfuerzo, desvelos, proyectos,
      exámenes y aprendizajes, finalmente llega uno de los
      momentos más importantes de mi vida 
    </p>

  </div>

  {/* Texto 2 */}
  <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-7 shadow-2xl text-left">

    <div className="flex items-center gap-3 mb-5">
      <div className="w-3 h-3 rounded-full bg-blue-400"></div>

      <span className="uppercase tracking-[0.25em] text-sm text-blue-200">
        Invitación especial
      </span>
    </div>

    <p className="text-gray-300 text-lg leading-relaxed">
      Con mucha emoción quiero invitarte a celebrar conmigo
      mi graduación como Ingeniero en Sistemas Computacionales.
      Tu presencia hará este momento aún más especial 
    </p>

  </div>

</div>

             <div className="mt-10 flex justify-center">

  <a
    href="https://wa.me/529531612218"
    target="_blank"
    className="group relative overflow-hidden flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:scale-105 transition-all duration-300"
  >

    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all"></div>

    <Users size={22} />

    <span className="relative z-10">
      Confirmar asistencia
    </span>

  </a>

</div>



              
            </div>
          </div>


          <div className="mt-14 w-full max-w-6xl">

  <div className="rounded-[40px] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl">

    {/* Header */}
    <div className="p-8 border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

      <div>

        <div className="uppercase tracking-[0.35em] text-sm text-cyan-300">
          Ubicación
        </div>

        <h2 className="mt-3 text-3xl md:text-5xl font-black text-white">
          Lugar del Evento
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl text-lg">
          La ceremonia se llevará a cabo en las siguientes instalaciones.
        </p>

      </div>

      <a
        href="https://maps.google.com/?q=17.300285,-97.669212"
        target="_blank"
        className="flex items-center justify-center gap-3 bg-cyan-400 hover:scale-105 transition-all text-black font-bold px-8 py-5 rounded-2xl shadow-2xl"
      >
        <MapPin size={22} />

        Abrir en Google Maps
      </a>

    </div>

    {/* MAPA */}
    <div className="relative h-[450px]">

      <iframe
        src="https://maps.google.com/maps?q=17.300285,-97.669212&z=16&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        className="border-0"
      ></iframe>

      {/* Glow */}
      <div className="absolute inset-0 ring-1 ring-cyan-400/10 pointer-events-none"></div>

    </div>

  </div>
</div>

          {/* INFO */}
          <div className="grid md:grid-cols-4 gap-6 p-8 md:p-10 bg-black/50">

            <InfoCard
              icon={<Calendar className="text-fuchsia-400 mb-4" size={35} />}
              title="Fecha"
              text="26 Junio 2026"
            />

            <InfoCard
              icon={<Clock3 className="text-cyan-400 mb-4" size={35} />}
              title="Hora"
              text="03:00 PM"
            />

            <InfoCard
              icon={<GraduationCap className="text-yellow-400 mb-4" size={35} />}
              title="Carrera"
              text="Ingeniería en Sistemas"
            />

            <InfoCard
              icon={<Music2 className="text-pink-400 mb-4" size={35} />}
              title="Universidad"
              text="Tecnologico de Tlaxiaco"
            />

          </div>
        </div>

        {/* FRASE */}
       <div className="mt-20 w-full max-w-5xl relative">

  {/* Glow */}
  <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-[50px]"></div>

  <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/40 backdrop-blur-3xl p-10 md:p-16 shadow-2xl">

    {/* Línea superior */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>

    {/* Mini texto */}
    <div className="text-center">

      <span className="uppercase tracking-[0.45em] text-sm text-cyan-300">
        Ingeniería en Sistemas
      </span>

    </div>

    {/* Frase principal */}
    <h2 className="mt-10 text-center text-4xl md:text-6xl font-black leading-tight text-white">

      Años de esfuerzo.
      <br />

      <span className="bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text">
        Un solo momento.
      </span>

    </h2>

    {/* Línea */}
    <div className="flex justify-center mt-10">

      <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

    </div>

    {/* Texto inferior */}
    <div className="mt-12 grid md:grid-cols-2 gap-6">

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

        <div className="text-cyan-300 uppercase tracking-[0.35em] text-sm mb-5">
          Disciplina
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          Cada proyecto, cada desvelo y cada reto
          formaron parte del camino.
        </p>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

        <div className="text-blue-300 uppercase tracking-[0.35em] text-sm mb-5">
          Nuevo comienzo
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          Hoy termina una etapa.
          Mañana comienza algo más grande.
        </p>

      </div>

    </div>

  </div>
</div>
        {/* COUNTDOWN */}
        <div className="mt-14 w-full max-w-6xl rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-10 shadow-2xl">

          <div className="flex items-center gap-3 mb-10">
            <Sparkles className="text-fuchsia-400" />
            <h2 className="text-4xl font-black">
              Cuenta Regresiva
            </h2>
          </div>

          <Countdown />

        </div>

        {/* EVENTO */}
        <div className="mt-14 w-full max-w-6xl grid md:grid-cols-2 gap-8">

          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 backdrop-blur-3xl p-10 shadow-2xl">

            <h2 className="text-5xl font-black leading-tight">
              Sobre el Evento 
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Prepárate para vivir una tarde inolvidable llena de emociones,
              recuerdos y mucha celebración junto a familiares,
              amigos y personas importantes que formaron parte de esta increíble etapa.
            </p>

            <div className="mt-10 space-y-5 text-lg text-gray-200">

              <div className="flex items-center gap-4">
                <GraduationCap className="text-fuchsia-400" />
                Ceremonia de graduación
              </div>

        

              <div className="flex items-center gap-4">
                <PartyPopper className="text-pink-400" />
                Celebración y convivencia
              </div>

              <div className="flex items-center gap-4">
                <Heart className="text-red-400" />
                Momentos inolvidables
              </div>

            </div>

            {/* Agenda */}
            <div className="mt-10 border-t border-white/10 pt-8">

              <h3 className="text-2xl font-bold mb-5">
                Agenda del Evento
              </h3>

              <div className="space-y-4 text-gray-300">

                <div className="flex justify-between">
                  <span>🎓 Ceremonia</span>
                  <span>11:00 AM</span>
                </div>


                <div className="flex justify-between">
                  <span>🎉 Celebración</span>
                  <span>3:00 PM</span>
                </div>

              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            action="https://formsubmit.co/Developer.SR.IRP@gmail.com"
            method="POST"
            className="rounded-[40px] border border-white/10 bg-black/40 backdrop-blur-3xl p-10 shadow-2xl space-y-5"
          >

            <h2 className="text-4xl font-black mb-5">
              Confirma tu asistencia 
            </h2>

            <p className="text-gray-400 mb-6">
              Tu presencia será muy importante para mí 
            </p>

            <input
              name="nombre"
              type="text"
              placeholder="Tu nombre"
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-fuchsia-400 text-lg"
            />

            <input
              name="correo"
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 text-lg"
            />

            <input
              name="acompanantes"
              type="number"
              placeholder="Número de acompañantes"
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-pink-400 text-lg"
            />

            <textarea
              name="mensaje"
              rows={4}
              placeholder="Escribe un mensaje especial "
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-yellow-400 text-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-[1.02] transition-all py-5 rounded-2xl text-black font-black text-xl shadow-2xl"
            >
              Confirmar Asistencia 
            </button>

          </form>
        </div>

        {/* FOOTER */}
       <div className="mt-24 w-full max-w-5xl relative">

  {/* Glow */}
  <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-[50px]"></div>

  <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/40 backdrop-blur-3xl p-10 md:p-14 shadow-2xl text-center">

    {/* Línea superior */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>

    {/* Texto pequeño */}
    <div className="uppercase tracking-[0.45em] text-sm text-cyan-300">

      Ingeniería en Sistemas Computacionales

    </div>

    {/* Nombre */}
    <h2 className="mt-8 text-4xl md:text-6xl font-black tracking-tight text-white">

      ISAI REYES PEÑA

    </h2>

    {/* Línea */}
    <div className="flex justify-center mt-8">

      <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

    </div>

    {/* Frase */}
    <p className="mt-10 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">

      Gracias por formar parte
      de este momento.

    </p>

    {/* Extra */}
    <div className="mt-10 flex justify-center items-center gap-4 text-gray-500 text-sm tracking-[0.3em] uppercase">

      <span>Graduación 2026</span>

      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>

    

    </div>

  </div>
</div>
      </div>
    </div>
  );
}

/* CARD */
function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-105 transition-all shadow-xl">

      {icon}

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="text-gray-300 mt-2 text-lg">
        {text}
      </p>

    </div>
  );
}

/* COUNTDOWN */
function Countdown() {

  const calculateTimeLeft = () => {

    const eventDate = new Date("2026-06-26T16:00:00").getTime();

    const now = new Date().getTime();

    const difference = eventDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),

      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      ),

      minutes: Math.floor(
        (difference % (1000 * 60 * 60)) /
          (1000 * 60)
      ),

      seconds: Math.floor(
        (difference % (1000 * 60)) / 1000
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  if (!timeLeft) {
    return (
      <div className="text-center py-10 text-5xl font-black bg-gradient-to-r from-fuchsia-400 to-cyan-300 text-transparent bg-clip-text animate-pulse">
        EL EVENTO COMENZÓ 
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

      {[
        [timeLeft.days, "Días"],
        [timeLeft.hours, "Horas"],
        [timeLeft.minutes, "Minutos"],
        [timeLeft.seconds, "Segundos"],
      ].map(([num, label]) => (

        <div
          key={String(label)}
          className="rounded-3xl border border-white/10 bg-black/40 p-8 text-center shadow-xl hover:scale-105 transition-all"
        >

          <div className="text-5xl font-black bg-gradient-to-r from-fuchsia-400 to-cyan-300 text-transparent bg-clip-text">
            {String(num).padStart(2, "0")}
          </div>

          <div className="mt-3 text-gray-300 text-lg">
            {label}
          </div>

        </div>
      ))}
    </div>
  );
}