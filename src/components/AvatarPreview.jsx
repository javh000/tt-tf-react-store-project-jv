import { randomAvatar } from '../services/userService';

export default function AvatarPreview({ avatarUrl, onRegenerate, isCustom, size = 120, showLabel = true }) {
  return (
    <div
      className={showLabel ? 'text-center mb-3' : ''}
      onClick={!isCustom && onRegenerate ? onRegenerate : undefined}
      style={{ cursor: !isCustom && onRegenerate ? 'pointer' : 'default' }}
    >
      <img
        src={avatarUrl}
        alt="preview"
        className="rounded-circle border"
        style={{ width: size, height: size, objectFit: 'cover' }}
        onError={(e) => { e.target.onerror = null; e.target.src = randomAvatar(); }}
      />
      {showLabel && (
        <div className="mt-2">
          <small className="text-muted">
            {isCustom ? 'Avatar personalizado' : 'Haz clic en la imagen para generar otro avatar'}
          </small>
        </div>
      )}
    </div>
  );
}