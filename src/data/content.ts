// All site copy lives here, in French (default) and English.
// Edit this file to update the portfolio; the pages render from it.

export type Lang = 'fr' | 'en';

export const profile = {
  name: 'Rayen Faleh',
  email: 'ryan.elfaleh@gmail.com',
  location: 'Nabeul, Tunisie',
  linkedin: 'https://www.linkedin.com/in/rayen-el-faleh-665a3a1bb',
  github: 'https://github.com/rayenelfaleh',
  cv: 'CV_Rayen_Faleh.pdf',
};

const fr = {
  meta: {
    title: 'Rayen Faleh — Cybersécurité offensive & défensive',
    description:
      "Portfolio de Rayen Faleh, étudiant en Master Cybersécurité. Pentest, Active Directory, SOC/SIEM (Wazuh, Sysmon). À la recherche d'un stage PFE de 6 mois dès février 2027.",
  },
  nav: { about: 'Profil', skills: 'Compétences', projects: 'Projets', experience: 'Parcours', contact: 'Contact' },
  switchLabel: 'EN',
  switchHref: '',
  hero: {
    status: 'Disponible pour un stage PFE · 6 mois · février 2027',
    role: 'Étudiant en Master Cybersécurité',
    tagline:
      'Je casse des systèmes en laboratoire pour apprendre à mieux les défendre : tests d’intrusion, Active Directory et détection côté SOC.',
    ctaContact: 'Me contacter',
    ctaCv: 'Télécharger le CV',
    stats: [
      { value: '15', label: 'rooms TryHackMe & HackTheBox' },
      { value: 'T1210', label: 'détection mappée MITRE ATT&CK' },
      { value: 'MS17-010', label: 'chaîne EternalBlue de bout en bout' },
    ],
  },
  about: {
    title: 'Profil',
    body: [
      'Étudiant en Master cybersécurité à la Faculté Leaders Nabeul, titulaire d’une Licence en sciences de l’informatique de la Faculté des Sciences de Tunis.',
      'Je pratique intensivement le pentest et les opérations défensives (SOC/SIEM) dans mon home lab ainsi que sur TryHackMe et HackTheBox. Je recherche un stage de fin d’études de 6 mois à partir de février 2027, sur un périmètre offensif comme défensif.',
    ],
    facts: [
      { k: 'Localisation', v: 'Nabeul, Tunisie' },
      { k: 'Disponibilité', v: 'Février 2027' },
      { k: 'Durée', v: 'Stage PFE · 6 mois' },
      { k: 'Langues', v: 'Arabe · Français · Anglais' },
    ],
  },
  skills: {
    title: 'Compétences techniques',
    groups: [
      {
        name: 'Sécurité offensive',
        icon: 'target',
        items: ['Tests d’intrusion', 'nmap', 'Énumération SMB', 'Metasploit', 'EternalBlue / MS17-010', 'PrivEsc Linux & Windows', 'SUID & capabilities', 'Détournement de PATH'],
      },
      {
        name: 'Exploitation web',
        icon: 'globe',
        items: ['LFI / RFI', 'Injection SQL', 'Injection de commandes', 'Upload non filtré', 'Gobuster', 'Burp Suite', 'John', 'Hydra'],
      },
      {
        name: 'Active Directory',
        icon: 'network',
        items: ['Kerbrute', 'AS-REP roasting', 'DCSync', 'Pass-the-hash', 'Impacket', 'evil-winrm', 'Reverse shells', 'Pivoting SSH'],
      },
      {
        name: 'Défense / SOC',
        icon: 'shield',
        items: ['SIEM', 'Wazuh', 'Sysmon', 'MITRE ATT&CK', 'Corrélation détection', 'Rapports de pentest'],
      },
      {
        name: 'Environnements & outils',
        icon: 'terminal',
        items: ['Python', 'Bash', 'Kali Linux', 'Windows Server', 'Docker', 'VMware / VirtualBox', 'ESXi', 'Sophos · VPN SSL', 'Obsidian', 'AWS Cloud Quest'],
      },
    ],
  },
  projects: {
    title: 'Projets & laboratoires',
    items: [
      {
        title: 'Laboratoire de tests d’intrusion & détection',
        year: '2026',
        kind: 'Home lab',
        featured: true,
        points: [
          'Environnement virtualisé sous ESXi : Kali Linux, Windows Server 2025, pare-feu Sophos avec VPN SSL.',
          'Chaîne d’exploitation EternalBlue (MS17-010) menée de bout en bout sur une cible Windows 7, avec rédaction d’un rapport de pentest formel.',
          'Mise en correspondance des exercices offensifs avec des règles de détection Wazuh/Sysmon (MITRE ATT&CK T1210).',
        ],
        tags: ['ESXi', 'Kali', 'Sophos', 'Metasploit', 'Wazuh', 'Sysmon', 'ATT&CK'],
      },
      {
        title: 'Write-ups CTF',
        year: 'En continu',
        kind: 'GitHub',
        link: 'https://github.com/rayenelfaleh',
        linkLabel: 'Voir sur GitHub',
        points: [
          'Portfolio de write-ups publié sur GitHub, documenté via un flux de travail Obsidian → GitHub.',
          '15 rooms TryHackMe et HackTheBox (Easy et Medium), dont un environnement Active Directory complet.',
        ],
        tags: ['TryHackMe', 'HackTheBox', 'Active Directory', 'Obsidian'],
      },
      {
        title: 'Smart Recycling Tunisie',
        year: '2025',
        kind: 'Data science',
        points: [
          'Démarche CRISP-DM : prévision Holt-Winters, Random Forest et segmentation K-Means.',
          'Conteneurisation Docker d’une application Next.js 15.',
        ],
        tags: ['CRISP-DM', 'Random Forest', 'K-Means', 'Docker', 'Next.js'],
      },
    ],
  },
  experience: {
    title: 'Parcours',
    workTitle: 'Expérience professionnelle',
    eduTitle: 'Formation',
    work: [
      {
        role: 'Monteur vidéo & assistant technique',
        org: 'Almourabi E-learning',
        period: 'Avr. 2026 – sept. 2026',
        points: [
          'Montage de 10 à 18 vidéos pédagogiques par jour, jusqu’à 22 en période de pic, sous Camtasia et CapCut, de la récupération des enregistrements Zoom à la publication sur la plateforme.',
          'Assistance aux formateurs sur site : préparation du matériel (PC, tablettes) et résolution des incidents pendant les cours.',
        ],
      },
      {
        role: 'Stage de Projet de Fin d’Études (PFE)',
        org: 'Tunisie Telecom, Nabeul',
        period: '2025',
        points: [
          'Développement d’une application web de gestion d’assurance maladie.',
          'Mise en place de l’authentification et du contrôle d’accès.',
          'Sécurisation des formulaires et des données utilisateurs ; gestion des sessions et des mots de passe, selon les bonnes pratiques de développement sécurisé.',
        ],
      },
    ],
    education: [
      { degree: 'Master en Informatique — Spécialisation Cybersécurité', school: 'Faculté Leaders Nabeul', period: '2025 – 2027', note: 'En cours' },
      { degree: 'Licence en Sciences de l’Informatique', school: 'Faculté des Sciences de Tunis', period: '2021 – 2025' },
    ],
    languagesTitle: 'Langues',
    languages: [
      { name: 'Arabe', level: 'Langue maternelle', pct: 100 },
      { name: 'Français', level: 'Courant (écrit et oral)', pct: 90 },
      { name: 'Anglais', level: 'Courant à l’écrit, bonnes bases à l’oral', pct: 75 },
    ],
  },
  contact: {
    title: 'Travaillons ensemble',
    body: 'Vous recrutez un stagiaire PFE en cybersécurité pour février 2027, côté red team, blue team ou les deux ? Écrivez-moi.',
    email: 'Envoyer un e-mail',
  },
  footer: 'Conçu avec Astro.',
};

