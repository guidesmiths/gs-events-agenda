const eventTypes = {
  online: 'Online',
  face2face: 'Presencial'
}

const data = {
  title: 'Agenda',
  eventType: eventTypes.online,
  date: '11 Diciembre 2020',
  description: 'Guidesmeetups - El evento online de GuideSmiths 👉',
  meetupLink: 'https://guidesmeetups01.eventbrite.es/',
  eventLink: 'https://www.twitch.tv/guidesmiths',
  startTime: '18:30',
  endTime: '20:00',
  isTimezoneSelectorEnabled: false,
  tracks: [
    {
      name: 'Track #01',
      content: [
        {
          title: '💃 Bienvenida',
          description: [
            'Os damos la bienvenida a nuestro primer evento online 👶. Nos estrenamos en twitch para abrirnos a la comunidad y compartir buenos momentos.'
          ],
          startTime: { h: '18', m: '30' },
          speakers: [
            {
              name: 'Jorge Baumann',
              bio: [
                'FullStack Engineer at GuideSmiths. Open Source developer at #RambitoJs.'
              ],
              social: {
                twitter: 'https://twitter.com/baumannzone',
                instagram: 'https://instagram.com/baumannzone',
                twitch: 'https://twitch.tv/baumannzone',
                github: 'https://github.com/baumannzone'
                // url: ['1', 2 , 4]
              }
            },
            {
              name: 'Daniel Herrero ⚒️',
              bio: [
                'FullStack Engineer at GuideSmiths. Sometimes racing horse 🐎 sometimes sloth 🦥.'
              ],
              social: {
                linkedin: 'https://www.linkedin.com/in/danielherrerohernando/',
                medium: 'https://medium.com/@danielherrerohernando',
                twitter: 'https://twitter.com/DanielHerreroH1',
                github: 'https://github.com/danielherrerohernando',
                twitch: 'https://twitch.tv/danielherrerohernando'
              }
            }
          ]
        },
        {
          title: 'JS Pill: 3 ways to dedupe an array',
          description: [
            'Píldoras de JavaScript en 5 minutos. Un concepto explicado de forma simple y sencillo.',
            'En esta ocasión vamos a ver *3 formas de deduplicar un array*. Os voy a contar rápidamente cómo podemos eliminar los duplicados que podemos encontrar en un array usando Javascript-'
          ],
          startTime: { h: '18', m: '40' },
          tags: ['⛓ JavaScript', '💊 Pill', '⚽️ Bético'],
          speakers: [
            {
              name: 'Carlos Jiménez',
              bio: [
                'Team Lead en GuideSmiths. Part-time Backend (ex FullStack) Engineer. Trabajé <em>contando</em> votos. 100% Bético.'
              ],
              social: {
                twitter: 'https://twitter.com/betisman',
                github: 'https://github.com/betisman',
                linkedin: 'https://www.linkedin.com/in/josecarlosjimenezgomez/',
                twitch: 'https://www.twitch.tv/betisman',
                instagram: 'https://www.instagram.com/betisman/'
              }
            }
          ]
        },
        {
          title: 'FrontEnd y Microservicios',
          description: [
            'En esta charla, os comparto mi experiencia desarrollando el frontend de una app que usa una arquitectura de microservicios. ' +
            'Consiguiendo que los frontend developers puedan centrarse en lo que mejor saben hacer, crear experiencias de usuario increíbles.'
          ],
          startTime: { h: '18', m: '45' },
          tags: [':cypress: Cypress', '💻 Desarrollo', ':heavy_check_mark: testing'],
          speakers: [
            {
              name: 'Kevin Martínez',
              bio: [
                'Desarrollador Javascript en Guidesmiths. Apasionado del desarrollo web y el aprendizaje continuo. Suelo hablar sobre testing con Javascript y Cypress, me encanta dar formaciones y acudir a eventos para conocer lo mejor de la comunidad y seguir aprendiendo.'
              ],
              social: {
                twitter: 'https://twitter.com/kjmesc',
                github: 'https://github.com/kevinccbsg',
                linkedin: 'https://www.linkedin.com/in/kevinjmartinez/',
                twitcha: 'https://www.twitch.tv/kajota_dev'
              }
            }
          ]
        },
        {
          title: '🙏 Las preguntas de Dios',
          description: [
            'Minijuego Online - Juego en el que, si participas, competirás con los demás espectadores del evento. Los 3 más rápidos subiran al podio.'
          ],
          startTime: { h: '19', m: '05' },
          tags: ['💻 Desarrollo', '👾 Minijuego', '🤔 Preguntas'],
          speakers: [
            {
              name: 'Clara Dios',
              bio: [
                'Developer at GuideSmiths'
              ],
              social: {
                twitter: 'https://twitter.com/claradios',
                twitch: 'https://twitch.tv/claradios',
                instagram: 'https://instagram.com/c.diosss',
                github: 'https://github.com/claradios'
              }
            }
          ]
        },
        {
          title: 'Node.js for GIS: from google locations to GeoJSON using Streams',
          description: [
            'Dealing with huge files has always been a challenging task to take care of. The memory consumption that this kind of processing requires is something to take into account independently from the language we are using and Node.js is no exception.',
            'Let\'s see how node\'s streams can make this task bearable even for a process with minimal memory availability. Specifically we\'ll take advantage of streams in order to run a process that converts a Google Takeout Location History JSON into a GeoJSON.'
          ],
          startTime: { h: '19', m: '20' },
          tags: ['💻 Desarrollo', '📍 GIS', '💦 Streams'],
          speakers: [
            {
              name: 'Matteo Di Paolantonio',
              bio: [
                'Team Lead · Software Engineer at GuideSmiths.'
              ],
              social: {
                linkedin: 'https://es.linkedin.com/in/matteo-di-paolantonio-85b433122',
                github: 'https://github.com/MatteoDiPaolo'
              }
            }
          ]
        },
        {
          title: '🥫 Salsa · Punto y coma en JavaScript: ¿Sí o no?',
          description: [
            'Debate moderado por Laura Corbí. Queremos que nos cuentes tu versión... ¿estás a favor o en contra del uso del punto y coma en JavaScript?'
          ],
          startTime: { h: '19', m: '40' },
          endTime: { h: '20', m: '00' },
          tags: ['🥫 Salseo', '🗣 Debate', '⛓ JavaScript'],
          speakers: [
            {
              name: 'Laura Corbí',
              bio: [
                'Software developer, philosophy student, psychologist, and some other random things 👀. Modera Salsa 🥫.'
              ],
              social: {
                twitter: 'https://twitter.com/dusty_trinkets',
                github: 'https://github.com/dustytrinkets',
                medium: 'https://medium.com/@lauracorbi',
                linkedin: 'https://www.linkedin.com/in/lauracorbi/'
              }
            },
            {
              name: 'Dailos R. Díaz Lara',
              bio: [
                '👨🏻‍💻 #JavaScript / #TypeScript Developer. 🇮🇨 @canariasjs co-founder and #JSDayCanarias co-organizer. 💻 #NodeJS, #React, #Jest, GraphQL.',
                'Le encanta el <mark>;</mark> en JavaScript;'
              ],
              social: {
                twitter: 'https://twitter.com/ddialar'
                // twitch: 'https://twitch.tv/gndxdev',
                // instagram: 'https://instagram.com/gndx',
                // github: 'https://github.com/gndx'
              }
            }
          ]
        }
      ]
    }
  ],
  sponsors: [
    {
      name: 'GuideSmiths',
      link: 'https://www.guidesmiths.com/',
      img: 'gs.png'
    }
  ]
}

export default data
