type PendingBadgeProps = {
  children?: string;
};

export default function PendingBadge({
  children = 'Perlu dikonfirmasi',
}: PendingBadgeProps) {
  return <span className="pending-badge">{children}</span>;
}
