import React from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';

interface ImageDialogProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export function ImageDialog({ src, alt, children }: ImageDialogProps) {
  return (
    <Dialog.Root>
          <VisuallyHidden.Root>
            <DialogTitle>{alt}</DialogTitle>
          </VisuallyHidden.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-[90vw] max-h-[90vh] p-4">
          <div className="relative">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <Dialog.Close className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors">
              <X className="w-4 h-4" />
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}