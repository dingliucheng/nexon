// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  // ===== 新增 1：开启 standalone 输出模式 =====
  output: 'standalone',

  // ===== 新增 2：关闭 Next.js 内置图片优化 =====
  images: {
    unoptimized: true,              // ⬅️ 新增这一行，避免云函数环境缺少 sharp 库而报错
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'nexon-demo.vercel.app'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },

  // ===== 原有其他配置保持不变 =====
  staticPageGenerationTimeout: 300,
})
