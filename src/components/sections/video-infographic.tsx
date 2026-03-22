"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function VideoInfographic() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Votre projet à Maurice, simplifié
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Découvrez l&apos;écosystème Vanille Stratégie en quelques minutes.
        </p>

        <div className="relative mt-8 overflow-hidden rounded-2xl shadow-xl">
          {playing ? (
            <video
              autoPlay
              controls
              className="w-full"
              src="/media/presentation-maurice.mp4"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="group relative block w-full cursor-pointer"
              aria-label="Lancer la vidéo de présentation"
            >
              <Image
                src="/media/infographie-vanille-strategie.png"
                alt="Infographie Vanille Stratégie — Cliquez pour lancer la vidéo"
                width={1200}
                height={600}
                className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 shadow-2xl shadow-blue-600/40 transition-transform group-hover:scale-110">
                  <Play className="h-8 w-8 text-white ml-1" fill="white" />
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
