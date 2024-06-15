"use client";

import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  Apple as AppleIcon,
} from "@mui/icons-material";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Component rendered");
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      setMessage(response.data.message);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.detail);
      } else {
        setMessage("An unknown error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          ログイン
        </h1>
        <div className="flex flex-col space-y-4">
          <button className="bg-red-500 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-red-600 transition duration-300 shadow-md">
            <GoogleIcon className="mr-2" />
            <span>Googleで続ける</span>
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-blue-700 transition duration-300 shadow-md">
            <FacebookIcon className="mr-2" />
            <span>Facebookで続ける</span>
          </button>
          <button className="bg-black text-white py-2 px-4 rounded flex items-center justify-center hover:bg-gray-800 transition duration-300 shadow-md">
            <AppleIcon className="mr-2" />
            <span>Appleで続ける</span>
          </button>
          <input
            type="email"
            placeholder="メールアドレスを入力してください..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="パスワードを入力してください..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleLogin}
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300 shadow-md"
          >
            ログイン
          </button>
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}
        </div>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 hover:underline">
            パスワードをお忘れですか？
          </a>
        </div>
        <div className="text-center mt-4 text-gray-600">
          <p>
            Google, Apple,
            またはメールアドレスで続行すると、お客様はTodoistの利用規約およびプライバシーポリシーに同意したことになります。
          </p>
        </div>
        <div className="text-center mt-4">
          <p>
            アカウントをお持ちではありませんか？
            <a href="#" className="text-blue-600 hover:underline">
              サインアップ
            </a>
          </p>
        </div>
      </div>
      <div className="mt-8">
        <img src="/devices.png" alt="Devices" className="w-96 shadow-lg rounded-lg" />
      </div>
    </div>
  );
}
