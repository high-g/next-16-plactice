# 学習ロードマップ: Next.js 16 + Hono + Docker + AWS

## 現在地 ✅

- [x] Next.js 16 環境構築 (pnpm + Vercel デプロイ)
- [x] RSC (React Server Components)
- [x] Client Component (`"use client"`)
- [x] SSR / SSG / ISR (`fetch` の `cache` オプション)
- [x] Server Actions (`"use server"`)

---

## Phase 1: Next.js 残り基礎

- [x] Route Handlers (`app/api/route.ts`) — API エンドポイントの作り方
- [x] Middleware (`middleware.ts`) — 認証チェック・リダイレクト
- [x] 環境変数 (`.env`) — `NEXT_PUBLIC_` あり/なしの違い

---

## 追加学習: RSC の深掘り

- [ ] RSC と SSR/SSG/ISR の関係性を改めて整理
- [ ] Pages Router 時代との比較
- [ ] コンポーネント単位でのレンダリング戦略の制御

---

## Phase 2: Hono

- [x] Hono の基本 — ルーティング、ハンドラー
- [x] Next.js の Route Handlers と比較
- [x] Hono + Next.js の連携 — RSC から GET、Server Actions から POST
- [ ] Hono + Next.js の組み合わせ (RPC モード)
- [ ] バリデーション (Zod)

---

## Phase 3: Docker

- [ ] Next.js アプリを Docker 化
- [ ] Dockerfile の書き方 (multi-stage build)
- [ ] docker-compose でローカル開発環境を構築

---

## Phase 4: AWS

- [ ] AWS の基本構成を理解 (ECS / ECR / ALB)
- [ ] ECR に Docker イメージを push
- [ ] ECS (Fargate) でコンテナをデプロイ
- [ ] 独自ドメイン + HTTPS (Route 53 + ACM)

---

## 参考

- [Next.js ドキュメント](https://nextjs.org/docs)
- [Hono ドキュメント](https://hono.dev)
- [AWS ECS ドキュメント](https://docs.aws.amazon.com/ecs)
