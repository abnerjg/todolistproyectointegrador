const FiltersContainer = ({ children }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-blue-400 border-b border-solid border-gray-600">
            {children}
        </div>
    )
};

const ItemsLeft = ({ total }) => {
    return (
        <p className="text-black text-sm">
            {total} Tareas restantes
        </p>
    )
};

const FilterButtonContainer = ({
    children
}) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
};

const FilterButton = ({ action, active, filter }) => {
    return (
        <button onClick={action}
            className={` hover:text-white cursor-pointer transition-all duration-300 ease-in-out `
                + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-black')}>{filter}</button>
    )
}

export { ItemsLeft, FiltersContainer, FilterButtonContainer, FilterButton }