import type { ReactNode } from 'react';
import { getWhatsAppUrl } from '../config';

type WhatsAppButtonProps = {
  children: ReactNode;
  className?: string;
  message?: string;
  ariaLabel?: string;
};

/**
 * Tautan WhatsApp yang tetap aman ketika nomor belum dikonfigurasi:
 * pengguna diarahkan ke bagian kontak, bukan ke URL wa.me yang rusak.
 */
export default function WhatsAppButton({
  children,
  className,
  message,
  ariaLabel,
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(message);
  const isReady = Boolean(url);

  return (
    <a
      className={className}
      href={url ?? '#kontak'}
      aria-label={ariaLabel}
      data-whatsapp-state={isReady ? 'ready' : 'needs-configuration'}
      {...(isReady ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {children}
    </a>
  );
}
