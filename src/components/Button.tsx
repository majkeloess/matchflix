function Button({ text }: { text: string }) {
  return (
    <button className="px-8 py-1 rounded-2xl text-xl text-white bg-opacity-0 border-pink-400 border-2">
      {text}
    </button>
  );
}

export default Button;
