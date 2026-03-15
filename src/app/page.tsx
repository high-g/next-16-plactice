import Counter from '@/components/Counter'

// RSC
async function getTime() {
  return { body: new Date().toISOString() }
}

// SSR
async function getPostSSR() {
  // キャッシュしない → リクエストのたびにサーバで実行
  const res = await fetch('http://jsonplaceholder.typicode.com/posts/1', { cache: 'no-store' })
  return res.json()
}

// SSG
async function getPostSSG() {
  // ビルド時に1回だけ取得してキャッシュ
  const res = await fetch('http://jsonplaceholder.typicode.com/posts/1', { cache: 'force-cache' })
  return res.json()
}

// ISR（一定時間ごとに再生成）
async function getPostISR() {
  // 60秒ごとに再取得
  const res = await fetch('http://jsonplaceholder.typicode.com/posts/1', { next: { revalidate: 60 } })
  return res.json()
}

export default async function Home() {
  // RSC
  // const res = await getTime()

  // SSR
  // const res = await getPostSSR()

  // SSG
  // const res = await getPostSSG()

  // ISR
  const res = await getPostISR()

  const body = res.body

  return (
    <main>
      {/*　Server Component のブロック */}
      <section>
        <p>{body}</p>
      </section>

      {/* Client Component のブロック */}
      <Counter />
    </main>
  )
}
