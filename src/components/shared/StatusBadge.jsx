export default function StatusBadge({ status, type }) {
  const getStatusColor = () => {
    switch (status) {
      case 'playing':
      case 'watching':
      case 'watched':
      case 'listening':
        return 'bg-[#8B9F7E] text-white'; // Olive/sage green
      case 'completed':
      case 'on_repeat':
        return 'bg-[#C4A77D] text-white'; // Golden/amber
      case 'dropped':
      case 'loved':
        return 'bg-[#C75B3B] text-white'; // Coral
      case 'on_hold':
      case 'rewatching':
        return 'bg-[#8A735E] text-white'; // Brown
      case 'backlog':
      case 'plan_to_watch':
      case 'want_to_watch':
      case 'archived':
      default:
        return 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-default)]'; // Muted
    }
  };

  const getStatusLabel = () => {
    if (!status || typeof status !== 'string') return 'Unknown';
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor()}`}>
      {getStatusLabel()}
    </span>
  );
}
