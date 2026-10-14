import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface LightboxImage {
  src: string;
  title?: string;
  caption?: string;
}

interface LightboxProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
          <span className="text-xs text-slate-400 font-mono bg-white/10 px-3 py-1.5 rounded-full">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 z-50 p-3 text-slate-200 hover:text-white bg-black/50 hover:bg-[#DCA996] rounded-full transition-all border border-white/10 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 z-50 p-3 text-slate-200 hover:text-white bg-black/50 hover:bg-[#DCA996] rounded-full transition-all border border-white/10 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Content Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="max-w-5xl w-full flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/80">
            <img
              src={currentImage.src}
              alt={currentImage.title || "Project Screenshot"}
              className="max-h-[75vh] w-auto object-contain mx-auto"
            />
          </div>

          {(currentImage.title || currentImage.caption) && (
            <div className="mt-4 text-center max-w-2xl px-4">
              {currentImage.title && (
                <h4 className="text-lg font-bold text-white mb-1 flex items-center justify-center gap-2">
                  <ZoomIn className="w-4 h-4 text-[#EFC8B8]" />
                  {currentImage.title}
                </h4>
              )}
              {currentImage.caption && (
                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentImage.caption}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
