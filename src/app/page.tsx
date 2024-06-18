import Image from "next/image";
import { Google as GoogleIcon, Facebook as FacebookIcon, Apple as AppleIcon } from '@mui/icons-material';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-8 text-center">ログイン</h1>
        <div className="flex flex-col space-y-4">
         
          <button className="bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center">
            <FacebookIcon/>
            <div>Facebookで続ける</div>
          </button>
          <button className="bg-black text-white py-2 px-4 rounded flex items-center justify-center">
            <AppleIcon/>
            <div>Appleで続ける</div>
          </button>
          <input 
            type="email" 
            placeholder="メールアドレスを入力してください..." 
            className="border border-gray-300 p-2 rounded"
          />
          <input 
            type="password" 
            placeholder="パスワードを入力してください..." 
            className="border border-gray-300 p-2 rounded"
          />
          <button className="bg-red-500 text-white py-2 px-4 rounded">ログイン</button>
        </div>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-600">パスワードをお忘れですか？</a>
        </div>
        <div className="text-center mt-4 text-gray-600">
          <p>Google, Apple, またはメールアドレスで続行すると、お客様はTodoistの利用規約およびプライバシーポリシーに同意したことになります。</p>
        </div>
        <div className="text-center mt-4">
          <p>アカウントをお持ちではありませんか？<a href="#" className="text-blue-600">サインアップ</a></p>
        </div>
      </div>
      <div className="mt-8">
        <img src="/devices.png" alt="Devices" className="w-96" />
      </div>
    </div>
  );
}
