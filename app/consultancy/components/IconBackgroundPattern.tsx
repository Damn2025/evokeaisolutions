import { type FC } from 'react';

const makeIconDataUri = (svg: string): string => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const globe = makeIconDataUri(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='9'/><path d='M3 12h18'/><path d='M12 3a15 15 0 0 1 0 18'/><path d='M12 3a15 15 0 0 0 0 18'/></svg>"
);
const graduationCap = makeIconDataUri(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'><path d='m2 10 10-5 10 5-10 5-10-5Z'/><path d='M6 12v4c0 1.6 2.7 3 6 3s6-1.4 6-3v-4'/></svg>"
);
const paperPlane = makeIconDataUri(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'><path d='M22 2 11 13'/><path d='M22 2 15 22l-4-9-9-4 20-7Z'/></svg>"
);
const shoppingCart = makeIconDataUri(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'><circle cx='9' cy='20' r='1'/><circle cx='18' cy='20' r='1'/><path d='M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H7'/></svg>"
);
const stats = makeIconDataUri(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'><path d='M3 3v18h18'/><path d='m7 15 4-4 3 3 5-6'/></svg>"
);

export const IconBackgroundPattern: FC = () => {
  const iconAssets = [
    { src: globe, top: '5%', left: '10%' },
    { src: graduationCap, top: '15%', left: '85%' },
    { src: paperPlane, top: '25%', left: '15%' },
    { src: shoppingCart, top: '35%', left: '75%' },
    { src: stats, top: '45%', left: '5%' },
    { src: globe, top: '55%', left: '90%' },
    { src: graduationCap, top: '65%', left: '20%' },
    { src: paperPlane, top: '75%', left: '80%' },
    { src: shoppingCart, top: '85%', left: '10%' },
    { src: stats, top: '95%', left: '70%' },
    // More for density
    { src: globe, top: '12%', left: '42%' },
    { src: paperPlane, top: '32%', left: '62%' },
    { src: stats, top: '52%', left: '32%' },
    { src: graduationCap, top: '72%', left: '52%' },
    { src: shoppingCart, top: '92%', left: '22%' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.1] overflow-hidden -z-10">
      {iconAssets.map((item, i) => (
        <img 
          key={i} 
          src={item.src}
          alt=""
          className="absolute transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 grayscale brightness-0"
          style={{ 
            top: item.top, 
            left: item.left,
            transform: `rotate(${Math.sin(i) * 20}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default IconBackgroundPattern;
