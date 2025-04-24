import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<TagProps> = ({ children, className }) => {
    const baseClasses = 'w-[90%] sm:w-11/12 mx-auto py-8 sm:py-12 relative';

  return (
    <section className={`${baseClasses} ${className || ''}`}>
      {children}
    </section>
  );
};


export const Title: React.FC<TagProps> = ({ children, className }) => {
    const baseClasses = 'text-center font-medium clamp-title mb-4';
    return (
    <h2 className={`${baseClasses} ${className || ''}`}>
      {children}
    </h2>
  );
};

export const MainTitle: React.FC<TagProps> = ({ children, className }) => {
  const baseClasses = 'text-center font-medium clamp-title-82';
  return (
  <h1 className={`${baseClasses} ${className || ''}`}>
    {children}
  </h1>
);
};

export const SubTitle: React.FC<TagProps> = ({ children, className }) => {
    const baseClasses = 'text-[#F55252] text-[14px] sm:text-[16px] text-center font-bold uppercase mb-4';
  return (
    <span className={`${baseClasses} ${className || ''}`}>
      {children}
    </span>
  );
};

export const Description: React.FC<TagProps> = ({ children, className }) => {
    const baseClasses = 'my-0 clamp-description';
  return (
    <p className={`${baseClasses} ${className || ''}`}>
      {children}
    </p>
  );
};

export const Button: React.FC<TagProps> = ({ children, className }) => {
    const baseClasses = 'py-[24px] border h-[62px]';
  return (
    <button className={`${baseClasses} ${className || ''}`}>
      {children}
    </button>
  );
};

