const TodoInput = () => {
    return (
        <div className="mt6- relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
            </div>
            <input  type="text" 
                    placeholder="Que haremos hoy?..."
                    className="focus:shadow-lg font-allan focus:shadow-blue-800 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"/>
                    
        </div>
    )
};

export { TodoInput };