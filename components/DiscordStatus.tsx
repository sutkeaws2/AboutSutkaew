"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music2, Gamepad2, MonitorPlay, Circle } from "lucide-react";

const DISCORD_USER_ID = "1228447356735983719";

interface LanyardData {
  discord_status: "online" | "idle" | "dnd" | "offline";
  discord_user: {
    username: string;
    global_name: string | null;
    avatar: string | null;
    id: string;
  };
  activities: Activity[];
  listening_to_spotify: boolean;
  spotify: SpotifyData | null;
}

interface Activity {
  name: string;
  type: number; // 0=Playing, 1=Streaming, 2=Listening, 3=Watching, 5=Competing
  state?: string;
  details?: string;
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
  };
  application_id?: string;
}

interface SpotifyData {
  song: string;
  artist: string;
  album: string;
  album_art_url: string;
  track_id: string;
}

const statusConfig = {
  online: { label: "Online", color: "bg-green-400", text: "text-green-400" },
  idle: { label: "Idle", color: "bg-yellow-400", text: "text-yellow-400" },
  dnd: { label: "Do Not Disturb", color: "bg-red-400", text: "text-red-400" },
  offline: { label: "Offline", color: "bg-zinc-500", text: "text-zinc-500" },
};

function getActivityIcon(type: number) {
  if (type === 2) return Music2;
  if (type === 0 || type === 5) return Gamepad2;
  if (type === 3) return MonitorPlay;
  return Circle;
}

function getActivityLabel(type: number) {
  if (type === 0) return "Playing";
  if (type === 2) return "Listening to";
  if (type === 3) return "Watching";
  if (type === 5) return "Competing in";
  return "Playing";
}

export default function DiscordStatus() {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ws: WebSocket;
    let heartbeatInterval: NodeJS.Timeout;

    const connect = () => {
      ws = new WebSocket("wss://api.lanyard.rest/socket");

      ws.onopen = () => {
        ws.send(JSON.stringify({ op: 2, d: { subscribe_to_id: DISCORD_USER_ID } }));
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);

        // Heartbeat
        if (msg.op === 1) {
          heartbeatInterval = setInterval(() => {
            ws.send(JSON.stringify({ op: 3 }));
          }, msg.d.heartbeat_interval);
        }

        // Initial state + updates
        if (msg.op === 0 && (msg.t === "INIT_STATE" || msg.t === "PRESENCE_UPDATE")) {
          setData(msg.d);
          setLoading(false);
        }
      };

      ws.onerror = () => setLoading(false);
      ws.onclose = () => {
        clearInterval(heartbeatInterval);
        // Reconnect after 5s
        setTimeout(connect, 5000);
      };
    };

    connect();

    return () => {
      clearInterval(heartbeatInterval);
      ws?.close();
    };
  }, []);

  if (loading) {
    return (
      <div className="h-16 rounded-xl bg-surface border border-border animate-pulse" />
    );
  }

  if (!data) return null;

  const status = statusConfig[data.discord_status];
  const avatarUrl = data.discord_user.avatar
    ? `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=128`
    : `https://cdn.discordapp.com/embed/avatars/0.png`;

  // หา activity ที่จะแสดง (Spotify ก่อน ถ้าไม่มีให้ใช้ activity แรก)
  const spotifyActivity = data.listening_to_spotify ? data.spotify : null;
  const otherActivity = data.activities.find((a) => a.type !== 4); // ไม่รวม Custom Status (type 4)

  const displayName = data.discord_user.global_name ?? data.discord_user.username;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl bg-surface border border-border overflow-hidden"
      >
        {/* Main status row */}
        <div className="flex items-center gap-3 p-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarUrl}
              alt={displayName}
              width={40}
              height={40}
              className="rounded-full"
            />
            {/* Status dot */}
            <span
              className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-surface ${status.color}`}
              title={status.label}
            />
          </div>

          {/* Name + status */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text truncate">{displayName}</p>
            <p className={`text-xs font-mono ${status.text}`}>{status.label}</p>
          </div>

          {/* Discord icon */}
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-muted flex-shrink-0" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
          </svg>
        </div>

        {/* Spotify activity */}
        {spotifyActivity && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-border px-4 py-3 flex items-center gap-3"
          >
            {/* Album art */}
            <div className="relative flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={spotifyActivity.album_art_url}
                alt={spotifyActivity.album}
                width={36}
                height={36}
                className="rounded-md"
              />
              {/* Animated music bars */}
              <div className="absolute -bottom-1 -right-1 flex items-end gap-0.5 bg-surface rounded px-0.5 py-0.5">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-green-400 rounded-full"
                    animate={{ height: [3, 8, 3, 6, 3] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                    style={{ height: 3 }}
                  />
                ))}
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs text-green-400 font-mono mb-0.5">Spotify</p>
              <p className="text-xs font-medium text-text truncate">{spotifyActivity.song}</p>
              <p className="text-xs text-muted truncate">{spotifyActivity.artist}</p>
            </div>
          </motion.div>
        )}

        {/* Other activity (game, etc.) */}
        {!spotifyActivity && otherActivity && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-border px-4 py-3 flex items-center gap-3"
          >
            {(() => {
              const Icon = getActivityIcon(otherActivity.type);
              return (
                <>
                  <Icon size={14} className="text-accent flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-accent font-mono mb-0.5">
                      {getActivityLabel(otherActivity.type)}
                    </p>
                    <p className="text-xs font-medium text-text truncate">
                      {otherActivity.name}
                    </p>
                    {otherActivity.details && (
                      <p className="text-xs text-muted truncate">{otherActivity.details}</p>
                    )}
                  </div>
                </>
              );
            })()}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
