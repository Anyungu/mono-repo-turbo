
import Select from 'react-select';

import classNames from 'classnames';


const colourOptions: readonly any[] = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630' },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];

type Props = {
    label?: string
}
export const SearchSelect = ({ label }: Props) => {
    return (
        <div className='flex flex-col'>

            <p className={`${label ? 'inline' : 'hidden'} text-sm`}> {label} </p>

            <Select
                className='border-0 shadow-none'
                options={colourOptions}
                defaultValue={colourOptions[2]}
                isSearchable
                classNames={{
                    control: (state) =>
                        classNames(
                            'border-0 shadow-none',
                            state.isFocused && 'border-0',
                            state.menuIsOpen && 'border-0',
                        ),
                    option: (state) =>
                        classNames(
                            'border-0 shadow-none active:bg-[rgba(36,36,36,0.5)]',
                            state.isFocused && 'bg-[rgba(36,36,36,0.2)]',
                            state.isSelected && 'bg-[rgba(36,36,36,0.5)]',
                        )


                }}
            />

        </div >
    )
}

