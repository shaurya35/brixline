import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<TagProps> = ({ children, className }) => {
    const baseClasses = 'w-[90%] sm:w-11/12 mx-auto py-8 sm:py-12';

  return (
    <section className={`${baseClasses} ${className || ''}`}>
      {children}
    </section>
  );
};


export const Title: React.FC<TagProps> = ({ children, className }) => {
    const baseClasses = 'text-center text-[24px] sm:text-5xl font-medium';
  return (
    <h2 className={`${baseClasses} ${className || ''}`}>
      {children}
    </h2>
  );
};

export const SubTitle: React.FC<TagProps> = ({ children, className }) => {
    const baseClasses = 'text-[#F55252] text-[14px] sm:text-[16px] text-center font-bold uppercase';
  return (
    <span className={`${baseClasses} ${className || ''}`}>
      {children}
    </span>
  );
};

export const Description: React.FC<TagProps> = ({ children, className }) => {
    const baseClasses = 'text-[14px] sm:text-[16px]/[140%] my-0';
  return (
    <p className={`${baseClasses} ${className || ''}`}>
      {children}
    </p>
  );
};

export const Button: React.FC<TagProps> = ({ children, className }) => {
    const baseClasses = 'py-[24px] border';
  return (
    <button className={`${baseClasses} ${className || ''}`}>
      {children}
    </button>
  );
};

