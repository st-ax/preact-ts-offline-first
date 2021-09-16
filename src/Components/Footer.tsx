import { h } from 'preact'

const creds = [
  ['Preact', 'https://preactjs.com/'],
  ['Dexie', 'https://dexie.org/'],
  ['TailwindCSS', 'https://tailwindcss.com/'],
  ['Vite', 'https://vitejs.dev/'],
  ['TypeScript', 'https://www.typescriptlang.org/'],
]
const CredLink = ([title, url]) => <a className="text-blue-200 ml-2" href={url} target="_blank" rel="noopener noreferrer">{title}</a>
export default function Footer () {
  return (
    <footer>
      <div className="sticky inset-x-0 bottom-0 mx-2">
        <p className="text-sm md:text-base">Forked with ❤️ from <a className="text-blue-200" href="https://www.vivekkaushik.in" target="_blank" rel="noopener noreferrer">Vivek Kaushik's </a> <a className="text-blue-200" href="https://github.com/greatvivek11/TodoApp" target="_blank" rel="noopener noreferrer">TodoApp</a></p>
        <p className="text-sm md:text-base">Using:
          {creds.map((eachCred: [string, string]) => CredLink(eachCred))}
        </p>
        <p className="text-sm md:text-base" />
      </div>
    </footer>
  )
}
