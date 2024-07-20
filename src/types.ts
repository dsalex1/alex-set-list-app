/*export type User = {
  id: string
  name: string
  email: string
}*/

export type Setlist = {
  id: string
  name?: string
  songs: Song['filename'][]
}

export type Song = {
  filename: string
  name?: string
  key_signature?: `${'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'}${'#' | 'b' | ''}-${'minor' | 'major'}`
  speed?: number
  duration?: number
  note?: string
}
