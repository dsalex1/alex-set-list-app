import { get, set } from 'idb-keyval'
import { onMounted, Ref, ref, watchEffect } from 'vue'
import { init, listPdfFiles } from './drive'
import { filterTree, mapTree, sortTree, Treelike } from '@/helpers'

type FileEntry = { name: string; handle: FileSystemHandle | string; children?: FileEntry[] }

const baseDirectory = ref<FileSystemDirectoryHandle | undefined>(undefined)
const pdfTree = ref<FileEntry[]>([])

export function useSheetBaseDirectory() {
  onMounted(async () => {
    await getSheetBaseDirectory()
  })

  /*watchEffect(async () => {
    if (baseDirectory.value)
      pdfTree.value = sortTree(await getPdfFileTree(baseDirectory.value), (a, b) => a.name.localeCompare(b.name))
  })*/

  return { baseDirectory, pdfTree, chooseNewSheetBaseDirectory }
}

async function getSheetBaseDirectory() {
  baseDirectory.value = (await get('SheetBaseDirectory')) as FileSystemDirectoryHandle | undefined
}

async function chooseNewSheetBaseDirectory(directoryHandle: FileSystemDirectoryHandle) {
  if (window.showDirectoryPicker && false) {
    directoryHandle = await window.showDirectoryPicker()
    await set('SheetBaseDirectory', directoryHandle)
    baseDirectory.value = directoryHandle
  } else {
    await init()
    console.log('init completed')
    const driveData = filterTree(
      await listPdfFiles(),
      (e) => e.mimeType === 'application/pdf' || e.mimeType === 'application/vnd.google-apps.folder'
    )
    pdfTree.value = sortTree(
      mapTree(driveData, (e) => ({ name: e.name, handle: e.id })),
      (a, b) => a.name.localeCompare(b.name)
    )
    console.log('loading completed')
  }
}

async function getPdfFileTree(dirHandle: FileSystemDirectoryHandle) {
  const files = [] as FileEntry[]
  for await (let [name, handle] of dirHandle) {
    if (handle.kind === 'directory') {
      files.push({ name, handle, children: await getPdfFileTree(handle) })
    } else if (name.endsWith('.pdf')) {
      files.push({ name, handle })
    }
  }
  return files
}
