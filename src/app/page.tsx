import Counter from '@/components/Counter'

// RSC
async function getTime() {
  // return new Date().toISOString()
}

// SSR
async function getTimeSSR() {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts/1', { cache: 'no-store' })
  return res.json()
}

export default async function Home() {
  // RSC
  // const time = await getTime()

  // SSR
  const res = await getTimeSSR()
  const time = res.body

  return (
    <main>
      {/*　Server Component のブロック */}
      <section>
        <p>{time}</p>
      </section>

      {/* Client Component のブロック */}
      <Counter />
    </main>
  )
}
