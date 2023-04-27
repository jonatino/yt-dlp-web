export interface VideoFormat {
  format_id: string;
  format_note: string;
  fps: string;
  resolution: string;
  vcodec: string;
  acodec: string;
  filesize: string;
  video_ext: string;
  audio_ext: string;
}

export interface VideoMetadata {
  id: string;
  original_url: string;
  title: string;
  description: string;
  thumbnail: string;
  is_live: boolean;
  best: {
    format_id: string;
    format_note: string;
    fps: string;
    resolution: string;
    vcodec: string;
    acodec: string;
    filesize: string;
  };
  formats: Array<VideoFormat>;
}

export interface VideoInfo {
  uuid: string;
  id: string | null;
  url: string;
  title: string | null;
  description: string | null;
  thumbnail: string | null;
  status: 'downloading' | 'recording' | 'merging' | 'completed';
  is_live: boolean;
  file: {
    path: string | null;
    name: string | null;
    size?: number;
    length?: number;
    resolution?: [number, number];
  };
  download: {
    completed: boolean;
    pid: number | null;
    progress: string | null;
    speed: string | null;
    format: string[] | null;
  };
  createdAt: number;
  updatedAt: number;
}
