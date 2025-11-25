import { cn } from "@/lib/utils";

export function Input({placeholder, type, options, className, ...props}) {
    if (type === 'select') {
        return <Select placeholder={placeholder} options={options} className={className} {...props} />
    }
    return (
       <input type={type} placeholder={placeholder} className={cn('w-full p-4 outline-none rounded-lg bg-[#e3ebf5] text-black', className)} {...props} />
    )
}

export function Select({ options, placeholder, className, ...props }) {
    return (
      <div className="relative w-full">
        <select
          className={cn("w-full p-4 outline-none rounded-lg bg-[#e3ebf5] text-gray-500 appearance-none cursor-pointer", className)}
          defaultValue=""
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
        </div>
      </div>
    );
}

export function Textarea({placeholder, className, ...props}) {
    return (
        <textarea placeholder={placeholder} className={cn('w-full p-4 outline-none rounded-lg bg-[#e3ebf5]', className)} {...props}></textarea>
    )
}