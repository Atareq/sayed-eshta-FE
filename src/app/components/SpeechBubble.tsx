interface SpeechBubbleProps {
  text: string;
  position?: 'left' | 'right';
}

export function SpeechBubble({ text, position = 'left' }: SpeechBubbleProps) {
  return (
    <div
      className={`relative bg-[#FC8CB0] text-black p-6 rounded-3xl max-w-md ${
        position === 'right' ? 'ml-auto' : 'mr-auto'
      }`}
    >
      <p className="text-lg leading-relaxed">{text}</p>
      <div
        className={`absolute bottom-0 ${
          position === 'right' ? 'right-8' : 'left-8'
        } w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#FC8CB0] translate-y-full`}
      />
    </div>
  );
}
