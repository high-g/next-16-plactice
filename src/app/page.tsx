import Counter from '@/components/Counter'

async function getTime() {
  return new Date().toISOString()
}

export default async function Home() {
  const time = await getTime()

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
