import NextAuth from "next-auth";
//使用するプロバイダのインポート
import GithubProvider from "next-auth/providers/github";
//追加するなら上の枠に

export default NextAuth({
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],

  secret: process.env.SECRET,
//セッションの形式を選択します。
// デフォルトでは jwt ですが、Database を利用したセッションを利用した場合のみ、database を入力します。
  session: {
    strategy: "jwt",
  },

  jwt: {},

  pages: {},

  callbacks: {},

  events: {},

  debug: false,
});
