const Button = ({
  register = false,
  children,
}) => {
  if (register) {
    return (
      <button
        type='submit'
        className='text-2xl italic tracking-widest w-full text-white bg-blue-400 h-14 leading-[26px] rounded-[10px] hover:bg-[#4799E3] active:bg-[#4088C9] shadow-xl shadow-[#356EAD33]/20 hover:shadow-[#356EAD33]/35'
      >
        {children}
      </button>
    );
  }

  return (
    <button className='bg-[#5A98D0] tracking-widest font-medium text-lg text-white w-[220px] h-14 leading-[26px] rounded-[10px] hover:bg-[#4799E3] active:bg-[#4088C9] shadow-xl shadow-[#356EAD33]/20 hover:shadow-[#356EAD33]/35'>
      {children}
    </button>
  );
};

export default Button;
