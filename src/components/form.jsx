const Form = () => {
  return (
    <section className='flex flex-col mx-[15px] p-[45px] text-lg font-semibold text-cyan-900 bg-white rounded-xl shadow-2xl shadow-[#1070B133]/10 max-w-[480px] mb-[140px]'>
      <h2 className='text-2xl uppercase tracking-[6.96px]'>
        Registration
      </h2>
      <div>
        {/* Name */}
        <label className='mt-9 block italic'>
          Name
        </label>
        <input
          type='text'
          className='justify-center items-start w-full py-3.5 px-4 mt-3 font-light bg-indigo-50 rounded-md leading-[144%] text-slate-500 placeholder:tracking-widest'
          placeholder='Your name'
          aria-label='Your name'
        />
      </div>

      <div>
        {/* Surname */}
        <label className='mt-9 block italic'>
          Surname
        </label>
        <input
          type='text'
          className='justify-center items-start w-full py-3.5 px-4 mt-3 font-light bg-indigo-50 rounded-md leading-[144%] text-slate-500 placeholder:tracking-widest'
          placeholder='Your surname'
          aria-label='Your surname'
        />
      </div>

      <div>
        {/* phonenumber */}
        <label className='mt-9 block italic'>
          Phone number
        </label>
        <input
          type='text'
          className='justify-center items-start w-full py-3.5 px-4 mt-3 font-light bg-indigo-50 rounded-md leading-[144%] text-slate-500 placeholder:tracking-widest'
          placeholder='+38 ___ ___ __ __'
          pattern='\\d*'
          aria-label='Phone number'
        />
        <p className='mt-2.5 text-xs font-normal tracking-wider text-zinc-500'>
          *Use only numbers
        </p>
      </div>

      <div>
        {/* email */}
        <label className='mt-9 block italic'>
          Email
        </label>
        <input
          type='email'
          className='justify-center items-start w-full py-3.5 px-4 mt-3 font-light bg-indigo-50 rounded-md leading-[144%] text-slate-500 placeholder:tracking-widest'
          placeholder='email@email.com'
          pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}'
          aria-label='Email'
        />
        <p className='mt-2.5 text-xs font-normal tracking-wider text-zinc-500'>
          *Use only latin letters and
          characters ._-@
        </p>
      </div>

      <section className='flex gap-3 justify-between mt-14 leading-6'>
        <img
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/287b0cb2954d496819ccb729df495ea8432071871856a1e987daf32d24ef8238?apiKey=f507e8cf8a6d4598a5b206e56f2791a4&'
          alt='Terms Icon'
          className='self-start w-7 aspect-square'
        />
        <p className='font-normal'>
          I agree with The Terms of Use
          and with The Privacy Policy
        </p>
      </section>
      <button
        type='submit'
        className='justify-center py-3.5 mt-12 text-2xl italic tracking-widest text-white whitespace-nowrap bg-blue-400 rounded-lg shadow-lg'
      >
        Register me!
      </button>
    </section>
  );
};

export default Form;
