'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-0.5 rounded cursor-pointer"
      >
        カウントアップ
      </button>

      {/* 環境変数の使用例 */}
      {/* <p>{process.env.SECRET_KEY || ''}</p> */}
      <p>{process.env.NEXT_PUBLIC_APP_NAME || ''}</p>
    </div>
  )
}
