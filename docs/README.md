# Evolución Fit

PWA móvil, sin dependencias, diseñada para iPhone y para seguir un programa casero de 12 semanas.

## Incluye

- Dashboard diario con progreso de la sesión.
- Fuerza por la mañana y cardio por la noche.
- Rutinas Fuerza A, Fuerza B, core y movilidad.
- Biblioteca de ejercicios con ilustraciones SVG e instrucciones.
- Enlaces a videos de referencia.
- Modo guiado ejercicio por ejercicio.
- Seguimiento de peso, cintura, racha y sesiones.
- Gráfico local de evolución de peso.
- Recordatorios configurables mientras la PWA está activa.
- Instalación en iPhone y funcionamiento offline mediante Service Worker.

## Desarrollo local

```bash
python3 -m http.server 8080
```

Abre `http://localhost:8080`.

## iPhone

Publica el contenido bajo HTTPS (por ejemplo GitHub Pages), abre la URL en Safari y usa **Compartir → Agregar a Inicio → Abrir como app web**.

## Notificaciones

La aplicación guarda horarios y puede mostrar notificaciones mientras tiene oportunidad de ejecutar código. Para notificaciones programadas con la PWA completamente cerrada en iOS hace falta integrar Web Push con un backend.
