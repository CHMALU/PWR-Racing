'use client';

interface ContainerProps {
  children: React.ReactNode;
  paddingType?: 'r' | 'l' | 'x';
}

const Container: React.FC<ContainerProps> = ({ children, paddingType = 'x' }) => {
  const paddingClasses = {
    r: 'mr-[calc((100vw-var(--container-width))/2)]',
    l: 'ml-[calc((100vw-var(--container-width))/2)]',
    x: 'mx-auto',
  };

  return (
    <div
      className={`${paddingClasses[paddingType]} ${paddingType === 'x' ? "max-w-[var(--container-width)] " : ""}relative flex justify-center items-center h-full`}
    >
      {children}
    </div>
  )
}

export default Container;

// 'use client';

// interface ContainerProps {
//   children: React.ReactNode;
//   paddingType?: 'r' | 'l' | 'x';
// }

// const Container: React.FC<ContainerProps> = ({ children, paddingType = 'x' }) => {
//   const paddingClasses = {
//     r: 'xl:pr-80 md:pr-10 sm:pr-2 pr-4',
//     l: 'xl:pl-80 md:pl-10 sm:pl-2 pl-4',
//     x: 'xl:px-80 md:px-10 sm:px-2 px-4',
//   };

//   return (
//     <div
//       className={`
//         ${paddingClasses[paddingType]}
//         relative flex justify-center items-center h-full
//       `}
//     >
//       {children}
//     </div>
//   )
// }

// export default Container;