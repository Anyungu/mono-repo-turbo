
type Props = {
    period: string;
    amount: number;
}

export const Gauge = ({ period, amount }: Props) => {
    return (

        <div className='bg-white rounded-md h-32 w-56 flex flex-col-reverse px-5 pb-2 shadow-inner
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 hover:cursor-pointer'
        >
            <p className='text-sm uppercase tracking-[3px] mt-4'>
                {period}
            </p>
            <p className='text-2xl text-green-500 font-bold'>
                {amount.toFixed(2)}
            </p>
        </div>

    )
}

export default Gauge