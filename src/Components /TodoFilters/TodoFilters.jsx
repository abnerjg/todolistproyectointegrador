import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./Filters.components"

const TodoFilters = ({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete }) => {
    return (
        <FiltersContainer> 
        <ItemsLeft total={total} />
            <FilterButtonContainer>
                <FilterButton action={() => showAllTodos()} active={activeFilter} filter='Todos' />
                <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Restantes' />
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completados' />
            </FilterButtonContainer>

            <button onClick={() => handleClearComplete()} className="text-black hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
                Borrar por completo
            </button>
        </FiltersContainer>
    )
}

export { TodoFilters }