import React from "react";
import Input from "@/components/input";

export default function Home() {
  return (
    <section className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-2xl">
      {/* Judul */}
      <h2 className="text-2xl font-bold mb-4 text-center">
        Selamat Datang Kembali
      </h2>

      {/* Formulir */}
      <form className="space-y-4">
        {/* Email */}
        <Input
          type="email"
          label="Email"
          placeholder="email"
          styleInput="font-bold"
        />

        {/* Kata Sandi */}
        <Input
          type="password"
          label="Kata Sandi"
          placeholder="kata sandi"
          styleInput="font-bold"
        />
      </form>
    </section>
  );
}
