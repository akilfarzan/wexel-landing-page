import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';

interface ImageDialogProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export function ImageDialog({ src, alt, children }: ImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
        <VisuallyHidden>
          <DialogTitle>{alt}</DialogTitle>
        </VisuallyHidden>
        <div className="relative">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}