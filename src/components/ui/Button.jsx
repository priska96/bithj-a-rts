import { Link } from 'react-router-dom';
import { GRADIENTS } from '../../constants/theme.js';

const base = 'inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-medium transition-all duration-300';

const variants = {
  primary: 'bg-white text-indigo-600 border-2 border-white hover:bg-transparent hover:text-white',
  secondary: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-indigo-600',
  solidIndigo: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg',
  outlineIndigo: 'border-2 border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50',
  gradient: `${GRADIENTS.primaryR} text-white hover:shadow-lg`,
  chip: 'rounded-full bg-white text-gray-700 hover:bg-gray-100 border border-gray-300',
  chipActive: 'rounded-full bg-indigo-600 text-white',
};

export function Button({ to, as = 'button', variant = 'solidIndigo', className = '', children, ...props }) {
  const cls = `${base} ${variants[variant] || variants.solidIndigo} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  if (as === 'a') {
    return (
      <a className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

export default Button;
