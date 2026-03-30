import Counter from '@/components/Counter'
import { submitMessage } from './actions'
import { client } from '@/lib/client'

// Prisma 経由
async function getPrismaPost() {
  const res = await client.prisma.$get({}, { init: { cache: 'no-store' } })
  return res.json()
}

// Drizzle 経由
async function getDrizzlePost() {
  const res = await client.drizzle.$get({}, { init: { cache: 'no-store' } })
  return res.json()
}

export default async function Home() {
  const prismaPosts = await getPrismaPost()
  const drizzlePosts = await getDrizzlePost()

  return (
    <main>
      <Counter />

      <form action={submitMessage}>
        <input name="message" type="text" placeholder="メッセージを入力" />
        <button type="submit">送信</button>
      </form>

      <hr />

      <h2>Prisma Posts</h2>
      <table>
        <tbody>
          {prismaPosts.map((post: { id: number; title: string }) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h2>Drizzle Posts</h2>
      <table>
        <tbody>
          {drizzlePosts.map((post: { id: number; title: string }) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
