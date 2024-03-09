import './App.css';
import {Testimonio1, Testimonio2, Testimonio3, Testimonio4, Testimonio5} from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los estudiantes de CEUTEC:</h1>
        <Testimonio1
          imagen='testimonio-emma.png'
          nombre='Emma Bostian'
          pais='Suecia'
          cargo='Ingeniera de software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />

<Testimonio2
          imagen='testimonio-sarah.png'
          nombre='Sarah Pattaky'
          pais='Canada'
          cargo='Ingeniera de software'
          empresa='Rockstar Games'
          testimonio='Hola, soy Sarah Pattaky y quiero compartir mi viaje aprendiendo Python. Comencé desde cero, enfrentando desafíos pero motivada por la versatilidad del lenguaje. Investigué en línea, trabajé en proyectos prácticos y me uní a comunidades de programadores. Cada pequeño logro, desde el primer Hola Mundo hasta mis primeros scripts, me impulsó. Ahora, tras meses de dedicación, estoy cómoda con Python, trabajando en proyectos personales y colaborando en código abierto. Aprender a programar ha sido gratificante, abriéndome puertas a un mundo de posibilidades y dándome la confianza para enfrentar desafíos técnicos con valentía.' />

<Testimonio3
          imagen='testimonio-shawn.png'
          nombre='Shawn Bosniak'
          pais='Corea del Norte'
          cargo='Ingeniero de software'
          empresa='Activision'
          testimonio='Hola a todos, soy Shawn Bosniak y quiero compartir mi experiencia aprendiendo Java. Al principio, todo parecía abrumador, pero la versatilidad de Java me motivó. Investigué en línea, me sumergí en tutoriales y proyectos prácticos. Cada pequeño avance, desde mi primer programa hasta proyectos más complejos, fue gratificante. Unirme a grupos de estudio y eventos de programación me ayudó a crecer. Ahora, tras meses de dedicación, estoy cómodo con Java, trabajando en proyectos personales y colaborando con otros programadores. Aprender un lenguaje de programación me ha dado confianza y nuevas oportunidades.' />

<Testimonio4
          imagen='testimonio-arthur.png'
          nombre='Arthur Chacon'
          pais='Noruega'
          cargo='Ingeniera de software'
          empresa='Insomniac Games'
          testimonio='Hola, soy Arthur Chacón y aprendí JavaScript. Al principio fue desafiante, pero su versatilidad me atrajo. Investigué en línea, trabajé en proyectos y me uní a comunidades. Cada logro, desde scripts hasta aplicaciones, fue gratificante. Ahora, cómodo con JavaScript, desarrollo aplicaciones y contribuyo en proyectos.' />

<Testimonio5
          imagen='testimonio-ashley.png'
          nombre='Ashley Summers'
          pais='Estados Unidos'
          cargo='Ingeniera de software'
          empresa='Epic Games'
          testimonio='Hola a todos, soy Ashley Summers y quiero contarles sobre mi experiencia aprendiendo C++. Al principio fue un desafío, pero la potencia de C++ me motivó. Investigué en línea, trabajé en proyectos prácticos y me uní a comunidades de programadores. Cada pequeño avance, desde mis primeras líneas de código hasta programas más complejos, fue emocionante. Unirme a grupos de estudio y eventos me ayudó a crecer. Ahora, tras meses de dedicación, me siento cómoda con C++, desarrollando aplicaciones y participando en desafíos de programación. Aprender este lenguaje ha sido gratificante y me ha dado nuevas oportunidades.' />
      </div>
    </div>
  );
}

export default App;
