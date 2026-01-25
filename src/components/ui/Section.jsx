import { GRADIENTS } from '../../constants/theme.js';

const gradientMap = {
  none: '',
  primaryBr: GRADIENTS.primaryBr,
  primaryR: GRADIENTS.primaryR,
  softHero: GRADIENTS.softHero,
};

export function Section({
  title,
  subtitle,
  gradient = 'none',
  center = false,
  className = '',
  as = 'section',
  children,
}) {
  const gradientClass = gradientMap[gradient] || '';
  const Tag = as;
  return (
    <Tag className={`${gradientClass} py-20 ${className}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${center ? 'text-center' : ''}`}>
        {title && (
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${center ? '' : ''}`}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className={`text-xl text-gray-600 mb-12 ${center ? '' : ''}`}>{subtitle}</p>
        )}
        {children}
      </div>
    </Tag>
  );
}

export default Section;
