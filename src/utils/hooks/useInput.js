import { useState } from 'react';

//simple hook for managing input state
const useInput = (init) => {
	const [ value, setValue ] = useState(init);

	const handleChange = (e) => {
		const { value } = e.target;
		setValue(value);
    };
    
    const reset = () => {
        setValue(init)
    }

    return [value, handleChange, reset]
};

export default useInput;
