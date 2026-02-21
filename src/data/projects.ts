import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Flowbridge Integration',
    description: 'Simpelt system som foreviser integrationen mellem to ordresystemer.',
    detailedDescription: 'Systemet simulerer en komplet ordre‑pipeline. Order Hub genererer tilfældige ordrer via JavaFaker, og sender dem som events på en RabbitMQ‑kø. Flow Bridge lytter på køen, transformerer ordrerne først til vores Canonical Data Model (CDM) og derefter til FulfillmentX format. Hvert produkt har et særligt ID i hhv. Order Hub og FulfillmentX. Disse mappes via. et mapping table i en PostgreSQL database, som knytter de to tilsvarende IDer sammen. Når ordren er klar, sendes den via HTTP til FulfillmentX. Undervejs publicerer Flow Bridge status‑events (fx ORDER_CREATED, CDM_READY, COMPLETE) til en separat monitoring‑kø. Flow Monitor lytter på denne kø og sender live status‑updates til en webklient via WebSocket. Al intern kommunikation er asynkron via RabbitMQ, bortset fra det sidste synkrone HTTP‑kald til FulfillmentX.',
    technologies: ['Java', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'WebSocket'],
    features: [
      'Event-drevet arkitektur med RabbitMQ message queues',
      'Canonical Data Model (CDM) for system-agnostisk data transformation',
      'Produkt ID mapping mellem forskellige systemer via PostgreSQL',
      'Real-time status monitoring med WebSocket broadcasting',
      'Asynkron ordre-processering med status-tracking'
    ],
    color: '#00d4ff',
    githubUrl: 'https://github.com/LasseMG/FlowBridge-Integration',
    highlights: [
      {
        name: 'Order Hub',
        description: 'Genererer tilfældige ordrer med JavaFaker og publicerer dem som events til RabbitMQ-køen'
      },
      {
        name: 'Flow Bridge',
        description: 'Event-drevet transformation service der konverterer ordrer til CDM-format og derefter til FulfillmentX-format. Håndterer også produkt ID mapping'
      },
      {
        name: 'FulfillmentX',
        description: 'Target system der modtager og gemmer transformerede ordrer via HTTP API'
      },
      {
        name: 'Flow Monitor',
        description: 'Overvågningsservice der tracker ordre-flow status og broadcaster real-time updates til webklienter via WebSocket'
      }
    ]
  },
  {
    id: "kuncontemporary-gallery",
    title: "KunContemporary Galleri",
    description: "Studieprojekt omhandlende en moderne kunstgalleri-hjemmeside med content management system",
    detailedDescription: "Et studieprojekt på 4. semester af datamatikeruddannelsen, hvor vi udviklede en hjemmeside til styring og fremvisning af samtidkunst og udstillinger. Platformen omfatter et sikkert adminpanel til galleristyring og en offentlig brugerflade, hvor besøgende kan udforske udstillinger, kunstnere og tilgængelige kunstværker. Systemet inkluderer avanceret billedhåndtering med automatisk skalering og PDF-generering af arbejdslister til udstillinger for at lette arbejdsprocesser.",
    githubUrl: "https://github.com/LasseMG/KunContemporary",
    imageUrl: undefined,
    thumbnail: undefined,
    technologies: [
      "Vue.js 3",
      "TypeScript",
      ".NET 9.0",
      "ASP.NET Core",
      "PostgreSQL",
      "Entity Framework Core",
      "MinIO",
      "Vite",
      "Vue Router",
      "JWT",
      "Axios",
      "QuestPDF",
      "xUnit",
      "Reqnroll"
    ],
    features: [
      "Styring af kunstværker, udstillinger og kunstnerprofilers indhold",
      "Organisation af udstillinger og samlinger",
      "Billedbehandling med flere opløsniner og lagring med MinIO blob storage",
      "JWT-baseret auth til admin adgang",
      "PDF-genereringsværktøj til værkslister for en udstilling",
      "Responsiv brugerflade til at fremvise udstillinger, værker og kunstnere",
      "Admin dashboard med fuld CRUD-funktionalitet for alle førnævnte entiteter"
    ],
    color: "#3cff94ff",
    highlights: [
      {
        name: "Full Stack projekt",
        description: "Design og implementering af komplet webapplikation med Vue.js frontend og .NET backend"
      },
      {
        name: "RESTful API",
        description: "Udvikling af skalerbar API-arkitektur med repository pattern og dependency injection"
      },
      {
        name: "Database",
        description: "Oprettelse af relationel databaseskema med Entity Framework Core og PostgreSQL"
      },
      {
        name: "Billedbehandling",
        description: "Implementering af multi-opløsnings billedprocessering med MinIO storage mhp. hjemmesidens performance"
      },
      {
        name: "Autentifikation & Sikkerhed",
        description: "JWT-baseret autentifikationssystem med BCrypt password hashing og RBAC"
      },
      {
        name: "PDF Generering",
        description: "Udvikling af dynamisk PDF-generering til værklister med QuestPDF"
      },
    ]
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio website / Coolify',
    description: 'Moderne portfolio-website med automatiseret deployment via Coolify',
    detailedDescription: 'Dette projekt er en Vue.js frontend deployed via Coolify - en open source, self-hostable Platform-as-a-Service. Websitet er bygget med Vue 3, TypeScript og PrimeVue med Vite som build tool. Coolify henter koden direkte fra GitHub-repositoryet, bygger Docker-imaget automatisk og deployer applikationen. SSL-certifikater genereres og fornyes automatisk via Let\'s Encrypt.',
    githubUrl: 'https://github.com/LasseMG/portolio-ui',
    technologies: ['Vue.js 3', 'TypeScript', 'Vite', 'PrimeVue', 'Docker', 'Coolify', 'Hetzner Cloud', 'Nginx', 'Let\'s Encrypt'],
    features: [
      'Moderne UI med Vue 3 Composition API og TypeScript',
      'Projekt showcase sider med detaljer og link til GitHub repo',
      'Automatiseret deployment fra GitHub via Coolify',
      'Automatisk SSL-certifikat generering og fornyelse med Let\'s Encrypt',
      'Self-hosted PaaS løsning på Hetzner cloud server',
    ],
    color: '#ff3535ff',
    highlights: [
      {
        name: 'Frontend',
        description: 'Vue 3 med Composition API, TypeScript og PrimeVue component library for et moderne UI'
      },
      {
        name: 'Coolify PaaS',
        description: 'Open source, self-hosted Platform-as-a-Service der håndterer builds, deployments og infrastruktur'
      },
      {
        name: 'GitHub Integration',
        description: 'Automatisk deployment ved push til main branch - Coolify henter kode og bygger Docker image'
      },
      {
        name: 'SSL & Sikkerhed',
        description: 'Automatisk SSL-certifikat generering og fornyelse via Let\'s Encrypt integration i Coolify'
      }
    ]
  },
  {
    id: 'sap-learning',
    title: 'SAP Business Technology Platform',
    description: 'Certificeringer og kurser om SAP BTP, CAP, HANA, Cloud Foundry, Integration Suite og SAP Build',
    detailedDescription: 'Gennem SAP Learning har jeg opnået certificeringer inden for SAP Business Technology Platform og relaterede teknologier. Jeg har gennemført kurser i SAP BTP fundamentals, cloud computing arkitektur, Integration Platform as a Service (iPaaS) og Clean Core principper for SAP S/4HANA Cloud. Derudover har jeg hands-on erfaring med at bygge applikationer i SAP Cloud Application Programming Model (CAP), forbundet til SAP HANA database, deployed til Cloud Foundry og udviklet SAP Fiori brugergrænseflader. Jeg har også gennemført SAP Integration Suite kurset, som dækker API Management, SAP Business Accelerator Hub og Event Mesh. Desuden har jeg gennemført Extend S/4HANA with SAP Build kurset, hvor jeg har bygget extensions med SAP Build og brugt SAP Joule til at generere Fiori applikationer.',
    imageUrl: '/sap-logo.png',
    technologies: ['SAP BTP', 'SAP CAP', 'SAP HANA', 'Cloud Foundry', 'SAP Fiori', 'SAP Integration Suite', 'SAP Build', 'SAP Joule', 'iPaaS', 'SAP Clean Core'],
    features: [
      'SAP Business Technology Platform fundamentals og cloud strategi',
      'Applikationsudvikling med SAP Cloud Application Programming Model (CAP)',
      'Database integration med SAP HANA',
      'Deployment til Cloud Foundry runtime',
      'SAP Fiori UI udvikling',
      'Integration Suite: API Management, Business Accelerator Hub og Event Mesh',
      'S/4HANA extensions med SAP Build og Fiori generering via SAP Joule'
    ],
    color: '#0070f2',
    highlights: [
      {
        name: 'Discovering SAP BTP',
        description: 'Kursus i SAP Business Technology Platform fundamentals - Application Development og Cloud Strategy'
      },
      {
        name: 'Exploring SAP BTP',
        description: 'Kursus i cloud computing arkitektur, Integration Platform as a Service (iPaaS) og analytics'
      },
      {
        name: 'SAP Clean Core',
        description: 'Kursus i Managing Clean Core for SAP S/4HANA Cloud - cloud-compliant extensions og ABAP'
      },
      {
        name: 'CAP App Development',
        description: 'Hands-on erfaring med at bygge full-stack applikation i SAP CAP med HANA database og Fiori UI'
      },
      {
        name: 'Integration Suite',
        description: 'Kursus i SAP Integration Suite - API Management, Business Accelerator Hub og Event Mesh'
      },
      {
        name: 'Extend S/4HANA',
        description: 'Kursus i Extend S/4HANA with SAP Build - bygge extensions og generere Fiori applikationer med SAP Joule'
      }
    ]
  }
]