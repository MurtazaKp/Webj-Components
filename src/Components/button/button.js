import classNames from 'classnames'

const Button = ({ type, label }) => {
    return (
        <button
            type="button"
            className={classNames(
                'inline-flex items-center justify-center px-6 py-3 my-6 text-sm font-semibold leading-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
                {
                    'bg-indigo-600 border text-white border-transparent rounded-md focus:ring-indigo-600 hover:bg-indigo-500':
                        type === 'primary',
                    'bg-gray-900 border text-white border-transparent rounded-md focus:ring-gray-900 hover:bg-gray-700 ':
                        type === 'secondary',
                    'bg-red-500 border text-white border-transparent rounded-md focus:ring-red-500 hover:bg-red-700 ':
                        type === 'danger',
                    'bg-gray-300 border text-white border-transparent rounded-md cursor-not-allowed focus:ring-gray-300 hover:bg-gray-400 ':
                        type === 'disabled',
                    'bg-white border border-gray-300 rounded-md text-gray-600 focus:ring-gray-500 hover:bg-gray-50 hover:text-gray-900 ':
                        type === 'stroke',
                }
            )}
        >
            {label}
        </button>
    )
}

export default Button
