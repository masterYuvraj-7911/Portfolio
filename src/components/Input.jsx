const Input = ({ type, name, placeholder, value, onChange,}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required
      className="w-full p-3 rounded-xl bg-black/40 border border-border outline-none focus:border-border-hover
       focus:shadow-[0_0_15px_rgba(128,17,255,0.15)] transition-all duration-300"/>
  );
};

export default Input;