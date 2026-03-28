'use server'

export async function submitMessage(formData: FormData) {
  const message = formData.get('message') as string
  console.log('サーバで受け取ったメッセージ：', message)

  const res = await fetch('http://localhost:3001/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ authorId: 1, title: message }), // authorId は一旦仮
  })

  const data = await res.json()
  console.log('Honoからのレスポンス:', data)
}
