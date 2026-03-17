'use server'

export async function submitMessage(formData: FormData) {
  const message = formData.get('message') as string
  console.log('サーバで受け取ったメッセージ：', message)
  // ここでDBに保存したりできる
}