type Content = typeof fr;

const en: Content = {
  meta: {
    title: 'Rayen Faleh — Offensive & Defensive Security',
    description:
      'Portfolio of Rayen Faleh, cybersecurity master’s student. Pentesting, Active Directory, SOC/SIEM (Wazuh, Sysmon). Looking for a 6-month final-year internship starting February 2027.',
  },
  nav: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Background', contact: 'Contact' },
  switchLabel: 'FR',
  switchHref: 'fr/',
  hero: {
    status: 'Open to a final-year internship · 6 months · Feb 2027',
    role: 'Cybersecurity Master’s Student',
    tagline:
      'I break systems in the lab to learn how to defend them better: penetration testing, Active Directory and SOC-side detection.',
    ctaContact: 'Get in touch',
    ctaCv: 'Download CV (FR)',
    stats: [
      { value: '15', label: 'TryHackMe & HackTheBox rooms' },
      { value: 'T1210', label: 'detection mapped to MITRE ATT&CK' },
      { value: 'MS17-010', label: 'end-to-end EternalBlue chain' },
    ],
  },
  about: {
    title: 'About',
    body: [
      'Master’s student in cybersecurity at Faculté Leaders Nabeul, with a Bachelor’s in Computer Science from the Faculty of Sciences of Tunis.',
      'I practice pentesting and defensive operations (SOC/SIEM) intensively in my home lab and on TryHackMe and HackTheBox. I’m looking for a 6-month final-year internship starting February 2027, on offensive or defensive scope.',
    ],
    facts: [
      { k: 'Location', v: 'Nabeul, Tunisia' },
      { k: 'Available', v: 'February 2027' },
      { k: 'Length', v: 'Internship · 6 months' },
      { k: 'Languages', v: 'Arabic · French · English' },
    ],
  },
  skills: {
    title: 'Technical skills',
    groups: [
      {
        name: 'Offensive security',
        icon: 'target',
        items: ['Penetration testing', 'nmap', 'SMB enumeration', 'Metasploit', 'EternalBlue / MS17-010', 'Linux & Windows PrivEsc', 'SUID & capabilities', 'PATH hijacking'],
      },
      {
        name: 'Web exploitation',
        icon: 'globe',
        items: ['LFI / RFI', 'SQL injection', 'Command injection', 'Unrestricted upload', 'Gobuster', 'Burp Suite', 'John', 'Hydra'],
      },
      {
        name: 'Active Directory',
        icon: 'network',
        items: ['Kerbrute', 'AS-REP roasting', 'DCSync', 'Pass-the-hash', 'Impacket', 'evil-winrm', 'Reverse shells', 'SSH pivoting'],
      },
      {
        name: 'Defense / SOC',
        icon: 'shield',
        items: ['SIEM', 'Wazuh', 'Sysmon', 'MITRE ATT&CK', 'Detection correlation', 'Pentest reporting'],
      },
      {
        name: 'Environments & tools',
        icon: 'terminal',
        items: ['Python', 'Bash', 'Kali Linux', 'Windows Server', 'Docker', 'VMware / VirtualBox', 'ESXi', 'Sophos · SSL VPN', 'Obsidian', 'AWS Cloud Quest'],
      },
    ],
  },
  projects: {
    title: 'Projects & labs',
    items: [
      {
        title: 'Penetration testing & detection lab',
        year: '2026',
        kind: 'Home lab',
        featured: true,
        points: [
          'Virtualized environment on ESXi: Kali Linux, Windows Server 2025, Sophos firewall with SSL VPN.',
          'End-to-end EternalBlue (MS17-010) exploitation chain against a Windows 7 target, written up as a formal pentest report.',
          'Mapped the offensive exercises to Wazuh/Sysmon detection rules (MITRE ATT&CK T1210).',
        ],
        tags: ['ESXi', 'Kali', 'Sophos', 'Metasploit', 'Wazuh', 'Sysmon', 'ATT&CK'],
      },
      {
        title: 'CTF write-ups',
        year: 'Ongoing',
        kind: 'GitHub',
        link: 'https://github.com/rayenelfaleh',
        linkLabel: 'View on GitHub',
        points: [
          'Write-up portfolio published on GitHub, documented through an Obsidian → GitHub workflow.',
          '15 TryHackMe and HackTheBox rooms (Easy and Medium), including a full Active Directory environment.',
        ],
        tags: ['TryHackMe', 'HackTheBox', 'Active Directory', 'Obsidian'],
      },
      {
        title: 'Smart Recycling Tunisia',
        year: '2025',
        kind: 'Data science',
        points: [
          'CRISP-DM approach: Holt-Winters forecasting, Random Forest and K-Means segmentation.',
          'Containerized a Next.js 15 application with Docker.',
        ],
        tags: ['CRISP-DM', 'Random Forest', 'K-Means', 'Docker', 'Next.js'],
      },
    ],
  },
  experience: {
    title: 'Background',
    workTitle: 'Experience',
    eduTitle: 'Education',
    work: [
      {
        role: 'Video editor & technical assistant',
        org: 'Almourabi E-learning',
        period: 'Apr 2026 – Sep 2026',
        points: [
          'Edited 10 to 18 educational videos a day, up to 22 at peak, in Camtasia and CapCut, from pulling Zoom recordings to publishing on the e-learning platform.',
          'Supported trainers on site: prepared equipment (PCs, tablets) and resolved incidents during classes.',
        ],
      },
      {
        role: 'Final-year internship (PFE)',
        org: 'Tunisie Telecom, Nabeul',
        period: '2025',
        points: [
          'Built a web application for health insurance management.',
          'Implemented authentication and access control.',
          'Secured forms and user data; handled sessions and passwords following secure development practices.',
        ],
      },
    ],
    education: [
      { degree: 'Master’s in Computer Science — Cybersecurity', school: 'Faculté Leaders Nabeul', period: '2025 – 2027', note: 'In progress' },
      { degree: 'Bachelor’s in Computer Science', school: 'Faculty of Sciences of Tunis', period: '2021 – 2025' },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Arabic', level: 'Native', pct: 100 },
      { name: 'French', level: 'Fluent (written and spoken)', pct: 90 },
      { name: 'English', level: 'Fluent in writing, good spoken basics', pct: 75 },
    ],
  },
  contact: {
    title: 'Let’s work together',
    body: 'Hiring a cybersecurity intern for February 2027, red team, blue team or both? Drop me a line.',
    email: 'Send an email',
  },
  footer: 'Built with Astro.',
};

export const content: Record<Lang, Content> = { fr, en };
