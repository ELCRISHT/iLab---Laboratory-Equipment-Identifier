
import React, { useRef, useEffect, useState } from 'react';

interface CameraOverlayProps {
  onCapture: (base64Image: string) => void;
  onClose: () => void;
}

const CameraOverlay: React.FC<CameraOverlayProps> = ({ onCapture, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
          audio: false,
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        setError("Could not access camera. Please ensure permissions are granted.");
      }
    }

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const base64 = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
        onCapture(base64);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <div className="relative w-full max-w-2xl h-full md:h-auto md:aspect-video bg-slate-900 overflow-hidden md:rounded-2xl shadow-2xl">
        {error ? (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <p className="text-white mb-4">{error}</p>
            <button onClick={onClose} className="px-6 py-2 bg-white text-black rounded-lg font-bold">Close</button>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
            <canvas ref={canvasRef} className="hidden" />
            
            {/* Overlay UI */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex justify-end">
                <button 
                  onClick={onClose}
                  className="p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex justify-center items-center pb-8">
                <button
                  onClick={handleCapture}
                  className="w-20 h-20 bg-white rounded-full border-4 border-slate-300 active:scale-95 transition-transform flex items-center justify-center shadow-2xl"
                >
                  <div className="w-16 h-16 bg-white rounded-full border-2 border-slate-900" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CameraOverlay;
