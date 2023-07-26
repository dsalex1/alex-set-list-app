export const CURRICULUM_TYPES = ['GS', 'SEKI', 'SEKII'] as const
export const SUBJECT_TYPES = ['GEWI', 'MINT', 'SPRACHEN', 'ÄSTHETIK'] as const

export const MODULE_CONTENT_TYPES = [
  'Unterricht und Hilfsmittel',
  'Fachsprache',
  'Diagnostik',
  'Fördern',
  'Fordern',
] as const

export const COMMON_TAGS = {
  SUSTAINABILITY: 'Bildung für nachhaltige Entwicklung',
  POLITICAL_EDUCATION: 'Politische Bildung',
} as const

export const MEDIA_COMPETENCIES = {
  'M1.1': 'Browsen, Suchen, Filtern',
  'M1.2': 'Auswerten und Bewerten',
  'M1.3': 'Speichern und Abrufen',
  'M2.1': 'Interagieren',
  'M2.2': 'Teilen',
  'M2.3': 'Zusammenarbeiten',
  'M2.4': 'Umgangsregeln kennen und Einhalten',
  'M2.5': 'An der Gesellschaft aktiv teilhaben',
  'M3.1': 'Entwickeln und Produzieren',
  'M3.2': 'Weiterverarbeiten und Integrieren',
  'M3.3': 'Rechtliche Vorgaben beachten',
  'M4.1': 'Sicher in digitalen Umgebungen agieren',
  'M4.2': 'Persönliche Daten und Privatsphäre schützen',
  'M4.3': 'Gesundheit schützen',
  'M4.4': 'Natur und Umwelt schützen',
  'M5.1': 'Technische Probleme lösen',
  'M5.2': 'Werkzeuge bedarfsgerecht einsetzen',
  'M5.3': 'Eigene Defizite ermitteln und nach Lösungen suchen',
  'M5.4': 'Digitale Werkzeuge und Medien zum Lernen',
  'M5.5': 'Arbeiten und Problemlösen nutzen',
  'M5.6': 'Algorithmen erkennen und formulieren',
  'M6.1': 'Medien analysieren und bewerten',
  'M6.2': 'Medien in der digitalen Welt verstehen und reflektieren',
} as const

type HTMLString = string
type COMMON_TAG = keyof typeof COMMON_TAGS
type MEDIA_COMPETENCY_TAG = keyof typeof MEDIA_COMPETENCIES
type CURRICULUM_TYPE = typeof CURRICULUM_TYPES[number]
type SUBJECT_TYPE = typeof SUBJECT_TYPES[number]
type MODULE_CONTENT_TYPE = typeof MODULE_CONTENT_TYPES[number]

export type User = {
  id: string
  name: string
  email: string
} & (
  | {
      role: 'school'
      schoolNumber: string
      contactName: string
      contactPhone: string
      curriculumTypes: CURRICULUM_TYPE[]
    }
  | {
      role: 'admin'
    }
)

type Content =
  | {
      name: string
      children: Content[]
    }
  | {
      name: string
      description: HTMLString
    }

//FIXME: make subject own entity thats referenced
//FIXME: make schoolYear own entity thats referenced
export type Curriculum = {
  id: string
  type: CURRICULUM_TYPE
  subjectType: SUBJECT_TYPE
  subject: string
  category: string
  schoolYear: string
  content: Content[]
}

//FIXME: sharing??
export type Module = {
  id: string
  name: string
  curriculumId: string
  userId: string | null
  content: {
    name: MODULE_CONTENT_TYPE
    description: HTMLString
    checked: boolean
  }[]
  files: {
    name: string
    fileRef: string
    type: MODULE_CONTENT_TYPE
  }[]
  tags: (COMMON_TAG | MEDIA_COMPETENCY_TAG | (string & {}))[]
  links: {
    name: string
    url: string
  }[]
}
